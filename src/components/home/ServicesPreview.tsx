"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { Globe, Layout, Palette, Cpu, ShoppingBag, Box, ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

export default function ServicesPreview() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".bento-item", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            clearProps: "all" // Ensure elements remain visible if animation completes or something goes wrong
        });
    }, { scope: containerRef }); // Properly scope the selector

    const services = [
        {
            id: "web-dev",
            title: "Website Development",
            description: "Custom-built, high-performance websites optimized for speed and scale.",
            icon: <Globe className="w-6 h-6" />,
            link: "/services#web-dev",
            className: "md:col-span-2 lg:col-span-2 row-span-2",
            bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3"
        },
        {
            id: "web-apps",
            title: "Web Applications",
            description: "Budget SaaS app development for small teams and custom enterprise solutions.",
            icon: <Layout className="w-6 h-6" />,
            link: "/services#web-apps",
            className: "md:col-span-1 lg:col-span-1",
            bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2370&ixlib=rb-4.0.3"
        },
        {
            id: "ai",
            title: "Automation & AI",
            description: "Leading AI automation agency USA providing intelligent workflows and custom bots.",
            icon: <Cpu className="w-6 h-6" />,
            link: "/services#ai",
            className: "md:col-span-1 lg:col-span-1",
            bgImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2532&ixlib=rb-4.0.3"
        },
        {
            id: "ui-ux",
            title: "UI/UX & Design",
            description: "Premium SaaS UI UX design for mobile web apps and digital brand identity.",
            icon: <Palette className="w-6 h-6" />,
            link: "/services#design",
            className: "md:col-span-2 lg:col-span-1",
            bgImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2564&ixlib=rb-4.0.3"
        },
        {
            id: "shopify",
            title: "Shopify Development",
            description: "Shopify app UI UX development agency specializing in high-growth stores.",
            icon: <ShoppingBag className="w-6 h-6" />,
            link: "/services#shopify",
            className: "md:col-span-1 lg:col-span-1",
            bgImage: "https://plus.unsplash.com/premium_photo-1720503965220-10ea698bf0aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcGlmeSUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww"
        },
        {
            id: "amazon",
            title: "Amazon Management",
            description: "Strategic growth for Amazon Private Label.",
            icon: <Box className="w-6 h-6" />,
            link: "/services#amazon",
            className: "md:col-span-1 lg:col-span-1",
            bgImage: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&q=80&w=2370&ixlib=rb-4.0.3"
        },
        {
            id: "marketing",
            title: "Digital Marketing",
            description: "Data-driven social media and SEM solutions.",
            icon: <Globe className="w-6 h-6" />,
            link: "/services#marketing",
            className: "md:col-span-2 lg:col-span-2",
            bgImage: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=2376&ixlib=rb-4.0.3"
        },
    ];

    return (
        <section ref={containerRef} className="py-32 px-6 bg-background">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                            Scalable <span className="text-primary">SaaS & AI Services.</span>
                        </h2>
                        <p className="text-neutral-400 text-lg leading-relaxed max-w-xl">
                            A comprehensive suite of digital services designed to build, scale, and automate your business infrastructure.
                        </p>
                    </div>
                    <Link href="/services" className="hidden md:flex items-center gap-2 text-white hover:text-primary transition-colors group">
                        <span className="font-medium">View All Services</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[240px] gap-4">
                    {services.map((service) => (
                        <Link
                            key={service.id}
                            href={service.link}
                            className={cn(
                                "bento-item group relative flex flex-col justify-end p-8 overflow-hidden rounded-3xl bg-card border border-neutral-800 hover:border-neutral-700 transition-all duration-500 hover:shadow-2xl",
                                service.className
                            )}
                        >
                            {service.bgImage && (
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-30 mix-blend-luminosity"
                                    style={{ backgroundImage: `url('${service.bgImage}')` }}
                                />
                            )}
                            <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent" />

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="self-start p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-white mb-auto">
                                    {service.icon}
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed max-w-[90%]">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="flex md:hidden justify-center mt-8">
                    <Link href="/services" className="flex items-center gap-2 text-white hover:text-primary transition-colors group">
                        <span className="font-medium">View All Services</span>
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}