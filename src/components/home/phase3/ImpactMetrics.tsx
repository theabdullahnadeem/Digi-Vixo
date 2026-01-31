"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ImpactMetrics() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".metric-card").forEach((card) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                    },
                    y: 50,
                    opacity: 0,
                    duration: 0.8
                });
            });

            // Simple counter animation
            gsap.utils.toArray<HTMLElement>(".counter").forEach((counter) => {
                const target = parseInt(counter.getAttribute("data-target") || "0");
                gsap.to(counter, {
                    innerText: target,
                    duration: 2,
                    snap: { innerText: 1 },
                    scrollTrigger: {
                        trigger: counter,
                        start: "top 85%",
                    }
                });
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    const metrics = [
        { label: "Projects Delivered", value: 35, suffix: "+", color: "text-accent" },
        { label: "Client Retention Rate", value: 94, suffix: "%", color: "text-gold" },
        { label: "Hours Saved Weekly", value: 120, suffix: "+", color: "text-emerald-500" },
        { label: "Active Clients", value: 12, suffix: "+", color: "text-purple-500" }
    ];

    return (
        <section ref={containerRef} className="relative py-32 px-6 bg-background text-foreground border-y border-neutral-800 overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80')" }}
            />
            <div className="absolute inset-0 bg-linear-to-b from-background via-background/90 to-background" />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-24 space-y-4">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-accent">Our Impact</h2>
                    <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">Scale at Speed.</h3>
                    <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
                        The numbers speak for themselves. We provide the volume and reliability required for enterprise growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {metrics.map((metric, i) => (
                        <div key={i} className="metric-card text-center space-y-2 p-8 rounded-3xl bg-neutral-900/50 backdrop-blur-sm">
                            <div className={`text-6xl md:text-7xl font-bold ${metric.color} flex justify-center items-baseline`}>
                                <span className="counter" data-target={metric.value}>0</span>
                                <span className="text-4xl">{metric.suffix}</span>
                            </div>
                            <p className="text-lg font-medium text-neutral-400 uppercase tracking-wide">
                                {metric.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
