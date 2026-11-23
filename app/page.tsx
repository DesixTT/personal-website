"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Cpu,
  Cloud,
  Server,
  Shield,
  Award,
  GraduationCap,
  Briefcase,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  Copy,
  Check,
  ChevronRight,
  Sparkles,
  Code2,
  Database,
  Layers,
  Menu,
  X,
  ArrowUpRight,
  FileText,
  Zap,
  Network,
  Lock,
  Trophy,
  ArrowRight,
  Sliders,
  CheckCircle2,
} from "lucide-react";

// --- TYPES ---
interface Project {
  id: string;
  title: string;
  badge: string;
  category: "systems" | "security" | "consulting";
  oneLiner: string;
  featuredMetric: string;
  tags: string[];
}

interface TimelineItem {
  period: string;
  role: string;
  institution: string;
  location: string;
  badge?: string;
  type: "academic" | "work";
  highlights: string[];
  skills: string[];
}

interface HonorItem {
  title: string;
  rank: string;
  prize?: string;
  description: string;
}

// --- DATA DEFINITIONS ---

const PROJECTS: Project[] = [
  {
    id: "etravel",
    title: "ETravel Recommendation Engine",
    badge: "BSc Thesis Project",
    category: "systems",
    oneLiner:
      "An intelligent travel platform that uses a 5D vector space model and online reinforcement learning to provide personalized, Pareto-optimal travel packages based on user swipe feedback.",
    featuredMetric: "24x Faster",
    tags: ["FastAPI", "Python", "Scikit-Learn", "Vector Space", "Hammer.js", "Online RL", "Pareto Frontier"],
  },
  {
    id: "silurus",
    title: "Silurus Digital Archive",
    badge: "Consulting Production",
    category: "consulting",
    oneLiner:
      "A secure, enterprise B2B digital archiving platform featuring granular access control, rapid document retrieval, and a modern UX for managing unstructured records.",
    featuredMetric: "70% Faster",
    tags: ["Next.js", "TypeScript", "Document UX/UI", "Enterprise Search", "REST APIs", "Tailwind CSS"],
  },
  {
    id: "procad",
    title: "Procad Digitalization Workflow",
    badge: "B2B Production Tool",
    category: "consulting",
    oneLiner:
      "A secure B2B tool that automates industrial engineering document processing through deterministic state-machine workflows with tamper-evident audit trails.",
    featuredMetric: "65% Saved",
    tags: ["B2B Tooling", "Workflow Automation", "Secure Processing", "TypeScript", "State Machines"],
  },
  {
    id: "hermes",
    title: "Hermes Cybersecurity Retro Engine",
    badge: "1st Place Winner ($1,200)",
    category: "security",
    oneLiner:
      "A retro-style game engine built under strict cybersecurity constraints, featuring isolated memory sandboxing, opcode verification, and pointer bounds checking.",
    featuredMetric: "1st Place",
    tags: ["Cybersecurity", "C++", "Memory Sandbox", "Secure Coding", "Binary Analysis", "Reverse Defense"],
  },
];

