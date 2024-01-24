import { LazyMotion, domAnimation, m } from 'framer-motion'
import { animate, exit, initial, transition } from "@/utils/motions";
import PrimeTitle from './PrimeTitle';

const About = () => {
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
                        <PrimeTitle title="Resume" subtitle="About me" />
                    </div>

                </section>
            </m.div>
        </LazyMotion>
    )
}

export default About
