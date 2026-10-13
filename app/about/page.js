import Link from 'next/link'

export const metadata = {
  title: 'About FinSack | Explore Financial Options in One Place',
  description:
    'Learn how FinSack brings loan, insurance, investment, and everyday banking options together to help you explore financial products in one place.',
}

const offerings = [
  {
    title: 'Loans',
    description:
      'Explore personal, business, home, and secured loan options from participating lenders.',
  },
  {
    title: 'Insurance',
    description:
      'Find options across car, bike, life, health, and general insurance.',
  },
  {
    title: 'Investments',
    description:
      'Discover Demat accounts, mutual funds, and fixed deposit options from different providers.',
  },
  {
    title: 'Everyday finance',
    description:
      'Explore credit cards, bank accounts, credit score information, and helpful financial tools.',
  },
]

function About() {
  return (
    <div className="pt-20">
      <header className="bg-linear-to-br from-slate-950 via-blue-950 to-blue-800 px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
            About us
          </p>
          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            Financial choices, made easier to explore.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100 md:text-xl">
            FinSack brings a range of financial products together in one place,
            helping you explore options for your needs without having to start
            your search across multiple platforms.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
          A simpler way to explore financial products
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-700">
          Finding a financial product can mean comparing different providers,
          requirements, and terms. FinSack helps bring those options together
          so you can explore products and take the next step through the
          relevant provider. Whether you are considering a loan, looking into
          insurance, or starting an investment journey, you can begin your
          search in one place.
        </p>
      </section>

      <section className="bg-slate-50 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              What you can explore with FinSack
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Browse financial products and resources across a range of
              everyday needs.
            </p>
          </div>
          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {offerings.map((offering) => (
              <article
                key={offering.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {offering.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {offering.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
          Explore with clarity
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-700">
          We want it to be easier to find and understand the options available
          to you. Review the information provided for each product, compare
          what matters to you, and check the provider’s eligibility criteria,
          fees, and terms before applying or investing. Product availability
          and decisions are determined by the respective financial providers.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Explore FinSack
        </Link>
      </section>
    </div>
  )
}

export default About
