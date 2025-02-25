    import { useTheme } from '@/context/ThemeContext'
    import React from 'react'
    import { FaTrophy } from 'react-icons/fa'
    import {
        useWindowWidth
      } from '@react-hook/window-size'
    
    interface HackathonsProps {
        setDialog: (value: boolean) => void;
        dialog : boolean;
    }

    const Hackathons: React.FC<HackathonsProps> = ({setDialog,dialog}) => {
        const onlyWidth = useWindowWidth();
        const {theme} = useTheme()
        return (
            <div className="mt-3 ml-2">
                <div className={`flex items-center gap-1 ${theme=='dark'?"text-white":"text-zinc-800"}`}>
                    {onlyWidth > 800 ? (<div>
                        <h1 className="text-3xl font-bold htext">HAC</h1>
                        <h1 className="text-3xl font-bold htext">KAT</h1>
                        <h1 className="text-3xl font-bold htext">HON</h1>
                    </div>) : (<div className='flex items-center gap-2'>
                        <div>
                        <h1 className="text-3xl font-bold htext mt-1">HACKATHON</h1>
                        <p className={` text-[1.1rem] ${theme=='dark'?"text-white":"text-zinc-800"}`}>& Competitions .</p>
                        </div>
                        <div className={`border ${theme=='dark'?"border-zinc-700/50":"border-zinc-400"} p-2 cursor-pointer`} onClick={()=>setDialog(!dialog)}>
                            <FaTrophy size={38} color={theme=='dark'?'white':'#27272A'}/>
                        </div>
                    </div>)}
                        <div className={`border ${theme=='dark'?"border-zinc-700/50":"border-zinc-400"} p-2 cursor-pointer hidden md:block`} onClick={()=>setDialog(!dialog)}>
                            <FaTrophy size={50} color={theme=='dark'?'white':'#27272A'}/>
                        </div>
                        
                </div>
                <p className={` text-[1.1rem] ${theme=='dark'?"text-white":"text-zinc-800"} hidden lg:block`}>& Competitions .</p>
            </div>
        )
    }

    export default Hackathons
