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
import Card from './Card';
import { education, experience } from '@/constants';

const About = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className=' text-title-light dark:text-white'>
            <section className='flex items-center justify-center pt-10'>
                <PrimeTitle title="Resume" subtitle="About" span="me" />
            </section>
            <section className='grid grid-cols-1 lg:place-items-center lg:grid-cols-2 my-12 container gap-2'>
                <div className='lg:ml-[5%]'
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
            <Separator className="container w-1/2 lg:w-1/3 dark:bg-secondary-dark" />

            {/* <section className="text-center text-title-light dark:text-white my-12">
                <h1 className="uppercase h5-bold py-5">My Skills</h1>
                <div className='grid grid-cols-2 gap-5 pb-10'>
                    <CircularProgressbar value={40} text={`${40}%`} />;
                </div>
            </section> */}

            <Technologies />


            <Separator className="container mt-5 w-1/2 lg:w-1/3 dark:bg-secondary-dark" />

            <section className='flex flex-col items-center justify-center pb-14'>
                <div className="text-center my-14">
                    <h1 className="uppercase p-bold-24 md:h5-bold">EXPERIENCE & EDUCATION</h1>
                </div>

                <div className='flex flex-col lg:flex-row gap-14 lg:gap-0 mx-10'>
                    <div className='flex flex-col gap-10 container '>
                        {experience.map((exp, index) => (
                            <Card key={index} card={exp} type="experience" />
                        ))}
                    </div>

                    <div className='flex flex-col gap-10 lg:items-center container'>
                        {education.map((edu, index) => (
                            <Card key={index} card={edu} type="education"/>
                        ))}
                    </div>
                </div>
            </section>

        </section>
    )
}

export default About
