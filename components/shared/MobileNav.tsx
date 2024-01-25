import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import NavItems from "./NavItems"
import { HiMenuAlt3 } from "react-icons/hi";



const MobileNav = () => {
    return (
        <nav className="lg:hidden">
            <Sheet>
                <SheetTrigger className="align-middle" asChild>
                    <HiMenuAlt3 size={23} />
                </SheetTrigger>
                <SheetContent side={'left'} className="flex flex-col gap-5 dark:bg-secondary-dark lg:hidden">
                    <NavItems withSheetClose />
                </SheetContent>
            </Sheet>
        </nav>
    )
}

export default MobileNav