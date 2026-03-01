"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { Search, Compass, Rocket } from "lucide-react";

export default function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Neon Line Draw
            gsap.fromTo(lineRef.current,
                { height: "0%" },
                {
                    height: "100%",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%",
                        end: "bottom 80%",
                        scrub: 1,
                    }
                }
            );

            // Explosive Node Reveals
            gsap.utils.toArray<HTMLElement>(".process-node").forEach((node) => {
                gsap.fromTo(node, 
                    { scale: 0, rotate: -180 }, 
                    {
                        scale: 1,
                        rotate: 0,
                        duration: 0.8,
                        ease: "back.out(2)",
                        scrollTrigger: {
                            trigger: node,
                            start: "top 80%",
                        }
                    }
                );
            });

            // Extreme 3D Card Slides
            gsap.utils.toArray<HTMLElement>(".process-content").forEach((content, i) => {
                const isLeft = i % 2 === 0;
                gsap.fromTo(content, 
                    { 
                        x: isLeft ? -150 : 150, 
                        opacity: 0,
                        rotationY: isLeft ? -45 : 45,
                        transformPerspective: 1000
                    },
                    {
                        x: 0,
                        opacity: 1,
                        rotationY: 0,
                        duration: 1.2,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: content,
                            start: "top 75%",
                        }
                    }
                );
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    const steps = [
        {
            icon: <Search className="w-8 h-8" />,
            title: "Audit & Discovery",
            content: "We dive deep into your existing infrastructure and business goals. A comprehensive audit reveals bottlenecks and opportunities, setting the stage for data-driven decisions."
        },
        {
            icon: <Compass className="w-8 h-8" />,
            title: "Strategic Roadmap",
            content: "We engineer a tailored strategy that aligns technology with your commercial objectives. Every milestone is calculated to maximize impact and minimize friction."
        },
        {
            icon: <Rocket className="w-8 h-8" />,
            title: "Execution & Scale",
            content: "We implement the solution with precision engineering. Post-launch, we focus on performance optimization and scaling your digital presence to dominate the market."
        }
    ];

    return (
        <section ref={containerRef} className="py-40 px-6 bg-black relative overflow-hidden border-t border-white/5">
            {/* Background Ambient Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-32 max-w-2xl mx-auto relative">
                    <div className="inline-block px-4 py-1 mb-6 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-bold tracking-widest text-sm uppercase">Methodology</div>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-white leading-tight">Engineered <br/><span className="text-transparent bg-clip-text bg-linear-to-r from-neutral-400 to-neutral-600">Precision.</span></h2>
                </div>

                {/* Central Neon Timeline line */}
                <div className="absolute left-[38px] md:left-1/2 top-64 bottom-12 w-[2px] bg-white/5 md:-translate-x-1/2">
                    <div ref={lineRef} className="w-full bg-linear-to-b from-cyan-400 via-indigo-500 to-transparent shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                </div>

                <div className="space-y-32">
                    {steps.map((step, index) => (
                        <div key={index} className={cn(
                            "flex flex-col md:flex-row gap-16 items-center relative",
                            index % 2 === 1 && "md:flex-row-reverse"
                        )}>
                            <div className="flex-1 w-full md:w-1/2 pl-24 md:pl-0 md:text-right">
                                <div className={cn(
                                    "process-content p-10 rounded-[2rem] bg-neutral-900/50 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 transition-colors duration-500 group overflow-hidden relative",
                                    index % 2 === 1 ? "md:text-left" : "md:text-right text-left"
                                )}>
                                    <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                    <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">{step.title}</h3>
                                    <p className="text-neutral-400 leading-relaxed text-lg">
                                        {step.content}
                                    </p>
                                </div>
                            </div>

                            {/* Aggressive Timeline Node */}
                            <div className="process-node absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-20 h-20 rounded-2xl rotate-45 bg-black border border-white/20 z-20 shadow-[0_0_30px_rgba(0,0,0,0.8)] overflow-hidden group hover:scale-110 hover:border-cyan-400 transition-all duration-300">
                                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="text-cyan-400 -rotate-45 group-hover:scale-110 transition-transform">
                                    {step.icon}
                                </div>
                            </div>

                            <div className="flex-1 w-full md:w-1/2 hidden md:block" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
