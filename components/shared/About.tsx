import Link from 'next/link';
import ButtonComponent from './ButtonComponent';
import PrimeTitle from './PrimeTitle';

const About = () => {

    const openResume = () => {
        window.open('file:///C:/Users/hp/Downloads/ManasviJoshiResume%20(1).pdf', '_blank'); // Change the path to your resume file
    }

    return (
        <>
            <section className='flex items-center justify-center'>
                <PrimeTitle title="Resume" subtitle="About" span="me" />
            </section>
            <section className='flex items-center justify-center'>
                <div className='text-title-light dark:text-white my-5'>
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
                    <Link href='/ManasviJoshiResume.pdf' target="_blank"  rel="noopener noreferrer" locale={false}  >
                        <ButtonComponent title='Download cv' name='Download' />
                    </Link>
                </div>

            </section>
        </>
    )
}

export default About
