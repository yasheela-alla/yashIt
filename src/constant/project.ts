export const projects = [
    {
        title: "MERN Stack Application with Cloud DevSecOps Pipeline",
        href: "https://github.com/yasheela-alla/mern-devsecops-pipeline",
        active: true,
        description:
            "Automated AWS provisioning with Terraform (38+ resources including EKS clusters, EC2 node groups). Built end-to-end CI/CD using Jenkins, SonarQube, Trivy, and Docker; pushed secure images to AWS ECR. Integrated GitOps with ArgoCD for continuous deployments across frontend, backend, and MongoDB. Configured observability with Prometheus, Grafana, and AWS CloudWatch for real-time system health.",
        technologies: [
            "Terraform",
            "AWS EKS",
            "Jenkins",
            "SonarQube",
            "Trivy",
            "Docker",
            "ArgoCD",
            "Prometheus",
            "Grafana",
        ],
        links: [
            {
                type: "GitHub",
                href: "https://github.com/yasheela-alla/mern-devsecops-pipeline",
            }
        ],
        image: "https://res.cloudinary.com/dnm3zl9dp/image/upload/v1736509280/b40jd0fxigcvpcvhxt2r.png",
    },
    {
        title: "Real-Time Security Monitoring Prototype",
        href: "https://github.com/yasheela-alla/security-monitoring",
        active: true,
        description: "Implemented intrusion detection using Snort3 + Python for brute-force SMTP login attempts. Automated IP blocking via iptables; integrated service with systemd for resilience.",
        technologies: [
            "Snort3",
            "Python",
            "iptables",
            "systemd",
            "Linux",
            "Network Security",
        ],
        links: [
            {
                type: "GitHub",
                href: "https://github.com/yasheela-alla/security-monitoring"
            }
        ],
        image: "https://res.cloudinary.com/dnm3zl9dp/image/upload/v1725072289/cartit-image-placeholder.png"
    },
    {
        title: "Campus Network Infrastructure Design",
        href: "https://github.com/yasheela-alla/campus-network-design",
        active: true,
        description: "Designed scalable topology to improve efficiency and reduce latency. Deployed port security measures, preventing 95% of unauthorized access attempts.",
        technologies: [
            "Network Design",
            "Port Security",
            "Cisco",
            "VLAN",
            "Network Security",
            "Infrastructure",
        ],
        links: [
            {
                type: "GitHub",
                href: "https://github.com/yasheela-alla/campus-network-design"
            }
        ],
        image: "https://res.cloudinary.com/dnm3zl9dp/image/upload/v1725072293/project-management-placeholder.png"
    },
    {
        title: "Fraud Detection Pipeline (ML)",
        href: "https://github.com/yasheela-alla/fraud-detection-ml",
        active: true,
        description:
            "Built automated preprocessing workflows, improving model training speed by 60%. Developed monitoring dashboards tracking 15+ metrics for real-time ML system health. Completed during Intrainz Internship.",
        technologies: [
            "Machine Learning",
            "Python",
            "Data Preprocessing",
            "Monitoring Dashboards",
            "Anomaly Detection",
            "MLOps",
        ],
        links: [
            {
                type: "GitHub",
                href: "https://github.com/yasheela-alla/fraud-detection-ml",
            }
        ],
        image: "https://res.cloudinary.com/dnm3zl9dp/image/upload/v1736509280/b40jd0fxigcvpcvhxt2r.png",
    },
];