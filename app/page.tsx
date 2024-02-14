"use client"

import Image from 'next/image'
import { LazyMotion, domAnimation, m, useInView } from 'framer-motion'
import { Suspense, useEffect, useRef, useState } from 'react'
import { animate, exit, initial, transition } from "@/utils/motions";
import ButtonComponent from '@/components/shared/ButtonComponent'
import Link from 'next/link'


function TextElement({ element }: { element: string }) {
  const firstWord = <b>{element.split(" ").at(0)}</b>;
  const restWords = element.split(" ").slice(1).join(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span
      tabIndex={0}
      ref={ref}
      className="text-[17px] md:text-2xl"
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
    >
      {firstWord} {restWords}
    </span>
  );
}


export default function Page() {


  const ref = useRef(null);
  const introRef = useRef(null);
  const isInView = useInView(ref, { once: true });


  let [count, setCount] = useState(0);
  const text = [
    "build Full Stack Web Applications",
    "convert design into modern UI",
    "build interactive websites using React",
    "develop websites using Next.js"
  ]


  useEffect(() => {
    let interval = setInterval(() => {
      setCount(count + 1);

      if (count === 3) {
        setCount(0);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [count]);



  const stylDiv = {
    position: 'relative',
    backgroundImage: 'url(/assets/wallpaper.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    width: "30%",
    height: '85%',
    // zIndex: '111',
    borderRadius: '30px',
    left: '40px',
    top: '40px',
    boxShadow: '0 0 7px rgba(0,0,0,.9)',
    WebkitFilter: 'blur(0.5px) contrast(1.15)',
    filter: 'blur(0.5px) contrast(1.15)',

  }

  return (
    <LazyMotion features={domAnimation}>
    <m.div
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
    >
      <section className='grid grid-cols-1 lg:grid-cols-2 place-items-center text-title-light dark:text-white' ref={introRef}>
        <div className="bgBlock hidden lg:flex"></div>
        <div className="z-10 py-10 pl-10 ">
          <Image src='/assets/wallpaper.jpg' alt='profile' width={1000} height={1000} className="object-cover w-[250px] h-[250px] rounded-full border-4 border-secondary-dark lg:border-0 lg:w-[75%] lg:h-[600px] lg:rounded-3xl" />
        </div>

        <div className="lg:text-start mx-[10%] lg:mx-0">
          <h1
            tabIndex={0}
            ref={ref}
            className="text-3xl md:text-5xl xl:text-6xl font-bold"
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
          >
            <p>
              Hi, I&apos;m <mark>Manasvi</mark> a <mark>passionate</mark> software developer.
            </p>
          </h1>

          <div className="my-8 relative flex flex-col overflow-hidden">
            <p
              ref={ref}
              className="text-[17px] md:text-2xl transform-none opacity-100"
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }}
            >
              I
              <span
                className="absolute flex flex-col transition-all duration-500 ease-in-expo"
                style={{
                  top:
                    count === 0
                      ? "0"
                      : count === 1
                        ? "-100%"
                        : count === 2
                          ? "-200%"
                          : count === 3
                            ? "-300%"
                            : "0",
                  left: "13px"
                }}
              >
                {text.map((element) => (
                  <TextElement key={element} element={element} />
                ))}
              </span>
            </p>
          </div>
          <Link href="/about">
            <ButtonComponent title="More About me" name="Button" />
          </Link>
        </div>
      </section>

    </m.div>
    </LazyMotion >
  )
}
