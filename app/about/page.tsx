"use client"

import { initial, transition, animate, exit } from '@/utils/motions';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import About from '@/components/shared/About';




const page = () => {
    return (
        <div className='container-md'>
            <About />
        </div>
    )
}

export default page
