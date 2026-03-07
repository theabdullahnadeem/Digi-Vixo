"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Code2, Globe, Server, Database, Target, Cpu } from "lucide-react";

const logos = [
    { name: "TechCorp", icon: Code2 },
    { name: "GlobalWeb", icon: Globe },
    { name: "CloudSync", icon: Server },
    { name: "DataFlow", icon: Database },
    { name: "NextMktg", icon: Target },
    { name: "AI Systems", icon: Cpu },
];

export default function LogoBar() {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(marqueeRef.current, {
            xPercent: -50,
            ease: "none",
            duration: 15,
            repeat: -1,
        });
    }, { scope: marqueeRef });

    return (
        <section className="py-12 bg-neutral-950 border-b border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-6">
                <p className="text-center text-sm font-semibold tracking-widest text-neutral-500 uppercase">
                    Trusted by forward-thinking companies worldwide
                </p>
            </div>
            
            {/* Seamless Marquee Container */}
            <div className="relative flex overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-full bg-linear-to-r from-neutral-950 to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-full bg-linear-to-l from-neutral-950 to-transparent z-10 pointer-events-none" />
                
                <div ref={marqueeRef} className="flex gap-16 md:gap-24 items-center pr-16 md:pr-24">
                    {/* Double the array to ensure smooth loop */}
                    {[...logos, ...logos, ...logos, ...logos].map((logo, i) => {
                        const Icon = logo.icon;
                        return (
                            <div key={i} className="flex items-center gap-3 text-neutral-400 opacity-60 hover:opacity-100 hover:text-cyan-400 transition-all shrink-0 grayscale hover:grayscale-0">
                                <Icon className="w-8 h-8" />
                                <span className="font-bold text-xl tracking-tight">{logo.name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
