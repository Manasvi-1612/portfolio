'use client'

import { initial, transition, animate, exit } from '@/utils/motions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import React from 'react'
import PrimeTitle from './PrimeTitle'

const Projects = () => {
    return (
        <LazyMotion features={domAnimation} >
            <m.div
                initial={initial}
                animate={animate}
                exit={exit}
                transition={transition}
            >
                <section className='flex items-center justify-center'>
                    <div>
                        <PrimeTitle title="Works" subtitle="My projects" />
                    </div>

                </section>
            </m.div>
        </LazyMotion>
    )
}

export default Projects
