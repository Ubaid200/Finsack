import Link from "next/link";
import LoanCard from "./components/LoanCard";
import LoanClickCard from "./components/LoanClickCard";
import Marquee from "./components/Marquee";
import Image from "next/image";

export default function Home() {
  const loans = [
    {
      title: "Personal Loan",
      description:
        "Get a personal loan for your financial needs with flexible repayment options, competitive interest rates, and a simple application process.",
      icon: "/icons/personal-loan-icon.svg",
    },
    {
      title: "Home Loan",
      description:
        "Make your dream of owning a home a reality with affordable home loan options, flexible repayment plans, and competitive interest rates.",
      icon: "/icons/home-icon.svg",
    },
    {
      title: "Business Loan",
      description:
        "Grow and expand your business with flexible business loan options designed to support working capital, expansion, and other business needs.",
      icon: "/icons/business-loan.svg",
    },
    {
      title: "Secure Loan",
      description:
        "Choose secure loan solutions with flexible options and transparent terms to meet your financial requirements with greater confidence.",
      icon: "/icons/locker-icon.svg",
    },
  ];
  return (
    <main>
      <section
        className="relative flex min-h-152 items-center overflow-hidden bg-cover bg-center px-6"
        style={{ backgroundImage: "url('/hero-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/80 to-blue-900/40" />

        <div className="relative z-10 mx-auto w-full max-w-7xl py-28">
          <div className="max-w-xl text-left text-white">
            <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium tracking-wide text-blue-100 backdrop-blur-sm">
              Smart financial growth
            </p>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Build wealth with clarity.
            </h1>
            <p className="mt-6 text-lg text-slate-200 md:text-xl">
              Personalized financial planning, investment guidance, and expert support to help your future move forward with confidence.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="https://crm.oneandro.com/customer-service?d=c29mdF9jb2RlPVJLTUFITVUzMjU5NDg1NiZ0b2tlbl9rZXk9OTJwczlxbXEmbG9naW5faWQ9MzI1OTQ4JnNoYXJlX2xlYWRfdHlwZT0xJnV0bV9zb3VyY2U9c2hhcmVfbGluaw%3D%3D"
                className="rounded-full bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:bg-blue-400"
              >
                Apply Now
              </Link>
              <a
                href="#"
                className="rounded-full border border-white/30 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="px-6 py-10 text-center">
        <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
          Services We Offer
        </h1>
      </div>
      <div className="mx-4 my-8 grid grid-cols-1 gap-6 min-[820px]:mx-6 min-[820px]:grid-cols-4 min-[1024px]:mx-10">
        {loans.map((loan) => (
          <LoanCard
            key={loan.title}
            title={loan.title}
            description={loan.description}
            icon={loan.icon}
          />
        ))}
      </div>
      <div className="px-6 py-10 text-center">
        <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
          Our Top Landing Partners
        </h1>
      </div>
      <Marquee />

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-16">

        <div className="text-left">
          <h2 className="mb-5  text-3xl font-black tracking-tight text-slate-900">
            Why Choose FinSack?
          </h2>

          <p className="mt-4 text-slate-700 md:text-lg">
            At <strong>FinSack</strong>, we bring multiple financial solutions together on one platform, making it easier for you to find and apply for the right product based on your needs. From <strong>multiple banks and NBFCs</strong> for Business Loans and Secured Personal Loans to a wide range of <strong>insurance options</strong> including Car, Bike, Life, Health, and General Insurance, you can explore everything in one place.

            Looking to invest or start your investment journey? FinSack also provides access to <strong>multiple Demat Account options, Mutual Funds, and Fixed Deposits (FDs)</strong> from various providers. Instead of visiting different websites and platforms, you can simply choose the product you need, apply through FinSack, and get access to multiple financial options through a simple and convenient process.</p>


        </div>
        <div className="flex justify-center md:justify-end">
          <Image
            src="/house.png"
            alt="FinSack logo"
            width={500}
            height={320}
            className="h-auto w-full max-w-2xl object-contain md:scale-110"
          />
        </div>
      </section>
      <section>
        <LoanClickCard/>
      </section>
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-16">
        <div className="flex justify-center">
          <Image
            src="/illution.svg"
            alt="Home for a home loan"
            width={582}
            height={332}
            className="h-auto w-full max-w-xl object-contain"
          />
        </div>
        <div className="text-right">
          <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
            Get instant approvals on Personal loans
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            With interest rates as low as 8.50% p.a., and a repayment tenure of
            up to 30 years.
          </p>
        </div>
      </section>
    </main>
  )
}
