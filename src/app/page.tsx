'use client'

import ProfileCard from '@/components/ProfileCard'
import React, { useState } from 'react'
import Stack from '@/components/Stack'
import DailyStack from '@/components/DailyStack'
import Links from '@/components/Links'
import ProjectCard from '@/components/ProjectCard'
import { motion } from 'framer-motion'
import Hackathons from '@/components/Hackathons'
import HackathonDialog from '@/components/HackathonDialog'
import {
    useWindowWidth
  } from '@react-hook/window-size'


const Page = () => {
    const [dialog,setDialog] = useState(false)
    const onlyWidth = useWindowWidth()
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.2,
                duration: 0.3,
                ease: 'easeOut',
            },
        },
    }

    const leftColumnVariants = {
        hidden: {
            x: -100,
            opacity: 0,
            filter: 'blur(10px)',
        },
        visible: {
            x: 0,
            opacity: 1,
            filter: 'blur(0px)',
            transition: {
                type: 'spring',
                stiffness: 50,
                damping: 20,
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    }

    const middleColumnVariants = {
        hidden: {
            y: -50,
            opacity: 0,
            filter: 'blur(10px)',
        },
        visible: {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            transition: {
                type: 'spring',
                stiffness: 50,
                damping: 20,
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    }

    const rightColumnVariants = {
        hidden: {
            x: 100,
            opacity: 0,
            filter: 'blur(10px)',
        },
        visible: {
            x: 0,
            opacity: 1,
            filter: 'blur(0px)',
            transition: {
                type: 'spring',
                stiffness: 50,
                damping: 20,
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    }

    return (
        <>
        <HackathonDialog isOpen={dialog} onClose={() => setDialog(false)} />

        <motion.div
            className={`no-scrollbar py-5 lg:px-0 pb-24 flex flex-col lg:flex-row justify-center`}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            >
            {onlyWidth > 800 ? (<motion.div className="relative z-30" variants={leftColumnVariants}>
                <Stack />
            </motion.div>) : null}

            <motion.div
                className="flex flex-col space-y-3 z-30 items-center px-3"
                variants={middleColumnVariants}
            >
                <ProfileCard />
                {onlyWidth > 800 ? <DailyStack />:<Links />}   
                {onlyWidth > 800 ? null:<Stack />}   

            </motion.div>

            <motion.div variants={rightColumnVariants} >
                {onlyWidth > 800 ? <Links /> : null}
                <ProjectCard />
                <Hackathons setDialog = {setDialog} dialog = {dialog} />
                {onlyWidth > 800 ? null : <DailyStack />}
            </motion.div>
        </motion.div>
        </>
    )
}

export default Page
