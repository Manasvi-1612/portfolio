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
        title: 'Experience',
        path: '/experience',
        icon: <FaPencilAlt size={24} />,
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
        title:"Bootstrap",
        icon: <SiBootstrap size={60} />
    },
    {
        title: "Github",
        icon: <SiGithub size={60} />
    },
    {
        title:"Docker",
        icon: <SiDocker size={60} />
    }

]
