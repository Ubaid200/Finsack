import Link from "next/link";

const loanProducts = [
  {
    title: "Personal Loan",
    href: "/loan/personal-loan",
    image: "/product-icons/personal-icon.svg"
  },
  {
    title: "Business Loan",
    href: "https://crm.oneandro.com/customer-service?d=c29mdGNvZGU9UktNQUhNVTMyNTk0ODU2JnByb2R1Y3RfaWQ9MSZzY29yZV90eXBlPUVxdWlmYXgmY2FtcGFpZ25fdHlwZT1Qcm9kdWN0JnByb2R1Y3RfY2F0ZWdvcnlfaWQ9MiZjYXRlZ29yeV9wdXJwb3NlX2lkPSZzb3VyY2U9Zmluc2FjayZzdWJfc291cmNlPXdlYnNpdGUmam91cm5leVN0b3BQb2ludD0mTGVuZGVyVHlwZT0mdXRtX3NvdXJjZT1xcl9nZW5lcmF0b3ImbG9naW5faWQ9MzI1OTQ4JnRva2VuX2tleT10cThla2g0Wg%3D%3D",
    image: "/product-icons/buisness-icon.svg"
  },
  {
    title: "Home Loan",
    href: "https://crm.oneandro.com/customer-service?d=c29mdGNvZGU9UktNQUhNVTMyNTk0ODU2JnByb2R1Y3RfaWQ9MSZzY29yZV90eXBlPUVxdWlmYXgmY2FtcGFpZ25fdHlwZT1Qcm9kdWN0JnByb2R1Y3RfY2F0ZWdvcnlfaWQ9MyZjYXRlZ29yeV9wdXJwb3NlX2lkPSZzb3VyY2U9Zmluc2FjayZzdWJfc291cmNlPXdlYnNpdGUmam91cm5leVN0b3BQb2ludD0mTGVuZGVyVHlwZT0mdXRtX3NvdXJjZT1xcl9nZW5lcmF0b3ImbG9naW5faWQ9MzI1OTQ4JnRva2VuX2tleT1SQ0gyRnNDeg%3D%3D",
    image: "/product-icons/home-icon.svg"
  },
  {
    title: "Gold Loan",
    href: "https://crm.oneandro.com/customer-service?d=c29mdGNvZGU9UktNQUhNVTMyNTk0ODU2JnByb2R1Y3RfaWQ9MSZzY29yZV90eXBlPUVxdWlmYXgmY2FtcGFpZ25fdHlwZT1Qcm9kdWN0JnByb2R1Y3RfY2F0ZWdvcnlfaWQ9NSZjYXRlZ29yeV9wdXJwb3NlX2lkPSZzb3VyY2U9Zmluc2FjayZzdWJfc291cmNlPXdlYnNpdGUmam91cm5leVN0b3BQb2ludD0mTGVuZGVyVHlwZT0mdXRtX3NvdXJjZT1xcl9nZW5lcmF0b3ImbG9naW5faWQ9MzI1OTQ4JnRva2VuX2tleT1vSFdPZW82cg%3D%3D",
    image: "/product-icons/gold-icon.svg"
  },

  {
    title: "Loan Against Property",
    href: "https://crm.oneandro.com/customer-service?d=c29mdGNvZGU9UktNQUhNVTMyNTk0ODU2JnByb2R1Y3RfaWQ9MSZzY29yZV90eXBlPUVxdWlmYXgmY2FtcGFpZ25fdHlwZT1Qcm9kdWN0JnByb2R1Y3RfY2F0ZWdvcnlfaWQ9NCZjYXRlZ29yeV9wdXJwb3NlX2lkPSZzb3VyY2U9Zmluc2FjayZzdWJfc291cmNlPXdlYnNpdGUmam91cm5leVN0b3BQb2ludD0mTGVuZGVyVHlwZT0mdXRtX3NvdXJjZT1xcl9nZW5lcmF0b3ImbG9naW5faWQ9MzI1OTQ4JnRva2VuX2tleT1Pd1FyeE9jMA%3D%3D",
    image: "/product-icons/secure-icon.svg"
  },
  {
    title: "Investment FD & Mutual Funds",
    href: "/product/investment",
    image: "/product-icons/investment-icon.svg"
  },
  {
    title: "Demat Account",
    href: "/product/demate",
    image: "/product-icons/demat-icon.svg"
  },
  {
    title: "Bank Account",
    href: "/product/bank-account",
    image: "/product-icons/bank-icon.svg"
  },
  {
    title: "Insurance",
    href: "https://crm.oneandro.com/customer-service?d=c29mdF9jb2RlPVJLTUFITVUzMjU5NDg1NiZ0b2tlbl9rZXk9OTJwczlxbXEmbG9naW5faWQ9MzI1OTQ4JnNoYXJlX2xlYWRfdHlwZT0xJnV0bV9zb3VyY2U9c2hhcmVfbGluaw%3D%3D",
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