"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect } from "react";
import gsap from "gsap";

const caseStudies = [
    {
        title: "E-Commerce Replatforming",
        industry: "Retail & E-commerce",
        problem: "Legacy platform caused slow load times, poor mobile experience, and lost checkout conversions during peak seasons.",
        solution: "Migrated to a headless Shopify Plus architecture with a custom Next.js frontend for lightning-fast speeds.",
        techStack: ["Shopify Plus", "Next.js", "Tailwind CSS", "Vercel"],
        result: "Increased conversion rate by 34% and improved page speed by 60%. Mobile revenue grew by 200%.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop",
        status: "Coming Soon"
    },
    {
        title: "SaaS Architecture Overhaul",
        industry: "B2B Tech Startup",
        problem: "Monolithic architecture prevented rapid feature deployment and scaling under heavy enterprise load.",
        solution: "Decoupled the monolith into modular microservices using Docker, Kubernetes, and Node.js.",
        techStack: ["Node.js", "Kubernetes", "AWS", "PostgreSQL"],
        result: "Reduced deployment time by 80% and successfully supported a 5x surge in user growth without downtime.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop",
        status: "Coming Soon"
    },
    {
        title: "AI Inventory Automation",
        industry: "Logistics & Healthcare",
        problem: "Manual inventory tracking across 12 warehouses led to frequent stockouts, expiry waste, and massive inefficiencies.",
        solution: "Developed a custom AI agent powered by vision learning to reconcile inventory automatically from camera feeds.",
        techStack: ["Python", "TensorFlow", "React", "GCP"],
        result: "Reduced processing time by 40% with zero stock anomalies, saving $1.2M annually in lost goods.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop",
        status: "Coming Soon"
    }
];

export default function CaseStudiesPage() {
    useEffect(() => {
        gsap.fromTo(".page-header", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
        gsap.fromTo(".case-card", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out", delay: 0.2 });
    }, []);

    return (
        <div className="min-h-screen bg-black pt-32 pb-24 px-6 relative">
            <div className="absolute top-0 inset-x-0 h-96 bg-linear-to-b from-cyan-900/20 to-transparent pointer-events-none" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="page-header text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-semibold tracking-wide mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span>Client Success</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
                        Work That <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-indigo-500">Delivers.</span>
                    </h1>
                    <p className="text-xl text-neutral-400">
                        Explore how we've helped startups and enterprise brands scale revenue, automate operations, and conquer their markets.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-16">
                    {caseStudies.map((cs, i) => (
                        <div key={i} className="case-card flex flex-col lg:flex-row gap-0 lg:gap-8 bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative group">
                            {/* Image Left */}
                            <div className="w-full lg:w-5/12 relative h-72 lg:h-auto overflow-hidden">
                                <Image
                                    src={cs.image}
                                    alt={cs.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {cs.status && (
                                    <div className="absolute top-6 left-6 z-20 px-4 py-1.5 bg-black/60 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold text-white uppercase tracking-widest">
                                        {cs.status}
                                    </div>
                                )}
                            </div>

                            {/* Content Right */}
                            <div className="w-full lg:w-7/12 p-8 md:p-12 flex flex-col justify-center">
                                <span className="text-cyan-400 text-sm font-bold uppercase tracking-widest mb-4">
                                    {cs.industry}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 group-hover:text-cyan-400 transition-colors">
                                    {cs.title}
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <div className="text-neutral-500 text-xs font-semibold uppercase mb-2">The Problem</div>
                                        <p className="text-neutral-300 text-sm leading-relaxed">{cs.problem}</p>
                                    </div>
                                    <div>
                                        <div className="text-neutral-500 text-xs font-semibold uppercase mb-2">The Solution</div>
                                        <p className="text-neutral-300 text-sm leading-relaxed">{cs.solution}</p>
                                    </div>
                                </div>

                                <div className="mb-10">
                                    <div className="text-cyan-500/80 text-xs font-semibold uppercase mb-2">The Result</div>
                                    <p className="text-white text-lg font-medium">{cs.result}</p>
                                </div>

                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {cs.techStack.map((tech, j) => (
                                        <span key={j} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-400 uppercase tracking-widest">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto">
                                    <button disabled className="group/btn flex items-center justify-between w-full md:w-auto md:inline-flex md:gap-8 p-4 md:px-6 md:py-3 md:rounded-full rounded-xl bg-white/5 border border-white/10 opacity-70 cursor-not-allowed transition-all">
                                        <span className="font-bold text-white text-sm">Full Case Study Coming Soon</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-32 text-center p-12 bg-linear-to-b from-cyan-900/20 to-black border border-cyan-500/20 rounded-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to be our next success story?</h2>
                    <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">Let's build a fast, scalable, and automated system tailored strictly to your business goals.</p>
                    <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-cyan-500 text-black rounded-xl font-bold text-lg hover:bg-cyan-400 transition-shadow shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]">
                        Book a Free Strategy Call
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
