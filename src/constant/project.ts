export const projects = [
    {
        title: "AI Code Review Agent",
        href: "https://github.com/yasheela-alla/ai-code-review",
        active: true,
        description:
            "Currently building an AI-powered code review agent emulating senior engineer reasoning to detect bugs, suggest security best practices, and recommend improvements. Built with AI, Next.js, TypeScript, Tailwind CSS, Gemini, and Zod for robust code analysis.",
        technologies: [
            "AI",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Gemini",
            "Zod",
        ],
        links: [
            {
                type: "GitHub",
                href: "https://github.com/yasheela-alla/ai-code-review",
            }
        ],
        image: "https://res.cloudinary.com/dnm3zl9dp/image/upload/v1736509280/b40jd0fxigcvpcvhxt2r.png",
    },
    {
        title: "Blue-Green Deployment",
        href: "https://github.com/yasheela-alla/blue-green-deployment",
        active: true,
        description: "Engineered blue-Green Deployment strategy allowing zero-downtime releases and seamless rollbacks using Docker and Kubernetes on AWS. Configured AWS Elastic Load Balancer to dynamically route traffic between live and staging environments for enhanced security and resilience.",
        technologies: [
            "Docker",
            "Kubernetes", 
            "AWS",
            "CI/CD",
            "Load Balancer",
        ],
        links: [
            {
                type: "GitHub",
                href: "https://github.com/yasheela-alla/blue-green-deployment"
            }
        ],
        image: "https://res.cloudinary.com/dnm3zl9dp/image/upload/v1725072293/project-management-placeholder.png"
    },
    {
        title: "Intrusion Detection System",
        href: "https://github.com/yasheela-alla/intrusion-detection",
        active: true,
        description: "Developed an automated intrusion detection and prevention system leveraging Snort3 to detect and block brute-force attacks on network services. Implemented Python scripts to parse Snort3 logs, identify multiple failed login attempts, and dynamically update iptables to block suspicious IP addresses.",
        technologies: [
            "Python",
            "Snort3",
            "iptables",
            "Linux",
            "Network Security",
            "Cybersecurity"
        ],
        links: [
            {
                type: "GitHub",
                href: "https://github.com/yasheela-alla/intrusion-detection"
            }
        ],
        image: "https://res.cloudinary.com/dnm3zl9dp/image/upload/v1725072289/cartit-image-placeholder.png"
    },
    {
        title: "kageLock: IP Protection Platform",
        href: "https://kagelock.vercel.app",
        active: true,
        description:
            "Prototyped an Ethereum-based decentralized application (DApp) for secure intellectual property registration and on-chain verification using blockchain, Solidity, IPFS, React, and Node.js. Selected among the best solutions for innovation and UI/UX excellence at IWD Women's Hackathon.",
        technologies: [
            "Blockchain",
            "Solidity", 
            "IPFS",
            "React",
            "Node.js",
            "Ethereum",
        ],
        links: [
            {
                type: "Website",
                href: "https://kagelock.vercel.app/",
            },
            {
                type: "GitHub",
                href: "https://github.com/yasheela-alla/kageLock-u",
            }
        ],
        image: "https://res.cloudinary.com/dnm3zl9dp/image/upload/v1736509280/b40jd0fxigcvpcvhxt2r.png",
    }
];