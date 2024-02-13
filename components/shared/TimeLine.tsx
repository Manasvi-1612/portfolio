"use client";

import { useEffect, useRef, useState } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";

const TimeLineData = [
    { year: 2024, text: "Start my journey as a MERN stack developer" },
    { year: 2023, text: "Work as a React developer" },
    { year: 2022, text: "Dive into learning React.js" },
    { year: 2021, text: "Begin my programming journey as Frontend developer" },
];

export function TimeLine() {
    // const colorMode = "dark";
    const carouselRef = useRef<HTMLUListElement>(null);
    const isInView = useInView(carouselRef, { once: true });


    return (
        <LazyMotion features={domAnimation}>
            <ul
                ref={carouselRef}
                className="flex flex-row gap-4 lg:grid lg:grid-cols-2  overflow-x-auto snap-x cursor-pointer hide-scroll-bar text-title-light dark:text-white"
            >
                <>
                    {TimeLineData.map((item, index) => {
                        return (
                            <li
                                id={`carousel__item-${index}`}
                                key={index}
                                className="flex flex-col gap-3 snap-start w-[calc((100%/2)-10px)] lg:w-1/2"
                                style={{
                                    transform: isInView
                                        ? "none"
                                        : `${index === 0 ? "translateY(250px)" : `translateY(${200 / index}px)`}`,
                                    opacity: isInView ? 1 : 0,
                                    transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${index === 0 ? 0.5 : 1.05 * index
                                        }s`
                                }}
                            >
                                <h3
                                    tabIndex={0}
                                    aria-label={"What do I do in " + item.year}
                                    className="flex items-center gap-4 text-2xl font-bold"
                                >
                                    {`${item.year}`}
                                    <svg
                                        width="140"
                                        height="6"
                                        viewBox="0 0 208 6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                                            fillOpacity="0.5"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear"
                                                x1="-4.30412e-10"
                                                y1="0.5"
                                                x2="208"
                                                y2="0.500295"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#fff" />
                                                <stop offset="0.79478" stopColor="#fff" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </h3>
                                <p className="tracking-wide" tabIndex={0}>
                                    {item.text}
                                </p>
                            </li>
                        );
                    })}
                </>
            </ul>
        </LazyMotion>
    );
}