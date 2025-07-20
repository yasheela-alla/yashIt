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
                <a href="https://leetcode.com/u/yasheela-04/" target="_blank" rel="noopener noreferrer">
                    <div className={`border inline-block rounded-lg p-3 ${
                        theme === 'dark' ? 'border-zinc-700/50' : 'border-zinc-300/50'
                    }`}>
                        <svg width="35" height="35" viewBox="0 0 24 24" fill={theme === 'dark' ? 'white' : 'black'}>
                            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                        </svg>
                    </div>
                </a>
            </div>
        </motion.div>
    )
}

export default Links
