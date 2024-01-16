'use client'

import { sidebarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { Bs0Square } from 'react-icons/bs'
import { IconType } from 'react-icons'
import { domAnimation, LazyMotion, m } from "framer-motion";

type SideBarProps = {
    title: string,
    path: string,
    icon: React.ReactNode,
    isHovered: boolean,
}

const SideBar = () => {

    const pathname = usePathname()

    const [sideBarLinks, setSideBarLinks] = useState(sidebarLinks);

    const handleHover = (link: SideBarProps) => {
        setSideBarLinks((prev) => prev.map((item) => item.path == link.path ? { ...item, isHovered: !item.isHovered } : item))
    };

    const containerStyle = {
        transition: "all .6s ease-in-out",
        transitionDuration: '500ms',
        transitionProperty: 'margin-right, background-color,transform',
    };

    return (

        <header className="flex flex-col justify-around">
            <div className="flex justify-end pr-9">
                <ThemeSwitcher />
            </div>

            <ul className="flex flex-col gap-6 pr-4">

                {sideBarLinks.map((link) => {

                    const isActive = pathname === link.path

                    // bg-[#2b2a2a] hover:bg-[#ffb400]

                    return (
                        <li key={link.path} className="p-2">
                            <a href={link.path} className="flex items-center justify-end gap-5">
                                <div className="navIcon px-3 py-3 rounded-full flex gap-5 hover:-translate-x-1" onMouseEnter={() => handleHover(link)} onMouseLeave={() => handleHover(link)} style={containerStyle}>
                                    {link.isHovered && <span className="p-medium-16 uppercase">{link.title}</span>}
                                    <div className='navIconImg'>
                                        {link.icon}
                                    </div>
                                </div>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </header>
    )
}

export default SideBar
