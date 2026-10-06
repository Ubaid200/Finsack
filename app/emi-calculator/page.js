import EmiCalculatorTool from './EmiCalculatorTool'

export const metadata = {
  title: 'EMI Calculator: Understand Your Loan Repayments | FinSack',
  description:
    'Learn how loan EMIs work, what affects your monthly payment, and how an EMI calculator can help you plan repayments.',
  keywords: [
    'EMI calculator',
    'loan EMI',
    'monthly loan repayment',
    'EMI calculation',
    'loan repayment planning',
  ],
  openGraph: {
    title: 'EMI Calculator: Understand Your Loan Repayments | FinSack',
    description:
      'Understand loan EMIs, the factors that affect your monthly repayment, and the benefits of planning ahead.',
    type: 'article',
    locale: 'en_IN',
  },
  robots: {
    index: true,
    follow: true,
  },
}

function EMICalculator() {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-16 pt-28">
      <header className="text-center">
        <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
          EMI Calculator
        </h1>
        <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-700">
          An Equated Monthly Instalment (EMI) is the regular payment made
          towards repaying a loan. Understanding your estimated EMI can help you
          plan your monthly budget and compare loan options before applying.
        </p>
      </header>

      <EmiCalculatorTool />

      <section className="pt-12">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
          Benefits of using an EMI calculator
        </h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2">
          <li className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-900">Plan your budget</h3>
            <p className="mt-2 leading-7 text-slate-700">
              Estimate a monthly repayment and see how it may fit alongside
              your regular expenses.
            </p>
          </li>
          <li className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-900">Compare loan options</h3>
            <p className="mt-2 leading-7 text-slate-700">
              Understand how different loan amounts, interest rates, and
              repayment periods can affect your instalment.
            </p>
          </li>
          <li className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-900">Prepare before applying</h3>
            <p className="mt-2 leading-7 text-slate-700">
              Get a clearer picture of the repayment commitment before you
              choose or apply for a loan.
            </p>
          </li>
          <li className="rounded-xl border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-900">Save time</h3>
            <p className="mt-2 leading-7 text-slate-700">
              Quickly review estimates instead of calculating monthly payments
              by hand.
            </p>
          </li>
        </ul>
      </section>

      <section className="pt-12">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
          How is a loan EMI calculated?
        </h2>
        <p className="mt-4 leading-7 text-slate-700">
          For a standard fixed-rate loan, the EMI depends on the principal
          borrowed, the periodic interest rate, and the number of monthly
          instalments. A common calculation is:
        </p>
        <p className="mt-4 overflow-x-auto rounded-xl bg-slate-100 px-5 py-4 font-medium text-slate-900">
          EMI = P × r × (1 + r)<sup>n</sup> ÷ ((1 + r)<sup>n</sup> − 1)
        </p>
        <p className="mt-4 leading-7 text-slate-700">
          Here, <strong>P</strong> is the principal loan amount, <strong>r</strong>{' '}
          is the monthly interest rate expressed as a decimal, and <strong>n</strong>{' '}
          is the total number of monthly instalments. Actual repayment schedules,
          fees, and rates depend on the lender and loan agreement.
        </p>
      </section>

      <section className="pt-12">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
          What affects your monthly EMI?
        </h2>
        <p className="mt-4 leading-7 text-slate-700">
          The loan amount, interest rate, and repayment tenure are the main
          factors that affect an EMI. In general, borrowing more or choosing a
          higher interest rate increases the monthly instalment. A longer tenure
          may reduce the EMI, but can increase the total interest paid over the
          life of the loan. Consider both the monthly payment and the overall
          repayment cost when comparing options.
        </p>
      </section>
    </main>
  )
}

export default EMICalculator
