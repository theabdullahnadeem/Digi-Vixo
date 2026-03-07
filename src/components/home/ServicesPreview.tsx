"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Code2, Cpu, Globe, Target, ShoppingBag, LayoutTemplate, LineChart, Server } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const coreServices = [
    {
        title: "Custom Web & SaaS Development",
        desc: "End-to-end custom software built for extreme scale and performance.",
        icon: Code2,
        color: "from-cyan-400 to-blue-600",
        class: "lg:col-span-1",
        bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
        link: "/services"
    },
    {
        title: "AI & Business Automation Systems",
        desc: "Automate workflows with custom LLMs, intelligent agents, and scalable APIs.",
        icon: Cpu,
        color: "from-indigo-400 to-purple-600",
        class: "lg:col-span-1",
        bgImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
        link: "/services"
    },
    {
        title: "Conversion-Focused Websites",
        desc: "Immersive interfaces and high-performance frontends that convert users into raving fans.",
        icon: Globe,
        color: "from-emerald-400 to-teal-600",
        class: "lg:col-span-1",
        bgImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
        link: "/services"
    }
];

const additionalServices = [
    { title: "Shopify E-commerce", desc: "Build high-converting storefronts.", icon: ShoppingBag, link: "/services" },
    { title: "Amazon Optimization", desc: "Scale your revenue and operations.", icon: Server, link: "/services" },
    { title: "WordPress Development", desc: "Robust content management solutions.", icon: LayoutTemplate, link: "/services" },
    { title: "Digital/Growth Marketing", desc: "Data-driven SEO & Paid Ads.", icon: Target, link: "/services" },
];

export default function ServicesPreview() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(".service-header", 
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: container.current, start: "top 80%" } }
        );

        gsap.fromTo(".core-card",
            { opacity: 0, scale: 0.9, y: 30 },
            { opacity: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "back.out(1.2)", scrollTrigger: { trigger: ".core-grid", start: "top 75%" } }
        );

        gsap.fromTo(".add-card",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, scrollTrigger: { trigger: ".add-grid", start: "top 85%" } }
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
                </div>

                {/* Core Services */}
                <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                    Core Services
                </div>
                <div className="core-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {coreServices.map((srv, i) => {
                        const Icon = srv.icon;
                        return (
                            <div key={i} className={`core-card min-h-[400px] group relative rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/10 ${srv.class}`}>
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-[0.15] group-hover:opacity-[0.25] mix-blend-luminosity z-0"
                                    style={{ backgroundImage: `url('${srv.bgImage}')` }}
                                />
                                
                                <div className={`absolute inset-0 bg-linear-to-br ${srv.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0 pointer-events-none`} />
                                
                                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform duration-500 shadow-xl">
                                        <Icon className="w-8 h-8 text-white group-hover:text-cyan-400 transition-colors" />
                                    </div>
                                    
                                    <div className="mt-8">
                                        <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{srv.title}</h3>
                                        <p className="text-neutral-400 text-lg max-w-sm leading-relaxed">{srv.desc}</p>
                                    </div>

                                    <Link href={srv.link} className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-110">
                                        <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Additional Services */}
                <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-500/30 bg-neutral-500/10 text-neutral-400 text-xs font-bold uppercase tracking-wider">
                    Additional Services
                </div>
                <div className="add-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {additionalServices.map((srv, i) => {
                        const Icon = srv.icon;
                        return (
                            <Link href={srv.link} key={i} className="add-card group flex items-start gap-4 p-6 rounded-2xl border border-white/10 bg-neutral-900/50 hover:bg-neutral-800 transition-colors hover:border-white/20">
                                <div className="w-12 h-12 rounded-xl bg-black/50 border border-white/10 shrink-0 flex items-center justify-center">
                                    <Icon className="w-5 h-5 text-neutral-400 group-hover:text-cyan-400 transition-colors" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{srv.title}</h4>
                                    <p className="text-sm text-neutral-500">{srv.desc}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
                
                <div className="mt-16 flex justify-center">
                    <Link href="/services" className="group flex items-center gap-3 text-white font-bold text-lg hover:text-cyan-400 transition-colors pb-2 border-b-2 border-transparent hover:border-cyan-400">
                        View All Capabilities
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
}