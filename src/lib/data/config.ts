export const siteConfig = {
    name: "Adithya Thaninki",
    firstName: "Adithya",
    lastName: "Thaninki",
    title: "Software Engineer",
    subtitle: "Full-Stack · AI · Cloud",
    industries: [
        "Full-Stack Engineering",
        "AI & ML Systems",
        "Cloud & DevOps",
        "SaaS Products",
    ],
    tagline: "Engineering at the intersection of AI & Scale",
    heroIntro: "Hi there! This is",
    philosophy: `Software should be fast, intelligent, and built to scale.
I engineer end-to-end systems — from distributed microservices handling
millions of transactions to AI pipelines that automate what used to take teams.
By applying system design thinking and modern AI tooling, I've helped
enterprises and startups ship products that perform under pressure.
My goal is clean code, measurable outcomes, and systems that don't break at 2AM.`,
    email: "adithya040@gmail.com",
    phone: "+1 613-913-8688",
    location: "Ottawa, ON, Canada",
    availability: true,
    availabilityText: "Available for Co-op · May 2026",
    socials: {
        linkedin: "https://linkedin.com/in/adithyathaninki",
        github: "https://github.com/adithyalee",
    },
    // Keep these conservative until you paste your actual resume details.
    stats: [
        "1 year professional experience",
        "Full‑Stack · AI/ML · DevOps",
        "Co‑op candidate — available for structured programs",
    ],
    footerCTA: "Let's build something.",
    footerEmail: "adithya040@gmail.com",
    accentColor: "#FF3D00",
    yearsExperience: "1",
    clientCount: "",
    clientCountLabel: "",
    features: {
        loadingScreen: true,
        customCursor: true,
        smoothScroll: true,
    },
    images: {
        // Keep the existing hero image as the starting image you liked.
        heroPortrait: "/images/adithya-photo.png",
        portraitPrimary: "/images/portrait-1.png",
        portraitSecondary: "/images/portrait-2.png",
    },
};

export const awards = [
    {
        name: "AWS Certified Cloud Practitioner",
        year: "2024",
        project: "Cloud Architecture",
        logo: "/awards/aws.svg",
        category: "Certification",
    },
    {
        name: "Azure AI Fundamentals (AI-900)",
        year: "2024",
        project: "AI & Machine Learning",
        logo: "/awards/azure.svg",
        category: "Certification",
    },
    {
        name: "Azure Fundamentals (AZ-900)",
        year: "2024",
        project: "Cloud Infrastructure",
        logo: "/awards/azure.svg",
        category: "Certification",
    },
    {
        name: "IBM ML Professional Certificate",
        year: "2023",
        project: "Machine Learning",
        logo: "/awards/ibm.svg",
        category: "Certification",
    },
    {
        name: "Peer-Reviewed Publication · ICRTC",
        year: "2023",
        project: "Feature Over Exemplification Classification",
        logo: "/awards/publication.svg",
        category: "Research",
    },
];

