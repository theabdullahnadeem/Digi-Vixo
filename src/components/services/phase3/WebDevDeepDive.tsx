"use client";

import { CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function WebDevDeepDive() {
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
                        <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                            <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Engineering Excellence</h3>
                    </div>
                    
                    <p className="text-neutral-400 text-lg leading-relaxed">
                        We engineer digital assets designed for ultimate performance and long-term business scalability. Our code architecture ensures a lightning-fast experience that search engines and users love.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                        <div className="p-5 rounded-2xl bg-neutral-900 border border-white/5 hover:border-white/10 transition-colors">
                            <span className="text-white font-bold block mb-1 flex items-center gap-2"><svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> Optimization</span>
                            <span className="text-neutral-500 text-sm">Top-tier Core Web Vitals for maximum speed.</span>
                        </div>
                        <div className="p-5 rounded-2xl bg-neutral-900 border border-white/5 hover:border-white/10 transition-colors">
                            <span className="text-white font-bold block mb-1 flex items-center gap-2"><svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> Security</span>
                            <span className="text-neutral-500 text-sm">Rigorous encryption and full compliance.</span>
                        </div>
                        <div className="p-5 rounded-2xl bg-neutral-900 border border-white/5 hover:border-white/10 transition-colors">
                            <span className="text-white font-bold block mb-1 flex items-center gap-2"><svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg> SEO-First</span>
                            <span className="text-neutral-500 text-sm">Semantic HTML and optimized indexing.</span>
                        </div>
                        <div className="p-5 rounded-2xl bg-neutral-900 border border-white/5 hover:border-white/10 transition-colors">
                            <span className="text-white font-bold block mb-1 flex items-center gap-2"><svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 22-3.1-1.7a10.3 10.3 0 0 1-5.3-8.8V6l8.4-3.7L20.4 6v5.5a10.3 10.3 0 0 1-5.3 8.8L12 22Z"/></svg> 99.9% Uptime</span>
                            <span className="text-neutral-500 text-sm">Superior engagement and reliability.</span>
                        </div>
                    </div>
                </div>

                <div className="right-content relative p-10 rounded-3xl overflow-hidden border border-white/10 group min-h-[500px] flex flex-col justify-between shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80" alt="Code Background" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/85 backdrop-blur-[2px] pointer-events-none" />
                    
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-8 text-white">Development Standards</h3>
                        <ul className="space-y-5">
                            {[
                                "Responsive & Adaptive Layouts",
                                "High-Speed Asset Delivery",
                                "Semantic & Clean Codebase",
                                "Comprehensive Browser Testing",
                                "Integrated Security Layers",
                                "Conversion-Focused Design"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                                    <span className="text-neutral-200 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">Tech Stack</h4>
                        <div className="flex gap-6 items-center">
                            <img src="https://cdn.simpleicons.org/react/white" alt="React" className="w-7 h-7 opacity-50 hover:opacity-100 transition-opacity" />
                            <img src="https://cdn.simpleicons.org/nextdotjs/white" alt="Next.js" className="w-7 h-7 opacity-50 hover:opacity-100 transition-opacity" />
                            <img src="https://cdn.simpleicons.org/tailwindcss/white" alt="Tailwind CSS" className="w-7 h-7 opacity-50 hover:opacity-100 transition-opacity" />
                            <img src="https://cdn.simpleicons.org/vuedotjs/white" alt="Vue" className="w-7 h-7 opacity-50 hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
