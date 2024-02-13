
import { FaArrowRight } from "react-icons/fa";
import { Button } from "../ui/button";
import { FaDownload } from "react-icons/fa";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ButtonComponent = ({ title, name }: { title: string, name: string }) => {

  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const icon = [
    {
      name: "Button",
      icon: <FaArrowRight size={19} />,
    },
    {
      name: "Download",
      icon: <FaDownload size={19} />,
    }
  ]

  return (
    <>
      <Button className="btn gap-3 rounded-full py-7 relative decoration-transparent text-title-light dark:text-white" variant={'link'} ref={ref}>
        <p className="p-bold-16 uppercase z-10 px-4" style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>{title}</p>
        <div className="rounded-full bg-primary-light dark:bg-primary-dark p-[18px] z-10 -mr-[16.5px]">
          {icon.filter((item) => item.name === name)[0].icon}
        </div>
      </Button>
    </>
  )
}

export default ButtonComponent
