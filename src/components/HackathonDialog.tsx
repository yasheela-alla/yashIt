// HackathonDialog.tsx
"use client"
import { hackathons } from '@/constant/hackathons'
import { Timeline } from "@/components/ui/timeline";
import { motion, AnimatePresence } from "framer-motion";
import React from 'react'

interface HackathonDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const HackathonDialog: React.FC<HackathonDialogProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 z-[98]"
          />
          
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.3
            }}
            className="w-[80%] md:w-[40%] fixed custom-scrollbar z-[99] overflow-y-auto h-screen bg-background"
            data-lenis-prevent>
            <Timeline data={hackathons} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default HackathonDialog