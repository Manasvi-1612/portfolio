import { sidebarLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { SheetClose } from '../ui/sheet'


const NavItems = (props: any) => {

    const pathname = usePathname()

    const [sideBarLinks, setSideBarLinks] = useState(sidebarLinks);

    const [SheetCloseWrapper, sheetCloseWrapperProps] = props.withSheetClose
        ? [SheetClose, { asChild: true }]
        : [React.Fragment, {}];

    return (

        <ul className="flex flex-col gap-4 pr-4 w-40">

            {sideBarLinks.map((link) => {

                const isActive = pathname === link.path

                // bg-[#2b2a2a] hover:bg-[#ffb400]
                // <div className={`${isActive ? 'lg:bg-primary-light lg:dark:bg-primary-dark' : 'lg:bg-secondary-light lg:dark:bg-secondary-dark'} navIcon px-3 py-3 rounded-full`} onMouseEnter={() => handleHover(link)} onMouseLeave={() => handleHover(link)} style={containerStyle}>

                return (

                    <li className="p-2" key={link.path}>
                        <SheetCloseWrapper {...sheetCloseWrapperProps} >
                            <Link href={link.path} className="flex lg:justify-end">
                                <div className={`flex flex-row-reverse lg:flex-row items-center justify-center gap-2 group`}>
                                    <span className={`p-medium-16 uppercase lg:addText pl-1`} style={{ direction: "rtl" }}>{link.title}</span>
                                    <div className={`${isActive ? 'lg:bg-primary-light lg:dark:bg-primary-dark lg:text-white' : 'lg:bg-secondary-light lg:dark:bg-secondary-dark lg:text-title-light'} lg:navIcon`}>
                                        {link.icon}
                                    </div>
                                </div>
                            </Link>
                        </SheetCloseWrapper>
                    </li>
                )
            })}
        </ul>
    )
}

export default NavItems
