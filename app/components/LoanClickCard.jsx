import Link from "next/link";

const loanProducts = [
  {
    title: "Personal Loan",
    href: "/loan/personal-loan",
    image: "/product-icons/personal-icon.svg"
  },
  {
    title: "Business Loan",
    href: "/business-loan",
    image: "/product-icons/buisness-icon.svg"
  },
  {
    title: "Home Loan",
    href: "/home-loan",
    image: "/product-icons/home-icon.svg"
  },
  {
    title: "Gold Loan",
    href: "/gold-loan",
    image: "/product-icons/gold-icon.svg"
  },

  {
    title: "Loan Against Property",
    href: "/loan-against-property",
    image: "/product-icons/secure-icon.svg"
  },
  {
    title: "Investment FD & Mutual Funds",
    href: "/investment-fd-mutual-funds",
    image: "/product-icons/investment-icon.svg"
  },
  {
    title: "Demat Account",
    href: "/demat-account",
    image: "/product-icons/demat-icon.svg"
  },
  {
    title: "Bank Account",
    href: "/bank-account",
    image: "/product-icons/bank-icon.svg"
  },
  {
    title: "Insurance",
    href: "/insurance",
    image: "/product-icons/insurance-icon.svg"
  },
  {
    title: "Credit Card",
    href: "/product/credit-card",
    image: "/product-icons/credit-card.svg"
  },
];

export default function LoanClickCard() {
  return (
    <section className="mx-auto my-5 w-full max-w-5xl">

      <h1 className="mb-6 text-start text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
        Loan Products
      </h1>

      <div className="grid grid-cols-1 justify-items-center gap-5 min-[600px]:grid-cols-3">
        {loanProducts.map((product, index) => (
          <Link
            key={product.title}
            href={product.href}
            aria-label={product.title}
            className={`w-full max-w-[280px] ${index === loanProducts.length - 1 && loanProducts.length % 3 === 1
                ? "min-[600px]:col-start-2"
                : ""
              }`}
          >
            <div className="group overflow-hidden rounded-xl bg-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-28 items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  width={80}
                  height={80}
                  loading="lazy"
                  className="h-20 w-20 object-contain"
                />
              </div>

              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.title}
                </h3>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}