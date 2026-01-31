"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function BrandStory() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".story-text", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative py-24 px-6 md:px-12 overflow-hidden">
            {/* Background Image - Full Width */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80')" }}
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/70" />
            {/* Content - Centered with max-width */}
            <div className="relative z-10 max-w-7xl mx-auto space-y-12">
                <h1 className="story-text text-5xl md:text-7xl font-bold tracking-tighter">
                    We are <span className="text-accent">DIGIVIXO.</span>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg md:text-xl leading-relaxed text-neutral-300">
                    <p className="story-text">
                        Digivixo is a professional IT and digital services firm founded with a clear objective: to bridge the gap between complex technical challenges and business growth. We recognized that many organizations struggle with fragmented digital strategies, unreliable systems, and solutions that fail to scale.
                    </p>
                    <p className="story-text">
                        We built Digivixo to provide a unified approach to digital transformation. By combining expert website development, custom web applications, and intelligent automation, we deliver end-to-end solutions that are built for performance and reliability. Our goal is to empower businesses with the technology they need to lead in their respective industries.
                    </p>
                </div>
            </div>
        </section>
    );
}
