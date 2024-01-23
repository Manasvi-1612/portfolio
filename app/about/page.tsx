"use client"

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Loader from '@/components/shared/Loader';

const loadingFallback = {};

const About = dynamic(
    () => import('@/components/shared/About'),
    { loading: () => <Loader />, ssr: false }
)


const page = () => {
    return (
        <>
            <About />
        </>
    )
}

export default page
