import React from 'react'
import { LuShipWheel } from 'react-icons/lu'
import { Link } from 'react-router-dom'

const ProjectCard: React.FC = () => {
    return (
        <>
            <div className="flex relative">
                <Link to="/projects" className="block">
                    <div 
                        className="w-[15rem] border border-zinc-700/45 h-[18rem] rounded-xl project cursor-pointer p-3"
                    >
                        <div className="animate-spin-slow inline-block">
                            <LuShipWheel size={65} color="white" />
                        </div>
                        <h1 className="text font-bold text-4xl tracking-tighter italic pt-2">
                            PROJECTssss
                        </h1>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProjectCard
