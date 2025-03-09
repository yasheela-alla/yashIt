import { useTheme } from '@/context/ThemeContext'
import React from 'react'
import { LuShipWheel } from 'react-icons/lu'

const ProjectCard: React.FC = () => {
    const {theme} = useTheme()
    return (
        <>
            <div className="flex relative">
                <a href="/projects" onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/projects';
                }}>
                    <div className="w-[15rem] border border-zinc-700/45 h-[18rem] rounded-xl project cursor-pointer p-3">
                        <div className="animate-spin-slow inline-block">
                            <LuShipWheel size={65} color="white" />
                        </div>
                        <h1 className="text font-bold text-4xl tracking-tighter italic pt-2">
                            PROJECTssss
                        </h1>
                    </div>
                </a>
            </div>
        </>
    )
}

export default ProjectCard
