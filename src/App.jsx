import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    ArrowDown, ArrowUpRight, BrainCircuit, Code2, Database, ExternalLink,
    MapPin, Menu, Sparkles, X,
} from 'lucide-react';
import { portfolioData } from './data/portfolioData';

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Work', href: '#work' },
    { label: 'Journey', href: '#journey' },
];

const skillGroups = [
    { symbol: '</>', title: 'Languages', items: portfolioData.skills.programming, tone: 'mint' },
    { symbol: 'AI', title: 'ML / DL frameworks', items: ['Scikit-Learn', 'TensorFlow', 'Keras', 'NLP', 'ANN', 'CNN', 'RNN', 'LSTM'], tone: 'gold' },
    { symbol: '{ }', title: 'Data & backend', items: portfolioData.skills.data.concat(portfolioData.skills.backend), tone: 'coral' },
    { symbol: '⌘', title: 'Tools & workflow', items: portfolioData.skills.tools, tone: 'blue' },
];

const projectArt = {
    'plant-disease': { label: 'VISION / 99.15%', symbol: '◉', className: 'art-plant' },
    'cattle-breed': { label: 'VISION / TOP 3', symbol: '⌁', className: 'art-cattle' },
    'movie-recommendation': { label: 'NLP / SIMILARITY', symbol: '✦', className: 'art-movie' },
    'ipl-win': { label: 'LIVE / 93%', symbol: '↗', className: 'art-ipl' },
    'kitabkhana': { label: 'FULL STACK / STORE', symbol: '▣', className: 'art-books' },
    'rag-agent': { label: 'RAG / AI AGENT', symbol: '✳', className: 'art-rag' },
};

const reveal = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

function Cursor() {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [active, setActive] = useState(false);

    useEffect(() => {
        const move = (event) => setPosition({ x: event.clientX, y: event.clientY });
        const over = (event) => setActive(Boolean(event.target.closest('a, button, .magnetic')));
        window.addEventListener('mousemove', move);
        window.addEventListener('mouseover', over);
        return () => {
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mouseover', over);
        };
    }, []);

    return <div className={`cursor-orbit ${active ? 'is-active' : ''}`} style={{ left: position.x, top: position.y }} />;
}

