"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Activity, ShieldCheck, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AiProductPreview() {
    const container = useRef<HTMLDivElement>(null);
    const imageContainer = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(imageContainer.current, {
            yPercent: -20,
            ease: "none",
            scrollTrigger: {
                trigger: container.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

        gsap.fromTo(".ai-stat", 
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, stagger: 0.2, duration: 1, scrollTrigger: { trigger: container.current, start: "top 60%" } }
        );
    }, { scope: container });

    return (
        <section ref={container} className="py-40 bg-black relative overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24 relative z-10">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-bold mb-6">
                        <Sparkles className="w-5 h-5" />
                        Digivixo AI Core
                    </div>
                    {/* Much lighter gradient for contrast */}
                    <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6">
                        Intelligence, <br/>
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400">Weaponized.</span>
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                        Stop doing busywork. Deploy autonomous AI agents that handle sales, support, and scaling while you sleep.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Interactive Image Frame */}
                    <div className="relative h-[600px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(79,70,229,0.15)] bg-neutral-900">
                        <div ref={imageContainer} className="absolute inset-0 h-[120%]">
                            <Image 
                                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200" 
                                alt="AI Core Dashboard" 
                                fill 
                                className="object-cover opacity-80 mix-blend-screen"
                            />
                        </div>
                        {/* overlay UI elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-cyan-400/50 flex items-center justify-center bg-black/50 backdrop-blur-xl shadow-[0_0_50px_rgba(6,182,212,0.3)]">
                            <Activity className="w-12 h-12 text-cyan-400 animate-pulse" />
                        </div>
                        <div className="absolute bottom-0 inset-x-0 h-32 bg-linear-to-t from-black to-transparent" />
                    </div>

                    {/* Stats/Features List */}
                    <div className="space-y-8">
                        <div className="ai-stat flex gap-6 items-start p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                            <div className="p-4 rounded-xl bg-cyan-500/20 text-cyan-400 shrink-0">
                                <Zap className="w-8 h-8" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-white mb-2">10x Execution Speed</h4>
                                <p className="text-neutral-400 leading-relaxed">Our custom LLM pipelines execute complex workflows instantly, reducing operational drag to zero.</p>
                            </div>
                        </div>

                        <div className="ai-stat flex gap-6 items-start p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                            <div className="p-4 rounded-xl bg-purple-500/20 text-purple-400 shrink-0">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-white mb-2">Enterprise Security</h4>
                                <p className="text-neutral-400 leading-relaxed">Bank-grade encryption and self-hosted model options ensure your proprietary data never leaks.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
