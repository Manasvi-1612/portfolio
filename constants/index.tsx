import { IoHome } from "react-icons/io5"
import { FaUserLarge, FaBriefcase } from "react-icons/fa6";
import { FaPencilAlt, FaEnvelope } from "react-icons/fa";

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
