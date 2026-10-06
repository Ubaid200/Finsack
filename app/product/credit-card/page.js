import InfoPopup from '@/app/components/InfoPopup';
import Image from 'next/image'
import Link from 'next/link'




async function CreditCard() {
    const response = await fetch(
        "https://leadapi.banksathi.com/api/leadapi/getProductByCategory?productCategoryId=3",
        {
            method: "GET",
            headers: {
                H: "ZXhpTFpEWk5SYVZaREQ5V29lS1FEdUNMWEVOU0psVnpTc0xiZVExT1ZWRT0=",
            },
        }
    );

    const personalLoanFeatures = await response.json();

    return (
        <main className="mx-auto max-w-5xl px-6 pb-16 pt-28">
            <header className="text-center">
                <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                    Credit Card
                </h1>
                <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-700">
                    Explore credit card options and learn what to consider before
                    applying.
                </p>
            </header>

            <section
                aria-label="Credit card features"
                className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
                {personalLoanFeatures?.data?.catProducts?.cardData?.map((feature) => (
                    <article
                        key={feature.title}
                        className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-lg"
                    >
                        <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-blue-50 p-3">
                            <Image
                                src={feature?.logo}
                                alt=""
                                width={100}
                                height={100}
                                className="h-full w-full object-contain"
                            />
                        </div>
                        <h2 className="mt-4 text-lg font-bold text-slate-900">
                            {feature?.title}
                        </h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
                            {feature?.main_benefits?.map((benefit, index) => (
                                <li
                                    key={index}
                                    className="mt-2 leading-7 text-center text-slate-700 bg-gray-200 rounded-md p-1 text-sm "
                                >
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 rounded-md text-center bg-gray-300">
                            {/* First Column */}
                            <div className="border-r border-gray-400 pr-4">
                                <p className="text-sm font-bold text-slate-900">Renewal Fee</p>
                                <p className="text-lg font-bold text-slate-900">₹{feature?.joiningFee}</p>
                            </div>

                            {/* Second Column */}
                            <div >
                                <p className="text-sm font-bold text-slate-900">Joining Fee</p>
                                <p className="text-lg font-bold text-slate-900">₹{feature?.renewalFees}</p>
                            </div>
                        </div>

                        <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                            <Link
                                href={`https://leads.banksathi.com/?h=${feature?.applyKey}`}
                                className="inline-flex rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                            >
                                Apply Now
                            </Link>
                            <InfoPopup benefit={feature} />

                        </div>
                    </article>
                ))}
            </section>

            <section id="personal-loan-details" className="scroll-mt-28 pt-12">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    About Credit Cards
                </h2>
                <p className="mt-4 leading-7 text-slate-700">
                    A credit card is a payment card that allows you to borrow money to make purchases. Before applying, review the interest rate,
                    fees, repayment schedule, and total amount payable. Eligibility,
                    approval, and card terms depend on the issuer and your application.
                </p>
            </section>
        </main>
    )
}

export default CreditCard;
