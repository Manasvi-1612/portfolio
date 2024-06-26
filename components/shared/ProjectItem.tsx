"use client"

import { Suspense, useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import ImageGallery from "react-image-gallery";
import Loader from "./Loader";
import { VscSourceControl } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";

import "react-image-gallery/styles/css/image-gallery.css";

export default function ProjectItem({ project, index }: { project: any; index: number }) {
    const { description, images, liveUrl, repoUrl, tag, title } = project;

    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true });

    const galleryImages = images.map((img: string) => ({
        original: img,
        loading: "lazy"
    }));

    return (
        <section
            ref={cardRef}
            className="flex flex-col rounded-lg bg-secondary-light dark:bg-secondary-dark"
            style={{
                transform: isInView
                    ? "none"
                    : `${index === 0 ? "translateY(250px)" : `translateY(${200 / index}px)`}`,
                opacity: isInView ? 1 : 0,
                transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${index === 0 ? 0 : 25 * index}ms`
            }}
        >
            <section>
                <div className="w-full h-full">
                    <ImageGallery
                        items={galleryImages}
                        showPlayButton={false}
                        showThumbnails={false}
                        showIndex
                        lazyLoad
                        additionalClass="gallery-item"
                    />
                </div>
            </section>

            <div className="flex-[2] px-5 py-6 text-center flex flex-col gap-10">
                <header className="flex-1 flex items-center justify-start flex-col gap-3">
                    <h3 className="text-2xl font-bold">
                        {title}
                    </h3>
                    <p className="leading-7 font-light">
                        {description}
                    </p>
                </header>

                <footer className="flex flex-col gap-10">
                    {!!tag.length && (
                        <div className="flex items-center justify-center flex-wrap gap-3">
                            {tag.map((t: string) => (
                                <span
                                    key={t}
                                    className="px-2 text-sm leading-normal rounded bg-secondary-light dark:bg-badge-dark"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="flex items-center justify-center gap-10">
                        {repoUrl && (
                            <Link
                                href={repoUrl}
                                target="_blank"
                                className="icon-link-btn"
                                title="Go to Github repository"
                            >
                                <VscSourceControl />
                                <span>Source</span>
                            </Link>
                        )}
                        {liveUrl && (
                            <Link
                                href={liveUrl}
                                target="_blank"
                                className="icon-link-btn"
                                title="Go to live address"
                            >
                                <FiExternalLink />
                                <span>Demo</span>
                            </Link>
                        )}
                    </div>
                </footer>
            </div>
        </section>
    );
}