"use client";

import { useRef } from "react";
import Image from "next/image";

const services = [
  {
    title: "Solar Panel Installation",
    desc: "Efficient solar systems tailored for homes and businesses.",
    image: "/images/how-to-install-solar-panels-hero.webp",
  },
  {
    title: "Wind Turbine Solution",
    desc: "Advanced battery solutions for uninterrupted power.",
    image: "/images/ERE20080806-02_72dpi.png",
  },
  {
    title: "EV Charging Station Setup",
    desc: "Track and optimize energy usage in real time.",
    image: "/images/Connector-type-scaled.avif",
  },
  {
    title: "Energy Storage",
    desc: "Reliable service to keep systems performing at peak.",
    image: "/images/istockphoto-1565438407-612x612.jpg",
  }
];

export default function Service() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const cardWidth = carouselRef.current.firstElementChild?.clientWidth || 0;
    carouselRef.current.scrollBy({
      left: direction === "right" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-gray-100 py-10">
    <div className=" max-w-7xl mx-auto px-4 ">
        {/* Label */}
        <h1 className="px-5 py-2 text-sm rounded-full border w-fit border-gray-300">
            Our Services
        </h1>

        {/* Header + Buttons */}
        <div className="flex items-baseline justify-between mt-5">
            <div>
                <h1 className="text-3xl tracking-wide">
                    Powering a cleaner, smarter future
                </h1>
                <p className="text-sm mt-3 text-gray-600">
                    We deliver smart green energy solutions that cut cost and power a
                    cleaner future.
                </p>
            </div>

        {/* Buttons */}
            <div className="flex gap-3">
                <button
                    onClick={() => scroll("left")}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-[#D3F171] hover:bg-[#d3f17173]"
                >
                    ←
                </button>
                <button
                    onClick={() => scroll("right")}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-[#D3F171] hover:bg-[#d3f17173]"
                >
                    →
                </button>
            </div>
        </div>
    </div>

      {/* Carousel */}
        <div className="mt-10 overflow-hidden ml-32">
            <div
            ref={carouselRef}
            className="
                flex gap-6
                overflow-x-hidden scroll-smooth
                scrollbar-hide
                pr-[25%]
            "
            >
            {services.map((service, index) => (
                <div
                key={index}
                className="
                    w-[35%]
                    bg-white
                    rounded-2xl
                    overflow-hidden
                    shrink-0
                "
                >
                <div className="relative h-64 w-full">
                    <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    />
                </div>

                <div className="p-5">
                    <h3 className="font-semibold text-lg">
                    {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                    {service.desc}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
  );
}
