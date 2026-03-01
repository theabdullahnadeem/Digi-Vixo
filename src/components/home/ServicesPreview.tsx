"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Code2, Cpu, Globe, Target } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "SaaS Development",
        desc: "End-to-end custom software built for extreme scale and performance.",
        icon: Code2,
        color: "from-cyan-400 to-blue-600",
        colSpan: "md:col-span-2 lg:col-span-2",
        class: "min-h-[300px] md:h-[400px]",
        bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
        link:"/services"
    },
    {
        title: "AI Integration",
        desc: "Automate workflows with custom LLMs and intelligent agents.",
        icon: Cpu,
        color: "from-indigo-400 to-purple-600",
        colSpan: "md:col-span-1 lg:col-span-1",
        class: "min-h-[300px] md:h-[400px]",
        bgImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
        link:"/services"
    },
    {
        title: "Growth Marketing",
        desc: "Data-driven SEO & Paid Ads to dominate your niche.",
        icon: Target,
        color: "from-orange-400 to-red-600",
        colSpan: "md:col-span-1 lg:col-span-1",
        class: "min-h-[300px] md:h-[300px]",
        bgImage: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80",
        link:"/services"
    },
    {
        title: "UI/UX Design",
        desc: "Immersive interfaces that convert users into raving fans.",
        icon: Globe,
        color: "from-emerald-400 to-teal-600",
        colSpan: "md:col-span-2 lg:col-span-2",
        class: "min-h-[300px] md:h-[300px]",
        bgImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
        link:"/services"
    }
];

export default function ServicesPreview() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(".service-header", 
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: container.current, start: "top 80%" } }
        );

        gsap.fromTo(".service-card",
            { opacity: 0, scale: 0.9, y: 30 },
            { opacity: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "back.out(1.2)", scrollTrigger: { trigger: ".service-grid", start: "top 75%" } }
        );
    }, { scope: container });

    return (
        <section ref={container} className="py-32 px-6 bg-black relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--brand-indigo)_0,transparent_50%)] opacity-10 pointer-events-none" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="service-header flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
                    <div className="max-w-2xl">
                        <div className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</div>
                        <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
                            We don't do <br/> 
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-neutral-400 to-neutral-600">ordinary.</span>
                        </h2>
                    </div>
                    <Link href="/services" className="group flex items-center gap-3 text-white font-bold text-lg hover:text-cyan-400 transition-colors pb-2 border-b-2 border-transparent hover:border-cyan-400">
                        View All Capabilities
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                    </Link>
                </div>

                <div className="service-grid grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((srv, i) => {
                        const Icon = srv.icon;
                        return (
                            <div key={i} className={`service-card group relative rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/10 ${srv.colSpan} ${srv.class}`}>
                                {/* Optional Image Layer */}
                                {srv.bgImage && (
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-[0.15] group-hover:opacity-[0.25] mix-blend-luminosity z-0"
                                        style={{ backgroundImage: `url('${srv.bgImage}')` }}
                                    />
                                )}
                                
                                {/* Glowing Hover Background */}
                                <div className={`absolute inset-0 bg-linear-to-br ${srv.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0 pointer-events-none`} />
                                
                                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform duration-500 shadow-xl">
                                        <Icon className="w-8 h-8 text-white group-hover:text-cyan-400 transition-colors" />
                                    </div>
                                    
                                    <div className="mt-8">
                                        <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{srv.title}</h3>
                                        <p className="text-neutral-400 text-lg max-w-sm leading-relaxed">{srv.desc}</p>
                                    </div>

                                    {/* Animated Arrow */}
                                    <Link href={srv.link} className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                        <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}