function SectionLabel({ number, children }) {
    return <p className="section-label"><span>{number}</span>{children}</p>;
}

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeProject, setActiveProject] = useState('All');
    const [activeSection, setActiveSection] = useState('about');
    const categories = ['All', ...new Set(portfolioData.projects.map((project) => project.category))];
    const filteredProjects = activeProject === 'All'
        ? portfolioData.projects
        : portfolioData.projects.filter((project) => project.category === activeProject);

    useEffect(() => {
        const onScroll = () => {
            const visible = navItems.find(({ href }) => {
                const element = document.querySelector(href);
                if (!element) return false;
                const bounds = element.getBoundingClientRect();
                return bounds.top <= 180 && bounds.bottom >= 180;
            });
            if (visible) setActiveSection(visible.href.slice(1));
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <div className="portfolio-shell">
            <Cursor />
            <div className="noise" />
            <header className="site-header">
                <a href="#top" className="wordmark magnetic">B<span>/</span>M</a>
                <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`}>
                    {navItems.map((item) => <a key={item.href} href={item.href} onClick={closeMenu} className={activeSection === item.href.slice(1) ? 'is-active' : ''}>{item.label}</a>)}
                    <a href="#contact" onClick={closeMenu} className="nav-contact">Let's talk <ArrowUpRight size={15} /></a>
                </nav>
                <button className="menu-toggle magnetic" type="button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
            </header>

            <main id="top">
                <section className="hero section-shell">
                    <div className="hero-grid" />
                    <motion.div className="hero-copy" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
                        <motion.p className="eyebrow" variants={reveal}><span className="status-dot" />{portfolioData.availability}</motion.p>
                        <motion.p className="hero-kicker" variants={reveal}>Hello, I'm Balwa.</motion.p>
                        <motion.h1 variants={reveal}>I turn <em>data</em><br />into <strong>direction.</strong></motion.h1>
                        <motion.p className="hero-description" variants={reveal}>{portfolioData.introduction}</motion.p>
                        <motion.div className="hero-actions" variants={reveal}><a className="button button-primary magnetic" href="#work">Explore selected work <ArrowUpRight size={18} /></a><a className="text-link magnetic" href="#contact">Start a conversation <span>↗</span></a></motion.div>
                    </motion.div>

                    <motion.div className="hero-portrait" initial={{ opacity: 0, scale: 0.88, rotate: 4 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}>
                        <div className="portrait-frame"><img src={portfolioData.profileImage} alt={`${portfolioData.name} portrait`} /><span className="portrait-corner corner-top" /><span className="portrait-corner corner-bottom" /></div>
                        <div className="portrait-note"><Sparkles size={15} /><span>Building with<br /><b>curiosity + code</b></span></div><span className="hero-index">01 / 04</span>
                    </motion.div>
                    <a href="#about" className="scroll-cue magnetic"><span>Scroll to explore</span><ArrowDown size={16} /></a>
                </section>

                <section id="about" className="intro section-shell section-block"><div className="section-aside"><SectionLabel number="01">The person</SectionLabel><span className="aside-rule" /></div><motion.div className="intro-content" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={reveal}><p className="display-copy">I am a <span>machine learning engineer</span> who enjoys making complex ideas feel clear, useful, and human.</p><div className="intro-details"><p>My work lives at the intersection of intelligent systems, thoughtful interfaces, and the messy datasets that make both worth building.</p><div className="education-stamp"><span className="stamp-label">Currently learning at</span><strong>{portfolioData.about.education.institution}</strong><span>{portfolioData.about.education.degree} · {portfolioData.about.education.period}</span></div></div></motion.div></section>

                <section id="skills" className="skills-wall section-shell section-block"><div className="section-heading"><div><SectionLabel number="02">The toolkit</SectionLabel><h2>The tools<br /><i>behind the work.</i></h2></div><p>A practical stack for moving from raw inputs to useful, reliable products.</p></div><div className="skill-groups">{skillGroups.map((group) => <motion.article className={`skill-group skill-${group.tone}`} key={group.title} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={reveal}><div className="skill-group-head"><span className="skill-symbol">{group.symbol}</span><h3>{group.title}</h3></div><div className="skill-chips">{group.items.map((item) => <span className="skill-chip" key={item}><i>+</i>{item}</span>)}</div></motion.article>)}</div></section>

                <section id="work" className="work section-shell section-block"><div className="section-heading work-heading"><div><SectionLabel number="03">The work</SectionLabel><h2>Selected<br /><i>experiments.</i></h2></div><p>Systems, models, and products built to understand a problem better, then make it useful.</p></div><div className="filter-row">{categories.map((category) => <button key={category} className={`filter-button magnetic ${activeProject === category ? 'is-selected' : ''}`} onClick={() => setActiveProject(category)}>{category}</button>)}</div><motion.div className="project-grid" layout><AnimatePresence mode="popLayout">{filteredProjects.slice(0, 6).map((project, index) => { const art = projectArt[project.id] || { label: project.category, symbol: '✦', className: 'art-default' }; return <motion.article className="project-card-new" key={project.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.45, delay: index * 0.04 }}><div className={`project-visual ${art.className}`}><span>{art.label}</span><b>{art.symbol}</b><i /></div><div className="project-card-body"><div className="project-card-meta"><span className="project-category">{project.category}</span><span>0{index + 1}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-card-bottom"><div className="project-stack">{project.technologies.slice(0, 3).map((technology) => <span key={technology}>{technology}</span>)}</div><a className="project-link magnetic" href={project.github || project.kaggle || '#'} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><ExternalLink size={18} /></a></div></div></motion.article> })}</AnimatePresence></motion.div></section>

                <section id="journey" className="journey section-shell section-block"><div className="section-heading"><div><SectionLabel number="04">The journey</SectionLabel><h2>A work in<br /><i>progress.</i></h2></div><p>Every project adds a new question to the list. That is the good part.</p></div><div className="timeline">{portfolioData.experience.map((experience) => <motion.div className="timeline-item" key={experience.company} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={reveal}><span className="timeline-date">{experience.date}</span><div className="timeline-dot" /><div><span className="timeline-company">{experience.company} · {experience.location}</span><h3>{experience.role}</h3><div className="timeline-tags">{experience.description.slice(0, 5).map((item) => <span key={item}>{item}</span>)}</div></div></motion.div>)}</div></section>

                <section id="contact" className="contact section-shell section-block"><div className="contact-panel"><div className="contact-orbit orbit-one" /><div className="contact-orbit orbit-two" /><SectionLabel number="05">The next chapter</SectionLabel><h2>Let's make<br /><i>something useful.</i></h2><p className="contact-intro">Have an idea, a messy dataset, or a problem that needs a second brain? I would love to hear about it.</p><a className="contact-email magnetic" href={`mailto:${portfolioData.socialLinks.email}`}>{portfolioData.socialLinks.email} <ArrowUpRight /></a><div className="contact-links"><a className="contact-link" href={`tel:${portfolioData.socialLinks.phone.replaceAll(' ', '')}`}><span className="contact-link-icon">☎</span><span><small>Call me</small>{portfolioData.socialLinks.phone}</span><ArrowUpRight size={17} /></a><a className="contact-link" href={portfolioData.socialLinks.kaggle} target="_blank" rel="noreferrer"><span className="contact-link-icon">K</span><span><small>Explore datasets</small>Kaggle</span><ArrowUpRight size={17} /></a><a className="contact-link" href={portfolioData.socialLinks.github} target="_blank" rel="noreferrer"><span className="contact-link-icon">⌘</span><span><small>See the code</small>GitHub</span><ArrowUpRight size={17} /></a><a className="contact-link" href={portfolioData.socialLinks.linkedin} target="_blank" rel="noreferrer"><span className="contact-link-icon">in</span><span><small>Connect professionally</small>LinkedIn</span><ArrowUpRight size={17} /></a><a className="contact-link" href={portfolioData.resumeUrl} target="_blank" rel="noreferrer"><span className="contact-link-icon">↗</span><span><small>Read the full story</small>Resume</span><ArrowUpRight size={17} /></a></div><div className="contact-footer"><span><MapPin size={16} /> Gujarat, India</span><span>Available for opportunities</span></div></div></section>
            </main>

            <footer className="site-footer section-shell">
                <div className="footer-main">
                    <a href="#top" className="footer-brand magnetic">B<span>/</span>M</a>
                    <div className="footer-meta"><span>© {new Date().getFullYear()} {portfolioData.name}</span><span>Gujarat, India</span></div>
                    <a href="#top" className="back-to-top magnetic">Back to top <ArrowUpRight size={16} /></a>
                </div>
            </footer>
        </div>
    );
}

export default App;
