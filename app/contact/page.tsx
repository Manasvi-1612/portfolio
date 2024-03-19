import ContactForm from '@/components/shared/ContactForm'
import PrimeTitle from '@/components/shared/PrimeTitle'
import Link from 'next/link';
import { IoIosMail, IoMdCall } from "react-icons/io"
import { FaLinkedin } from "react-icons/fa6"
import { socialLinks } from '@/constants';

const page = () => {
  return (
    <div className="container-md section">
      <section className='flex items-center justify-center'>
        <PrimeTitle title="contact" subtitle="Get in" span="touch" />
      </section>

      <section className="py-14 lg:py-[100px] text-title-light dark:text-white">
        <div className="container">
          <div className='relative flex flex-col lg:flex-row gap-10'>
            <div className="heading text-center lg:mb-0 lg:w-1/3 lg:pr-10 lg:text-left flex flex-col gap-5">
              <h5 className='h5-bold'>Get In Touch.</h5>

              <Link href={`mailto:manasvijoshi63@gmail.com`}>
                <div className='flex items-center gap-1'>
                  <IoIosMail size={70} className='' />
                  <div className='flex flex-col text-left'>
                    <h6 className='h6-semibold uppercase'>Mail me</h6>
                    <p className='p-medium-16'>manasvijoshi63@gmail.com</p>
                  </div>
                </div>
              </Link>

              <div className='flex items-center gap-1'>
                <IoMdCall size={65} />
                <div className='flex flex-col text-left'>
                  <h6 className='h6-semibold uppercase'>call me</h6>
                  <p className='p-medium-16'>+91 8290679916</p>
                </div>
              </div>

              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <Link href={link.path} target="_blank"
                    rel="noopener noreferrer" key={link.title}>
                    <div className='bg-secondary-light dark:bg-secondary-dark p-2 rounded-full'>
                      {link.icon}
                    </div>
                  </Link>
                ))}
              </div>

            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
