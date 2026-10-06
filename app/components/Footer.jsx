import Link from 'next/link'

const footerColumns = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Careers', href: '/careers' },
      { label: 'Our Partners', href: '/partners' },
    ],
  },
  {
    title: 'Loan Products',
    links: [
      { label: 'Personal Loan', href: '/products/personal-loans' },
      { label: 'Home Loan', href: '/products/home-loans' },
      { label: 'Business Loan', href: '/products/business-loans' },
      { label: 'Loan Against Property', href: '/products/loan-against-property' },
      { label: 'Gold Loan', href: '/products/gold-loan' },
    ],
  },
  {
    title: 'Financial Tools',
    links: [
      { label: 'EMI Calculator', href: '/emi-calculator' },
      { label: 'CIBIL Score', href: '/cibil-score' },
      { label: 'Loan Eligibility Calculator', href: '/loan-eligibility-calculator' },
      { label: 'Interest Rate Calculator', href: '/interest-rate-calculator' },
    ],
  },
  {
    title: 'Insurance',
    links: [
      { label: 'Vehicle Insurance', href: '/insurance/vehicle' },
      { label: 'Life Insurance', href: '/insurance/life' },
      { label: 'Health Insurance', href: '/insurance/health' },
    ],
  },
]

function Footer() {
  return (
    <footer className="w-full bg-black py-10 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerColumns.map((column) => (
            <section key={column.title}>
              <h2 className="mb-4 text-base font-semibold">{column.title}</h2>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-slate-300">
          <p>© 2026 Ubaid Rayni. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
