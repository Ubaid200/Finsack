'use client'

import { useState } from 'react'

const currencyFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 2,
})

function EmiCalculatorTool() {
  const [loanAmount, setLoanAmount] = useState('2500000')
  const [annualRate, setAnnualRate] = useState('8.5')
  const [tenureYears, setTenureYears] = useState('20')

  const principal = Number(loanAmount)
  const rate = Number(annualRate)
  const years = Number(tenureYears)
  const isValid =
    loanAmount.trim() !== '' &&
    annualRate.trim() !== '' &&
    tenureYears.trim() !== '' &&
    Number.isFinite(principal) &&
    Number.isFinite(rate) &&
    Number.isFinite(years) &&
    principal >= 1000 &&
    rate >= 0 &&
    rate <= 100 &&
    years >= 1 &&
    years <= 30

  let monthlyEmi = 0
  let totalPayment = 0
  let totalInterest = 0

  if (isValid) {
    const months = years * 12
    const monthlyRate = rate / 12 / 100
    monthlyEmi =
      monthlyRate === 0
        ? principal / months
        : (principal *
            monthlyRate *
            (1 + monthlyRate) ** months) /
          ((1 + monthlyRate) ** months - 1)
    totalPayment = monthlyEmi * months
    totalInterest = totalPayment - principal
  }

  const principalPercentage =
    isValid && totalPayment > 0 ? (principal / totalPayment) * 100 : 0
  const interestPercentage =
    isValid && totalPayment > 0 ? (totalInterest / totalPayment) * 100 : 0

  return (
    <section
      aria-labelledby="emi-calculator-tool-title"
      className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
    >
      <h2
        id="emi-calculator-tool-title"
        className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl"
      >
        Calculate your monthly EMI
      </h2>
      <p className="mt-2 leading-7 text-slate-700">
        Adjust the loan details to see an estimated monthly payment and
        repayment breakdown.
      </p>

      <div className="mt-7 grid gap-8 md:grid-cols-2">
        <div className="space-y-5">
          <div>
            <label
              htmlFor="emi-loan-amount"
              className="mb-2 block font-medium text-slate-800"
            >
              Loan amount (₹)
            </label>
            <input
              id="emi-loan-amount"
              type="number"
              min="1000"
              step="1000"
              value={loanAmount}
              onChange={(event) => setLoanAmount(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="emi-interest-rate"
              className="mb-2 block font-medium text-slate-800"
            >
              Annual interest rate (%)
            </label>
            <input
              id="emi-interest-rate"
              type="number"
              min="0"
              max="100"
              step="0.1"
              value={annualRate}
              onChange={(event) => setAnnualRate(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="emi-tenure"
              className="mb-2 block font-medium text-slate-800"
            >
              Loan tenure (years)
            </label>
            <input
              id="emi-tenure"
              type="number"
              min="1"
              max="30"
              step="1"
              value={tenureYears}
              onChange={(event) => setTenureYears(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>
          {!isValid && (
            <p role="alert" className="text-sm text-red-700">
              Enter a loan amount of at least ₹1,000, an interest rate from 0
              to 100%, and a tenure from 1 to 30 years.
            </p>
          )}
        </div>

        <div
          aria-live="polite"
          className="rounded-xl bg-slate-50 p-5 md:p-6"
        >
          <p className="text-sm font-medium text-slate-600">
            Estimated monthly EMI
          </p>
          <p className="mt-1 text-3xl font-black text-blue-700">
            {isValid ? currencyFormatter.format(monthlyEmi) : '—'}
          </p>

          <dl className="mt-6 space-y-3">
            <div className="flex justify-between gap-4 text-sm">
              <dt className="text-slate-600">Principal amount</dt>
              <dd className="font-semibold text-slate-900">
                {isValid ? currencyFormatter.format(principal) : '—'}
              </dd>
            </div>
            <div className="flex justify-between gap-4 text-sm">
              <dt className="text-slate-600">Total interest</dt>
              <dd className="font-semibold text-slate-900">
                {isValid ? currencyFormatter.format(totalInterest) : '—'}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-slate-200 pt-3 text-sm">
              <dt className="font-medium text-slate-700">Total repayment</dt>
              <dd className="font-bold text-slate-900">
                {isValid ? currencyFormatter.format(totalPayment) : '—'}
              </dd>
            </div>
          </dl>

          <div className="mt-7">
            <h3 className="font-semibold text-slate-900">
              Repayment breakdown
            </h3>
            <div
              role="img"
              aria-label={
                isValid
                  ? `Repayment breakdown: ${principalPercentage.toFixed(1)}% principal and ${interestPercentage.toFixed(1)}% interest`
                  : 'Repayment breakdown will appear when valid loan details are entered'
              }
              className="mt-3 flex h-7 overflow-hidden rounded-full bg-slate-200"
            >
              {isValid && (
                <>
                  <div
                    className="bg-blue-600 transition-[width]"
                    style={{ width: `${principalPercentage}%` }}
                  />
                  <div
                    className="bg-amber-400 transition-[width]"
                    style={{ width: `${interestPercentage}%` }}
                  />
                </>
              )}
            </div>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-700">
              <span className="inline-flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="size-3 rounded-sm bg-blue-600"
                />
                Principal {isValid ? `(${principalPercentage.toFixed(1)}%)` : ''}
              </span>
              <span className="inline-flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="size-3 rounded-sm bg-amber-400"
                />
                Interest {isValid ? `(${interestPercentage.toFixed(1)}%)` : ''}
              </span>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-5 text-sm leading-6 text-slate-600">
        This is an estimate based on a fixed interest rate and monthly
        repayments. Actual EMIs may vary based on lender terms, fees, and
        repayment schedule.
      </p>
    </section>
  )
}

export default EmiCalculatorTool
