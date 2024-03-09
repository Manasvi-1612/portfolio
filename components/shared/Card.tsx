import React from 'react'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

type CardProps = {
    title: string;
    company?: string;
    description: string;
    date: string;
}

const Card = ({ card, type }: { card: CardProps, type: "experience" | "education" }) => {
    return (
        <section className='flex gap-7'>
            <div className='flex flex-col border-l-[1px] dark:border-secondary-dark  relative items-center'>
                <div className="rounded-full p-[10px] bg-primary-light dark:bg-primary-dark text-white absolute">
                    {type === "experience" ? < FaBriefcase size={18} /> : <FaGraduationCap size={20} />}
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <span className='p-semibold-13 mr-auto bg-secondary-light dark:bg-secondary-dark py-1 px-2 rounded-full '>{card.date}</span>
                <div className='p-semibold-18 uppercase'>{card.title}  <span className='uppercase p-semibold-16 '>{card.company}</span></div>
                <p className='p-regular-16'>{card.description}</p>
            </div>
        </section>
    )
}

export default Card