const TIMELINE: TimelineItem[] = [
  {
    period: "2026 — 2028",
    role: "MSc in Cloud, Network & Infrastructure with HPC (CNIHPC)",
    institution: "KTH Royal Institute of Technology",
    location: "Stockholm, Sweden",
    type: "academic",
    highlights: [
      "Hands-on configuration of Autonomous Systems (AS) integrated with OSPF and RIP routing across both inter-domain and intra-domain connections.",
      "Advanced Internetworking: multi-area OSPF, route redistribution between dynamic protocols, policy routing, and CIDR subnet allocation.",
      "Packet tracing and protocol analysis using Wireshark to diagnose metric divergence, routing loops, and convergence behaviors in complex network topologies.",
      "Specializing in High-Performance Computing (HPC), distributed architectures, and scalable cloud network infrastructure.",
    ],
    skills: ["Autonomous Systems", "OSPF & RIP", "IK2215", "Inter/Intra Domain", "HPC", "Cloud Infrastructure"],
  },
  {
    period: "2023 — 2026",
    role: "BSc in Computer Science",
    institution: "Babeș-Bolyai University (UBB)",
    location: "Cluj-Napoca, Romania",
    type: "academic",
    highlights: [
      "Rigorous foundations in Algorithms & Data Structures, Operating Systems, Computer Architecture, and Object-Oriented Software Design.",
      "Authored BSc Thesis on 5D Vector Space recommender algorithms and online reinforcement learning loops (ETravel).",
      "Focused coursework in algorithmic design, systems programming, and network communication protocols.",
    ],
    skills: ["Algorithms & DSA", "Operating Systems", "C++", "Java", "Python", "Vector Mathematics"],
  },
  {
    period: "Research Focus",
    role: "Research Assistant ",
    institution: "USVT",
    location: "Timișoara, Romania",
    type: "work",
    highlights: [
      "Engineered automated algorithmic pipelines for large-scale computational datasets and scientific analysis.",
      "Designed and deployed performant REST API interfaces for cross-lab data synchronization and distributed query workloads.",
      "Optimized data transformation pipelines, reducing processing times for complex multi-parameter simulations.",
    ],
    skills: ["REST APIs", "Python", "Algorithmic Pipelines", "Scientific Data", "API Design"],
  },
  {
    period: "Industry Experience",
    role: "Software Engineering Intern",
    institution: "Raiffeisen Bank",
    location: "Cluj-Napoca, Romania (Hybrid)",
    type: "work",
    highlights: [
      "Contributed to core banking Java backend systems ensuring ACID compliance, transaction safety, and high-concurrency throughput.",
      "Conducted extensive SQL query profiling, index optimization, and database refactoring to eliminate critical database bottlenecks.",
      "Collaborated within Agile/Scrum cross-functional sprints, writing production unit tests and CI/CD quality assurance checks.",
    ],
    skills: ["Java Backend", "SQL Optimization", "Relational Databases", "Agile / Scrum", "Enterprise Systems"],
  },
];

const HONORS: HonorItem[] = [
  {
    title: "Hermes Hackathon",
    rank: "1st Place Winner",
    prize: "$1,200 Prize",
    description:
      "Captured 1st Place among 30+ engineering squads by architecting a secure retro execution engine equipped with sandboxed memory boundaries and proactive exploit resistance under intense time constraints.",
  },
  {
    title: "National Olympiad of Technology",
    rank: "4th Place Nationwide",
    prize: "National Distinction",
    description:
      "Ranked 4th in the entire country for software engineering excellence, algorithmic problem solving, and complex desktop architecture using C# and .NET frameworks.",
  },
  {
    title: "Oeconomicus Napocensis Competition",
    rank: "10 / 10 Perfect Score",
    prize: "Full Academic Scholarship",
    description:
      "Awarded highest distinction with an unblemished 10/10 mark, securing full merit-based scholarship status upon entrance into Babeș-Bolyai University's computer science faculty.",
  },
  {
    title: "UVT Computer Science Admission",
    rank: "10 / 10 ADMISSION GRADE",
    prize: "Full Scholarship",
    description:
      "Ranked 1st in the admission exam for the Computer Science section at West University of Timisoara (UVT), achieving a perfect 10/10 grade based on previous Olympiad results and securing a full merit-based scholarship.",
  },
];

const SKILL_CATEGORIES = [
  {
    category: "Languages & Core",
    skills: ["Python", "C++", "C#", "Java", "JavaScript / TypeScript", "SQL"],
  },
  {
    category: "Frameworks",
    skills: ["Node.js", "React", "FastAPI", "Scikit-Learn"],
  },
  {
    category: "Systems & Infra",
    skills: ["Networking", "CUDA", "Linux", "Docker"],
  },
];

