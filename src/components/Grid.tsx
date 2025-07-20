import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern'
import { cn } from '@/lib/utils'

export function Grid() {
    return (
        <div className="fixed inset-0 h-screen w-screen bg-[#111010] overflow-hidden">
            <div className="absolute inset-0 transform-gpu">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
                <AnimatedGridPattern
                    numSquares={40}
                    maxOpacity={0.3}
                    duration={3}
                    repeatDelay={1}
                    className={cn(
                        'inset-0 h-[200%] w-full stroke-zinc-800/75 fill-gray-400/20',
                        'skew-y-12',
                        'translate-y-[-10%]'
                    )}
                />
            </div>
        </div>
    )