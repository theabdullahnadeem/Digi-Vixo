"use client";

import { CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function MarketingDeepDive() {
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
                        <div className="p-3 bg-red-500/10 rounded-xl border border-red-500/20">
                            <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-5 5"/></svg>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Strategic Digital Growth</h3>
                    </div>
                    
                    <p className="text-neutral-400 text-lg leading-relaxed">
                        Data-driven marketing solutions that amplify brand presence. We drive high-quality conversions through technical precision, advanced analytics, and cross-channel expertise.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                        <div className="p-5 rounded-2xl bg-neutral-900 border border-white/5 hover:border-white/10 transition-colors">
                            <span className="text-white font-bold mb-1 flex items-center gap-2"><svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 6.1H3"/><path d="M21 12.1H3"/><path d="M15.1 18H3"/></svg> Social Media</span>
                            <span className="text-neutral-500 text-sm">High-impact content across Meta, TikTok, and more.</span>
                        </div>
                        <div className="p-5 rounded-2xl bg-neutral-900 border border-white/5 hover:border-white/10 transition-colors">
                            <span className="text-white font-bold mb-1 flex items-center gap-2"><svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg> Technical SEO</span>
                            <span className="text-neutral-500 text-sm">Semantic structure and performance for organic visibility.</span>
                        </div>
                        <div className="p-5 rounded-2xl bg-neutral-900 border border-white/5 hover:border-white/10 transition-colors">
                            <span className="text-white font-bold mb-1 flex items-center gap-2"><svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> Performance Ads</span>
                            <span className="text-neutral-500 text-sm">High-ROI campaigns across Google Ads and Paid Social.</span>
                        </div>
                        <div className="p-5 rounded-2xl bg-neutral-900 border border-white/5 hover:border-white/10 transition-colors">
                            <span className="text-white font-bold mb-1 flex items-center gap-2"><svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg> The Result</span>
                            <span className="text-neutral-500 text-sm">Sustainable business growth through marketing excellence.</span>
                        </div>
                    </div>
                </div>

                <div className="right-content relative p-10 rounded-3xl overflow-hidden border border-white/10 group min-h-[500px] flex flex-col justify-between shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80" alt="Marketing Growth Background" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/85 backdrop-blur-[2px] pointer-events-none" />
                    
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-8 text-white">Execution Pillars</h3>
                        <ul className="space-y-5">
                            {[
                                "Technical SEO & Site Audits",
                                "Data-Driven Paid Social (Meta/TikTok)",
                                "High-Impact Multi-Channel SEM",
                                "Advanced Audience Segmentation",
                                "Real-Time Analytics & Reporting",
                                "Content Strategy & Brand Voice"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0" />
                                    <span className="text-neutral-200 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">Tech Stack</h4>
                        <div className="flex gap-4 flex-wrap">
                            <img src="https://cdn.simpleicons.org/googleads/white" alt="Google Ads" className="w-8 h-8 opacity-50 hover:opacity-100 transition-opacity" />
                            <img src="https://cdn.simpleicons.org/meta/white" alt="Meta" className="w-8 h-8 opacity-50 hover:opacity-100 transition-opacity" />
                            <img src="https://cdn.simpleicons.org/tiktok/white" alt="TikTok" className="w-8 h-8 opacity-50 hover:opacity-100 transition-opacity" />
                            <img src="https://cdn.simpleicons.org/googleanalytics/white" alt="Google Analytics" className="w-8 h-8 opacity-50 hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
