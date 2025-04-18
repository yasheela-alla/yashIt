// GridPattern.tsx
import { useId } from 'react'
import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'
import { useTheme } from '@/context/ThemeContext'

interface GridPatternProps extends React.SVGProps<SVGSVGElement> {
    width?: number
    height?: number
    x?: number
    y?: number
    strokeDasharray?: string
    className?: string
    [key: string]: unknown
}

export function GridPattern({
    width = 40,
    height = 40,
    x = -1,
    y = -1,
    strokeDasharray = '0',
    className,
    ...props
}: GridPatternProps) {
    const id = useId()
    const maskId = useId()
    const glowId = useId()
    const {theme} = useTheme()

    // State for animated squares
    const [activeSquares, setActiveSquares] = useState<Array<[number, number]>>(
        []
    )

    useEffect(() => {
        const maxSquares = 25
        const gridSize = 20

        // Function to generate a new random square
        const getRandomSquare = () =>
            [
                Math.floor(Math.random() * gridSize),
                Math.floor(Math.random() * gridSize),
            ] as [number, number]

        // Initialize with some random squares
        setActiveSquares(Array.from({ length: 10 }, () => getRandomSquare()))

        // Update squares at different intervals
        const fastInterval = setInterval(() => {
            setActiveSquares((prev) => {
                const newSquares = [...prev]
                // Randomly add or remove squares
                if (Math.random() > 0.5 && newSquares.length < maxSquares) {
                    newSquares.push(getRandomSquare())
                } else if (newSquares.length > 5) {
                    newSquares.splice(
                        Math.floor(Math.random() * newSquares.length),
                        1
                    )
                }
                return newSquares
            })
        }, 1000)

        const slowInterval = setInterval(() => {
            setActiveSquares((prev) => {
                return prev.map((square) => {
                    if (Math.random() > 0.7) {
                        return getRandomSquare()
                    }
                    return square
                })
            })
        }, 3000)

        return () => {
            clearInterval(fastInterval)
            clearInterval(slowInterval)
        }
    }, [])

    return (
        <svg
            aria-hidden="true"
            className={cn(`
                pointer-events-none absolute inset-0 h-full w-full ${theme==='dark'?'stroke-zinc-800/75 fill-gray-400/10' : 'stroke-zinc-400/20 fill-zinc-400'}`,
                className
            )}
            {...props}
        >
            <defs>
                <radialGradient id={maskId} cx="65%" cy="50%" r="70%">
                    <stop offset="0%" stopColor="white" stopOpacity="1" />
                    <stop offset="50%" stopColor="white" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <pattern
                    id={id}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <path
                        d={`M.5 ${height}V.5H${width}`}
                        fill="none"
                        strokeDasharray={strokeDasharray}
                    />
                </pattern>
                <filter id={glowId}>
                    <feGaussianBlur stdDeviation="1.5" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1   0 0 0 0 1   0 0 0 0 1  0 0 0 0.5 0"
                    />
                    <feComposite in="SourceGraphic" operator="over" />
                </filter>
            </defs>
            <mask id="grid-mask">
                <rect width="100%" height="100%" fill={`url(#${maskId})`} />
            </mask>
            <g mask="url(#grid-mask)">
                <rect
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                    fill={`url(#${id})`}
                />
                <g className="overflow-visible">
                    {activeSquares.map(([x, y], index) => (
                        <rect
                            key={`${x}-${y}-${index}`}
                            width={width - 1}
                            height={height - 1}
                            x={x * width + 1}
                            y={y * height + 1}
                            className="transition-all duration-1000"
                            style={{
                                animation: `glow ${2 + (index % 3)}s ease-in-out infinite`,
                                filter: `url(#${glowId})`,
                                opacity: 0.7 + Math.random() * 0.3,
                            }}
                        />
                    ))}
                </g>
            </g>
        </svg>
    )
}

// Grid.tsx
export function Grid() {
    const {theme} = useTheme()
    return (
        <div className={`fixed inset-0 h-screen w-screen ${theme==='dark'? "bg-[#111010]" : "bg-white"} overflow-hidden`}>
            <div className="absolute inset-0 transform-gpu">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
                <GridPattern
                    className={cn(
                        'inset-0 h-[200%] w-full',
                        'skew-y-12',
                        'translate-y-[-10%]'
                    )}
                />
            </div>
        </div>
    )
}
