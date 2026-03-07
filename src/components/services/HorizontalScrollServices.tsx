"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { Monitor, Cpu, Palette, ShoppingBag, Truck, Layout, PenTool, Bot } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollServices() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const services = [
        {
            title: "Website Development",
            id: "web-dev",
            icon: Monitor,
            desc: "We build high-performance, responsive websites that serve as the foundation of your digital presence. Optimized for speed, security, and maximum conversion.",
            techStack: ["react", "nextdotjs", "tailwindcss", "vercel"],
            image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80"
        },
        {
            title: "Web Apps & SaaS",
            id: "web-apps",
            icon: Cpu,
            desc: "Scale your operations with custom-built web applications and SaaS platforms. We engineer powerful dashboards, admin panels, and scalable infrastructure.",
            techStack: ["react", "nodedotjs", "amazonaws", "postgresql"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
        },
        {
            title: "Graphic Design & UI/UX",
            id: "design",
            icon: Palette,
            desc: "Enhance your brand identity with professional design services. We focus on visual clarity and brand consistency to create memorable digital experiences.",
            techStack: ["figma", "adobe", "framer"],
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80"
        },
        {
            title: "Shopify Development",
            id: "shopify",
            icon: ShoppingBag,
            desc: "Professional platform engineering and custom theme development for high-growth brands. We build scalable, high-conversion Shopify ecosystems.",
            techStack: ["shopify", "react", "tailwindcss"],
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80"
        },
        {
            title: "Amazon Management",
            id: "amazon",
            icon: Truck,
            desc: "Data-driven marketplace growth and strategic management for Amazon Private Label. We optimize your operational technicalities to maximize dominance.",
            techStack: ["amazon"],
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
        },
        {
            title: "Digital Marketing",
            id: "marketing",
            icon: Layout,
            desc: "Technical marketing strategies designed for global reach. Optimize search visibility through advanced SEO and highly targeted Google Ads & Social campaigns.",
            techStack: ["googleads", "meta", "tiktok", "googleanalytics"],
            image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80"
        },
        {
            title: "WordPress Development",
            id: "wordpress",
            icon: PenTool,
            desc: "Professional ecosystem engineering and custom theme development for WordPress. We build secure, high-performance CMS solutions.",
            techStack: ["wordpress", "php", "mysql"],
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80"
        },
        {
            title: "Automation & AI",
            id: "ai",
            icon: Bot,
            desc: "Optimize your business processes with intelligent automation and AI-driven solutions. Reduce costs and improve efficiency through cutting-edge integrations.",
            techStack: ["python", "openai", "tensorflow", "zapier"],
            image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80"
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
                {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <div key={index} className="horizontal-panel w-screen h-full flex flex-col md:flex-row items-center justify-center pt-24 md:pt-[120px] pb-8 md:pb-16 px-6 md:px-24 gap-6 md:gap-16 relative">
                            {/* Section Numbering */}
                            <div className="absolute top-24 md:top-32 left-6 md:left-24 text-[8rem] md:text-[15rem] font-black text-white/[0.03] leading-none pointer-events-none select-none z-0">
                                {String(index + 1).padStart(2, '0')}
                            </div>

                            {/* Content Side */}
                            <div className="flex-1 w-full max-w-2xl z-10 flex flex-col justify-center h-full max-h-[80vh] md:max-h-[70vh]">
                                <div className="mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                                        <Icon className="w-7 h-7 text-cyan-400" />
                                    </div>
                                    <div className="inline-block px-3 md:px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-bold tracking-widest text-xs md:text-sm uppercase mb-2">Service Pillar</div>
                                </div>
                                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter !leading-tight text-transparent bg-clip-text bg-linear-to-r from-white to-neutral-400">
                                    {service.title}
                                </h2>
                                <p className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl text-neutral-400 leading-relaxed font-light line-clamp-4 md:line-clamp-none">
                                    {service.desc}
                                </p>
                                
                                <div className="mt-8 flex flex-wrap gap-4 items-center">
                                    <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mr-2">Tech Stack:</span>
                                    {service.techStack.map(tag => (
                                        <div key={tag} className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center p-2 grayscale hover:grayscale-0 hover:bg-white/10 transition-all cursor-crosshair group relative">
                                            {/* Tooltip */}
                                            <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-neutral-800 text-white text-xs px-2 py-1 rounded shadow-lg pointer-events-none z-20 whitespace-nowrap">
                                                {tag}
                                            </div>
                                            <img src={`https://cdn.simpleicons.org/${tag}/white`} alt={tag} className="w-full h-full object-contain" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Media Side */}
                            <div className="flex-1 w-full max-w-2xl z-10 hidden sm:flex items-center justify-center h-full max-h-[40vh] md:max-h-[60vh]">
                                <div className="aspect-video md:aspect-[4/3] w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                                    <div className="absolute inset-0 bg-linear-to-tr from-cyan-900/40 to-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay" />
                                    <img 
                                        src={service.image} 
                                        alt={service.title}  
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent z-0 opacity-60 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
