import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'
import { X } from 'lucide-react'
import Timeline from './ui/timeline'

const hackathonData = [
    {
        title: 'Smart India Hackathon 2024',
        dates: 'September 2024',
        location: 'Visakhapatnam, India',
        description: 'Developing an AI-powered solution for Centralized Firewall with Application Protection.',
        image: 'https://imgs.search.brave.com/UJnfIwgtGpWWCsUofVJPurvCxI-IB3XRUjHJnvjrnuQ/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvNjM0ZDE5MTJj/NzAzMDI1M2U3M2Qy/OWYxZWEzOTc4Yjdm/NDE5MzVhMTgyODE3/ZGVhYzU2NzRmMzVl/ZjkxMDZkZS93d3cu/c2loLmdvdi5pbi8',
        links: [
            {
                title: 'Project Repository',
                url: 'https://github.com/CyberKavach/',
            },
            {
                title: 'Document',
                url: 'https://github.com/CyberKavach/cyberkavach-docs',
            },
            {
                title: 'Live Demo',
                url: 'https://cyberkavach.vercel.app/',
            },
        ],
    },
    {
        title: 'Hacktoberfest',
        dates: 'November 2024',
        location: 'Visakhapatnam, India',
        description: 'Earned the Champion Badge with 570 points, ranking 370 out of 2500 contributors under GSSoC 2024 Extd',
        image: 'https://imgs.search.brave.com/m2bIDxzTfHtZBfj5CHI9ROcPzBB8C6ldMPNDfgss-wI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/LzdjL0dvb2dsZV9T/dW1tZXJfb2ZfQ29k/ZV9zdW5fbG9nb18y/MDIyLnN2Zw',
        links: [
            {
                title: 'Blog',
                url: 'https://dev.to/yasheela-alla/my-contributions-for-hacktoberfest-2024-part-1-2i1o',
            },
          {
            title: 'Holopin Badges',
            url: 'https://www.holopin.io/@yasheelaalla#'
          }
        ],
    },
    {
        title: 'AI/ML Hackathon',
        dates: 'February 2025',
        location: 'Visakhapatnam, India',
        description: 'A data analysis and prediction based web application.',
        image: 'https://imgs.search.brave.com/tJanJloOLAaC57AWKuHZ6cFiQvBV7vxnbgf-ISBaD7A/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMTZkMjY2NjIz/MGVlZTc2NmUxOTEx/ZjIwMWZlMDI1YTAx/N2Q1ODM5MmFiMTk0/MWQ3MDJmNDAzMzk1/YTdhMWEwOC9zdHJl/YW1saXQuaW8v',
        links: [
            {
                title: 'GitHub Repository',
                url: 'https://github.com/yasheela-alla/ML-App',
            },
        ],
    },
    {
        title: 'IWD Women\'s Hackathon',
        dates: 'April 2025',
        location: 'Visakhapatnam, India',
        description: 'Built a Blockchain based Intellectual property protection system.',
        image: 'https://imgs.search.brave.com/tJanJloOLAaC57AWKuHZ6cFiQvBV7vxnbgf-ISBaD7A/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMTZkMjY2NjIz/MGVlZTc2NmUxOTEx/ZjIwMWZlMDI1YTAx/N2Q1ODM5MmFiMTk0/MWQ3MDJmNDAzMzk1/YTdhMWEwOC9zdHJl/YW1saXQuaW8v',
        links: [
            {
                title: 'GitHub Repository',
                url: 'https://github.com/yasheela-alla/kageLock-u',
            },
        ],
    },
    {
        title: 'Outlier frontend Hackathon',
        dates: 'April 2025',
        location: 'Visakhapatnam, India',
        description: 'Shortlisted for building outstanding frontend applications, with additional freelance opportunities.',
        image: 'https://imgs.search.brave.com/tJanJloOLAaC57AWKuHZ6cFiQvBV7vxnbgf-ISBaD7A/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvMTZkMjY2NjIz/MGVlZTc2NmUxOTEx/ZjIwMWZlMDI1YTAx/N2Q1ODM5MmFiMTk0/MWQ3MDJmNDAzMzk1/YTdhMWEwOC9zdHJl/YW1saXQuaW8v',
        links: [
            {
                title: 'GitHub Repository',
                url: 'https://github.com/yasheela-alla/vibra',
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
                            theme === 'dark'
                                ? 'bg-[#111010] border-zinc-800'
                                : 'bg-zinc-100 border-zinc-300'
                        } border shadow-xl`}
                    >
                        <button
                            onClick={onClose}
                            className={`absolute top-4 right-4 p-2 rounded-full ${
                                theme === 'dark'
                                    ? 'hover:bg-zinc-800'
                                    : 'hover:bg-zinc-200'
                            } transition-colors`}
                        >
                            <X
                                className={
                                    theme === 'dark'
                                        ? 'text-zinc-400'
                                        : 'text-zinc-600'
                                }
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
