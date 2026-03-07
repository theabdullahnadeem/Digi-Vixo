"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
    {
        title: "E-Commerce Replatforming",
        industry: "Retail & E-commerce",
        problem: "Legacy platform caused slow load times and lost checkout conversions.",
        result: "Increased conversion rate by 34% and improved page speed by 60%.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop",
        link: "/case-studies",
        status: "Coming Soon"
    },
    {
        title: "SaaS Architecture Overhaul",
        industry: "B2B Tech Startup",
        problem: "Monolithic architecture prevented rapid feature deployment and scaling.",
        result: "Reduced deployment time by 80% and supported 5x user growth.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop",
        link: "/case-studies",
        status: "Coming Soon"
    },
    {
        title: "AI Inventory Automation",
        industry: "Logistics & Healthcare",
        problem: "Manual inventory tracking led to frequent stockouts and waste.",
        result: "Reduced processing time by 40% with zero stock anomalies.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop",
        link: "/case-studies",
        status: "Coming Soon"
    }
];

export default function CaseStudiesPreview() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(".cs-header", 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: container.current, start: "top 80%" } }
        );

        gsap.fromTo(".cs-card",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: ".cs-grid", start: "top 75%" } }
        );
    }, { scope: container });

    return (
        <section ref={container} className="py-32 px-6 bg-neutral-950/50 relative border-y border-white/5">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="cs-header flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                    <div className="max-w-2xl">
                        <div className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4">Proven Results</div>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                            Work That Speaks <br/>
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-neutral-400 to-neutral-600">For Itself.</span>
                        </h2>
                    </div>
                    <Link href="/case-studies" className="hidden md:flex group items-center gap-3 text-white font-bold text-lg hover:text-cyan-400 transition-colors pb-2 border-b-2 border-transparent hover:border-cyan-400">
                        View All Case Studies
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                    </Link>
                </div>

                <div className="cs-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((cs, i) => (
                        <div key={i} className="cs-card group relative bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:border-white/20 transition-all hover:-translate-y-2 duration-500 flex flex-col">
                            {/* Image Header */}
                            <div className="relative h-64 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                <Image
                                    src={cs.image}
                                    alt={cs.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {cs.status && (
                                    <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold text-white uppercase tracking-widest">
                                        {cs.status}
                                    </div>
                                )}
                            </div>

                            {/* Content Body */}
                            <div className="p-8 flex flex-col flex-1">
                                <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">
                                    {cs.industry}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors">
                                    {cs.title}
                                </h3>

                                <div className="space-y-4 mb-8 flex-1">
                                    <div>
                                        <div className="text-neutral-500 text-xs font-semibold uppercase mb-1">The Problem</div>
                                        <p className="text-neutral-300 text-sm">{cs.problem}</p>
                                    </div>
                                    <div>
                                        <div className="text-cyan-500/80 text-xs font-semibold uppercase mb-1">The Result</div>
                                        <p className="text-white text-sm font-medium">{cs.result}</p>
                                    </div>
                                </div>

                                <Link href={cs.link} className="mt-auto group/btn flex items-center justify-between w-full p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
                                    <span className="font-bold text-white text-sm">View Case Study</span>
                                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover/btn:bg-cyan-500 group-hover/btn:text-black transition-colors">
                                        <ArrowRight className="w-4 h-4 -rotate-45 group-hover/btn:rotate-0 transition-transform" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex justify-center md:hidden">
                    <Link href="/case-studies" className="group flex items-center gap-3 text-white font-bold text-lg hover:text-cyan-400 transition-colors pb-2 border-b-2 border-transparent hover:border-cyan-400">
                        View All Case Studies
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
