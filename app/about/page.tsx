"use client"

import dynamic from 'next/dynamic'
import Loader from '@/components/shared/Loader';
import { initial, transition, animate, exit } from '@/utils/motions';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const loadingFallback = {};

const About = dynamic(
    () => import('@/components/shared/About'),
    { loading: () => <Loader />, ssr: false }
)


const page = () => {
    return (
        <LazyMotion features={domAnimation} >
            <m.div
                initial={initial}
                animate={animate}
                exit={exit}
                transition={transition}
            >
                <About />
            </m.div>
        </LazyMotion>
    )
}

export default page
