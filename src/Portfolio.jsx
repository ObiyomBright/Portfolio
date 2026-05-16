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

// --- AUTO-ROTATING IMAGE SLIDER ---
function ProjectImageSlider({ images, title }) {
    const [currentIdx, setCurrentIdx] = useState(0);

    useEffect(() => {
        if (!images || images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIdx((prev) => (prev + 1) % images.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [images]);

    return (
        <div className="w-full h-60 rounded-xl overflow-hidden bg-slate-200 relative border border-slate-200 shadow-inner" style={{ background: 'var(--slider-bg)' }}>
            {images.map((imgUrl, idx) => (
                <img
                    key={idx}
                    src={imgUrl}
                    alt={`${title} preview ${idx + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === currentIdx ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'}`}
                />
            ))}
            <div className="absolute bottom-3 right-3 z-20 flex gap-1.5 backdrop-blur-md px-2.5 py-1 rounded-full" style={{ background: 'rgba(0,0,0,0.5)' }}>
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIdx ? 'w-4' : 'w-1.5'}`}
                        style={{ background: idx === currentIdx ? '#34d399' : 'rgba(148,163,184,0.5)' }}
                    />
                ))}
            </div>
        </div>
    );
}

export default function Portfolio() {
    const [dark, setDark] = useState(true);
    const [roleIndex, setRoleIndex] = useState(0);

    const roles = ["Full-Stack Engineer", "Frontend Specialist", "Backend Architect", "Web3 Developer"];
    const skills = [
        { category: "User Experience & Frontend", items: ["React", "Vite", "Next.js", "Tailwind CSS", "TypeScript"] },
        { category: "Server Infrastructure & Databases", items: ["Node.js", "Express", "PHP", "Flask", "MySQL", "PostgreSQL", "MongoDB"] },
        { category: "Workflow Systems & Security", items: ["Git", "GitHub", "Linux / Ubuntu", "RESTful APIs", "Smart Contracts"] }
    ];

    const timeline = [
        { role: "Full-Stack Software Engineer", company: "Technical Enterprise", period: "Present", desc: "Building responsive web applications, writing secure backend APIs, and optimizing overall page speed and load times using PHP and modern JavaScript tools." },
        { role: "Web3 Developer & Contributor", company: "Decentralized Ecosystems", period: "2025 - 2026", desc: "Created decentralized user interfaces, integrated frontend clients with secure smart contracts, and customized secure financial transaction structures." }
    ];

    const projects = [
        {
            title: "Frevia Global Freelance Platform",
            category: "Web3 / Full-Stack",
            desc: "A secure marketplace connecting global businesses with independent professionals, built with fully automated contract safety features.",
            images: [
                "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
            ],
            link: "#"
        },
        {
            title: "Exclusive Premium Commerce Hub",
            category: "E-Commerce Suite",
            desc: "A high-performance online storefront featuring robust application state management, live inventory calculations, and fast user checkout pipelines.",
            images: [
                "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=600&auto=format&fit=crop"
            ],
            link: "https://e-commerce-site-r8rl.onrender.com/"
        },
        {
            title: "Intelligent Phishing Detection Engine",
            category: "Cybersecurity Dashboard",
            desc: "An enterprise-grade protection screen configured to analyze live website request architectures and prevent network security vulnerabilities.",
            images: [
                "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop"
            ],
            link: "#"
        },
        {
            title: "Real-Time Collaborative Workplace",
            category: "SaaS Application",
            desc: "A cloud-connected utility engine that helps distributed business teams organize data pipelines, assign operational checklists, and view project charts metrics.",
            images: [
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop"
            ],
            link: "#"
        },
        {
            title: "Automated Data Analysis Pipeline",
            category: "Backend Infrastructure",
            desc: "A secure script array built to poll heavy background records hourly, organize deep data indexes, and deliver comprehensive analytical reports directly to core servers.",
            images: [
                "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=600&auto=format&fit=crop"
            ],
            link: "#"
        }
    ];

    // ─── Theme token maps ───────────────────────────────────────────────────────
    const t = {
        pageBg: dark ? '#070708' : '#f8fafc',
        pageText: dark ? '#f1f5f9' : '#0f172a',
        cardBg: dark ? '#0d0d11' : '#ffffff',
        cardBorder: dark ? '#1c1c21' : 'rgba(226,232,240,0.8)',
        mutedBg: dark ? '#141419' : 'rgba(241,245,249,0.6)',
        mutedBorder: dark ? '#1c1c21' : 'rgba(226,232,240,0.6)',
        textMuted: dark ? '#94a3b8' : '#475569',
        textStrong: dark ? '#ffffff' : '#0f172a',
        gridLine: dark ? '#131317' : '#e2e8f0',
        gridOpacity: dark ? '0.4' : '0.7',
        tagBg: dark ? '#141419' : '#f1f5f9',
        tagBorder: dark ? 'rgba(28,28,33,0.6)' : 'rgba(226,232,240,0.5)',
        tagText: dark ? '#e2e8f0' : '#1e293b',
        iconBtnBg: dark ? '#16161c' : '#f1f5f9',
        iconBtnBorder: dark ? '#24242b' : '#e2e8f0',
        iconBtnHover: dark ? '#1e1e26' : '#e2e8f0',
        divider: dark ? 'rgba(15,15,20,0.5)' : '#f1f5f9',
        dividerNav: dark ? 'rgba(15,15,20,1)' : '#f1f5f9',
        ctaBg: dark ? '#ffffff' : '#0f172a',
        ctaText: dark ? '#000000' : '#ffffff',
        ctaHover: dark ? '#f1f5f9' : '#1e293b',
        projTagBg: dark ? 'rgba(6,78,59,0.3)' : '#ecfdf5',
        projTagBorder: dark ? 'rgba(6,78,59,0.4)' : '#bbf7d0',
        footerMeta: dark ? '#52525b' : '#94a3b8',
        // footerSub: dark ? '#3f3f46' : '#cbd5e1',
        footerSub: dark ? '#94a3b8' : '#64748b',
        sliderBg: dark ? '#0f172a' : '#e2e8f0',
    };

    // Animation Variant Configurations
    const fadeInUp = {
        hidden: { opacity: 0, y: 35 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
    };

    useEffect(() => {
        const roleInterval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(roleInterval);
    }, []);

    // ─── Shared card style ──────────────────────────────────────────────────────
    const card = {
        background: t.cardBg,
        border: `1px solid ${t.cardBorder}`,
        borderRadius: '1.5rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        transition: 'background 0.3s, border-color 0.3s',
    };
    const cardSm = { ...card, borderRadius: '1rem' };

    return (
        <div className="portfolio-page-root" style={{
            minHeight: '100vh',
            background: t.pageBg,
            color: t.pageText,
            transition: 'background 0.3s, color 0.3s',
            fontFamily: 'ui-sans-serif, system-ui, sans-serif',
            WebkitFontSmoothing: 'antialiased',
            padding: '1.5rem',
            position: 'relative',
            overflowX: 'hidden',
        }}>

            {/* Background Subtle Grid Lines */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none', opacity: t.gridOpacity,
                backgroundImage: `linear-gradient(to right, ${t.gridLine} 1px, transparent 1px), linear-gradient(to bottom, ${t.gridLine} 1px, transparent 1px)`,
                backgroundSize: '2.5rem 2.5rem',
                WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
                maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
            }} />

            <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative', zIndex: 10 }}>

                {/* --- STICKY NAVIGATION BAR --- */}
                <header style={{ position: 'sticky', top: '1rem', zIndex: 50, display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                    <div className="grid-header-inner" style={{ display: 'grid', gridTemplateColumns: '2fr 2fr', gap: '1rem' }}>
                        {/* Status pill */}
                        <div style={{ ...cardSm, borderRadius: '1rem', padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backdropFilter: 'blur(20px)', background: dark ? 'rgba(13,13,17,0.7)' : 'rgba(255,255,255,0.7)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{ height: '0.625rem', width: '0.625rem', borderRadius: '9999px', background: '#10b981', animation: 'pulse 2s infinite', boxShadow: '0 0 8px rgba(16,185,129,0.6)' }} />
                                <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: t.textMuted, fontWeight: 700 }}>
                                    Status: Available for Global Remote Opportunities
                                </span>
                            </div>
                        </div>

                        {/* Nav + theme toggle */}
                        <div className="nav-card-inner" style={{ ...cardSm, borderRadius: '1rem', padding: '0.625rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '1.5rem', backdropFilter: 'blur(20px)', background: dark ? 'rgba(13,13,17,0.7)' : 'rgba(255,255,255,0.7)' }}>
                            <nav style={{ display: 'flex', gap: '0.25rem', fontFamily: 'ui-monospace, monospace', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase' }}>
                                {['Projects', 'Experience', 'Skills'].map((label, i) => (
                                    <a key={i} href={`#${label.toLowerCase()}`} style={{ padding: '0.5rem 0.75rem', borderRadius: '0.5rem', color: t.textMuted, textDecoration: 'none', transition: 'color 0.2s' }}
                                        onMouseEnter={e => e.target.style.color = dark ? '#ffffff' : '#059669'}
                                        onMouseLeave={e => e.target.style.color = t.textMuted}>
                                        {label}
                                    </a>
                                ))}
                            </nav>

                            <button
                                onClick={() => setDark(d => !d)}
                                style={{
                                    padding: '0.625rem', borderRadius: '0.75rem',
                                    background: t.iconBtnBg, border: `1px solid ${t.iconBtnBorder}`,
                                    color: t.textStrong, cursor: 'pointer', transition: 'background 0.2s, border-color 0.2s',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                                }}
                                onMouseEnter={e => e.currentTarget.style.background = t.iconBtnHover}
                                onMouseLeave={e => e.currentTarget.style.background = t.iconBtnBg}
                                aria-label="Switch Theme Mode"
                            >
                                {dark ? <SunIcon /> : <MoonIcon />}
                            </button>
                        </div>
                    </div>
                </header>

                {/* --- HERO AREA WITH INTEGRATED PICTURE --- */}
                <main className="grid-main" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>

                    <motion.section
                        initial="hidden" animate="visible" variants={fadeInUp}
                        style={{ ...card, padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden', minHeight: '440px' }}
                    >
                        <div style={{ position: 'absolute', top: 0, right: 0, width: '18rem', height: '18rem', background: 'rgba(16,185,129,0.05)', borderRadius: '9999px', filter: 'blur(90px)', pointerEvents: 'none' }} />

                        <div className="hero-flex" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1.5rem' }}>
                            <div style={{ maxWidth: '36rem' }}>
                                <span style={{ fontSize: '0.65rem', fontFamily: 'ui-monospace, monospace', textTransform: 'uppercase', letterSpacing: '0.1em', color: t.textMuted, background: t.mutedBg, padding: '0.375rem 0.75rem', borderRadius: '0.375rem', border: `1px solid ${t.mutedBorder}`, fontWeight: 700, display: 'inline-block' }}>
                                    Open to International Contracts & Remote Collaborations
                                </span>
                                <h1 className="hero-title" style={{ fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-0.03em', color: t.textStrong, lineHeight: 1.1, paddingTop: '0.5rem', margin: '0.5rem 0' }}>
                                    Hi, I'm Bright.<br />
                                    <span style={{ color: dark ? '#34d399' : '#059669', display: 'block', marginTop: '0.25rem', transition: 'all 0.5s' }}>
                                        {roles[roleIndex]}
                                    </span>
                                </h1>
                                <p style={{ color: t.textMuted, fontSize: '1.0625rem', lineHeight: 1.6, fontWeight: 500, paddingTop: '0.25rem' }}>
                                    I design high-performance web applications from database foundations up to polished, fully dynamic user experiences. My focus is writing clean, highly scalable source code.
                                </p>
                            </div>

                            {/* Profile picture */}
                            <div style={{ position: 'relative', flexShrink: 0 }}>
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #10b981, #14b8a6)', borderRadius: '1.25rem', filter: 'blur(8px)', opacity: 0.4 }} />
                                <div style={{ position: 'relative', width: '10.5rem', height: '10.5rem', borderRadius: '1.25rem', overflow: 'hidden', border: `2px solid ${t.cardBorder}`, background: t.mutedBg }}>
                                    <img
                                        src="/profile.jpg" alt="Bright"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        onError={e => { e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop"; }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div style={{ paddingTop: '1.5rem' }}>
                            <a href="#work" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                fontSize: '0.65rem', fontFamily: 'ui-monospace, monospace', textTransform: 'uppercase', letterSpacing: '0.1em',
                                background: t.ctaBg, color: t.ctaText, fontWeight: 900,
                                padding: '1rem 1.5rem', borderRadius: '0.75rem', textDecoration: 'none',
                                boxShadow: '0 2px 6px rgba(0,0,0,0.1)', transition: 'background 0.2s, transform 0.2s',
                            }}
                                onMouseEnter={e => { e.currentTarget.style.background = t.ctaHover; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                                onMouseLeave={e => { e.currentTarget.style.background = t.ctaBg; e.currentTarget.style.transform = 'translateY(0)'; }}
                            >
                                Explore My Portfolio ↓
                            </a>
                        </div>
                    </motion.section>

                    {/* RESUME & BIO CARD */}
                    <motion.section
                        initial="hidden" animate="visible" variants={fadeInUp}
                        style={{ ...card, padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '440px' }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${t.dividerNav}`, paddingBottom: '0.75rem' }}>
                                <h3 style={{ fontSize: '0.65rem', fontFamily: 'ui-monospace, monospace', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: t.textMuted }}>Professional Networks</h3>
                                <span style={{ height: '0.375rem', width: '0.375rem', borderRadius: '9999px', background: '#10b981' }} />
                            </div>
                            <p style={{ fontSize: '0.875rem', color: t.textMuted, fontWeight: 500, lineHeight: 1.6 }}>
                                Take a look at my verified source code repositories, professional networks, or save a copy of my credentials.
                            </p>
                        </div>

                        {/* Resume box */}
                        <div style={{ background: t.mutedBg, border: `1px solid ${t.mutedBorder}`, borderRadius: '1rem', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: t.textStrong }}>
                                <FileTextIcon />
                                <span style={{ fontSize: '0.65rem', fontFamily: 'ui-monospace, monospace', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Formal Credentials</span>
                            </div>
                            <p style={{ fontSize: '0.75rem', color: t.textMuted, lineHeight: 1.6, fontWeight: 500 }}>
                                Includes detailed structural data covering my complete technical proficiency matrices and professional background histories.
                            </p>
                            <a href="/resume.pdf" download="Bright_Software_Engineer_Resume.pdf" style={{
                                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                padding: '0.75rem 1rem', borderRadius: '0.75rem', background: '#059669',
                                color: '#ffffff', fontWeight: 700, fontSize: '0.875rem', fontFamily: 'ui-monospace, monospace',
                                textDecoration: 'none', transition: 'background 0.2s',
                            }}
                                onMouseEnter={e => e.currentTarget.style.background = '#047857'}
                                onMouseLeave={e => e.currentTarget.style.background = '#059669'}
                            >
                                Download Resume (PDF)
                            </a>
                        </div>

                        <div style={{ display: 'flex', gap: '0.5rem', fontFamily: 'ui-monospace, monospace', fontSize: '0.65rem', fontWeight: 700, paddingTop: '0.5rem' }}>
                            {[['GitHub', 'https://github.com'], ['LinkedIn', 'https://linkedin.com']].map(([label, href]) => (
                                <a key={label} href={href} target="_blank" rel="noreferrer" style={{
                                    flex: 1, textAlign: 'center', padding: '0.75rem', borderRadius: '0.75rem',
                                    background: t.tagBg, border: `1px solid ${t.cardBorder}`,
                                    color: t.textMuted, textDecoration: 'none', transition: 'border-color 0.2s',
                                }}
                                    onMouseEnter={e => e.currentTarget.style.borderColor = '#10b981'}
                                    onMouseLeave={e => e.currentTarget.style.borderColor = t.cardBorder}
                                >
                                    {label}
                                </a>
                            ))}
                        </div>
                    </motion.section>
                </main>

                {/* --- STATS LAYER --- */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
                    className="grid-stats"
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}
                >
                    {[
                        { value: "05+", label: "Completed Products" },
                        { value: "100%", label: "Mobile-First Layouts" },
                        { value: "Secure", label: "Architecture Layouts" },
                        { value: "Optimized", label: "Database Operations" }
                    ].map((stat, idx) => (
                        <motion.div variants={fadeInUp} key={idx} style={{ ...cardSm, padding: '1rem', textAlign: 'center' }}>
                            <p style={{ fontSize: '2.25rem', fontWeight: 900, color: dark ? '#34d399' : '#059669', letterSpacing: '-0.03em' }}>{stat.value}</p>
                            <p style={{ fontSize: '0.6rem', fontFamily: 'ui-monospace, monospace', textTransform: 'uppercase', letterSpacing: '0.15em', color: t.textMuted, fontWeight: 700, marginTop: '0.25rem' }}>{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.section>

                {/* --- PROJECTS --- */}
                <section id="projects" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        style={{ ...cardSm, padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                    >
                        <h2 style={{ fontSize: '0.65rem', fontFamily: 'ui-monospace, monospace', textTransform: 'uppercase', letterSpacing: '0.1em', color: t.textMuted, fontWeight: 900 }}>
                            📂 Featured Production Applications
                        </h2>
                        <span style={{ fontSize: '0.65rem', fontFamily: 'ui-monospace, monospace', fontWeight: 700, background: t.tagBg, padding: '0.25rem 0.625rem', borderRadius: '0.375rem', color: t.tagText, border: `1px solid ${t.cardBorder}` }}>
                            Total Showcase (05)
                        </span>
                    </motion.div>

                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={staggerContainer}
                        className="grid-projects"
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}
                    >
                        {projects.map((project, idx) => (
                            <motion.article
                                variants={fadeInUp}
                                whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.2 } }}
                                key={idx}
                                style={{ ...card, padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '490px', cursor: 'default' }}
                                onMouseEnter={e => e.currentTarget.style.borderColor = dark ? '#4b5563' : '#10b981'}
                                onMouseLeave={e => e.currentTarget.style.borderColor = t.cardBorder}
                            >
                                <ProjectImageSlider images={project.images} title={project.title} />

                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1, paddingTop: '0.75rem', gap: '0.75rem' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                                        <span style={{ fontSize: '0.6rem', fontFamily: 'ui-monospace, monospace', textTransform: 'uppercase', fontWeight: 900, letterSpacing: '0.15em', color: dark ? '#34d399' : '#059669', background: t.projTagBg, border: `1px solid ${t.projTagBorder}`, padding: '0.25rem 0.625rem', borderRadius: '0.375rem', display: 'inline-block' }}>
                                            {project.category}
                                        </span>
                                        <h3 style={{ fontSize: '1.125rem', fontWeight: 900, letterSpacing: '-0.02em', color: t.textStrong, margin: 0, transition: 'color 0.2s' }}>
                                            {project.title}
                                        </h3>
                                        <p style={{ fontSize: '0.875rem', color: t.textMuted, lineHeight: 1.6, fontWeight: 500, margin: 0 }}>
                                            {project.desc}
                                        </p>
                                    </div>

                                    <div style={{ paddingTop: '0.875rem', borderTop: `1px solid ${t.divider}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <a href={project.link} target="_blank" rel="noreferrer" style={{
                                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                            fontSize: '0.65rem', fontFamily: 'ui-monospace, monospace', fontWeight: 700,
                                            color: t.textStrong, textDecoration: 'none',
                                            background: t.tagBg, border: `1px solid ${t.cardBorder}`,
                                            padding: '0.625rem 0.875rem', borderRadius: '0.75rem', transition: 'color 0.2s, transform 0.2s',
                                        }}
                                            onMouseEnter={e => { e.currentTarget.style.color = dark ? '#34d399' : '#059669'; e.currentTarget.style.transform = 'scale(1.02)'; }}
                                            onMouseLeave={e => { e.currentTarget.style.color = t.textStrong; e.currentTarget.style.transform = 'scale(1)'; }}
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
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
                    id="experience"
                    className="grid-experience"
                    style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem' }}
                >
                    <div style={{ ...cardSm, padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <h3 style={{ fontSize: '0.65rem', fontFamily: 'ui-monospace, monospace', textTransform: 'uppercase', letterSpacing: '0.1em', color: dark ? '#34d399' : '#059669', fontWeight: 900, margin: 0 }}>Professional Timeline</h3>
                            <p style={{ fontSize: '0.875rem', color: t.textMuted, lineHeight: 1.6, fontWeight: 500, margin: 0 }}>
                                A high-level breakdown of my development history, engineering milestones, and ongoing team involvement.
                            </p>
                        </div>
                        <div style={{ fontSize: '0.6875rem', fontFamily: 'ui-monospace, monospace', color: t.footerMeta }}>VERIFIED WORK HISTORY</div>
                    </div>

                    <div style={{ ...cardSm, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {timeline.map((item, idx) => (
                            <div key={idx} className="experience-row" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem', paddingBottom: idx < timeline.length - 1 ? '1.25rem' : 0, borderBottom: idx < timeline.length - 1 ? `1px solid ${t.divider}` : 'none' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', maxWidth: '36rem' }}>
                                    <h4 style={{ fontSize: '1.125rem', fontWeight: 900, letterSpacing: '-0.02em', color: t.textStrong, margin: 0 }}>{item.role}</h4>
                                    <p style={{ fontSize: '0.875rem', fontFamily: 'ui-monospace, monospace', fontWeight: 700, color: dark ? '#34d399' : '#059669', margin: 0 }}>{item.company}</p>
                                    <p style={{ fontSize: '0.875rem', color: t.textMuted, fontWeight: 500, lineHeight: 1.6, margin: '0.375rem 0 0' }}>{item.desc}</p>
                                </div>
                                <span style={{ fontSize: '0.65rem', fontFamily: 'ui-monospace, monospace', fontWeight: 700, background: t.tagBg, padding: '0.25rem 0.625rem', borderRadius: '0.375rem', color: t.textMuted, border: `1px solid ${t.cardBorder}`, whiteSpace: 'nowrap', flexShrink: 0 }}>
                                    {item.period}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* --- TECH SKILLS GRID --- */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
                    id="skills"
                    className="grid-skills"
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}
                >
                    {skills.map((skillGroup, idx) => (
                        <motion.div variants={fadeInUp} key={idx} style={{ ...cardSm, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <h3 style={{ fontSize: '0.65rem', fontFamily: 'ui-monospace, monospace', textTransform: 'uppercase', letterSpacing: '0.1em', color: dark ? '#34d399' : '#059669', fontWeight: 900, margin: 0 }}>{skillGroup.category}</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', paddingTop: '0.25rem' }}>
                                {skillGroup.items.map((skill, sIdx) => (
                                    <span key={sIdx} style={{ fontSize: '0.75rem', padding: '0.375rem 0.75rem', fontFamily: 'ui-monospace, monospace', fontWeight: 700, borderRadius: '0.5rem', background: t.tagBg, color: t.tagText, border: `1px solid ${t.tagBorder}` }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.section>

                {/* --- FOOTER CONTACT CARD --- */}
                <motion.footer
                    initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                    className="grid-footer"
                    style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '1rem' }}
                >
                    <div className="footer-card-inner" style={{ ...cardSm, padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '-0.02em', color: t.textStrong, margin: 0 }}>Let's build something beautiful together.</h3>
                            <p style={{ fontSize: '0.875rem', color: t.textMuted, fontWeight: 500, margin: 0 }}>Available for specialized project consulting, engineering contracts, or corporate team roles.</p>
                        </div>
                        <a href="mailto:contact@bright.dev" style={{
                            whiteSpace: 'nowrap', padding: '1rem 1.5rem', borderRadius: '0.75rem',
                            background: t.ctaBg, color: t.ctaText, fontWeight: 900,
                            fontSize: '0.65rem', fontFamily: 'ui-monospace, monospace', textTransform: 'uppercase', letterSpacing: '0.1em',
                            textDecoration: 'none', flexShrink: 0, transition: 'background 0.2s, transform 0.2s',
                        }}
                            onMouseEnter={e => { e.currentTarget.style.background = t.ctaHover; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = t.ctaBg; e.currentTarget.style.transform = 'translateY(0)'; }}
                        >
                            Get In Touch
                        </a>
                    </div>

                    <div style={{ ...cardSm, padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: '0.125rem' }}>
                        <span style={{ fontSize: '0.75rem', fontFamily: 'ui-monospace, monospace', fontWeight: 700, color: t.footerMeta }}>© {new Date().getFullYear()} BRIGHT.DEV</span>
                        {/* <span style={{ fontSize: '0.625rem', fontFamily: 'ui-monospace, monospace', color: t.footerSub, letterSpacing: '0.1em' }}>HIGH-CONTRAST BENTO V5</span> */}
                        <span style={{ fontSize: '0.75rem', fontWeight: 500, color: t.footerSub }}>
                            Crafted with React & Framer Motion
                        </span>
                    </div>
                </motion.footer>

            </div>

            <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @media (max-width: 768px) {
          .portfolio-page-root {
            padding: 1rem !important;
          }
          .grid-header-inner {
            grid-template-columns: 1fr !important;
          }
          .nav-card-inner {
            justify-content: space-between !important;
            gap: 1rem !important;
            width: 100% !important;
          }
          .grid-main {
            grid-template-columns: 1fr !important;
          }
          .hero-flex {
            flex-direction: column-reverse !important;
            align-items: center !important;
            text-align: center !important;
            gap: 2rem !important;
          }
          .hero-title {
            font-size: 2.5rem !important;
          }
          .grid-stats {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .grid-projects {
            grid-template-columns: 1fr !important;
          }
          .grid-experience {
            grid-template-columns: 1fr !important;
          }
          .experience-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.5rem !important;
          }
          .grid-skills {
            grid-template-columns: 1fr !important;
          }
          .grid-footer {
            grid-template-columns: 1fr !important;
          }
          .footer-card-inner {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
        </div>
    );
}