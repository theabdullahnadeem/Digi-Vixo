"use client";

import { CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ShopifyDeepDive() {
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
                        <div className="p-3 bg-green-500/10 rounded-xl border border-green-500/20">
                            <svg className="w-8 h-8 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Shopify Platform Engineering</h3>
                    </div>
                    
                    <p className="text-neutral-400 text-lg leading-relaxed">
                        Professional Shopify engineering that goes beyond simple store setup. We build scalable architecture for high-growth brands prioritizing technical performance and bespoke functionality.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                        <div className="p-5 rounded-2xl bg-neutral-900 border border-white/5 hover:border-white/10 transition-colors">
                            <span className="text-white font-bold mb-1 flex items-center gap-2"><svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg> Theme Development</span>
                            <span className="text-neutral-500 text-sm">Bespoke themes designed for maximum conversion and speed.</span>
                        </div>
                        <div className="p-5 rounded-2xl bg-neutral-900 border border-white/5 hover:border-white/10 transition-colors">
                            <span className="text-white font-bold mb-1 flex items-center gap-2"><svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="8" height="8" x="2" y="2" rx="2" ry="2"/><rect width="8" height="8" x="14" y="2" rx="2" ry="2"/><rect width="8" height="8" x="2" y="14" rx="2" ry="2"/><rect width="8" height="8" x="14" y="14" rx="2" ry="2"/></svg> App Integration</span>
                            <span className="text-neutral-500 text-sm">Strategic integrations extending logic without slowing load times.</span>
                        </div>
                        <div className="p-5 rounded-2xl bg-neutral-900 border border-white/5 hover:border-white/10 transition-colors">
                            <span className="text-white font-bold mb-1 flex items-center gap-2"><svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg> Headless Commerce</span>
                            <span className="text-neutral-500 text-sm">Decoupled architecture for ultimate user experience control.</span>
                        </div>
                        <div className="p-5 rounded-2xl bg-neutral-900 border border-white/5 hover:border-white/10 transition-colors">
                            <span className="text-white font-bold mb-1 flex items-center gap-2"><svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg> The Result</span>
                            <span className="text-neutral-500 text-sm">High-performance digital assets that drive revenue.</span>
                        </div>
                    </div>
                </div>

                <div className="right-content relative p-10 rounded-3xl overflow-hidden border border-white/10 group min-h-[500px] flex flex-col justify-between shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80" alt="Shopify Engineering Background" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/85 backdrop-blur-[2px] pointer-events-none" />
                    
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-8 text-white">Execution Standards</h3>
                        <ul className="space-y-5">
                            {[
                                "Bespoke Theme Architecture",
                                "Data-Driven UX Optimization",
                                "Advanced Shopify Scripting",
                                "Seamless API Integrations",
                                "High-Speed Mobile Performance",
                                "Automated Testing Protocols"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                                    <span className="text-neutral-200 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">Tech Stack</h4>
                        <div className="flex gap-4 flex-wrap">
                            <img src="https://cdn.simpleicons.org/shopify/white" alt="Shopify" className="w-8 h-8 opacity-50 hover:opacity-100 transition-opacity" />
                            <img src="https://cdn.simpleicons.org/react/white" alt="React" className="w-8 h-8 opacity-50 hover:opacity-100 transition-opacity" />
                            <img src="https://cdn.simpleicons.org/tailwindcss/white" alt="Tailwind CSS" className="w-8 h-8 opacity-50 hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
