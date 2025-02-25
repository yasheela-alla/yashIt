import { useTheme } from '@/context/ThemeContext'
import Link from 'next/link'
import React from 'react'
import { LuShipWheel } from 'react-icons/lu'

const ProjectCard: React.FC = () => {
    const {theme} = useTheme()
    return (
        <>
            <div className="flex relative">
                <Link href="/projects">
                    <div className="w-[15rem] border border-zinc-700/45 h-[18rem] rounded-xl project cursor-pointer p-3">
                        <div className="animate-spin-slow inline-block">
                            <LuShipWheel size={65} color="white" />
                        </div>
                        <h1 className="text font-bold text-5xl tracking-tighter italic pt-2">
                            PROJECT
                            <br />
                            SSS
                        </h1>
                    </div>
                </Link>
                <p className={`absolute rtext rotate-[-270deg] bottom-[6.5rem] right-[-4.5rem] lg:right-[-9rem] text-right secf text-md select-none ${theme=='dark'?"text-white":"text-zinc-800"}`}>
                    {' '}
                    &quot; the faceless <br />
                    girl haunting my dreams &quot;{' '}
                </p>
            </div>
        </>
    )
}

export default ProjectCard
