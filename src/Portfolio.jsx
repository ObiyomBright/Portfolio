import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// --- PREMIUM CUSTOM INLINE SVG ICONS ---
const SunIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.22" x2="5.64" y2="17.78"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
);

const MoonIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
);

const LinkIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const FileTextIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
);

const GithubIcon = () => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
    >
        <path d="M12 .5C5.73.5.75 5.62.75 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.26.79-.57v-2.05c-3.2.72-3.88-1.4-3.88-1.4-.53-1.38-1.3-1.75-1.3-1.75-1.07-.75.08-.73.08-.73 1.18.09 1.8 1.24 1.8 1.24 1.05 1.85 2.75 1.32 3.42 1.01.1-.78.41-1.32.75-1.62-2.55-.3-5.23-1.32-5.23-5.86 0-1.3.45-2.37 1.19-3.2-.12-.3-.52-1.52.11-3.17 0 0 .97-.32 3.18 1.22a10.8 10.8 0 0 1 5.79 0c2.21-1.54 3.18-1.22 3.18-1.22.63 1.65.23 2.87.11 3.17.74.83 1.19 1.9 1.19 3.2 0 4.56-2.69 5.56-5.25 5.85.42.36.79 1.08.79 2.19v3.25c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.25 12C23.25 5.62 18.27.5 12 .5z" />
    </svg>
);

