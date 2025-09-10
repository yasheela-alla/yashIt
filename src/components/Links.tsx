'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
import { FaXTwitter } from "react-icons/fa6"
import { useWindowWidth } from '@react-hook/window-size'
import { useTheme } from '@/context/ThemeContext'

const Links = () => {
    const onlyWidth = useWindowWidth()
    const { theme } = useTheme()

    return (
        <motion.div
            className="relative md:w-[15rem] md:h-[10rem] rounded-xl md:pt-4 overflow-hidden"
        >
            <h1 className={`text-4xl px-2 tracking-wide font-bold inline-block leading-none hidden lg:block ${
                theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
                LIN
                <br />
                KS.
            </h1>
            <div className="px-2 space-x-2 md:space-x-1">
                <a href="https://github.com/yasheela-alla" target="_blank" rel="noopener noreferrer">
                    <div className={`border inline-block rounded-lg p-3 ${
                        theme === 'dark' ? 'border-zinc-700/50' : 'border-zinc-300/50'
                    }`}>
                        <FaGithub size={35} color={theme === 'dark' ? 'white' : 'black'} />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/alla-yasheela/" target="_blank" rel="noopener noreferrer">
                    <div className={`border inline-block rounded-lg p-3 ${
                        theme === 'dark' ? 'border-zinc-700/50' : 'border-zinc-300/50'
                    }`}>
                        <FaLinkedin size={35} color="white" />
                    </div>
                </a>
                <a href="https://yasheelaaa.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <div className={`border inline-block rounded-lg p-3 ${
                        theme === 'dark' ? 'border-zinc-700/50' : 'border-zinc-300/50'
                    }`}>
                        <svg width="35" height="35" viewBox="0 0 24 24" fill={theme === 'dark' ? 'white' : 'black'}>
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                    </div>
                </a>
            </div>
        </motion.div>
    )
}

export default Links
