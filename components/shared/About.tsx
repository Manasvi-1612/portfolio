import Link from 'next/link';
import ButtonComponent from './ButtonComponent';
import PrimeTitle from './PrimeTitle';
import { TimeLine } from './TimeLine';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <>
            <section className='flex items-center justify-center'>
                <PrimeTitle title="Resume" subtitle="About" span="me" />
            </section>
            <section className='grid grid-cols-1  lg:place-items-center lg:grid-cols-2 my-10 ml-[20%] lg:ml-[3%]'>
                <div className='text-title-light dark:text-white'
                    ref={ref}
                    style={{
                        transform: isInView ? "none" : "translateX(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                >
                    <h1 className="uppercase h5-bold py-5">Personal Info</h1>
                    <div className='grid grid-cols-2 gap-2 pb-10'>
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
        </>
    )
}

export default About
