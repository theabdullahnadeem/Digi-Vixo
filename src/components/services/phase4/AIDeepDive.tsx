"use client";

import { CheckCircle2, Bot, Zap, Database, Brain } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function AIDeepDive() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
            }
        });

        tl.from(".left-content-s", {
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        })
            .from(".right-content-s", {
                x: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.6");
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 px-6 bg-neutral-900 border-t border-neutral-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="left-content-s space-y-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
                            <Bot className="w-8 h-8 text-indigo-400" />
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Intelligent Automation & AI</h3>
                    </div>
                    
                    <p className="text-neutral-400 text-lg leading-relaxed">
                        Optimize business processes and unlock efficiency with cutting-edge AI tools. We implement automated solutions that eliminate manual errors and save valuable time.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                        <div className="p-5 rounded-2xl bg-neutral-900 border border-white/5 hover:border-white/10 transition-colors">
                            <span className="text-white font-bold mb-1 flex items-center gap-2"><svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg> Workflow Sync</span>
                            <span className="text-neutral-500 text-sm">Streamlined tasks across your entire platform matrix.</span>
                        </div>
                        <div className="p-5 rounded-2xl bg-neutral-900 border border-white/5 hover:border-white/10 transition-colors">
                            <span className="text-white font-bold mb-1 flex items-center gap-2"><svg className="w-4 h-4 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> AI Tools</span>
                            <span className="text-neutral-500 text-sm">Custom machine learning apps for your niche.</span>
                        </div>
                        <div className="p-5 rounded-2xl bg-neutral-900 border border-white/5 hover:border-white/10 transition-colors">
                            <span className="text-white font-bold mb-1 flex items-center gap-2"><Database className="w-4 h-4 text-emerald-400" /> Data Insights</span>
                            <span className="text-neutral-500 text-sm">Converting complex data sets into business intelligence.</span>
                        </div>
                        <div className="p-5 rounded-2xl bg-neutral-900 border border-white/5 hover:border-white/10 transition-colors">
                            <span className="text-white font-bold mb-1 flex items-center gap-2"><Brain className="w-4 h-4 text-purple-400" /> Smart Integrations</span>
                            <span className="text-neutral-500 text-sm">Connecting your digital tools with intelligent interfaces.</span>
                        </div>
                    </div>
                </div>

                <div className="right-content-s relative p-10 rounded-3xl overflow-hidden border border-white/10 group min-h-[500px] flex flex-col justify-between shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80" alt="AI Background" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/85 backdrop-blur-[2px] pointer-events-none" />
                    
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-8 text-white">Core Capabilities</h3>
                        <ul className="space-y-5">
                            {[
                                "Business Process Automation",
                                "Intelligent Chatbot Solutions",
                                "Data Management & Analytics",
                                "Cross-Platform Workflow Sync",
                                "Predictive AI Modeling",
                                "Automated Reporting Systems"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                                    <span className="text-neutral-200 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">Tech Stack</h4>
                        <div className="flex gap-4 flex-wrap">
                            <img src="https://cdn.simpleicons.org/python/white" alt="Python" className="w-8 h-8 opacity-50 hover:opacity-100 transition-opacity" />
                            <img src="https://cdn.simpleicons.org/openai/white" alt="OpenAI" className="w-8 h-8 opacity-50 hover:opacity-100 transition-opacity" />
                            <img src="https://cdn.simpleicons.org/tensorflow/white" alt="Tensorflow" className="w-8 h-8 opacity-50 hover:opacity-100 transition-opacity" />
                            <img src="https://cdn.simpleicons.org/zapier/white" alt="Zapier" className="w-8 h-8 opacity-50 hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
