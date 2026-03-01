"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollServices() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const services = [
        {
            title: "Website Development",
            id: "web-dev",
            desc: "We build high-performance, responsive websites that serve as the foundation of your digital presence. Optimized for speed, security, and maximum conversion.",
            tags: ["Corporate Portfolio Sites", "High-Converting Landing Pages", "SEO Architecture"],
            image: "/web-dev.avif"
        },
        {
            title: "Web Apps & SaaS",
            id: "web-apps",
            desc: "Scale your operations with custom-built web applications and SaaS platforms. We engineer powerful dashboards, admin panels, and scalable infrastructure.",
            tags: ["Custom SaaS Dashboards", "Scalable Cloud Solutions", "API Integration"],
            image: "/saas.avif"
        },
        {
            title: "Graphic Design & UI/UX",
            id: "design",
            desc: "Enhance your brand identity with professional design services. We focus on visual clarity and brand consistency to create memorable digital experiences.",
            tags: ["Modern Logo & Branding", "UI & UX Design", "Marketing Creatives"],
            image: "/ui.jpg"
        },
        {
            title: "Shopify Development",
            id: "shopify",
            desc: "Professional platform engineering and custom theme development for high-growth brands. We build scalable, high-conversion Shopify ecosystems.",
            tags: ["Custom Theme Engineering", "Headless Commerce", "Performance Optimization"],
            image: "/shopifyy.jpg"
        },
        {
            title: "Amazon Management",
            id: "amazon",
            desc: "Data-driven marketplace growth and strategic management for Amazon Private Label. We optimize your operational technicalities to maximize dominance.",
            tags: ["Strategic Account Management", "Advanced PPC Optimization", "A9 Algorithm SEO"],
            image: "/dropship.png"
        },
        {
            title: "Digital Marketing",
            id: "marketing",
            desc: "Technical marketing strategies designed for global reach. Optimize search visibility through advanced SEO and highly targeted Google Ads & Social campaigns.",
            tags: ["Meta & TikTok Ads", "Search Engine Optimization", "Global SEM Performance"],
            image: "/digi.jpg"
        },
        {
            title: "WordPress Development",
            id: "wordpress",
            desc: "Professional ecosystem engineering and custom theme development for WordPress. We build secure, high-performance CMS solutions.",
            tags: ["Custom Theme Engineering", "Core Web Vitals Optimization", "Security Hardening"],
            image: "/wordpress.png"
        },
        {
            title: "Automation & AI",
            id: "ai",
            desc: "Optimize your business processes with intelligent automation and AI-driven solutions. Reduce costs and improve efficiency through cutting-edge integrations.",
            tags: ["Business Process Automation", "AI Tool Integrations", "Custom AI Applications"],
            image: "/ai.jpg"
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Horizontal scroll animation
            const sections = gsap.utils.toArray(".horizontal-panel");
            
            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    // The duration of the pin scales with the number of panels
                    end: () => `+=${scrollContainerRef.current?.offsetWidth || window.innerWidth * sections.length}`
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="bg-black text-white overflow-hidden relative border-t border-white/5">
            {/* Background Ambient Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black opacity-60 pointer-events-none" />

            <div ref={scrollContainerRef} className="flex h-[100dvh] w-[800vw]">
                {services.map((service, index) => (
                    <div key={index} className="horizontal-panel w-screen h-full flex flex-col md:flex-row items-center justify-center pt-24 md:pt-[120px] pb-8 md:pb-16 px-6 md:px-24 gap-6 md:gap-16 relative">
                        {/* Section Numbering */}
                        <div className="absolute top-24 md:top-32 left-6 md:left-24 text-[8rem] md:text-[15rem] font-black text-white/[0.03] leading-none pointer-events-none select-none z-0">
                            {String(index + 1).padStart(2, '0')}
                        </div>

                        {/* Content Side */}
                        <div className="flex-1 w-full max-w-2xl z-10 flex flex-col justify-center h-full max-h-[80vh] md:max-h-[70vh]">
                            <div className="mb-4">
                                <div className="inline-block px-3 md:px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-bold tracking-widest text-xs md:text-sm uppercase">Service Pillar</div>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter !leading-tight text-transparent bg-clip-text bg-linear-to-r from-white to-neutral-400">
                                {service.title}
                            </h2>
                            <p className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl text-neutral-400 leading-relaxed font-light line-clamp-4 md:line-clamp-none">
                                {service.desc}
                            </p>
                            
                            <ul className="space-y-2 md:space-y-4 pt-4 md:pt-6">
                                {service.tags.map(tag => (
                                    <li key={tag} className="flex items-center gap-3 text-sm md:text-lg text-neutral-300">
                                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Media Side */}
                        <div className="flex-1 w-full max-w-2xl z-10 hidden sm:flex items-center justify-center h-full max-h-[40vh] md:max-h-[60vh]">
                            <div className="aspect-video md:aspect-[4/3] w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                                <div className="absolute inset-0 bg-linear-to-tr from-cyan-900/40 to-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay" />
                                <Image 
                                    src={service.image} 
                                    alt={service.title} 
                                    fill 
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent z-0 opacity-60" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
