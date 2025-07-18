'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
import { FaXTwitter } from "react-icons/fa6"
import { useWindowWidth } from '@react-hook/window-size'

const Links = () => {
    const onlyWidth = useWindowWidth()

    return (
        <motion.div
            className="relative md:w-[15rem] md:h-[10rem] rounded-xl md:pt-4 overflow-hidden"
        >
            <h1 className="text-4xl px-2 tracking-wide font-bold inline-block leading-none text-white hidden lg:block">
                LIN
                <br />
                KS.
            </h1>
            <div className="px-2 space-x-2 md:space-x-1">
                <a href="https://github.com/yasheela-alla" target="_blank" rel="noopener noreferrer">
                    <div className="border inline-block rounded-lg border-zinc-700/50 p-3">
                        <FaGithub size={35} color="white" />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/alla-yasheela/" target="_blank" rel="noopener noreferrer">
                    <div className="border inline-block rounded-lg border-zinc-700/50 p-3">
                        <FaLinkedin size={35} color="white" />
                    </div>
                </a>
                <a href="https://x.com/Ay4sh" target="_blank" rel="noopener noreferrer">
                    <div className="border inline-block rounded-lg border-zinc-700/50 p-3">
                        <FaXTwitter size={35} color="white" />
                    </div>
                </a>
            </div>
        </motion.div>
    )
}

export default Links
