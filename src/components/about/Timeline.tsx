"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

export default function Timeline() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((item, i) => {
                gsap.from(item, {
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                    }
                });
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const milestones = [
        {
            year: "2021",
            title: "Technical Foundations",
            description: "Abdullah and Hassan begin their journey in professional software development and technical consulting, focusing on building high-performance digital solutions for early-stage startups."
        },
        {
            year: "2022",
            title: "Digital Service Expansion",
            description: "We formalize our core digital service pillars, expanding into custom website development, initial AI integrations, and technical strategy consulting for growing businesses."
        },
        {
            year: "2023",
            title: "Enterprise Solutions",
            description: "Digivixo scales its capabilities to deliver enterprise-grade web applications and complex SaaS platforms, focusing on robust backend architectures and scalable cloud infrastructure."
        },
        {
            year: "2024",
            title: "Process & Quality Excellence",
            description: "We formalize our internal quality benchmarks and comprehensive Service Level Agreements (SLAs), ensuring consistent technical integrity and operational reliability for all digital assets."
        },
        {
            year: "2025",
            title: "Integrated Digital Partner",
            description: "Digivixo establishes itself as a complete digital transformation partner, providing end-to-end IT solutions that integrate custom development, UI/UX engineering, and intelligent automation."
        }
    ];

    return (
        <section ref={containerRef} className="relative py-32 px-6 bg-neutral-950 text-white overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-50"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80')" }}
            />
            <div className="absolute inset-0 bg-black/80" />
            <div className="max-w-4xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-24 text-center">Our Journey</h2>

                <div className="space-y-16 relative border-l border-neutral-800 ml-4 md:ml-0 pl-8 md:pl-0">
                    {milestones.map((milestone, index) => (
                        <div key={index} className="timeline-item md:grid md:grid-cols-[1fr_auto_1fr] gap-12 items-start relative">
                            {/* Left Side (Even Index) */}
                            <div className={cn("hidden md:block text-right", index % 2 === 1 && "invisible")}>
                                <span className="text-8xl font-bold text-blue-500 absolute top-0 right-0 -z-10 select-none transform translate-x-12">{milestone.year}</span>
                                <h3 className="text-2xl font-bold mb-4 pt-4">{milestone.title}</h3>
                                <p className="text-neutral-400 leading-relaxed max-w-sm ml-auto">
                                    {milestone.description}
                                </p>
                            </div>

                            {/* Dot */}
                            <div className="absolute left-[-37px] md:left-auto md:relative w-4 h-4 bg-white rounded-full mt-6 ring-4 ring-black" />

                            {/* Right Side (Odd Index) */}
                            <div className={cn("block md:block", index % 2 === 0 && "md:invisible")}>
                                <div className="md:hidden mb-2">
                                    <span className="text-sm font-bold text-neutral-500">{milestone.year}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 md:hidden">{milestone.title}</h3>

                                <div className="hidden md:block">
                                    <span className="text-8xl font-bold text-blue-500 absolute top-0 left-0 -z-10 select-none transform -translate-x-12">{milestone.year}</span>
                                    <h3 className="text-2xl font-bold mb-4 pt-4">{milestone.title}</h3>
                                </div>

                                <p className="text-neutral-400 leading-relaxed max-w-sm">
                                    {milestone.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