export const projects = [
    {
        slug: "ai-video-engine",
        featured: true,
        order: 1,
        title: "AI Video Engine",
        client: "Personal Project",
        clientShort: "AI Video",
        role: "Architect & Full-Stack Engineer",
        year: "2024",
        tags: ["AI/ML", "Full-Stack", "DevOps", "Distributed Systems"],
        coverImage: "/images/projects/ai-video-cover.jpg",
        heroImage: "/images/projects/ai-video-hero.jpg",
        description: "Distributed AI pipeline automating short-form video production — 4 sequential AI stages, 5 integrated APIs, fully containerized.",
        overview: `Architected a distributed system that transforms raw text into 
    fully produced short-form video content through 4 sequential AI stages: 
    script generation, AI voiceover, image synthesis, and video rendering.`,
        challenge: `Short-form video production requires coordinating multiple AI 
    services in sequence — if one stage fails, the entire pipeline collapses. 
    The system needed fault tolerance, real-time progress tracking, and 
    cloud-agnostic deployment.`,
        solution: `Built an event-driven orchestration layer using Inngest for 
    background job processing with automatic retries. Integrated 5 external 
    AI APIs (Gemini, Replicate, GCP TTS, Remotion) with Neon PostgreSQL for 
    state persistence. Dockerized the entire application for dev-to-production 
    parity.`,
        outcomes: [
            "4-stage AI pipeline: script → voiceover → image → video",
            "5 external AI services integrated via event-driven orchestration",
            "Fault-tolerant background jobs with automatic retry on failure",
            "Dockerized & published to Docker Hub for cloud-agnostic deployment",
        ],
        stack: ["Next.js 15", "TypeScript", "Gemini API", "Replicate API",
            "Google TTS", "Remotion", "Inngest", "Neon DB", "PostgreSQL",
            "Clerk Auth", "Docker", "Docker Hub"],
        link: "https://github.com/adithyalee",
        imageCoverVibe: "Dark cinematic — deep blacks, orange-red AI glow, terminal UI visible",
    },
    {
        slug: "ai-ui-mockup-generator",
        featured: true,
        order: 2,
        title: "AI Mockup Generator",
        client: "SaaS Exploration",
        clientShort: "UI Gen",
        role: "Full-Stack Engineer",
        year: "2024",
        tags: ["SaaS", "AI", "Full-Stack", "Generative UI"],
        coverImage: "/images/projects/mockup-gen-cover.jpg",
        heroImage: "/images/projects/mockup-gen-hero.jpg",
        description: "Generative SaaS tool converting natural language prompts into real-time UI/UX wireframes via canvas-based rendering engine.",
        overview: `Built a generative SaaS tool that converts natural language 
    descriptions into functional UI/UX wireframes in real-time using a 
    custom canvas-based rendering engine.`,
        challenge: `Translating unstructured natural language into structured, 
    renderable UI components in real-time — while keeping the output editable 
    and the session persistent.`,
        solution: `Implemented a canvas-based rendering engine in React that 
    interprets AI-generated component trees. Integrated Neon PostgreSQL for 
    project persistence and Clerk for authentication.`,
        outcomes: [
            "Natural language → live UI wireframe in real-time",
            "Canvas-based rendering engine for editable outputs",
            "Project persistence via Neon PostgreSQL + Clerk Auth",
        ],
        stack: ["Next.js", "React", "Tailwind CSS", "Neon DB",
            "PostgreSQL", "Clerk Auth", "TypeScript"],
        link: "https://github.com/adithyalee",
        imageCoverVibe: "Clean minimal — light wireframe UI floating on deep dark background",
    },
    {
        slug: "enterprise-microservices-tcs",
        featured: true,
        order: 3,
        title: "Enterprise Transit Platform",
        client: "Tata Consultancy Services",
        clientShort: "TCS",
        role: "Software Engineering Trainee",
        year: "2024",
        tags: ["Java", "Microservices", "DevOps", "Enterprise"],
        coverImage: "/images/projects/tcs-cover.jpg",
        heroImage: "/images/projects/tcs-hero.jpg",
        description: "Java-based microservices platform for global transit & airline operations — 2M+ daily transactions, monitored via Datadog, automated via Jenkins CI/CD.",
        overview: `Maintained and enhanced Java microservices powering global 
    transit and airline platforms at enterprise scale — handling over 
    2 million daily transactions across international operations.`,
        challenge: `Enterprise airline systems demand 99.9% uptime SLA. 
    Bottlenecks in distributed services need to be identified and resolved 
    before they cascade into customer-facing failures.`,
        solution: `Instrumented Datadog observability across 4+ microservices 
    for proactive monitoring. Automated 3-stage Jenkins CI/CD pipelines 
    and resolved production bottlenecks through structured root-cause analysis.`,
        outcomes: [
            "2M+ daily transactions sustained across distributed microservices",
            "99.9% SLA target maintained via Datadog monitoring",
            "3-stage Jenkins CI/CD pipeline automated",
            "3+ enterprise technical specifications authored",
        ],
        stack: ["Java", "Spring Boot", "Microservices", "Datadog",
            "Jenkins", "CI/CD", "Git", "Agile/Scrum"],
        link: "",
        imageCoverVibe: "Dark enterprise — monitoring dashboards, data flow, server infrastructure",
    },
];

