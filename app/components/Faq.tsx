"use client";

import { useState } from "react";
import Image from "next/image";

export default function Faq() {
     const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    {
      question: "How long does a Greenova solar installation take?",
      details:
        "Our adaptive AI engine analyzes usage patterns, weather conditions, and demand peaks to deliver the most efficient energy performance & automatically.",
      number: "1",
    },
    {
      question: "Will solar panels really reduce my monthly electricity bills?",
      details:
        "Our adaptive AI engine analyzes usage patterns, weather conditions, and demand peaks to deliver the most efficient performance automatically.",
      number: "2",
    },
    {
      question: "Does Greenova offer financing or installment plans?",
      details:
        "Integrates smoothly with existing infrastructure and smart devices for effortless adoption.",
      number: "3",
    },
    {
      question: "What maintenance do solar panels require?",
      details:
        "Advanced battery systems ensure optimal energy storage during peak and off-peak hours.",
      number: "4",
    },
    {
      question: "Do i need a roof inspection before installing solar panels?",
      details:
        "Connects users into a shared renewable ecosystem that maximizes collective efficiency.",
      number: "5",
    },
  ];


    return (
        <div className="my-16 max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-start">
                <div className="flex justify-between flex-col h-full">
                    <div className="mb-4">
                        <h1 className="px-5 mb-2 py-2 text-sm rounded-full border w-fit border-gray-300">
                            FAQ
                        </h1>
                        <h1 className="text-3xl tracking-wide leading-snug">
                            Frequently Asked Questions 
                        </h1>
                    </div>
                    <div className="">
                        <h1 className="font-bold text-xl mb-4">Still have a question?</h1>
                        <p className="mb-4 ">Don&apos;t worry we&apos;re open for questions</p>
                        <button className="px-5 py-2 bg-black text-white rounded-full w-fit">
                            Contact
                        </button>
                    </div>
                </div>

                <div className="">
                    <div className="w-full">
                        {/* LEFT – Accordions */}
                        <div className="space-y-3">
                        {items.map((item, index) => {
                            const isOpen = openIndex === index;

                            return (
                            <div
                                key={index}
                                className={`
                                rounded-xl border transition-all duration-300
                                ${isOpen
                                    ? "bg-[#d3f1710a] border-[#D3F171]"
                                    : "bg-white border-gray-200"}
                                `}
                            >
                                <button
                                onClick={() =>
                                    setOpenIndex(isOpen ? null : index)
                                }
                                className="w-full flex items-start gap-4 p-4 text-left"
                                >
                                {/* Icon */}
                                <div className="">
                                    {item.number}.
                                </div>

                                {/* Text */}
                                <div className="flex-1">
                                    <h3 className="font-medium text-gray-900">
                                    {item.question}
                                    </h3>

                                    <div
                                    className={`grid transition-all duration-300 ${
                                        isOpen
                                        ? "grid-rows-[1fr] mt-2"
                                        : "grid-rows-[0fr]"
                                    }`}
                                    >
                                    <p className="overflow-hidden text-sm text-gray-600">
                                        {item.details}
                                    </p>
                                    </div>
                                </div>

                                {/* Plus / Minus */}
                                <span className="text-lg text-gray-500">
                                    {isOpen ? "−" : "+"}
                                </span>
                                </button>
                            </div>
                            );
                        })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}