export default function PortfolioPage() {
  // --- STATE ---
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Copy Email Handler
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("mihneavoda51@yahoo.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  // Copy Phone Handler
  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText("+40 721 084 689");
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    } catch {
      // Fallback
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  // Active section spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "projects", "experience", "honors", "skills", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => {
          if (activeFilter === "systems") return p.category === "systems";
          if (activeFilter === "security") return p.category === "security";
          if (activeFilter === "consulting") return p.category === "consulting";
          return true;
        });

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans relative selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Dynamic Background Glow & Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #10B981 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/[0.05] blur-[150px] rounded-full" />
      </div>

      {/* --- HEADER & NAVIGATION --- */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#090D16]/80 border-b border-slate-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:border-slate-700 transition-colors">
              <Terminal className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <span className="text-base font-semibold tracking-tight text-slate-100 group-hover:text-emerald-400 transition-colors">
                Mihnea Vodă
              </span>
              <span className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-slate-400 tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                SWE_CONSULTANT // KTH_HPC
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800 backdrop-blur-md">
            {[
              { id: "projects", label: "Projects" },
              { id: "experience", label: "Experience" },
              { id: "honors", label: "Honors" },
              { id: "skills", label: "Skills" },
              { id: "contact", label: "Contact" },
            ].map((nav) => {
              const isActive = activeSection === nav.id;
              return (
                <a
                  key={nav.id}
                  href={`#${nav.id}`}
                  className={`px-4 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/40 shadow-sm"
                      : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/40"
                  }`}
                >
                  {nav.label}
                </a>
              );
            })}
          </nav>

          {/* External Social Links & Quick CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://github.com/DesixTT"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-slate-800/80 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/mihnea-voda-268953289/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-slate-800/80 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white hover:bg-slate-100 text-slate-950 text-xs font-semibold tracking-wide transition-colors shadow-sm"
            >
              <Mail className="w-3.5 h-3.5 text-slate-900" />
              <span>GET IN TOUCH</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-emerald-400 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-b border-slate-800 bg-[#090D16]/95 backdrop-blur-xl px-4 py-5"
            >
              <div className="flex flex-col gap-2">
                {[
                  { id: "projects", label: "Projects" },
                  { id: "experience", label: "Experience" },
                  { id: "honors", label: "Honors" },
                  { id: "skills", label: "Skills" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 rounded-lg text-sm font-mono uppercase tracking-wider text-slate-300 hover:text-emerald-400 hover:bg-slate-900/60"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <a
                      href="https://github.com/DesixTT"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mihnea-voda-268953289/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-mono text-xs font-semibold"
                  >
                    CONTACT ME
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative pt-36 pb-20 md:pt-44 md:pb-28 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Subtle Muted Status Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/80 text-xs text-slate-400 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Available for software engineering &amp; web consulting</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-100 leading-[1.2] mb-6"
            >
              Software Engineer &amp; Web Consultant
              <span className="block text-slate-400 font-normal text-xl sm:text-2xl md:text-3xl mt-2.5">
                Full-Stack Developer &amp; <span className="text-emerald-400 font-medium">Systems Enthusiast</span>
              </span>
            </motion.h1>

            {/* Academic Lineage Flow Diagram / Subtext */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-900/50 border border-slate-800/90 rounded-xl p-6 sm:p-8 my-8 sm:my-10 shadow-sm"
            >
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-5 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                <span>Academic Trajectory &amp; Specialization</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] items-center gap-4 md:gap-6 text-sm text-slate-200">
                <div className="p-4 rounded-lg bg-slate-950/40 border border-slate-800/80 flex items-start sm:items-center gap-3">
                  <span className="px-2 py-0.5 rounded text-xs font-mono font-medium bg-slate-800 text-slate-300 border border-slate-700">
                    BSc
                  </span>
                  <div>
                    <div className="font-medium text-slate-100">Computer Science</div>
                    <div className="text-xs text-slate-400">Babeș-Bolyai University · 2023 — 2026</div>
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center text-slate-600">
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </div>
                <div className="flex md:hidden items-center justify-center text-slate-600 py-1">
                  <ArrowRight className="w-4 h-4 text-slate-500 rotate-90" />
                </div>

                <div className="p-4 rounded-lg bg-slate-950/40 border border-slate-800/80 flex items-start sm:items-center gap-3">
                  <span className="px-2 py-0.5 rounded text-xs font-mono font-medium bg-emerald-950/40 text-emerald-400 border border-emerald-900/50">
                    MSc
                  </span>
                  <div>
                    <div className="font-medium text-slate-100">
                      Cloud, Network &amp; Infrastructure with HPC (CNIHPC)
                    </div>
                    <div className="text-xs text-slate-400">KTH Royal Institute of Technology · 2026 — 2028</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bio Prose */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed mb-10"
            >
              Software engineer with a background in secure backend development and database optimization, combined with freelance consulting experience delivering production B2B web platforms. Currently pursuing graduate studies at KTH Royal Institute of Technology with an academic focus on high-performance computing systems, distributed architectures, and network infrastructure.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3.5"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-slate-100 text-slate-950 text-sm font-semibold transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4 text-slate-900" />
                <span>Get in Touch</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-mono font-medium transition-colors shadow-sm"
                title="Copy Email Address to Clipboard"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-slate-950" /> : <Copy className="w-3.5 h-3.5 text-slate-950" />}
                <span>{copiedEmail ? "EMAIL COPIED" : "COPY EMAIL"}</span>
              </button>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 hover:border-slate-600 bg-slate-900/60 hover:bg-slate-800 text-slate-200 hover:text-white text-sm font-medium transition-colors"
              >
                <span>Featured Projects</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 pt-8 border-t border-slate-800/70"
            >
              {[
                { label: "Vector Latency Optimization", val: "24x", sub: "FastAPI / Scikit-Learn" },
                { label: "Hackathon Winner", val: "1st Place", sub: "Hermes $1,200 Prize" },
                { label: "National Olympiad (C#)", val: "4th Place", sub: "Nationwide Contest" },
                { label: "Graduate HPC Focus", val: "KTH", sub: "Stockholm, Sweden" },
              ].map((stat, i) => (
                <div key={i} className="py-2">
                  <div className="text-2xl font-mono font-medium text-slate-100 tracking-tight">
                    {stat.val}
                  </div>
                  <div className="text-xs font-medium text-slate-300 mt-1">{stat.label}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </motion.div>

            {/* Core Competencies & Tech Stack Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 whitespace-nowrap">
                <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Core Competencies</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { name: "Python", icon: <Terminal className="w-3 h-3 text-emerald-400" /> },
                  { name: "FastAPI", icon: <Zap className="w-3 h-3 text-emerald-400" /> },
                  { name: "JavaScript / TypeScript", icon: <Code2 className="w-3 h-3 text-emerald-400" /> },
                  { name: "SQL & Relational DBs", icon: <Database className="w-3 h-3 text-emerald-400" /> },
                  { name: "React & Next.js", icon: <Layers className="w-3 h-3 text-emerald-400" /> },
                  { name: "Cybersecurity & Sandboxing", icon: <Shield className="w-3 h-3 text-emerald-400" /> },
                  { name: "Distributed Systems & HPC", icon: <Network className="w-3 h-3 text-emerald-400" /> },
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-mono hover:border-slate-700 hover:text-white transition-colors"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FEATURED PROJECTS --- */}
      <section id="projects" className="py-24 relative z-10 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
                <Terminal className="w-4 h-4" />
                <span>Engineered Implementations & Systems</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100 tracking-tight">
                Featured Projects
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
                From sub-second vector space recommendation engines and cyber-defense kernels to bespoke client web consulting.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md self-start md:self-auto overflow-x-auto max-w-full">
              {[
                { id: "all", label: "All Projects" },
                { id: "systems", label: "Systems & AI" },
                { id: "security", label: "Security Engine" },
                { id: "consulting", label: "Web Consulting" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                    activeFilter === tab.id
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="group flex min-h-[520px] flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 shadow-sm transition-colors hover:border-slate-700"
                >
                  <div className="relative h-52 shrink-0 overflow-hidden border-b border-slate-800 bg-slate-950 sm:h-60">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-60"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(16,185,129,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.12) 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-slate-950/80" />
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 600 240"
                      className="absolute inset-0 h-full w-full text-emerald-400/75"
                      fill="none"
                    >
                      {project.id === "etravel" && (
                        <g stroke="currentColor" strokeWidth="2">
                          <path d="M70 168 160 94l92 39 104-72 104 55" strokeDasharray="6 7" />
                          <circle cx="70" cy="168" r="8" fill="#071511" />
                          <circle cx="160" cy="94" r="8" fill="#071511" />
                          <circle cx="252" cy="133" r="8" fill="#071511" />
                          <circle cx="356" cy="61" r="8" fill="#071511" />
                          <circle cx="460" cy="116" r="8" fill="#071511" />
                          <circle cx="356" cy="61" r="22" opacity=".3" />
                        </g>
                      )}
                      {project.id === "silurus" && (
                        <g stroke="currentColor" strokeWidth="2">
                          <rect x="200" y="46" width="154" height="150" rx="12" fill="#071511" fillOpacity=".75" />
                          <path d="M226 82h101M226 105h101M226 128h68M226 158h87" strokeLinecap="round" />
                          <path d="M182 64v122a10 10 0 0 0 10 10h130" opacity=".45" />
                          <circle cx="329" cy="158" r="13" fill="#071511" />
                          <path d="m323 158 4 4 8-9" />
                        </g>
                      )}
                      {project.id === "procad" && (
                        <g stroke="currentColor" strokeWidth="2">
                          <path d="M154 120h91m32 0h91m32 0h46" />
                          <rect x="72" y="91" width="82" height="58" rx="10" fill="#071511" />
                          <rect x="245" y="91" width="64" height="58" rx="10" fill="#071511" />
                          <rect x="400" y="91" width="82" height="58" rx="10" fill="#071511" />
                          <path d="m111 120 10 10 20-23M265 120h24M420 120h42" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="277" cy="120" r="4" fill="currentColor" />
                        </g>
                      )}
                      {project.id === "hermes" && (
                        <g stroke="currentColor" strokeWidth="2">
                          <rect x="150" y="38" width="300" height="164" rx="14" fill="#071511" fillOpacity=".72" />
                          <path d="M174 70h252M174 170h252" opacity=".5" />
                          <path d="m205 111 18 15-18 15M240 141h45" strokeLinecap="round" strokeLinejoin="round" />
                          <rect x="322" y="94" width="90" height="50" rx="8" />
                          <path d="M337 110h22M337 123h48" strokeLinecap="round" />
                          <circle cx="394" cy="123" r="4" fill="currentColor" />
                        </g>
                      )}
                    </svg>
                    <div className="relative z-10 flex items-start justify-between gap-3 p-5 sm:p-6">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-slate-950/80 px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-emerald-300 backdrop-blur">
                        <Sparkles className="h-3 w-3" />
                        {project.badge}
                      </span>
                      <span className="rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-widest text-slate-400 backdrop-blur">
                        SYS_ID: {project.id.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-7 sm:p-8">
                    <div className="mb-5 flex justify-end">
                      <span className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-xl font-bold leading-none text-emerald-300 sm:text-2xl">
                        {project.featuredMetric}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white transition-colors group-hover:text-emerald-300 sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                      {project.oneLiner}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-2 pt-8">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-slate-700/60 bg-slate-800/60 px-3 py-1 font-mono text-[11px] text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE & EDUCATION TIMELINE --- */}
      <section id="experience" className="py-24 relative z-10 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>Career & Education Trajectory</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100 tracking-tight">
              Experience & Academic Timeline
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              A track record blending high-rigor Swedish and Romanian academic foundations with banking enterprise systems and research laboratory computing.
            </p>
          </div>

          <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-6 space-y-12">
            {TIMELINE.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-6 sm:pl-10 group"
              >
                {/* Timeline node icon */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#090D16] border border-slate-700 flex items-center justify-center text-emerald-400">
                  {item.type === "academic" ? (
                    <GraduationCap className="w-3.5 h-3.5" />
                  ) : (
                    <Briefcase className="w-3.5 h-3.5" />
                  )}
                </div>

                {/* Timeline Card */}
                <div className="bg-slate-900/40 border border-slate-800 hover:border-slate-700 rounded-xl p-6 sm:p-7 transition-colors">
                  {/* Top Bar with Period and Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      {item.period}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {item.location}
                    </span>
                  </div>

                  {/* Role & Institution */}
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {item.role}
                  </h3>
                  <div className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
                    <span>{item.institution}</span>
                    {item.badge && (
                      <>
                        <span className="text-slate-600">•</span>
                        <span className="text-xs font-mono text-emerald-400">{item.badge}</span>
                      </>
                    )}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <span className="text-emerald-400 font-mono mt-0.5">›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                    {item.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/70 text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HONORS & AWARDS --- */}
      <section id="honors" className="py-24 relative z-10 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
              <Trophy className="w-4 h-4" />
              <span>Competitive Distinctions & Awards</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100 tracking-tight">
              Honors & Championships
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Proven results in high-pressure algorithmic contests, national engineering Olympiads, and competitive cybersecurity hackathons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HONORS.map((honor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-900/40 border border-slate-800 hover:border-slate-700 rounded-xl p-6 sm:p-7 flex flex-col justify-between group transition-colors shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs uppercase tracking-wider px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-400 font-bold flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-emerald-400" />
                      {honor.rank}
                    </span>
                    {honor.prize && (
                      <span className="text-xs font-mono font-bold text-emerald-300 px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                        {honor.prize}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-1">
                    {honor.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {honor.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SKILLS & DOMAIN MASTERY --- */}
      <section id="skills" className="py-24 relative z-10 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
              <Cpu className="w-4 h-4" />
              <span>Core Skills</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100 tracking-tight">
              Skills
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Core languages, frameworks, and systems infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((group, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-900/40 border border-slate-800 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800 text-sm text-slate-200"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT & FOOTER --- */}
      <section id="contact" className="py-24 relative z-10 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
              <Mail className="w-4 h-4" />
              <span>Direct Communication</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100 tracking-tight">
              Get in Touch
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Available for select systems engineering roles, high-performance computing initiatives, and bespoke cloud / web development consulting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Email Card with Click-to-Copy */}
            <div className="bg-slate-900/40 border border-slate-800 hover:border-slate-700 rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-colors group shadow-sm">
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center text-emerald-400 mb-6">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                  Primary Email Address
                </div>
                <div className="text-lg sm:text-xl font-mono font-medium text-slate-100 group-hover:text-emerald-400 transition-colors break-all">
                  mihneavoda51@yahoo.com
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Preferred for technical inquiries, architecture consults, and formal opportunities.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-3">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono text-xs font-medium uppercase tracking-wider transition-colors"
                >
                  {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedEmail ? "EMAIL COPIED" : "COPY EMAIL"}</span>
                </button>
                <a
                  href="mailto:mihneavoda51@yahoo.com"
                  className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                  aria-label="Direct Mailto Link"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Phone Card with Click-to-Copy */}
            <div className="bg-slate-900/40 border border-slate-800 hover:border-slate-700 rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-colors group shadow-sm">
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center text-emerald-400 mb-6">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                  Direct Phone & WhatsApp
                </div>
                <div className="text-lg sm:text-xl font-mono font-medium text-slate-100 group-hover:text-emerald-400 transition-colors">
                  +40 721 084 689
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Direct mobile contact for immediate consults and time-sensitive conversations.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-3">
                <button
                  onClick={handleCopyPhone}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono text-xs font-medium uppercase tracking-wider transition-colors"
                >
                  {copiedPhone ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedPhone ? "PHONE COPIED" : "COPY PHONE"}</span>
                </button>
                <a
                  href="tel:+40721084689"
                  className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                  aria-label="Direct Tel Call"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Social Profiles & Developer Accounts */}
          <div className="p-8 rounded-2xl backdrop-blur-md bg-slate-900/40 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-white">
                Connect Across Engineering Platforms
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Explore open-source repositories, system prototypes, and professional updates.
              </p>
            </div>

            <div className="flex items-center gap-4 w-full sm:w-auto">
              <a
                href="https://github.com/DesixTT"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500/40 text-slate-200 hover:text-white font-mono text-xs font-semibold tracking-wider transition-all"
              >
                <Github className="w-4 h-4 text-emerald-400" />
                <span>GITHUB: DesixTT</span>
              </a>

              <a
                href="https://www.linkedin.com/in/mihnea-voda-268953289/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500/40 text-slate-200 hover:text-white font-mono text-xs font-semibold tracking-wider transition-all"
              >
                <Linkedin className="w-4 h-4 text-emerald-400" />
                <span>LINKEDIN</span>
              </a>
            </div>
          </div>
        </div>

        {/* Minimalist Terminal Footer */}
        <footer className="mt-24 pt-8 border-t border-slate-800/80 text-xs font-mono text-slate-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SYS_STATUS: ONLINE</span>
              <span className="text-slate-600">//</span>
              <span>STOCKHOLM &amp; CLUJ-NAPOCA</span>
            </div>

            <div className="text-center sm:text-right text-slate-400">
              © {new Date().getFullYear()} Mihnea Vodă · Built with Next.js App Router, Tailwind CSS &amp; Framer Motion
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}
