"use client";

import { useState } from "react";
import Image from "next/image";

export default function Function() {
     const [openIndex, setOpenIndex] = useState<number | null>(1);

  const items = [
    {
      title: "Proven Efficiency",
      content:
        "Our systems are tested across multiple environments to ensure consistent performance and reliability.",
      icon: "fa-bolt",
    },
    {
      title: "Intelligent Energy Optimization",
      content:
        "Our adaptive AI engine analyzes usage patterns, weather conditions, and demand peaks to deliver the most efficient performance automatically.",
      icon: "fa-brain",
    },
    {
      title: "Seamless System Integration",
      content:
        "Integrates smoothly with existing infrastructure and smart devices for effortless adoption.",
      icon: "fa-link",
    },
    {
      title: "Peak Storage Performance",
      content:
        "Advanced battery systems ensure optimal energy storage during peak and off-peak hours.",
      icon: "fa-battery-full",
    },
    {
      title: "Sustainable Community Network",
      content:
        "Connects users into a shared renewable ecosystem that maximizes collective efficiency.",
      icon: "fa-leaf",
    },
  ];


    return (
        <div className="my-10 max-w-7xl mx-auto px-4">
            <div className="">
                <h1 className="px-5 py-2 text-sm rounded-full border w-fit border-gray-300">
                Why it Works
                </h1>
            </div>
            <div className="flex justify-between items-center">
                <div className="w-[35%]">
                    <h1 className="text-3xl tracking-wide leading-snug">
                        Smarter energy, with clear and proven impact
                    </h1>
                </div>
                <div className="w-[50%]">
                    <p className="">
                        Our smart renewable systems are designed to maximize efficiency, cut costs, and create a more sustainable way to power you home or business, today and for the future.
                    </p>
                </div>
            </div>

            <div className="my-16 max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
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
                            <div
                                className={`
                                mt-1 flex items-center justify-center
                                w-8 h-8 rounded-md
                                ${isOpen
                                    ? "bg-[#D3F171] text-black"
                                    : "bg-gray-100 text-gray-500"}
                                `}
                            >
                                <i className={`fa-solid ${item.icon} text-sm`} />
                            </div>

                            {/* Text */}
                            <div className="flex-1">
                                <h3 className="font-medium text-gray-900">
                                {item.title}
                                </h3>

                                <div
                                className={`grid transition-all duration-300 ${
                                    isOpen
                                    ? "grid-rows-[1fr] mt-2"
                                    : "grid-rows-[0fr]"
                                }`}
                                >
                                <p className="overflow-hidden text-sm text-gray-600">
                                    {item.content}
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

                    {/* RIGHT – Image */}
                    <div className="relative w-full h-105 rounded-2xl overflow-hidden">
                    <Image
                        src="/images/solarFarm.svg"
                        alt="Solar panels"
                        fill
                        className="object-cover"
                        priority
                    />
                    </div>
                </div>
            </div>

        </div>
    );
}