import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import { X } from 'lucide-react'
import Timeline from './ui/timeline'

const hackathonData = [
    {
        title: 'Outlier.ai UI Hackathon (2025)',
        dates: 'January 2025',
        location: 'Remote',
        description: 'Shortlisted for top submissions among 500+ participants. Invited for freelance frontend development opportunities.',
        image: 'https://imgs.search.brave.com/tJanJloOLAaC57AWKuHZ6cFiQvBV7vxnbgf-ISBaD7A/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMTZkMjY2NjIz/MGVlZTc2NmUxOTEx/ZjIwMWZlMDI1YTAx/N2Q1ODM5MmFiMTk0/MWQ3MDJmNDAzMzk1/YTdhMWEwOC9zdHJl/YW1saXQuaW8v',
        links: [
            {
                title: 'Portfolio',
                url: 'https://yasheelaaa.netlify.app/',
            },
        ],
    },
    {
        title: 'GDC AI Workforce (2025)',
        dates: 'January 2025',
        location: 'Remote',
        description: 'Completed full-stack development program focusing on scalable backends with Node.js and React APIs.',
        image: 'https://imgs.search.brave.com/m2bIDxzTfHtZBfj5CHI9ROcPzBB8C6ldMPNDfgss-wI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/LzdjL0dvb2dsZV9T/dW1tZXJfb2ZfQ29k/ZV9zdW5fbG9nb18y/MDIyLnN2Zw',
        links: [
            {
                title: 'Certificate',
                url: 'https://github.com/yasheela-alla',
            }
        ],
    },
    {
        title: 'IWD Women\'s Hackathon (2025)',
        dates: 'February 2025',
        location: 'Visakhapatnam, India',
        description: 'Designed distributed blockchain IP platform; selected top for UI/UX & innovation.',
        image: 'https://imgs.search.brave.com/tJanJloOLAaC57AWKuHZ6cFiQvBV7vxnbgf-ISBaD7A/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMTZkMjY2NjIz/MGVlZTc2NmUxOTEx/ZjIwMWZlMDI1YTAx/N2Q1ODM5MmFiMTk0/MWQ3MDJmNDAzMzk1/YTdhMWEwOC9zdHJl/YW1saXQuaW8v',
        links: [
            {
                title: 'GitHub Repository',
                url: 'https://github.com/yasheela-alla/kageLock-u',
            },
            {
                title: 'Live Demo',
                url: 'https://kagelock.vercel.app/',
            },
        ],
    },
    {
        title: 'GSSoC\'24 Champion',
        dates: 'October 2024',
        location: 'Remote',
        description: 'Ranked in top 30% (570/2000+) during Hacktoberfest; awarded Champion badge. Made significant contributions to multiple open source projects.',
        image: 'https://imgs.search.brave.com/tJanJloOLAaC57AWKuHZ6cFiQvBV7vxnbgf-ISBaD7A/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMTZkMjY2NjIz/MGVlZTc2NmUxOTEx/ZjIwMWZlMDI1YTAx/N2Q1ODM5MmFiMTk0/MWQ3MDJmNDAzMzk1/YTdhMWEwOC9zdHJl/YW1saXQuaW8v',
        links: [
            {
                title: 'Profile',
                url: 'https://github.com/yasheela-alla',
            },
        ],
    },
    {
        title: 'Embedded Systems Intern - Teckybot',
        dates: 'May 2024 – July 2024',
        location: 'On-site',
        description: 'Configured Arduino/ESP devices with MQTT protocols, ensuring reliable IoT data streams. Authored technical documentation and supported hardware/software troubleshooting.',
        image: 'https://imgs.search.brave.com/tJanJloOLAaC57AWKuHZ6cFiQvBV7vxnbgf-ISBaD7A/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMTZkMjY2NjIz/MGVlZTc2NmUxOTEx/ZjIwMWZlMDI1YTAx/N2Q1ODM5MmFiMTk0/MWQ3MDJmNDAzMzk1/YTdhMWEwOC9zdHJl/YW1saXQuaW8v',
        links: [
            {
                title: 'Experience Certificate',
                url: 'https://github.com/yasheela-alla',
            },
        ],
    },
    {
        title: 'Machine Learning Intern - Intrainz',
        dates: 'October 2023 – December 2023',
        location: 'Remote',
        description: 'Developed scalable ML preprocessing pipelines and fraud detection systems. Created dashboards monitoring 15+ KPIs, enabling proactive anomaly detection.',
        image: 'https://imgs.search.brave.com/tJanJloOLAaC57AWKuHZ6cFiQvBV7vxnbgf-ISBaD7A/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMTZkMjY2NjIz/MGVlZTc2NmUxOTEx/ZjIwMWZlMDI1YTAx/N2Q1ODM5MmFiMTk0/MWQ3MDJmNDAzMzk1/YTdhMWEwOC9zdHJl/YW1saXQuaW8v',
        links: [
            {
                title: 'Project Repository',
                url: 'https://github.com/yasheela-alla/fraud-detection-ml',
            },
        ],
    },
]


interface HackathonDialogProps {
    isOpen: boolean
    onClose: () => void
}

const HackathonDialog: React.FC<HackathonDialogProps> = ({ isOpen, onClose }) => {
    const { theme } = useTheme()

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg ${
                            'bg-[#111010] border-zinc-800'
                        } border shadow-xl`}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-800 transition-colors"
                        >
                            <X
                                className="text-zinc-400"
                            />
                        </button>

                        <Timeline data={hackathonData} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default HackathonDialog
