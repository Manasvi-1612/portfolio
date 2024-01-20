import Loader from '@/components/shared/Loader'
import { LazyMotion, domAnimation } from 'framer-motion'
import React, { Suspense } from 'react'

const page = () => {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <section>
                    About
                </section>
            </Suspense>
        </>
    )
}

export default page
