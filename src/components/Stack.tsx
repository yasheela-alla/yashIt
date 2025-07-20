'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { techStacks } from '@/constant/stack'
import {
    useWindowWidth
  } from '@react-hook/window-size'
import { useTheme } from '@/context/ThemeContext'


const Stack = () => {
    const onlyWidth = useWindowWidth()
    const { theme } = useTheme()
    
    return (
        <motion.div
            className={`relative md:w-[15rem] h-[35rem] select-none rounded-xl border translate-y-[-0.4rem] ${
                theme === 'dark' 
                    ? 'bg-[#111010] border-zinc-800' 
                    : 'bg-white border-zinc-300'
            }`}
            style={{ touchAction: 'none' }}
        >
            <div className={`absolute inset-0 rounded-xl ${
                theme === 'dark' 
                    ? 'shadow-[inset_0_2px_20px_rgba(255,255,255,0.08)]' 
                    : 'shadow-[inset_0_2px_20px_rgba(0,0,0,0.05)]'
            }`} />

            <div className={`text-5xl font-bold border-b-4 pb-2 p-4 relative ${
                theme === 'dark' ? 'text-white border-zinc-300' : 'text-black border-zinc-700'
            }`}>
                <h1 className="text-4xl pb-2">{'{ }'}</h1>
                <h1>TECH</h1>
                <h1>STACK</h1>
            </div>

            <div className="overflow-y-auto h-[calc(100%-180px)] custom-scrollbar relative" data-lenis-prevent>
                <div className="p-4 space-y-8">
                    {Object.entries(techStacks).map(
                        ([category, technologies], idx) => (
                            <div key={idx} className="space-y-2">
                                <h1 className={`text-sm ${
                                    theme === 'dark' ? 'text-white' : 'text-black'
                                }`}>
                                    {category.charAt(0).toUpperCase() +
                                        category
                                            .slice(1)
                                            .replace(/([A-Z])/g, ' $1')}{' '}
                                    :
                                </h1>
                                <div className="flex flex-wrap gap-2">
                                    {technologies.map((tech, index) => (
                                        <motion.span
                                            key={index}
                                            className={`relative border rounded-sm px-2 text-xs ${
                                                theme === 'dark' 
                                                    ? 'border-zinc-800 bg-[#181616] text-zinc-300' 
                                                    : 'border-zinc-300 bg-zinc-100 text-zinc-700'
                                            }`}
                                            whileHover={{
                                                scale: 1.05,
                                                backgroundColor: theme === 'dark' ? '#222020' : '#e4e4e7',
                                                borderColor: theme === 'dark' ? '#71717a' : '#a1a1aa',
                                            }}
                                            transition={{ duration: 0.2 }}
                                            style={{ touchAction: 'none' }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default Stack
