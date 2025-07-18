'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Dock from './Dock'
import { FaPlay } from 'react-icons/fa6'
import axios from 'axios'
import { useTheme } from '@/context/ThemeContext'
import { useWindowWidth } from '@react-hook/window-size'

interface nasa {
    url: string
    date: string
}

const DailyStack = () => {
    const [data, SetData] = useState<nasa>({ url: '', date: '' })
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

    useEffect(() => {
        const nasaAPI = async () => {
            try {
                const response = await axios.get(
                    'https://api.nasa.gov/planetary/apod?api_key=x73dwnsoj2AAthCElj2KH5K0my1dQThOpQEF8fc0'
                )
                SetData(response.data)
            } catch (error) {
                console.log('Error fetching NASA API:', error)
            }
        }
        nasaAPI()
    }, [])

    const imageSize = onlyWidth > 800 ? 'w-40 h-40' : 'w-[18rem] h-[18rem]'

    return (
        <>
        <motion.div
            className="relative w-full md:w-[30rem] h-auto p-2 cursor-grab active:cursor-grabbing overflow-hidden select-none border-t border-b py-5 md:py-0 md:border-none mt-10 md:mt-0"
            {...dragProps}
            transition={{
                type: 'spring',
                damping: 20,
                stiffness: 300,
            }}
        >
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-3">
                {onlyWidth > 800 ? <Dock /> : null}

                <div className="space-y-3 w-full lg:w-auto">
                    <div>
                        <h1 className={`secf lg:text-left text-5xl md:text-4xl font-bold ${theme === 'dark' ? "text-white" : "text-zinc-800"}`}>
                            DAILY <br />
                            <span className="font-light mainf">Tool</span>
                            <br />
                            <span className="text-[4.1rem] md:text-5xl">STACK.</span>
                        </h1>

                        <div className='flex flex-col items-center md:block space-y-4 mt-1 md:mt-0'>
                            {onlyWidth > 800 ? (
                                <div className="w-40 h-14 overflow-hidden rounded-2xl pointer-events-none">
                                    <img
                                        src="https://i.pinimg.com/736x/a0/8d/97/a08d971b0f2f0599cfd5478947098846.jpg"
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ) : <Dock />}
                            
                            <div className="flex flex-col md:items-start">
                                <div 
                                    className={`${imageSize} relative rounded-2xl overflow-hidden music group`}
                                >
                                    <a href="https://open.spotify.com/track/3A4FRzgve9BjfKbvVXRIFO?si=3d1b8fb8f7294c8a" target="_blank" rel="noopener noreferrer">
                                        <div className="p-3 play border bg-white border-zinc-700/40 absolute bottom-2 right-2 inline-block rounded-full">
                                            <FaPlay size={20} color="black" />
                                        </div>
                                    </a>
                                </div>
                                <h1 className="font-semibold text-lg mt-0 text-white">
                                    Sparkle
                                </h1>
                                <p className="text-xs text-zinc-400">
                                    By: RADWIMPS 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center space-y-4">
                    <div className="w-full">
                        {data.url && (
                            <div className={`${imageSize} rounded-2xl overflow-hidden`}>
                                <img
                                    src={data.url}
                                    alt="NASA Astronomy Picture of the Day"
                                    className="w-full h-full object-cover pointer-events-none"
                                />
                            </div>
                        )}
                        <p className="text-xs text-end mt-1 text-zinc-400">
                            from NASA: <span className="text-white">{data.date}</span>
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <p className="text-center text-[1rem] md:text-[0.8rem] font-bold mb-2 text-white">
                            &quot; Give up on your dreams and Die. &quot;
                        </p>
                        <div className={`${imageSize} rounded-2xl overflow-hidden`}>
                            <img
                                src="https://i.pinimg.com/736x/ab/e1/de/abe1decd2e0169d6a6db12febfc82a77.jpg"
                                alt=""
                                className="w-full h-full object-cover pointer-events-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
        <p className='text-zinc-400 font-bold text-end p-2 md:hidden'>Sayonara.</p>
        </>
    )
}

export default DailyStack
