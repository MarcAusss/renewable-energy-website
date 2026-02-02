"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";


const testimonial = [
  {
    comment: "The installation was quick and seamless. Within the first month, we noticeable improvement in our energy performance",
    image: "/images/Photo-Energy-Solar-Install.jpg",
    icon: "fa-bolt",
    name: "John Doe",
    jobTitle: "CEO of Krusty Crabs",
  },
  {
    comment: "Efficient solar systems tailored for homes and businesses.",
    image: "/images/how-to-install-solar-panels-hero.webp",
    icon: "fa-brain",
    name: "Jane Doe",
    jobTitle: "CEO of Fasion Albay",
  },
  {
    comment: "Efficient solar systems tailored for homes and businesses.",
    image: "/images/how-to-install-solar-panels-hero.webp",
    icon: "fa-link",
    name: "",
    jobTitle: "",
  },
  {
    title: "Solar Panel Installation",
    comment: "Efficient solar systems tailored for homes and businesses.",
    image: "/images/how-to-install-solar-panels-hero.webp",
    icon: "fa-link",
    name: "",
    jobTitle: "",
  },
  {
    comment: "Efficient solar systems tailored for homes and businesses.",
    image: "/images/how-to-install-solar-panels-hero.webp",
    icon: "fa-leaf",
    name: "",
    jobTitle: "",      

  }
];

export default function Testimonial() {

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
        <div className="">
            <div className="my-16 max-w-7xl mx-auto px-4">
                <div className="">
                    <h1 className="px-5 py-2 text-sm rounded-full border w-fit border-gray-300">
                    Testimonials
                    </h1>
                </div>
                <div className="flex justify-between items-center">
                    <div className="w-[35%]">
                        <h1 className="text-3xl tracking-wide leading-snug">
                            What Our Customers Say
                        </h1>
                    </div>
                    <div className="w-[45%]">
                        <p className="">
                            Real feedback from homeowners, business leaders, and sustainability champions who trusted Greenova to power their future
                        </p>
                    </div>
                </div>
            </div>
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
                    {testimonial.map((testimonial, index) => (
                        <div key={index} className=" w-[90%] bg-gray-100 rounded-2xl overflow-hidden shrink-0 h-114">
                            <div className="flex h-full w-full">
                                <div className="p-5 w-[70%] flex flex-col justify-between">
                                    <div className="bg-[#a8db00] w-fit p-3 text-white rounded-xl">
                                     <i className={`fa-solid ${testimonial.icon} text-sm`} />
                                    </div>
                                    <div className="">
                                        <h1 className="text-[26px] mt-2">
                                            &#34;{testimonial.comment}&#34;
                                        </h1>
                                        <div className="mt-2 flex justify-between items-center">
                                            <div className="flex gap-4 items-center">
                                                <div className="w-14 h-14 relative z-20">
                                                    <Image
                                                    src={testimonial.image}
                                                    alt=""
                                                    fill
                                                    className="rounded-full object-fit"
                                                    />
                                                </div>
                                                <div className="">
                                                    <h1 className="">
                                                        {testimonial.name}
                                                    </h1>
                                                    <p className="text-sm text-gray-500">
                                                        {testimonial.jobTitle}
                                                    </p>
                                                </div>
                                            </div>
                                            <Link href="" className="text-sm">Read more →</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative h-full w-[80%]">
                                    <Image
                                    src={testimonial.image}
                                    alt=""
                                    fill
                                    className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
            </div>
            <div className="max-w-7xl mx-auto my-5">
                <div className="flex justify-between items-center">
                    <div className=""></div>
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
        </div>
    );
}