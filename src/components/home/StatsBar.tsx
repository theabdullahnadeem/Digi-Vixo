"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "3", label: "Countries Served" },
];

export default function StatsBar() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(".stat-item",
            { opacity: 0, y: 20 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.8, 
                stagger: 0.15,
                ease: "back.out(1.5)",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 90%",
                }
            }
        );
    }, { scope: container });

    return (
        <section ref={container} className="relative py-12 bg-neutral-950 border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {stats.map((stat, i) => (
                        <div key={i} className="stat-item flex flex-col items-center justify-center pt-8 md:pt-0">
                            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-indigo-500 mb-2">
                                {stat.value}
                            </div>
                            <div className="text-neutral-400 font-medium tracking-wide uppercase text-sm">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Subtle highlight */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent" />
        </section>
    );
}
