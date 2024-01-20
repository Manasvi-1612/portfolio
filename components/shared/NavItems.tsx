import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

type SideBarProps = {
    title: string,
    path: string,
    icon: React.ReactNode,
    isHovered: boolean,
}

const NavItems = () => {

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

        <ul className="flex flex-col gap-4 pr-4 w-40">

            {sideBarLinks.map((link) => {

                const isActive = pathname === link.path

                // bg-[#2b2a2a] hover:bg-[#ffb400]

                return (
                    <li key={link.path} className="p-2">
                        <a href={link.path} className="flex items-center lg:justify-end gap-5">
                            <div className={`${isActive ? 'lg:bg-primary-light lg:dark:bg-primary-dark' : 'lg:bg-secondary-light lg:dark:bg-secondary-dark'} navIcon px-3 py-3 rounded-full`} onMouseEnter={() => handleHover(link)} onMouseLeave={() => handleHover(link)} style={containerStyle}>
                                <span className={`p-medium-16 uppercase ${link.isHovered ? 'none' : 'lg:hidden'}`}>{link.title}</span>
                                <div>
                                    {link.icon}
                                </div>
                            </div>
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}

export default NavItems
