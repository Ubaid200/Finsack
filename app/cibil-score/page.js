import Link from 'next/link'

export const metadata = {
  title: 'CIBIL Score: Meaning, Ranges & How to Improve | FinSack',
  description:
    'Understand what a CIBIL Score means, compare score ranges and loan approval chances, and learn practical ways to improve your credit score.',
  keywords: [
    'CIBIL score',
    'credit score',
    'CIBIL score range',
    'how to improve CIBIL score',
    'CIBIL score for loan approval',
  ],
  openGraph: {
    title: 'CIBIL Score: Meaning, Ranges & How to Improve | FinSack',
    description:
      'Learn what your CIBIL Score means, how lenders may use it, and practical steps to improve your credit profile.',
    type: 'article',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary',
    title: 'CIBIL Score: Meaning, Ranges & How to Improve | FinSack',
    description:
      'Learn CIBIL Score ranges, how lenders may use your score, and ways to improve your credit profile.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

function CibilScore() {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-16 pt-28">
      <header className="text-center">
        <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
          CIBIL Score
        </h1>
        <Link
          href="https://crm.oneandro.com/short/XKFkEv"
          className="mt-6 inline-flex rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Check CIBIL Scores
        </Link>
      </header>

      <section id="what-is-cibil-score" className="scroll-mt-28 pt-14">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
          What is a CIBIL Score?
        </h2>
        <p className="mt-4 leading-7 text-slate-700">
          A CIBIL Score is a three-digit summary of your credit history, typically
          ranging from 300 to 900. Lenders may use it, along with other details
          such as your income, existing debts, and repayment history, when
          reviewing a credit application. A higher score can improve your chances
          of approval, but it does not guarantee approval.
        </p>
      </section>

      <section className="pt-10">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
          CIBIL score ranges and approval chances
        </h2>
        <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[600px] border-collapse text-left">
            <thead className="bg-slate-100 text-slate-900">
              <tr>
                <th scope="col" className="px-5 py-4 font-semibold">Score range</th>
                <th scope="col" className="px-5 py-4 font-semibold">Meaning of score</th>
                <th scope="col" className="px-5 py-4 font-semibold">Approval chance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr>
                <td className="px-5 py-4">300–549</td>
                <td className="px-5 py-4">Low</td>
                <td className="px-5 py-4">Lower; lenders may consider the application higher risk</td>
              </tr>
              <tr>
                <td className="px-5 py-4">550–649</td>
                <td className="px-5 py-4">Fair</td>
                <td className="px-5 py-4">Possible, but approval may be more difficult</td>
              </tr>
              <tr>
                <td className="px-5 py-4">650–749</td>
                <td className="px-5 py-4">Good</td>
                <td className="px-5 py-4">Improving; depends on the lender and other application details</td>
              </tr>
              <tr>
                <td className="px-5 py-4">750–900</td>
                <td className="px-5 py-4">Excellent</td>
                <td className="px-5 py-4">Higher, though approval is still subject to lender checks</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-600">
          Score bands and approval criteria vary between lenders. Your score is
          one factor in a credit decision and does not guarantee loan approval.
        </p>
      </section>

      <section className="pt-10">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
          Why is a CIBIL Score important?
        </h2>
        <p className="mt-4 leading-7 text-slate-700">
          Lenders may use your CIBIL Score to understand how you have managed
          credit in the past. It can influence whether a lender approves an
          application and the loan terms they offer. A strong score may give you
          access to more options, while a lower score could mean fewer choices or
          additional checks. Lenders also consider factors such as income,
          existing repayments, and their own eligibility rules.
        </p>
      </section>

      <section className="pt-10">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
          How to improve your CIBIL Score
        </h2>
        <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-slate-700">
          <li>Pay loan EMIs and credit card bills on time.</li>
          <li>Keep credit card balances manageable relative to your limits.</li>
          <li>Avoid applying for several new credit accounts in a short period.</li>
          <li>
            Review your credit report periodically and raise a dispute if you
            find an error.
          </li>
          <li>
            Maintain a consistent repayment history and give improvements time
            to appear in your report.
          </li>
        </ul>
      </section>
    </main>
  )
}

export default CibilScore;
