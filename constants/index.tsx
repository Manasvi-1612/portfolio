import { IoHome } from "react-icons/io5"
import { FaUserLarge, FaBriefcase, FaReact } from "react-icons/fa6";
import { FaPencilAlt, FaEnvelope } from "react-icons/fa";
import { SiBootstrap, SiDocker, SiGithub, SiHtml5, SiJavascript, SiMongodb, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export const sidebarLinks = [
    {
        title: 'Home',
        path: '/',
        icon: <IoHome size={24} />,
        isHovered: false
    },
    {
        title: 'About',
        path: '/about',
        icon: <FaUserLarge size={24} />,
        isHovered: false
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <FaBriefcase size={24} />,
        isHovered: false
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <FaEnvelope size={24} />,
        isHovered: false
    },
]

export const skillsTag = [
    {
        title: 'HTML',
        percentage: 60
    },
    {
        title: 'Javascript',
        percentage: 70
    },
    {
        title: 'CSS',
        percentage: 70
    },
    {
        title: 'React',
        percentage: 60
    },
    {
        title: 'Next',
        percentage: 51
    },
    {
        title: 'Node',
        percentage: 50
    },
]

export const technologies = [
    {
        title: 'Next',
        icon: <SiNextdotjs size={60} />
    },
    {
        title: "Tailwind",
        icon: <SiTailwindcss size={60} />
    },
    {
        title: "React",
        icon: <FaReact size={60} />
    },
    {
        title: "HTML",
        icon: <SiHtml5 size={60} />
    },
    {
        title: "Javascript",
        icon: <SiJavascript size={60} />
    },
    {
        title: "Typescript",
        icon: <SiTypescript size={60} />
    },
    {
        title: "MongoDB",
        icon: <SiMongodb size={60} />

    },
    {
        title: "Bootstrap",
        icon: <SiBootstrap size={60} />
    },
    {
        title: "Github",
        icon: <SiGithub size={60} />
    },
    {
        title: "Docker",
        icon: <SiDocker size={60} />
    }

]

export const experience = [
    {
        title: 'Full Stack Intern -',
        company: 'Scarpbag pvt. ltd.',
        description: "Spearheaded the development of the company's website using React js, ensuring high performance and user-friendly interfaces.",
        date: '09/2023 - 12/2023'
    },
    {
        title: 'React Developer -',
        company: 'Netparam Technologies Pvt. ltd.',
        description: "Developed and maintained the company's website, ensuring seamless user experiences and responsiveness across various devices.",
        date: '07/2023 - 09/2023'
    },
    {
        title: 'Machine Learning Traniee -',
        company: 'Celebal Technologies',
        description: 'Completed a comprehensive training program focused on machine learning fundamentals and Python programming language',
        date: '2022'
    },
]


export const education = [
    {
        title: 'Bachelor of Technology',
        description: "Poornima College Of Engineering, Jaipur",
        date: '2021 - Present'
    },
    {
        title: 'High School',
        description: "Emmanuel Mission School, Pali, Rajasthan",
        date: '2020 - 2021'
    },
    {
        title: 'Secondary School',
        description: "Emmanuel Mission School, Pali, Rajasthan",
        date: '2019 - 2020'
    },
]