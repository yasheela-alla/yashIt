'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { MorphingText } from './ui/morphing-text'
import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { useWindowWidth } from '@react-hook/window-size'

const texts = [
    'CODE .',
    'SECURE .',
    'DEPLOY .',
]

const ProfileCard = () => {
    const [dateTime, setDateTime] = useState('')
    const { theme, toggleTheme } = useTheme()
    const onlyWidth = useWindowWidth()

    const dragProps = {
        drag: onlyWidth > 800 ? true : false,
        dragElastic: 0.7,
        dragConstraints: { left: 0, right: 0, top: 0, bottom: 0 },
        whileDrag: {
            scale: 1.02,
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        }
    }

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
            className={`relative py-8 px-5 max-w-[30rem] cursor-grab active:cursor-grabbing rounded-xl 
            ${theme === 'dark' ? 'bg-[#111010] border-zinc-800' : 'bg-zinc-200 border-zinc-400'} 
            border overflow-hidden z-[10] select-none`}
            {...dragProps}
            transition={{
                type: 'spring',
                damping: 20,
                stiffness: 300,
            }}
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
                            <p className={`secf font-light text-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>@Ay4sh</p>
                        </div>
                    </div>
                    <div>
                        <button 
                            onClick={toggleTheme} 
                            className={`p-2 -translate-y-4 rounded-full ${theme === 'dark' ? 'bg-[#18181A]' : 'bg-zinc-100'}`}
                        >
                            {theme === 'dark' ? (
                                <Sun className="text-zinc-400" size={20} />
                            ) : (
                                <Moon className="text-zinc-600" size={20} />
                            )}
                        </button>
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
                        Hello, I'm yasheela a 20 year old web3 enthusiast based in india.
                    </p>
                </div>

                <div className={`secf flex items-end justify-end ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-600'}`}>
                    <div className="flex flex-col text-[0.65rem] md:text-[0.8rem] items-end">
                        <div className={`flex items-center gap-1 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
                            <div className={`h-[7px] w-[7px] rounded ${theme === 'dark' ? 'bg-[#56FF02]' : 'bg-[#00FF00]'}`} />{' '}
                            Looking for internships
                        </div>
                        {dateTime}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProfileCard
