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

    return (

        <header className="lg:flex lg:flex-col lg:justify-around w-40">
            <div className="flex items-center justify-center gap-4 lg:justify-end lg:pr-9 pt-10">
                <ThemeSwitcher />
                <MobileNav />
            </div>

            <div className='hidden lg:flex'>
                <NavItems />
            </div>

        </header>
    )
}

export default Header
