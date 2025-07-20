import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern'
import { cn } from '@/lib/utils'
import { useTheme } from '@/context/ThemeContext'

export function Grid() {
    const { theme } = useTheme()
    
    return (
        <div className={`fixed inset-0 h-screen w-screen overflow-hidden transition-colors duration-300 ${
            theme === 'dark' ? 'bg-[#111010]' : 'bg-zinc-100'
        }`}>
            <div className="absolute inset-0 transform-gpu">
                <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-transparent ${
                    theme === 'dark' ? 'via-white/5' : 'via-black/5'
                }`} />
                <AnimatedGridPattern
                    numSquares={40}
                    maxOpacity={0.3}
                    duration={3}
                    repeatDelay={1}
                    className={cn(
                        `inset-0 h-[200%] w-full ${
                            theme === 'dark' 
                                ? 'stroke-zinc-800/75 fill-gray-400/20' 
                                : 'stroke-zinc-300/75 fill-gray-600/20'
                        }`,
                        'skew-y-12',
                        'translate-y-[-10%]'
                    )}
                />
            </div>
        </div>
    )
}