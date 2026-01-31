"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(useGSAP);
}

interface BlogPageHeroProps {
    title: string;
    subtitle: string;
}

export default function BlogPageHero({ title, subtitle }: BlogPageHeroProps) {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(".blog-hero-title", {
            y: 60,
            opacity: 0,
            duration: 1,
        })
            .from(".blog-hero-subtitle", {
                y: 40,
                opacity: 0,
                duration: 0.8,
            }, "-=0.6");
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="relative py-24 px-6 text-center space-y-6 bg-linear-to-b from-neutral-900 to-black overflow-hidden"
        >
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-15"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&q=80')" }}
            />
            <div className="absolute inset-0 bg-linear-to-b from-neutral-900/80 to-black" />
            <h1 className="blog-hero-title relative z-10 text-5xl md:text-7xl font-bold tracking-tighter">
                {title}
            </h1>
            <p className="blog-hero-subtitle relative z-10 text-xl text-neutral-500 max-w-2xl mx-auto">
                {subtitle}
            </p>
        </section>
    );
}
