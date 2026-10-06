import InfoPopup from '@/app/components/InfoPopup';
import Image from 'next/image'
import Link from 'next/link'




async function DemateAccount() {
    const response = await fetch(
        "https://leadapi.banksathi.com/api/leadapi/getProductByCategory?productCategoryId=17",
        {
            method: "GET",
            headers: {
                H: "ZXhpTFpEWk5SYVZaREQ5V29lS1FEdUNMWEVOU0psVnpTc0xiZVExT1ZWRT0=",
            },
        }
    );

    const demateAccountFeatures = await response.json();

    return (
        <main className="mx-auto max-w-5xl px-6 pb-16 pt-28">
            <header className="text-center">
                <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                    Demat Account
                </h1>
                <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-700">
                    Explore demat account options and learn what to consider before
                    applying.
                </p>
            </header>

          <section
                    aria-label="Demat account features"
                    className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {demateAccountFeatures?.data?.catProducts?.cardData?.map((feature) => (
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
                            <p className="mt-2 flex-1 leading-7 text-slate-700">
                                {feature?.sub_title}
                            </p>
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

            <section id="demate-account-details" className="scroll-mt-28 pt-12">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    About Demat Accounts
                </h2>
                <p className="mt-4 leading-7 text-slate-700">
                    A demat account is used to hold shares and securities in electronic format. Before applying, review the account opening process,
                    fees, and the services offered by the depository participant.
                </p>
            </section>
        </main>
    )
}

export default DemateAccount;
