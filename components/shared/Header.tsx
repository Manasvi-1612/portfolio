'use client'

import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { Bs0Square } from 'react-icons/bs'
import { IconType } from 'react-icons'
import { domAnimation, LazyMotion, m } from "framer-motion";
import MobileNav from './MobileNav'
import NavItems from './NavItems'

const Header = () => {

    // <nav className="lg:flex lg:flex-col gap-28 fixed">
    //             <div className="flex items-center justify-center gap-4 lg:justify-end lg:pr-9 pt-10 bg-blue-400">
    //                 <ThemeSwitcher />
    //                 <MobileNav />
    //             </div>

    return (

        <header className="lg:w-40 pb-10">
            <nav className="lg:flex lg:flex-col lg:gap-28 fixed max-lg:w-full z-20 ">
                <div className="flex gap-4 items-center justify-end pr-9 lg:mt-10  h-16 max-lg:bg-[#eee] max-lg:dark:bg-[#252525]">
                    <ThemeSwitcher />
                    <MobileNav />
                </div>

                <div className='hidden lg:flex'>
                    <NavItems />
                </div>
            </nav>
        </header>
    )
}

export default Header
