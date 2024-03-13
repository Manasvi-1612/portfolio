"use client"

import { LazyMotion, domAnimation, useInView } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { FilterButton } from './FilterButton';
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";

const Filter = ({ onClick }: { onClick: Function }) => {

    const animRef = useRef(null);
    const isInView = useInView(animRef, { once: true });
    const [activeFilter, setActiveFilter] = useState<string | undefined>(undefined);

    const handleFilterClick = (filter?: string) => {
        onClick(filter);
        setActiveFilter(filter);
    };

    return (
        <LazyMotion features={domAnimation}>
            <div
                ref={animRef}
                className="flex items-start flex-col sm:flex-row sm:items-center gap-4 my-10"
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                }}
            >
                <h3 aria-label="Filter projects" tabIndex={0} className="font-bold text-xl">
                    Filter by:
                </h3>
                <div className="flex items-center gap-4">
                    <FilterButton
                        onClick={() => handleFilterClick()}
                        label="All"
                        active={activeFilter === undefined}
                    >
                        All
                    </FilterButton>
                    <FilterButton
                        onClick={() => handleFilterClick("React")}
                        label="React"
                        active={activeFilter === "React"}
                    >
                        <FaReact size="20" />
                    </FilterButton>
                    <FilterButton
                        onClick={() => handleFilterClick("Next")}
                        label="Next"
                        active={activeFilter === "Next"}
                    >
                        <TbBrandNextjs size="20" />
                    </FilterButton>
                    <FilterButton
                        onClick={() => handleFilterClick("Javascript")}
                        label="Javascript"
                        active={activeFilter === "Javascript"}
                    >
                        <TbBrandJavascript size="20" />
                    </FilterButton>
                </div>
            </div>
        </LazyMotion>
    )
}

export default Filter
