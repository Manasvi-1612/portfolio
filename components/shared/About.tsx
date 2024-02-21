import Link from 'next/link';
import ButtonComponent from './ButtonComponent';
import PrimeTitle from './PrimeTitle';
import { TimeLine } from './TimeLine';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Separator } from '../ui/separator';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Technologies from './Technologies';

const About = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className='ml-[10%] text-title-light dark:text-white'>
            <section className='flex items-center justify-center '>
                <PrimeTitle title="Resume" subtitle="About" span="me" />
            </section>
            <section className='grid grid-cols-1  lg:place-items-center lg:grid-cols-2 my-12 ml-[10%] lg:ml-0'>
                <div className=''
                    ref={ref}
                    style={{
                        transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >
                    <h1 className="uppercase h5-bold py-5">Personal Info</h1>
                    <div className='grid grid-cols-2 gap-5 pb-10'>
                        <div>First Name: <span className='p-medium-16'>Manasvi</span></div>
                        <div>Last Name: <span className='p-medium-16'>Joshi</span></div>
                        <div>Address: <span className='p-medium-16'>Jaipur, Rajasthan</span></div>
                        <div>Email: <span className='p-medium-16'>manasvijoshi63@gmail.com</span></div>
                        <div>Phone: <span className='p-medium-16'>+91 8290679916</span> </div>
                        <div>Nationality: <span className='p-medium-16'>Indian</span> </div>
                    </div>

                    {/* <Link  href={'public/images/table_data.pdf'}  target="_blank"  rel="noopener noreferrer" locale={false} download>Download Here</Link> */}
                    <Link href='/ManasviJoshiResume.pdf' target="_blank" rel="noopener noreferrer" locale={false}  >
                        <ButtonComponent title='Download cv' name='Download' />
                    </Link>
                </div>
                <div className="mt-10">
                    <TimeLine />
                </div>
            </section>
            <Separator className="ml-[32%] w-1/3 dark:bg-secondary-dark" />

            {/* <section className="text-center text-title-light dark:text-white my-12">
                <h1 className="uppercase h5-bold py-5">My Skills</h1>
                <div className='grid grid-cols-2 gap-5 pb-10'>
                    <CircularProgressbar value={40} text={`${40}%`} />;
                </div>
            </section> */}

            <Technologies />

        </section>
    )
}

export default About
