"use client";

import { CheckCircle2, Download, FileText, Layout, PlayCircle } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function DesignDeepDive() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
            }
        });

        tl.from(".left-content", {
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        })
            .from(".right-content", {
                x: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.6");
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 px-6 bg-neutral-900 border-t border-neutral-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="left-content space-y-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 bg-fuchsia-500/10 rounded-xl border border-fuchsia-500/20">
                            <svg className="w-8 h-8 text-fuchsia-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Design Centricity</h3>
                    </div>
                    
                    <p className="text-neutral-400 text-lg leading-relaxed">
                        Design is not just aesthetics; it&apos;s about <strong>visual communication</strong> and user interaction. We build interfaces rooted in psychology, reducing friction and guiding users toward their objectives.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                        <div className="p-5 rounded-2xl bg-neutral-900 border border-white/5 hover:border-white/10 transition-colors">
                            <span className="text-white font-bold mb-1 flex items-center gap-2"><svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg> Brand Consistency</span>
                            <span className="text-neutral-500 text-sm">Comprehensive design systems across all touchpoints.</span>
                        </div>
                        <div className="p-5 rounded-2xl bg-neutral-900 border border-white/5 hover:border-white/10 transition-colors">
                            <span className="text-white font-bold mb-1 flex items-center gap-2"><svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg> User-Centered UX</span>
                            <span className="text-neutral-500 text-sm">Intuitive navigation based on deep user research.</span>
                        </div>
                        <div className="p-5 rounded-2xl bg-neutral-900 border border-white/5 hover:border-white/10 transition-colors">
                            <span className="text-white font-bold mb-1 flex items-center gap-2"><svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg> Visual Clarity</span>
                            <span className="text-neutral-500 text-sm">Clean designs prioritizing content and ease of use.</span>
                        </div>
                        <div className="p-5 rounded-2xl bg-neutral-900 border border-white/5 hover:border-white/10 transition-colors">
                            <span className="text-white font-bold mb-1 flex items-center gap-2"><svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> Accessibility</span>
                            <span className="text-neutral-500 text-sm">Meeting international standards for inclusivity.</span>
                        </div>
                    </div>
                </div>

                <div className="right-content relative p-10 rounded-3xl overflow-hidden border border-white/10 group min-h-[500px] flex flex-col justify-between shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80" alt="Design Background" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/85 backdrop-blur-[2px] pointer-events-none" />
                    
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-8 text-white">Design Deliverables</h3>
                        <ul className="space-y-5">
                            {[
                                "Custom Logo & Identity Systems",
                                "Full UI/UX Design for Web & Apps",
                                "High-Fidelity Interactive Prototypes",
                                "Marketing Assets & Social Media Kits",
                                "Style Guides & Design Systems",
                                "Print-Ready Marketing Creatives"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-fuchsia-400 shrink-0" />
                                    <span className="text-neutral-200 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">Standard Formats</h4>
                        <div className="flex gap-4 flex-wrap">
                            <span className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded font-bold text-sm text-neutral-200">
                                <Layout className="w-4 h-4 text-purple-400" /> Figma
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded font-bold text-sm text-neutral-200">
                                <FileText className="w-4 h-4 text-blue-400" /> SVG/AI
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded font-bold text-sm text-neutral-200">
                                <PlayCircle className="w-4 h-4 text-red-400" /> WebP/PNG
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