const LinkedinIcon = () => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
    >
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.96v5.66H9.31V9h3.41v1.56h.05c.47-.9 1.61-1.86 3.31-1.86 3.54 0 4.19 2.33 4.19 5.35v6.4zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
);
// --- AUTO-ROTATING IMAGE SLIDER ---
function ProjectImageSlider({ images, title, dark }) {
    const [currentIdx, setCurrentIdx] = useState(0);

    useEffect(() => {
        if (!images || images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIdx((prev) => (prev + 1) % images.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [images]);

    return (
        <div className={`w-full h-52 rounded-xl overflow-hidden relative border shadow-inner ${dark ? 'bg-slate-900 border-zinc-800/60' : 'bg-slate-200 border-slate-200/50'}`}>
            {images.map((imgUrl, idx) => (
                <img
                    key={idx}
                    src={imgUrl}
                    alt={`${title} preview ${idx + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === currentIdx ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'}`}
                />
            ))}
            <div className="absolute bottom-3 right-3 z-20 flex gap-1.5 backdrop-blur-md px-2.5 py-1 rounded-full bg-black/50">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIdx ? 'w-4 bg-emerald-400' : 'w-1.5 bg-slate-400/50'}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default function Portfolio() {
    const [dark, setDark] = useState(true);
    const [roleIndex, setRoleIndex] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const roles = ["Full-Stack Engineer", "Frontend Specialist", "Backend Architect", "Web3 Developer"];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const skills = [
        { category: "Frontend Systems & Interactive Experiences", items: ["React", "Next.js", "Vite", "TypeScript", "Tailwind CSS", "Modern UI/UX", "Motion Design"] },
        { category: "Backend Engineering & Database Systems", items: ["Node.js", "Express.js", "PHP", "Flask", "MySQL", "PostgreSQL", "MongoDB", "API Development"] },
        { category: "Development Workflow & Infrastructure", items: ["Git", "GitHub", "Linux", "REST APIs", "Postman", "Docker", "CI/CD", "Cloud Deployment"] }
    ];

    const timeline = [
        {
            role: "Full-Stack Software Engineer",
            company: "Egoras",
            period: "2025 - Present",
            desc: "Working on scalable fintech and web platforms, building full-stack features including dashboards, API integrations, authentication systems, and performance-optimized interfaces. Focused on improving reliability, security, and overall user experience across production systems."
        },
        {
            role: "Full-Stack Software Developer",
            company: "Lofloxy",
            period: "2023 - 2025",
            desc: "Worked on building and maintaining e-commerce and business web platforms, developing both frontend interfaces and backend services. Handled API development, database management, and implementation of responsive UI systems for production use."
        },
        {
            role: "Web Developer",
            company: "OYOL Computer Consult",
            period: "2022 - 2023",
            desc: "Built client websites and internal tools during industrial training, focusing on responsive design, backend integration with PHP and MySQL, and improving website performance and usability."
        }
    ];

    const projects = [
        {
            title: "Frevia Global Freelance Platform",
            category: "Full-Stack",
            desc: "A secure marketplace connecting global businesses with independent professionals, built with fully automated contract safety features.",
            images: [
                "https://res.cloudinary.com/dz4xdwna1/image/upload/f_auto,q_auto,w_1200/v1778941791/Screenshot_from_2026-05-16_14-41-24_vwdnzn.png",
                "https://res.cloudinary.com/dz4xdwna1/image/upload/f_auto,q_auto,w_1200/v1778941791/Screenshot_from_2026-05-16_14-41-47_sufqba.png",
            ],
            link: "https://frevia-bfmc.vercel.app/"
        },
        {
            title: "Exclusive Premium Commerce Hub",
            category: "E-Commerce Suite",
            desc: "A high-performance online storefront featuring robust application state management, live inventory calculations, and fast user checkout pipelines.",
            images: [
                "https://res.cloudinary.com/dz4xdwna1/image/upload/f_auto,q_auto,w_1200/v1778944136/Screenshot_from_2026-05-16_16-04-38_stmeor.png",
                "https://res.cloudinary.com/dz4xdwna1/image/upload/f_auto,q_auto,w_1200/v1778944132/Screenshot_from_2026-05-16_16-05-20_iiyuxh.png",
                "https://res.cloudinary.com/dz4xdwna1/image/upload/f_auto,q_auto,w_1200/v1778944132/Screenshot_from_2026-05-16_16-05-35_vrz6oh.png",
            ],
            link: "https://e-commerce-site-r8rl.onrender.com"
        },
        // {
        //     title: "Intelligent Phishing Detection Engine",
        //     category: "Cybersecurity Dashboard",
        //     desc: "An enterprise-grade protection screen configured to analyze live website request architectures and prevent network security vulnerabilities.",
        //     images: [
        //         "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
        //         "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop"
        //     ],
        //     link: "#"
        // },
        // {
        //     title: "Real-Time Collaborative Workplace",
        //     category: "SaaS Application",
        //     desc: "A cloud-connected utility engine that helps distributed business teams organize data pipelines, assign operational checklists, and view project charts metrics.",
        //     images: [
        //         "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
        //         "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop"
        //     ],
        //     link: "#"
        // },
        // {
        //     title: "Automated Data Analysis Pipeline",
        //     category: "Backend Infrastructure",
        //     desc: "A secure script array built to poll heavy background records hourly, organize deep data indexes, and deliver comprehensive analytical reports directly to core servers.",
        //     images: [
        //         "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
        //         "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=600&auto=format&fit=crop"
        //     ],
        //     link: "#"
        // }
    ];

    useEffect(() => {
        const roleInterval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(roleInterval);
    }, []);

    // Structural dynamic Tailwind tokens
    const cCard = `border rounded-3xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-colors duration-300 ${dark ? 'bg-[#0d0d11] border-[#1c1c21]' : 'bg-white border-slate-200/80'}`;
    const cCardSm = `border rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-colors duration-300 ${dark ? 'bg-[#0d0d11] border-[#1c1c21]' : 'bg-white border-slate-200/80'}`;
    const cMuted = `${dark ? 'text-slate-400' : 'text-slate-600'}`;
    const cStrong = `${dark ? 'text-white' : 'text-slate-900'}`;

    return (
        <div className={`min-h-screen antialiased p-6 relative overflow-x-hidden transition-colors duration-300 font-sans ${dark ? 'bg-[#070708] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>

            {/* Background Subtle Grid Lines */}
            <div
                className="fixed inset-0 pointer-events-none z-0"
                style={{
                    opacity: dark ? 0.4 : 0.7,
                    backgroundImage: `linear-gradient(to right, ${dark ? '#131317' : '#e2e8f0'} 1px, transparent 1px), linear-gradient(to bottom, ${dark ? '#131317' : '#e2e8f0'} 1px, transparent 1px)`,
                    backgroundSize: '2.5rem 2.5rem',
                    WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
                    maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
                }}
            />

            {/* --- FIXED HEADER --- */}
            <header className="fixed top-4 left-4 right-4 z-[200] w-auto grid grid-cols-1 md:grid-cols-2 gap-4 class-grid-header max-w-7xl mx-auto">
                {/* Status pill - hidden on mobile when scrolled */}
                <div className={`${cCardSm} p-4 flex items-center backdrop-blur-xl transition-all duration-300 ${dark ? 'bg-[#0d0d11]/75' : 'bg-white/75'} ${isScrolled ? 'hidden md:flex' : 'flex'}`}>
                    <div className="flex items-center gap-3">
                        <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                        <span className={`text-xs font-semibold ${cMuted}`}>
                            Available for Global Remote Opportunities
                        </span>
                    </div>
                </div>

                {/* Nav + theme toggle */}
                <div className={`${cCardSm} p-2 flex items-center justify-between md:justify-end gap-5 backdrop-blur-xl class-nav-card-inner ${dark ? 'bg-[#0d0d11]/75' : 'bg-white/75'}`}>
                    <nav className="flex gap-2 text-sm font-semibold">
                        {['Projects', 'Experience', 'Skills'].map((label, i) => (
                            <a
                                key={i}
                                href={`#${label.toLowerCase()}`}
                                className={`px-3 py-2 rounded-lg transition-colors duration-200 ${cMuted} ${dark ? 'hover:text-emerald-400' : 'hover:text-emerald-600'}`}
                            >
                                {label}
                            </a>
                        ))}
                    </nav>

                    <button
                        onClick={() => setDark(d => !d)}
                        className={`p-2 rounded-lg cursor-pointer transition-colors duration-200 flex items-center justify-center shrink-0 border ${cStrong} ${dark ? 'bg-[#16161c] border-[#24242b] hover:bg-[#1e1e26]' : 'bg-slate-100 border-slate-200 hover:bg-slate-200'}`}
                        aria-label="Switch Theme Mode"
                    >
                        {dark ? <SunIcon /> : <MoonIcon />}
                    </button>
                </div>
            </header>

            <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10 pt-32">


                {/* --- HERO AREA WITH INTEGRATED PICTURE --- */}
                <main className="grid grid-cols-1 lg:grid-cols-3 gap-4 -mt-6 class-grid-main">
                    <motion.section
                        initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}
                        className={`${cCard} p-12 flex flex-col justify-between relative overflow-hidden min-h-[440px] lg:col-span-2`}
                    >
                        <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-[90px] pointer-events-none" />

                        <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-6 class-hero-flex">
                            <div className="max-w-2xl">
                                <span className={`text-xs px-3 py-1.5 rounded-md border font-semibold inline-block ${dark ? 'text-emerald-400 bg-[#141419] border-[#1c1c21]' : 'text-emerald-600 bg-slate-100/60 border-slate-200/60'}`}>
                                    Available for Global Remote Workspace — Syncing to Your Timezone
                                </span>
                                <h1 className={`text-5xl font-black tracking-tight leading-[1.1] pt-3 my-2 class-hero-title ${cStrong}`}>
                                    Hi, I'm Bright.
                                    <span className={`block mt-1 transition-all duration-500 ${dark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                                        {roles[roleIndex]}
                                    </span>
                                </h1>
                                <p className={`text-ebd md:text-lg leading-relaxed font-medium pt-1 ${cMuted}`}>
                                    I design high-performance web applications from database foundations up to polished, fully dynamic user experiences. My focus is writing clean, highly scalable source code.
                                </p>
                            </div>

                            {/* Profile picture */}
                            <div className="relative shrink-0 mx-auto md:mx-0">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl blur-md opacity-40" />
                                <div className={`relative w-32 h-32 rounded-2xl overflow-hidden border ${dark ? 'border-[#1c1c21] bg-[#141419]' : 'border-slate-200/80 bg-slate-100/60'}`}>
                                    <img
                                        src="/profile.jpg" alt="Bright"
                                        className="w-full h-full object-cover"
                                        onError={e => { e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop"; }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <a
                                href="#projects"
                                className={`inline-flex items-center gap-2 text-sm font-bold px-7 py-4 rounded-xl shadow-[0_2px_6px_rgba(0,0,0,0.1)] transition-all duration-200 hover:-translate-y-0.5 ${dark ? 'bg-white text-black hover:bg-slate-100' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
                            >
                                Explore Portfolio
                            </a>
                        </div>
                    </motion.section>

                    {/* RESUME & BIO CARD */}
                    <motion.section
                        initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}
                        className={`${cCard} p-6 flex flex-col justify-between min-h-[440px]`}
                    >
                        <div className="flex flex-col gap-3">
                            <div className={`flex items-center justify-between border-b pb-3 ${dark ? 'border-[#0f0f14]' : 'border-slate-100'}`}>
                                <h3 className={`text-xs font-bold ${cMuted}`}>Professional Networks</h3>
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            </div>
                            <p className={`text-sm font-mediumDoc leading-relaxed ${cMuted}`}>
                                Take a look at my verified source code repositories, professional networks, or save a copy of my credentials.
                            </p>
                        </div>

                        {/* Resume box */}
                        <div className={`border rounded-2xl p-5 flex flex-col gap-3 ${dark ? 'bg-[#141419] border-[#1c1c21]' : 'bg-slate-100/60 border-slate-200/60'}`}>
                            <div className={`flex items-center gap-2 ${cStrong}`}>
                                <FileTextIcon />
                                <span className="text-xs font-bold">Formal Credentials</span>
                            </div>
                            <p className={`text-xs leading-relaxed font-medium ${cMuted}`}>
                                Detailed background layout covering my technical proficiency matrices and professional experience histories.
                            </p>
                            <a
                                href="/resume.pdf"
                                download="Bright_Software_Engineer_Resume.pdf"
                                className="inline-flex items-center justify-center py-3 px-4 rounded-xl bg-emerald-600 text-white font-semibold text-sm transition-colors duration-200 hover:bg-emerald-700"
                            >
                                Download Resume (PDF)
                            </a>
                        </div>

                        {/* <div className="flex gap-2 text-sm font-semibold pt-2">
                            {[
                                ['GitHub', 'https://github.com/ObiyomBright', GithubIcon],
                                ['LinkedIn', 'https://www.linkedin.com/in/bright-obiyom-4b0189237/', LinkedinIcon]
                            ].map(([label, href, Icon]) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`flex-1 text-center py-3 rounded-xl border text-sm transition-colors duration-200 ${cMuted} ${dark ? 'bg-[#141419] border-[#1c1c21] hover:border-emerald-500' : 'bg-slate-50 border-slate-200 hover:border-emerald-500'}`}
                                >
                                  <Icon />  {label}
                                </a>
                            ))}
                        </div> */}

                        <div className="flex gap-3 text-sm font-semibold pt-2">
                            {[
                                ['GitHub', 'https://github.com/ObiyomBright', GithubIcon],
                                ['LinkedIn', 'https://www.linkedin.com/in/bright-obiyom-4b0189237/', LinkedinIcon]
                            ].map(([label, href, Icon]) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border text-sm transition-all duration-200 group ${cMuted
                                        } ${dark
                                            ? 'bg-[#141419] border-[#1c1c21] hover:border-emerald-500 hover:-translate-y-0.5'
                                            : 'bg-slate-50 border-slate-200 hover:border-emerald-500 hover:-translate-y-0.5'
                                        }`}
                                >
                                    <span className="flex items-center justify-center">
                                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-all duration-200 group-hover:scale-110" />
                                    </span>

                                    <span className="text-xs sm:text-sm">{label}</span>
                                </a>
                            ))}
                        </div>
                    </motion.section>
                </main>

                {/* --- STATS LAYER --- */}
                <motion.section
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ staggerChildren: 0.12 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 class-grid-stats"
                >
                    {[
                        { value: "05+", label: "Completed Products" },
                        { value: "100%", label: "Mobile-First Layouts" },
                        { value: "Secure", label: "Architecture Layouts" },
                        { value: "Optimized", label: "Database Operations" }
                    ].map((stat, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true, margin: "-100px" }}
                            key={idx}
                            className={`${cCardSm} p-5 text-center`}
                        >
                            <p className={`sm:text-2xl lg:text-4xl font-black tracking-tight m-0 ${dark ? 'text-emerald-400' : 'text-emerald-600'}`}>{stat.value}</p>
                            <p className={`text-xs font-semibold mt-1.5 m-0 ${cMuted}`}>{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.section>

                {/* --- PROJECTS --- */}
                <section id="projects" className="flex flex-col gap-6">
                    <div className={`border-b-2 pb-3 flex items-baseline justify-between ${dark ? 'border-[#1c1c21]' : 'border-slate-200'}`}>
                        <h2 className={`text-3xl font-black ${cStrong}`}>
                            Featured Production Applications
                        </h2>
                        <span className={`text-sm font-semibold px-3 py-1 rounded-lg border ${dark ? 'bg-[#141419] text-slate-200 border-[#1c1c21]' : 'bg-slate-100 text-slate-800 border-slate-200'}`}>
                            Total Showcase ({projects.length})
                        </span>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ staggerChildren: 0.12 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 class-grid-projects"
                    >
                        {projects.map((project, idx) => (
                            <motion.article
                                initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true, margin: "-60px" }}
                                whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.2 } }}
                                key={idx}
                                className={`${cCard} p-4 flex flex-col justify-between min-h-[490px] transition-all duration-200 ${dark ? 'hover:border-zinc-600' : 'hover:border-emerald-500'}`}
                            >
                                <ProjectImageSlider images={project.images} title={project.title} dark={dark} />

                                <div className="flex flex-col justify-between flex-1 pt-3 gap-3">
                                    <div className="flex flex-col gap-2.5">
                                        <div>
                                            <span className={`text-[11px] font-bold tracking-wider uppercase border px-2.5 py-1 rounded-md inline-block ${dark ? 'text-emerald-400 bg-emerald-950/30 border-emerald-900/40' : 'text-emerald-600 bg-emerald-50 border-emerald-200'}`}>
                                                {project.category}
                                            </span>
                                        </div>
                                        <h3 className={`text-xl font-bold tracking-tight m-0 ${cStrong}`}>
                                            {project.title}
                                        </h3>
                                        <p className={`text-sm leading-relaxed font-medium m-0 ${cMuted}`}>
                                            {project.desc}
                                        </p>
                                    </div>

                                    <div className={`pt-3.5 border-t flex items-center justify-between ${dark ? 'border-zinc-900/50' : 'border-slate-100'}`}>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={`inline-flex items-center gap-2 text-xs font-semibold border px-4 py-2.5 rounded-lg transition-all duration-200 ${cStrong} ${dark ? 'bg-[#141419] border-[#1c1c21] hover:text-emerald-400 hover:scale-[1.02]' : 'bg-slate-100 border-slate-200 hover:text-emerald-600 hover:scale-[1.02]'}`}
                                        >
                                            Launch Live Project <LinkIcon />
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </section>

                {/* --- WORK EXPERIENCE TIMELINE --- */}
                <section id="experience" className="flex flex-col gap-6">
                    <div className={`border-b-2 pb-3 ${dark ? 'border-[#1c1c21]' : 'border-slate-200'}`}>
                        <h2 className={`text-3xl font-black ${cStrong}`}>
                            Professional Timeline
                        </h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 lg:grid-cols-3 gap-4 class-grid-experience"
                    >

                        <div className={`${cCardSm} p-6 flex flex-col gap-6 lg:col-span-2`}>
                            {timeline.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`flex items-start justify-between gap-5 class-experience-row ${idx < timeline.length - 1 ? 'border-b pb-6' : ''} ${dark ? 'border-zinc-900/50' : 'border-slate-100'}`}
                                >
                                    <div className="flex flex-col gap-1.5 max-w-2xl">
                                        <h4 className={`text-xl font-black tracking-tight m-0 ${cStrong}`}>{item.role}</h4>
                                        <p className={`text-sm font-bold m-0 ${dark ? 'text-emerald-400' : 'text-emerald-600'}`}>{item.company}</p>
                                        <p className={`text-sm leading-relaxed font-medium mt-2 m-0 ${cMuted}`}>{item.desc}</p>
                                    </div>
                                    {/* <span className={`text-xs font-semibold px-3 py-1.5 rounded-lg border shrink-0 whitespace-nowrap ${dark ? 'bg-[#141419] text-slate-400 border-[#1c1c21]' : 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                    {item.period}
                  </span> */}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* --- TECH SKILLS GRID --- */}
                <section id="skills" className="flex flex-col gap-6">
                    <div className={`border-b-2 pb-3 ${dark ? 'border-[#1c1c21]' : 'border-slate-200'}`}>
                        <h2 className={`text-3xl font-black ${cStrong}`}>
                            Technical Skills Matrices
                        </h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ staggerChildren: 0.12 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 class-grid-skills"
                    >
                        {skills.map((skillGroup, idx) => (
                            <motion.div
                                initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true, margin: "-100px" }}
                                key={idx}
                                className={`${cCardSm} p-6 flex flex-col gap-4`}
                            >
                                <h3 className={`text-base font-black m-0 ${cStrong}`}>{skillGroup.category}</h3>
                                <div className="flex flex-wrap gap-2 pt-1">
                                    {skillGroup.items.map((skill, sIdx) => (
                                        <span
                                            key={sIdx}
                                            className={`text-xs px-3 py-1.5 font-semibold rounded-lg border ${dark ? 'bg-[#141419] text-slate-200 border-[#1c1c21]/60' : 'bg-slate-100 text-slate-800 border-slate-200/50'}`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* --- ENHANCED FOOTER LAYER --- */}
                <motion.footer
                    initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                    className={`grid grid-cols-1 lg:grid-cols-4 gap-4 border-t pt-6 class-grid-footer ${dark ? 'border-[#1c1c21]' : 'border-slate-200'}`}
                >
                    <div className={`p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 lg:col-span-3 class-footer-card-inner ${cCardSm}`}>
                        <div className="flex flex-col gap-2 max-w-2xl">
                            <h3 className={`text-2xl font-black tracking-tight m-0 ${cStrong}`}>Let's build something beautiful together.</h3>
                            <p className={`text-sm font-medium m-0 ${cMuted}`}>Available for specialized project consulting, engineering contracts, or corporate team roles.</p>
                        </div>
                        <a
                            href="mailto:contact@bright.dev"
                            className={`shrink-0 whitespace-nowrap px-7 py-4 rounded-xl font-bold text-sm transition-all duration-200 shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 ${dark ? 'bg-white text-black hover:bg-slate-100' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
                        >
                            Get In Touch
                        </a>
                    </div>

                    <div className={`p-6 flex flex-col justify-center items-center text-center gap-1.5 ${cCardSm}`}>
                        <span className={`text-sm font-bold ${dark ? 'text-slate-100' : 'text-slate-800'}`}>© {new Date().getFullYear()} BRIGHT.DEV</span>
                        <span className={`text-xs font-medium ${dark ? 'text-slate-400' : 'text-slate-500'}`}>Crafted with React & Framer Motion</span>
                    </div>
                </motion.footer>

            </div>

            {/* Embedded Component Scope Responsive Media Grid Fixes */}
            <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @media (max-width: 768px) {
          .class-grid-header { grid-template-columns: 1fr !important; }
          .class-nav-card-inner { justify-content: space-between !important; gap: 1rem !important; width: 100% !important; }
          .class-hero-flex { flex-direction: column-reverse !important; align-items: center !important; text-align: center !important; gap: 2rem !important; }
          .class-hero-title { font-size: 2.5rem !important; }
          .class-grid-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .class-experience-row { flex-direction: column !important; align-items: flex-start !important; gap: 0.5rem !important; }
        }
        @media (max-width: 1024px) {
          .class-grid-main, .class-grid-projects, .class-grid-experience, .class-grid-skills, .class-grid-footer { grid-template-columns: 1fr !important; }
          .class-footer-card-inner { flex-direction: column !important; align-items: flex-start !important; gap: 1.5rem !important; }
        }
      `}</style>
        </div>
    );
}