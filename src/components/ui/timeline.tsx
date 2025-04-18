import React, { useRef } from "react";
import {
  motion,
  useInView
} from "framer-motion";
import { useTheme } from '@/context/ThemeContext';

interface TimelineEntry {
  title: string;
  dates: string;
  location: string;
  description: string;
  image: string;
  links: Array<{
    title: string;
    url: string;
  }>;
}

const PulsingDot = () => {
  const { theme } = useTheme();
  
  return (
    <div className="relative">
      <motion.div
        className={`w-3 h-3 rounded-full ${
          theme === 'dark' ? 'bg-zinc-400' : 'bg-zinc-600'
        }`}
        initial={{ scale: 0.8 }}
        animate={{
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className={`absolute inset-0 rounded-full ${
          theme === 'dark' ? 'bg-zinc-400/30' : 'bg-zinc-600/30'
        }`}
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{
          scale: [1, 2.5, 1],
          opacity: [0.5, 0, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

const TimelineItem = ({ item }: { item: TimelineEntry }) => {
  const { theme } = useTheme();
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, margin: "-100px" });

  const variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1]
      }
    })
  };

  return (
    <motion.div
      ref={itemRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative flex items-start gap-4 md:gap-8 py-8 md:py-16"
    >
      <div className="absolute left-0 -ml-1.5 mt-1">
        <PulsingDot />
      </div>

      <div className="ml-8 md:ml-12 flex-1">
        <motion.div 
          className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-4"
          variants={variants}
          custom={0}
        >
          <img 
            src={item.image} 
            className="w-10 h-10 md:w-12 md:h-12 p-1 rounded-full object-center bg-white" 
            alt="" 
          />
         
          <div className="flex flex-col gap-1">
            <motion.div
              variants={variants}
              custom={1}
              className={`flex items-center gap-3 text-xs md:text-sm ${
                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
              }`}
            >
              <span>{item.dates}</span>
            </motion.div>
            <motion.h3
              variants={variants}
              custom={2}
              className={`text-lg md:text-xl font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-neutral-900'
              }`}
            >
              {item.title}
            </motion.h3>
            <motion.p
              variants={variants}
              custom={3}
              className={`text-xs md:text-sm ${
                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
              }`}
            >
              {item.location}
            </motion.p>
          </div>
        </motion.div>

        <motion.p
          variants={variants}
          custom={4}
          className={`text-sm md:text-base leading-relaxed mb-4 md:mb-6 ${
            theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
          }`}
        >
          {item.description}
        </motion.p>

        <motion.div 
          className="flex flex-wrap gap-2 md:gap-3"
          variants={variants}
          custom={5}
        >
          {item.links.map((link, linkIndex) => (
            <motion.a
              key={linkIndex}
              whileHover={{
                scale: 1.05,
                backgroundColor: theme === 'dark' ? '#222020' : '#f4f4f5',
                borderColor: theme === 'dark' ? '#71717a' : '#d4d4d8',
              }}
              transition={{ duration: 0.2 }}
              whileTap={{ scale: 0.95 }}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex rounded-sm py-1 px-2 items-center text-xs md:text-sm border ${
                theme === 'dark' 
                  ? 'bg-[#181616] border-zinc-700 text-zinc-300' 
                  : 'bg-zinc-100 border-zinc-300 text-zinc-700'
              }`}
            >
              <span>{link.title}</span>
              <motion.svg
                className="w-3 h-3 md:w-4 md:h-4"
                whileHover={{ x: 2 }}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </motion.svg>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      className={`w-full ${
        theme === 'dark' ? 'bg-[#111010]' : 'bg-zinc-200'
      }`} 
      ref={containerRef}
    >
      <div className="w-5xl mx-auto px-4 md:px-6 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 md:mb-16"
        >
          <h1 className={`text-2xl md:text-3xl lg:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-zinc-800'
          }`}>
            Hackathons, openSource & Workshops
          </h1>
          <p className={`text-sm md:text-md leading-relaxed ${
            theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
          }`}>
            I love pushing myself into new stacks, domains—basically anything I have no clue about. My first-ever hackathon? A 24-hour AI/ML with AWS challenge. No clue what I was doing, but I jumped in headfirst and walked away with a ton of knowledge. 
            Fast forward to my latest ML hackathon—didnt even know what I was doing, but I jumped in headfirst and walked away with a ton of knowledge. Fast forward to my latest ML hackathon—didnt even know what I was doing, but I jumped in headfirst and walked away with a ton of knowledge. Fast forward to my latest ML hackathon—didnt even know what I was doing, but!!! that past chaos made this one feel like second nature. Every challenge, every sleepless night, every WTF am I doing? moment—it all adds up. Keep chasing the next big thing ANON.
          </p>
        </motion.div>

        <div className="relative">
          <div className={`absolute left-0 top-0 bottom-0 w-px ${
            theme === 'dark' ? 'bg-neutral-800' : 'bg-zinc-400'
          }`} />
          
          <div className="relative">
            {data.map((item, index) => (
              <TimelineItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
