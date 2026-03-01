"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BrandStory() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Massive Typography Parallax
            gsap.to(textRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
                y: 300,
                opacity: 0,
                scale: 1.1,
                ease: "none"
            });

            // Cinematic fade up of paragraph blocks
            gsap.from(".story-block", {
                scrollTrigger: {
                    trigger: ".story-grid",
                    start: "top 75%",
                },
                y: 100,
                opacity: 0,
                rotationX: -20,
                transformPerspective: 1000,
                duration: 1.5,
                stagger: 0.3,
                ease: "power4.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-screen bg-black overflow-hidden flex flex-col justify-center border-b border-white/5">
            {/* Cinematic Background Layer */}
            <div className="absolute inset-0 w-full h-full opacity-30 mix-blend-luminosity">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80')" }}
                />
            </div>
            
            {/* Deep Glassmorphic Gradients */}
            <div className="absolute inset-0 bg-linear-to-b from-black via-black/80 to-black z-0 pointer-events-none" />
            <div className="absolute inset-0 bg-linear-to-r from-indigo-900/20 via-transparent to-cyan-900/20 z-0 pointer-events-none" />

            <div className="relative z-10 w-full pt-40 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Typography */}
                    <div className="mb-32">
                        <div className="inline-block px-4 py-1 mb-6 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-bold tracking-widest text-sm uppercase shadow-[0_0_20px_rgba(6,182,212,0.15)]">Our Origins</div>
                        <h1 ref={textRef} className="text-6xl md:text-[8rem] font-black tracking-tighter leading-none text-white">
                            We are <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-indigo-500">DIGIVIXO.</span>
                        </h1>
                    </div>

                    {/* Story Grid */}
                    <div className="story-grid grid grid-cols-1 md:grid-cols-2 gap-16 text-xl leading-relaxed text-neutral-400 max-w-6xl ml-auto">
                        <div className="story-block space-y-8 p-10 rounded-[2rem] bg-neutral-900/40 backdrop-blur-md border border-white/5 hover:border-white/20 transition-colors">
                            <p>
                                Digivixo is a professional IT and digital services firm founded with a clear objective: to bridge the gap between complex technical challenges and aggressive business scaling. 
                            </p>
                            <p>
                                We recognized that organizations struggle with fragmented digital strategies, unreliable legacy systems, and "out-of-the-box" solutions that fail to support exponential growth.
                            </p>
                        </div>
                        <div className="story-block space-y-8 p-10 rounded-[2rem] bg-neutral-900/40 backdrop-blur-md border border-white/5 hover:border-white/20 transition-colors md:mt-16">
                            <p>
                                We didn't build an agency; we built an engineering powerhouse to provide a unified approach to true digital transformation. 
                            </p>
                            <p>
                                By combining expert system architecture, custom high-performance applications, and intelligent automation, we deliver end-to-end ecosystems built for dominance. We empower businesses with the technology they need to lead their markets.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
