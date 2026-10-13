import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

const MAX_REQUEST_LENGTH = 6000
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request) {
  let rawBody

  try {
    rawBody = await request.text()
  } catch {
    return Response.json(
      { error: 'Could not read the contact form.' },
      { status: 400 }
    )
  }

  if (rawBody.length > MAX_REQUEST_LENGTH) {
    return Response.json(
      { error: 'Your message is too long.' },
      { status: 413 }
    )
  }

  let body

  try {
    body = JSON.parse(rawBody)
  } catch {
    return Response.json(
      { error: 'Please submit a valid contact form.' },
      { status: 400 }
    )
  }

  const name =
    typeof body?.name === 'string' ? body.name.trim() : ''

  const email =
    typeof body?.email === 'string' ? body.email.trim() : ''

  const message =
    typeof body?.message === 'string' ? body.message.trim() : ''

  if (
    !name ||
    name.length > 100 ||
    /[\r\n]/.test(name) ||
    !EMAIL_PATTERN.test(email) ||
    email.length > 254 ||
    !message ||
    message.length > 5000
  ) {
    return Response.json(
      { error: 'Please check the form fields and try again.' },
      { status: 400 }
    )
  }

  // Gmail SMTP configuration
  const host = process.env.SMTP_HOST || 'smtp.gmail.com'
  const port = Number(process.env.SMTP_PORT || 587)
  const user = process.env.SMTP_USER
  const password = process.env.SMTP_PASSWORD
  const recipient = process.env.CONTACT_EMAIL || user

  if (!user || !password || !recipient) {
    console.error('Contact form email configuration is missing.')

    return Response.json(
      { error: 'Email service is temporarily unavailable.' },
      { status: 503 }
    )
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure:
      process.env.SMTP_SECURE === 'true' || port === 465,
    auth: {
      user,
      pass: password,
    },
  })

  try {
    await transporter.sendMail({
      from: user,
      to: recipient,
      replyTo: email,
      subject: `FinSack Contact Us - ${name}`,
      text: `
A new Contact Us message was received.

Name: ${name}
Email: ${email}

User's Issue / Message:
${message}
      `.trim(),
    })

    console.log('Contact form message sent successfully.')

    return Response.json({ success: true })
  } catch (error) {
    console.error('Failed to send contact message:', error)

    return Response.json(
      { error: 'Message could not be sent. Please try again later.' },
      { status: 502 }
    )
  }
}
