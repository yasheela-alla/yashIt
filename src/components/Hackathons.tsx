import React from 'react'
import { useTheme } from '@/context/ThemeContext'
import { motion } from 'framer-motion'

interface HackathonsProps {
    setDialog: (value: boolean) => void
    dialog: boolean
}

const Hackathons: React.FC<HackathonsProps> = ({ setDialog }) => {
    const { theme } = useTheme()
    
    return (
        <div className="flex relative mt-5">
            <motion.div
                onClick={() => setDialog(true)}
                className={`w-[12rem] border ${
                    theme === 'dark' ? 'border-zinc-700/45' : 'border-zinc-400'
                } h-[10rem] rounded-xl cursor-pointer p-3 overflow-hidden relative`} 
                whileHover={{ scale: 1.02 }}
            >
  
                <img
                    src="https://i.pinimg.com/736x/7c/2b/33/7c2b33034ed555b8be4e59af221b1249.jpg"
                    alt="Hackathon"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-60" 
                />

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">
                    <h1 className={`font-bold text-[1.5rem] leading-[2.3rem] uppercase tracking-tight ${
                        theme === 'dark' ? 'text-white' : 'text-zinc-900'
                    }`}>
                        HACKATHON
                    </h1>
                    <p className={`text-xs mt-1 ${
                        theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
                    }`}>
                        & OpenSource.
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

export default Hackathons
