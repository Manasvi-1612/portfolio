import { LazyMotion, domAnimation, m } from 'framer-motion'
import { animate, exit, initial, transition } from "@/utils/motions";

const About = () => {
    return (
        <LazyMotion features={domAnimation}>
            <m.div
                initial={initial}
                animate={animate}
                exit={exit}
                transition={transition}
            >
                <section>
                    About
                </section>
            </m.div>
        </LazyMotion>
    )
}

export default About
