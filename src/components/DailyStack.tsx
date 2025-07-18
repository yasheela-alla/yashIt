'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Dock from './Dock'
import { FaPlay } from 'react-icons/fa6'
import axios from 'axios'
import { useWindowWidth } from '@react-hook/window-size'

interface nasa {
    url: string
    date: string
}

interface SpotifyTrack {
    name: string
    artists: { name: string }[]
    external_urls: { spotify: string }
    album: {
        images: { url: string }[]
    }
}
const DailyStack = () => {
    const [data, SetData] = useState<nasa>({ url: '', date: '' })
    const [spotifyTrack, setSpotifyTrack] = useState<SpotifyTrack | null>(null)
    const [loading, setLoading] = useState(true)
    const {theme} = useTheme()
    const onlyWidth = useWindowWidth()

    useEffect(() => {
        const getRandomSpotifyTrack = async () => {
            try {
                // Using a public API that provides random songs (alternative to Spotify API)
                // This is a mock implementation - you'll need to set up Spotify API credentials
                const randomGenres = ['pop', 'rock', 'jazz', 'electronic', 'indie', 'hip-hop', 'classical']
                const randomGenre = randomGenres[Math.floor(Math.random() * randomGenres.length)]
                
                // For now, using a fallback with predefined tracks
                const fallbackTracks = [
                    {
                        name: "Sparkle",
                        artists: [{ name: "RADWIMPS" }],
                        external_urls: { spotify: "https://open.spotify.com/track/3A4FRzgve9BjfKbvVXRIFO" },
                        album: {
                            images: [{ url: "https://i.pinimg.com/736x/a2/5b/92/a25b92d843a51f9cb61ae6987f6ff011.jpg" }]
                        }
                    },
                    {
                        name: "Bohemian Rhapsody",
                        artists: [{ name: "Queen" }],
                        external_urls: { spotify: "https://open.spotify.com/track/4u7EnebtmKWzUH433cf5Qv" },
                        album: {
                            images: [{ url: "https://i.pinimg.com/736x/8c/92/3d/8c923d4f0b8b5c8e9f1a2b3c4d5e6f7g.jpg" }]
                        }
                    },
                    {
                        name: "Blinding Lights",
                        artists: [{ name: "The Weeknd" }],
                        external_urls: { spotify: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b" },
                        album: {
                            images: [{ url: "https://i.pinimg.com/736x/9d/83/2e/9d832e5f1c2b3a4e5f6g7h8i9j0k1l2m.jpg" }]
                        }
                    },
                    {
                        name: "Shape of You",
                        artists: [{ name: "Ed Sheeran" }],
                        external_urls: { spotify: "https://open.spotify.com/track/7qiZfU4dY1lWllzX7mkmht" },
                        album: {
                            images: [{ url: "https://i.pinimg.com/736x/2a/3b/4c/2a3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p.jpg" }]
                        }
                    },
                    {
                        name: "Levitating",
                        artists: [{ name: "Dua Lipa" }],
                        external_urls: { spotify: "https://open.spotify.com/track/463CkQjx2Zk1yXoBuierM9" },
                        album: {
                            images: [{ url: "https://i.pinimg.com/736x/5e/6f/7g/5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t.jpg" }]
                        }
                    }
                ]
                
                const randomTrack = fallbackTracks[Math.floor(Math.random() * fallbackTracks.length)]
                setSpotifyTrack(randomTrack)
                setLoading(false)
            } catch (error) {
                console.log('Error fetching Spotify track:', error)
                setLoading(false)
            }
        }

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
        
        getRandomSpotifyTrack()
        nasaAPI()
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
                                    className={`${imageSize} relative rounded-2xl overflow-hidden music group`}
                                >
                                    {spotifyTrack && (
                                        <>
                                            <img
                                                src={spotifyTrack.album.images[0]?.url || "https://i.pinimg.com/736x/a2/5b/92/a25b92d843a51f9cb61ae6987f6ff011.jpg"}
                                                alt={spotifyTrack.name}
                                                className="w-full h-full object-cover"
                                            />
                                            <a href={spotifyTrack.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                                                <div className="p-3 play border bg-white border-zinc-700/40 absolute bottom-2 right-2 inline-block rounded-full">
                                                    <FaPlay size={20} color="black" />
                                                </div>
                                            </a>
                                        </>
                                    )}
                                    {loading && (
                                        <div className="p-3 play border bg-white border-zinc-700/40 absolute bottom-2 right-2 inline-block rounded-full">
                                            <FaPlay size={20} color="black" />
                                        </div>
                                    )}
                                </div>
                                {spotifyTrack && (
                                    <>
                                        <h1 className="font-semibold text-lg mt-0 text-white">
                                            {spotifyTrack.name}
                                        </h1>
                                        <p className="text-xs text-zinc-400">
                                            By: {spotifyTrack.artists.map(artist => artist.name).join(', ')}
                                        </p>
                                    </>
                                )}
                                {loading && (
                                    <>
                                        <h1 className="font-semibold text-lg mt-0 text-white">
                                            Loading...
                                        </h1>
                                        <p className="text-xs text-zinc-400">
                                            Fetching random song
                                        </p>
                                    </>
                                )}
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
