'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { MorphingText } from './ui/morphing-text'
import { useState, useEffect } from 'react'
import { useTheme } from '@/context/ThemeContext'
import { useWindowWidth } from '@react-hook/window-size'

const texts = [
    'BUILD .',
    'SECURE .',
    'DEPLOY .',
]

const texts = [
    'CODE .',
    'SECURE .',
    'DEPLOY .',
]

const ProfileCard = () => {
    const [dateTime, setDateTime] = useState('')
    const { theme } = useTheme()

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date()
            const formattedDate = now.toLocaleDateString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            })
            const formattedTime = now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
            })
            setDateTime(`${formattedDate}, ${formattedTime}`)
        }
        updateDateTime()
        const interval = setInterval(updateDateTime, 60000)

        return () => clearInterval(interval)
    }, [])

    return (
        <motion.div
            className={`relative py-8 px-5 max-w-[30rem] rounded-xl 
            ${theme === 'dark' ? 'bg-[#111010] border-zinc-800' : 'bg-zinc-200 border-zinc-400'} 
            border overflow-hidden z-[10] select-none`}
        >
            <div className={`absolute inset-0 rounded-xl ${theme === 'dark' ? 'shadow-[inset_0_2px_20px_rgba(255,255,255,0.08)]' : 'shadow-[inset_0_2px_20px_rgba(0,0,0,0.05)]'}`} />

            <div className="flex flex-col flex-shrink gap-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img
                            src="https://i.pinimg.com/736x/4c/f7/42/4cf74229862193b16c9870b08ea749c0.jpg"
                            alt=""
                            className="w-16 h-16 rounded-full"
                        />
                        <div className={`font-semibold text-lg -translate-y-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                            <h1>Yasheela Alla</h1>
                            <p className="secf font-light text-sm text-zinc-400">yasheela435@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-[6px]">
                        <p className={`text-[1.2rem] md:text-[1.3rem] font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>I </p>
                        <div className="relative h-[1.70rem] md:h-[2.12rem]">
                            <MorphingText
                                texts={texts}
                                className="min-w-[200px]"
                            />
                        </div>
                    </div>
                    <p className={`text-[0.8rem] md:text-[0.9rem] ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}`}>
                        B.Tech in Electronics at Vignan's Institute of Information Technology. Full-stack developer with expertise in AI/ML, blockchain, and cybersecurity.
                    </p>
                </div>

                <div className={`secf flex items-end justify-end ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-600'}`}>
                    <div className="flex flex-col text-[0.65rem] md:text-[0.8rem] items-end">
                        <div className={`flex items-center gap-1 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
                            <div className={`h-[7px] w-[7px] rounded ${theme === 'dark' ? 'bg-[#56FF02]' : 'bg-[#00FF00]'}`} />{' '}
                            Available for opportunities
                        </div>
                        {dateTime}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProfileCard
