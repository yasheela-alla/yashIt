import React from 'react'
import { LuShipWheel } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { useTheme } from '@/context/ThemeContext'

const ProjectCard: React.FC = () => {
    const { theme } = useTheme()
    
    return (
        <>
            <div className="flex relative">
                <Link to="/projects" className="block">
                    <div 
                        className={`w-[15rem] border h-[18rem] rounded-xl project cursor-pointer p-3 ${
                            theme === 'dark' ? 'border-zinc-700/45' : 'border-zinc-300/45'
                        }`}
                    >
                        <div className="animate-spin-slow inline-block">
                            <LuShipWheel size={65} color={theme === 'dark' ? 'white' : 'black'} />
                        </div>
                        <h1 className={`font-bold text-4xl tracking-tighter italic pt-2 ${
                            theme === 'dark' ? 'text' : 'text-black'
                        }`}>
                            PROJECTssss
                        </h1>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProjectCard
