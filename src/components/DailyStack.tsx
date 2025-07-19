'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Dock from './Dock'
import { FaPlay } from 'react-icons/fa6'
import axios from 'axios'
import { useTheme } from '@/context/ThemeContext'
import { useWindowWidth } from '@react-hook/window-size'
import { spotifySongs } from '@/constant/songs'

interface nasa {
    url: string
    date: string
}

interface Song {
    name: string
    artist: string
    spotifyUrl: string
    image: string
    genre: string
}

const DailyStack = () => {
    const [data, SetData] = useState<nasa>({ url: '', date: '' })
    const [currentSong, setCurrentSong] = useState<Song>(spotifySongs[1]) // Start with Sparkle
    const {theme} = useTheme()
    const onlyWidth = useWindowWidth()

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

    useEffect(() => {
        // Function to get a random song
        const getRandomSong = () => {
            const randomIndex = Math.floor(Math.random() * spotifySongs.length)
            return spotifySongs[randomIndex]
        }

        // Set initial random song after component mounts
        const initialTimeout = setTimeout(() => {
            setCurrentSong(getRandomSong())
        }, 2000) // 2 seconds after mount

        // Change song every 30 seconds (similar to NASA API timing)
        const songInterval = setInterval(() => {
            setCurrentSong(getRandomSong())
        }, 30000) // 30 seconds

        return () => {
            clearTimeout(initialTimeout)
            clearInterval(songInterval)
        }
    }, [])

    const imageSize = onlyWidth > 800 ? 'w-40 h-40' : 'w-[18rem] h-[18rem]'

    return (
        <>
        <motion.div
            className="relative w-full md:w-[30rem] h-auto p-2 overflow-hidden select-none border-t border-b py-5 md:py-0 md:border-none mt-10 md:mt-0"
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
                                    className={`${imageSize} relative rounded-2xl overflow-hidden group`}
                                    style={{
                                        backgroundImage: `url(${currentSong.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        transition: 'all 0.3s ease-in-out'
                                    }}
                                >
                                    <a href={currentSong.spotifyUrl} target="_blank" rel="noopener noreferrer">
                                        <div className="p-3 border bg-white border-zinc-700/40 absolute bottom-2 right-2 inline-block rounded-full transform scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out">
                                            <FaPlay size={20} color="black" />
                                        </div>
                                    </a>
                                </div>
                                <h1 className="font-semibold text-lg mt-0 text-white">
                                    {currentSong.name}
                                </h1>
                                <p className="text-xs text-zinc-400">
                                    By: {currentSong.artist}
                                </p>
                                <p className="text-xs text-zinc-500">
                                    {currentSong.genre}
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
        </>
    )
}

export default DailyStack
