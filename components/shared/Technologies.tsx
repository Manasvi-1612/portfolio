import { technologies } from "@/constants";
import { SiNextdotjs } from "react-icons/si";


const Technologies = () => {
    return (
        <section className="py-14">
            <div className="container">
                <div className="text-center py-5">
                    <h1 className="uppercase h5-bold">My Skills</h1>
                    <p className="p-medium-20 py-5">I work with the following technologies and tools:</p>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5 lg:mx-10">

                    {technologies.map((tech, index) => (
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="group flex items-center justify-center rounded-[32px] bg-gray-600/10 py-[30px] px-[30px] xl:py-[50px] xl:px-[50px] transition duration-500 hover:scale-105 border-2 border-transparent hover:bg-primary-light/10 hover:border-primary-light dark:hover:bg-primary-dark/10 dark:hover:border-primary-dark hover:drop-shadow-[0_5px_13px_rgba(60,72,88,0.20)]">
                                {tech.icon}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Technologies
