"use client";
import React, { useState } from 'react'

function InfoPopup({ benefit }) {

    const [isOpen, setIsOpen] = useState(false);
    console.log(benefit);


    return (
        <>
            {/* Open Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-700"
            >
                More Details
            </button>

            {/* Popup */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-xl bg-white p-6 shadow-xl">

                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute right-4 top-4 text-2xl text-gray-500 hover:text-black"
                        >
                            ×
                        </button>

                        {/* Content */}
                        <div className="pr-8">
                            <h2 className="mb-4 text-2xl font-bold text-gray-900">
                                Information
                            </h2>
                            <div className="flex items-center gap-6">
                                <img
                                    src={benefit?.logo}
                                    alt={benefit?.title}
                                    className=" my-2 h-20 w-20 object-contain border rounded-md"
                                />
                                <h2 className="mt-4 text-lg font-bold text-slate-900">
                                    {benefit?.title}
                                </h2>

                            </div>
                            <div>
                               {benefit.card_detail?  <h1 className="mt-4 text-2xl text-center font-bold text-slate-900">
                                    Description
                                </h1> : null}
                                <ul>
                                    {benefit?.card_detail?.map((detail, index) => (
                                        <li key={index} className="mt-2 leading-7 text-slate-700">
                                            <span className="font-medium mr-2">{index + 1}.</span>    {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <h1 className="mt-4 text-2xl text-center font-bold text-slate-900">
                                {benefit?.productDetails[0]?.tabName}
                            </h1>
                            <div>
                                {benefit?.productDetails[0]?.content?.map((content, index) => (
                                    <div key={index}>
                                        <div className="mt-2 leading-7 text-green-700 font-bold">
                                            {content?.title}
                                        </div>
                                        <div>
                                            <ul>
                                                {content?.content?.map((item, idx) => {
                                                    if (item.trim() === "") return null;
                                                    return (
                                                        <li key={idx} className="mt-2 leading-7 text-slate-700">
                                                            <span className="font-medium mr-2">o.</span>    {item.trim()}
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}



export default InfoPopup
