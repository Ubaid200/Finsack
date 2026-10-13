import Link from 'next/link'
import ContactForm from './ContactForm'

export const metadata = {
  title: 'Contact FinSack | Get Help Exploring Financial Products',
  description:
    'Need help exploring financial products on FinSack? Find guidance on loans, insurance, investments, and using our financial tools.',
}

const helpTopics = [
  {
    title: 'Finding the right product',
    description:
      'Explore loan, insurance, investment, and banking options from the relevant product pages.',
  },
  {
    title: 'Using FinSack tools',
    description:
      'Visit our CIBIL Score and EMI Calculator pages for helpful information and estimates.',
  },
  {
    title: 'Applications and eligibility',
    description:
      'For application status, eligibility, rates, or product terms, contact the financial provider handling your application.',
  },
]

function Contact() {
  return (
    <div className="pt-20">
      <header className="bg-linear-to-br from-slate-950 via-blue-950 to-blue-800 px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
            Contact FinSack
          </p>
          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            How can we help?
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100 md:text-xl">
            We’re here to help you find your way around FinSack and explore
            financial products and tools in one place.
          </p>
          <Link
            href="#contact-form"
            className="mt-8 inline-flex rounded-full bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-400"
          >
            Send us a message
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
            What do you need help with?
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Choose the right place to get information about your financial
            product or your experience using FinSack.
          </p>
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {helpTopics.map((topic) => (
            <article
              key={topic.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {topic.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {topic.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
            Send us a message
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Fill in the form and our team will receive your message by email.
          </p>
          <ContactForm />
        </div>
        <p className="mt-6 text-sm leading-6 text-slate-600">
          Need help with an existing application?{' '}
          <Link
            href="https://crm.oneandro.com/customer-service?d=c29mdF9jb2RlPVJLTUFITVUzMjU5NDg1NiZ0b2tlbl9rZXk9OTJwczlxbXEmbG9naW5faWQ9MzI1OTQ4JnNoYXJlX2xlYWRfdHlwZT0xJnV0bV9zb3VyY2U9c2hhcmVfbGluaw%3D%3D"
            className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-800"
          >
            Visit customer service
          </Link>
          .
        </p>
      </section>

      <section className="bg-slate-50 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
            Before you get in touch
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-700">
            If you have already applied for a financial product, keep your
            application details handy when contacting the provider. The
            provider is responsible for application decisions, eligibility
            checks, rates, fees, and product terms. Please avoid sharing
            passwords, one-time passcodes, or full payment-card details.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:bg-slate-100"
            >
              About FinSack
            </Link>
            <Link
              href="/emi-calculator"
              className="inline-flex rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Explore our tools
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
