'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
import { FaXTwitter } from "react-icons/fa6"
import { useTheme } from '@/context/ThemeContext'
import { useWindowWidth } from '@react-hook/window-size'

const Links = () => {
    const {theme} = useTheme()
    const onlyWidth = useWindowWidth()
    
    const dragProps = {
        drag: onlyWidth > 800 ? true : false,
        dragElastic: 0.7,
        dragConstraints: { left: 0, right: 0, top: 0, bottom: 0 },
        whileDrag: {
            scale: 1.02,
        }
    }

    return (
        <motion.div
            className="relative md:w-[15rem] md:h-[10rem] cursor-default lg:cursor-grab active:lg:cursor-grabbing rounded-xl md:pt-4 overflow-hidden"
            {...dragProps}
            transition={{
                type: 'spring',
                damping: 20,
                stiffness: 300,
            }}
        >
            <h1 className={`text-4xl px-2 tracking-wide font-bold inline-block leading-none ${theme=='dark'?"text-white":"text-zinc-800"} hidden lg:block`}>
                LIN
                <br />
                KS.
            </h1>
            <div className="px-2 space-x-2 md:space-x-1">
                <a href="https://github.com/yasheela-alla" target="_blank" rel="noopener noreferrer">
                    <div className={`border inline-block rounded-lg ${theme=='dark'?"border-zinc-700/50":"border-zinc-400"}  p-3`}>
                        <FaGithub size={35} color={theme=='dark'?'white':'#27272A'} />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/alla-yasheela/" target="_blank" rel="noopener noreferrer">
                    <div className={`border inline-block rounded-lg ${theme=='dark'?"border-zinc-700/50":"border-zinc-400"}  p-3`}>
                        <FaLinkedin size={35} color={theme=='dark'?'white':'#27272A'}/>
                    </div>
                </a>
                <a href="https://x.com/Ay4sh" target="_blank" rel="noopener noreferrer">
                    <div className={`border inline-block rounded-lg ${theme=='dark'?"border-zinc-700/50":"border-zinc-400"}  p-3`}>
                        <FaXTwitter size={35} color={theme=='dark'?'white':'#27272A'}/>
                    </div>
                </a>
            </div>
        </motion.div>
    )
}

export default Links
