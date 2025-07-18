'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { techStacks } from '@/constant/stack'
import {
    useWindowWidth
  } from '@react-hook/window-size'


const Stack = () => {
    const onlyWidth = useWindowWidth()


    const dragProps = {
        drag: onlyWidth > 800 ? true : false,
        dragElastic:0.7,
        dragConstraints:{ left: 0, right: 0, top: 0, bottom: 0 },
        whileDrag:{
            scale: 1.02,
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        }
    }
    return (
        <motion.div
            className="relative md:w-[15rem] h-[35rem] select-none cursor-grab active:cursor-grabbing rounded-xl border bg-[#111010] border-zinc-800 translate-y-[-0.4rem]"
            {...dragProps}
            transition={{
                type: 'spring',
                damping: 20,
                stiffness: 300, 
            }}
            style={{ touchAction: 'none' }}
        >
            <div className="absolute inset-0 rounded-xl shadow-[inset_0_2px_20px_rgba(255,255,255,0.08)]" />

            <div className="text-5xl font-bold border-b-4 pb-2 p-4 relative text-white border-zinc-300">
                <h1 className="text-4xl pb-2">{'{ }'}</h1>
                <h1>TECH</h1>
                <h1>STACK</h1>
            </div>

            <div className="overflow-y-auto h-[calc(100%-180px)] custom-scrollbar relative" data-lenis-prevent>
                <div className="p-4 space-y-8">
                    {Object.entries(techStacks).map(
                        ([category, technologies], idx) => (
                            <div key={idx} className="space-y-2">
                                <h1 className="text-white text-sm">
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
                                            className="relative border border-zinc-800 rounded-sm bg-[#181616] px-2 text-xs text-zinc-300"
                                            whileHover={{
                                                scale: 1.05,
                                                backgroundColor: '#222020',
                                                borderColor: '#71717a',
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
