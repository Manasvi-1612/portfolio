'use client'

import Loader from '@/components/shared/Loader'
import dynamic from 'next/dynamic'
import { initial, transition, animate, exit } from '@/utils/motions'
import { LazyMotion, domAnimation, m } from 'framer-motion'

const Projects = dynamic(
  () => import('@/components/shared/Projects'),
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
        <Projects />
      </m.div>
    </LazyMotion>
  )
}

export default page
