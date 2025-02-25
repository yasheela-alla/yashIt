import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const GifComponent = () => {
  const { isChanging } = useTheme();
  const [animationPhase, setAnimationPhase] = useState<'initial' | 'gif' | 'scale' | 'fly' | 'complete'>('initial');
  const controls = useAnimation();
  console.log(animationPhase)

  useEffect(() => {
    if (isChanging) {
      const animationSequence = async () => {
        setAnimationPhase('gif');
        await controls.start({
          scale: [0.9, 1],
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.34, 1.56, 0.64, 1] 
          }
        });

        await new Promise(resolve => setTimeout(resolve, 1500));

        setAnimationPhase('scale');
        await controls.start({
          scale: [1, 2, 5, 15, 30],
          opacity: 1,
          y: [0, -20, -50, -100],
          transition: {
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1], 
            scale: {
              times: [0, 0.2, 0.4, 0.6, 1],
              ease: "easeInOut"
            },
            y: {
              times: [0, 0.3, 0.6, 1],
              ease: "easeOut"
            }
          }
        });

        setAnimationPhase('fly');
        await controls.start({
          scale: [30, 50],
          opacity: [1, 0],
          y: [-100, -150],
          transition: {
            duration: 1,
            ease: "easeOut",
            opacity: {
              duration: 0.5,
              delay: 0.3,
              ease: "easeOut"
            }
          }
        });

        setAnimationPhase('complete');
      };

      animationSequence();
    }
  }, [isChanging, controls]);

  if (!isChanging) return null;

  return (
    <motion.div
      className="fixed inset-0 flex justify-center z-[50] gifc pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
    >
      <motion.div
        className="absolute z-[50] top-20 md:top-10"
        initial={{
          scale: 0.9,
          opacity: 0,
          y: 20
        }}
        animate={controls}
        style={{
          transformOrigin: 'center center'
        }}
      >
        <img src="theL.gif" alt="" className="gif-image scale-[1.4] md:scale-[1.1] " />
      </motion.div>
    </motion.div>
  );
};

export default GifComponent;