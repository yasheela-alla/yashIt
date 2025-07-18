"use client"
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '@/constant/project'
import { ExternalLink, Github } from 'lucide-react'
import { FaArrowLeft } from "react-icons/fa"

gsap.registerPlugin(ScrollTrigger)

const Page = () => {
    const mainRef = useRef(null)
    const projectRefs = useRef<(HTMLDivElement | null)[]>([])
    const titleRef = useRef(null)
    const backButtonRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(backButtonRef.current,
                { x: -100, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
            )

            gsap.fromTo(titleRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
            )

            projectRefs.current.forEach((project) => {
                gsap.fromTo(project,
                    { y: 100, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: project,
                            start: "top bottom-=100",
                            end: "top center",
                            toggleActions: "play none none reverse"
                        }
                    }
                )
            })
        }, mainRef)

        return () => ctx.revert()
    }, [])

    const projectImageHoverEffect = {
        scale: 1.02,
        transition: {
            duration: 0.5,
            ease: [0.33, 1, 0.68, 1]
        }
    }

    return (
        <div ref={mainRef} className="relative min-h-screen text-zinc-200">
            <div ref={backButtonRef} className="fixed top-4 md:top-8 left-4 md:left-8 z-50">
                <Link to="/">
                    <motion.div 
                        className="backdrop-blur-sm px-3 md:px-5 py-1 rounded-sm border bg-white border-white/20 hover:bg-zinc-200"
                        whileHover={{ scale: 1.05}}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaArrowLeft size={20} className="text-zinc-800 cursor-pointer" />
                    </motion.div>
                </Link>
            </div>

            <div className="flex flex-col lg:flex-row p-4 mt-12 md:mt-0 md:p-8 lg:p-16">
                <div className="w-full lg:w-1/2 lg:sticky lg:top-0 h-auto lg:h-screen flex flex-col justify-center mb-8 lg:mb-0">
                    <div ref={titleRef} className="space-y-2">
                        <h1 className="text-5xl md:text-6xl lg:text-8xl text-white font-bold tracking-wide">
                            PROJECTS
                        </h1>
                        <p className="text-xl md:text-2xl lg:text-3xl italic text-zinc-500">
                            which matters .
                        </p>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-20 md:space-y-32 lg:space-y-40 py-8 md:py-16 lg:py-32">
                    {projects.map((project, idx) => (
                        <div 
                            key={idx}
                            ref={el => {
                                projectRefs.current[idx] = el;
                            }}
                            className="space-y-4 md:space-y-6"
                        >
                            <motion.div
                                className="group relative w-full h-[15rem] md:h-[18rem] lg:h-[22rem] overflow-hidden rounded-xl border border-zinc-800 bg-[#111010]"
                                whileHover={projectImageHoverEffect}
                            >
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 shadow-[inset_0_2px_20px_rgba(255,255,255,0.08)]" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </motion.div>

                            <div className="space-y-3 md:space-y-4">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-zinc-400 text-transparent bg-clip-text">
                                    {project.title}
                                </h2>
                                <p className="text-base md:text-lg leading-relaxed max-w-2xl text-zinc-400">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.technologies.map((tech, index) => (
                                        <motion.span
                                            key={index}
                                            className="relative border rounded-sm backdrop-blur-sm px-2 md:px-3 py-1 md:py-1.5 text-xs bg-[#181616]/80 border-zinc-800 text-zinc-300"
                                            whileHover={{
                                                scale: 1.05,
                                                backgroundColor: '#222020',
                                                borderColor: '#71717a',
                                            }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4 md:gap-6 pt-2 md:pt-4">
                                {project.links.map((link, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-xs md:text-sm transition-colors text-zinc-400 hover:text-zinc-200"
                                        >
                                            {link.type === 'GitHub' ? (
                                                <Github size={16} className="md:size-18" />
                                            ) : (
                                                <ExternalLink size={16} className="md:size-18" />
                                            )}
                                            {link.type}
                                        </a>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Page