export const testimonials = [
    {
        id: "01",
        name: "Dr. Shyamala Devi",
        title: "Research Endorser",
        company: "Research & Academia",
        quote: "Adithya possesses a rare combination of technical ingenuity and academic rigor. His contributions to our research were characterized by a deep understanding of complex system architectures and a proactive approach to problem-solving. He doesn't just implement technology; he questions and optimizes it. He is a standout researcher with a bright future in Software Engineering.",
        avatar: "",
        linkedIn: "",
    },
    {
        id: "02",
        name: "Senthil Kumar",
        title: "Delivery Manager",
        company: "Tata Consultancy Services",
        quote: "During his tenure at TCS, Adithya proved to be an invaluable asset to the BagManager team. His ability to navigate the complexities of large-scale systems for clients like United Airlines was impressive. He is a highly disciplined developer who consistently delivered clean, efficient code while maintaining a focus on the broader project goals. Any organization would be lucky to have his technical talent.",
        avatar: "",
        linkedIn: "",
    },
    {
        id: "03",
        name: "Muskaan Sultana",
        title: "Peer / Project Lead",
        company: "Carleton University",
        quote: "Collaborating with Adithya at Carleton has been an incredible experience. He has a 'Netrunner' mentality — he can see the solution to a bottleneck before the rest of the team even identifies the problem. Whether we were tackling complex database normalization or building out AI-powered tools, his energy and expertise kept the project on track. He is the definition of a high-impact engineer.",
        avatar: "",
        linkedIn: "",
    },
];

export const clients = [
    { name: "Tata Consultancy Services", logo: "/logos/tcs.svg", url: "" },
    { name: "CSIR-CEERI", logo: "/logos/csir.svg", url: "" },
    { name: "Carleton University", logo: "/logos/carleton.svg", url: "" },
    { name: "Microsoft Azure", logo: "/logos/azure.svg", url: "" },
    { name: "AWS", logo: "/logos/aws.svg", url: "" },
    { name: "IBM", logo: "/logos/ibm.svg", url: "" },
    { name: "Your Next Company →", logo: "", url: "mailto:adithya040@gmail.com", isPlaceholder: true },
];

export const aboutContent = {
    headline: "Graduate student in Computer Science (Co-op) at Carleton University — building full-stack & AI systems with hands-on experience from TCS.",
    bio: [
        `I'm Adithya — a Master's student in the Co-op Program at Carleton University (CGPA: 3.65/4.0), 
    seeking a co-op to apply and grow my skills. Available for co-op starting May 2026.`,
        `I bring hands-on experience from a pre-Master's Software Engineering Trainee role at Tata Consultancy Services, 
    where I contributed to Java microservices powering global airline and transit platforms. I've also built 
    AI pipelines from scratch using Gemini, Replicate, and Inngest.`,
        `I'm committed to learning in a collaborative environment — full-stack development, AI/ML tooling, 
    and cloud systems. Whatever the problem requires, I'm ready to contribute and grow.`,
    ],
    currentStatus: "MCS Co-op Student @ Carleton University · Available May 2026",
    education: {
        degree: "Master of Computer Science (Co-op Program)",
        school: "Carleton University",
        location: "Ottawa, ON",
        dates: "Sept. 2025 – Apr. 2027",
        gpa: "3.65 / 4.0",
    },
    skills: {
        "Languages": ["TypeScript", "JavaScript", "Python", "Java", "C", "C++", "SQL"],
        "Frameworks": ["Next.js 15", "React", "Spring Boot", "Node.js", "Tailwind CSS"],
        "AI & ML": ["Gemini API", "Replicate API", "OpenCV", "Scikit-learn", "Google TTS"],
        "Backend & DB": ["PostgreSQL", "Neon DB", "Prisma ORM", "Inngest", "REST APIs"],
        "DevOps & Cloud": ["Docker", "Jenkins CI/CD", "GitHub", "Azure", "AWS", "Datadog"],
    },
};
