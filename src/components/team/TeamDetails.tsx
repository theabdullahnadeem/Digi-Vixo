"use client";

import { Linkedin, Twitter, Mail, Github, Instagram } from "lucide-react";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TeamDetails() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        // Dramatic Scroll Reveal
        gsap.from(".team-member", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
            },
            y: 100,
            opacity: 0,
            rotationX: -15,
            transformPerspective: 1000,
            duration: 1.2,
            stagger: 0.3,
            ease: "power4.out"
        });

        // 3D Holographic Tilt Effect setup
        cardRefs.current.forEach((card) => {
            if (!card) return;
            
            const imageContainer = card.querySelector('.image-container');
            const glow = card.querySelector('.holographic-glow');

            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -10; // Max tilt degree
                const rotateY = ((x - centerX) / centerX) * 10;

                gsap.to(imageContainer, {
                    rotateX,
                    rotateY,
                    transformPerspective: 1000,
                    duration: 0.5,
                    ease: "power2.out"
                });

                // Move the glow to follow mouse
                gsap.to(glow, {
                    x: x - rect.width / 2,
                    y: y - rect.height / 2,
                    opacity: 1,
                    duration: 0.5,
                    ease: "power2.out"
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(imageContainer, {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 1,
                    ease: "elastic.out(1, 0.3)"
                });
                gsap.to(glow, {
                    opacity: 0,
                    duration: 0.5
                });
            });
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative py-32 px-6 bg-black text-white overflow-hidden border-t border-white/5">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-900/10 to-indigo-900/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-40 relative z-10">
                {/* Abdullah Profile */}
                <div 
                    className="team-member grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
                    ref={(el) => { cardRefs.current[0] = el; }}
                >
                    <div className="lg:col-span-5 relative group perspective-1000">
                        <div className="holographic-glow absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/30 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 opacity-0 pointer-events-none z-20 mix-blend-screen" />
                        <div className="image-container aspect-[3/4] rounded-[2.5rem] overflow-hidden relative border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-neutral-900">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                            <Image src="/abdullah.jpeg" alt="Abdullah" fill className="object-cover scale-105 group-hover:scale-110 transition-transform duration-1000" />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent pt-32 pb-8 px-8 z-20">
                                <div className="flex gap-4 text-white">
                                    <a href="https://www.linkedin.com/in/abdullah-nadeem-ceo-digivixo/" className="hover:text-cyan-400 hover:-translate-y-1 transition-all"><Linkedin /></a>
                                    <a href="https://github.com/ab9898998989898" className="hover:text-cyan-400 hover:-translate-y-1 transition-all"><Github /></a>
                                    <a href="mailto:abdullahnadeem2580@gmail.com" className="hover:text-cyan-400 hover:-translate-y-1 transition-all"><Mail /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-7 space-y-10 group">
                        <div>
                            <h2 className="text-6xl md:text-8xl font-black mb-2 tracking-tighter text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-400 transition-all duration-500">Abdullah</h2>
                            <p className="text-xl text-cyan-400 font-bold uppercase tracking-widest">Co-Founder, CEO & CTO</p>
                        </div>
                        
                        <div className="space-y-6 text-xl text-neutral-400 leading-relaxed font-light">
                            <p>
                                Abdullah is the principal architect behind Digivixo&apos;s technical infrastructure. With deep expertise in system architecture, he recognized that modern businesses need reliable, scalable systems built for exponential growth.
                            </p>
                            
                            <div className="bg-neutral-900/50 backdrop-blur-xl p-8 rounded-[2rem] border border-white/5 hover:border-cyan-500/30 transition-colors shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500" />
                                <h4 className="text-lg font-bold mb-3 text-white">Core Philosophy</h4>
                                <p className="text-neutral-300 italic">
                                    &quot;Technology should empower aggressive scaling. We build systems that automate the mundane so our clients can focus entirely on market dominance.&quot;
                                </p>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold mb-4 text-white uppercase tracking-widest">Technical Mastery</h4>
                                <div className="flex flex-wrap gap-3">
                                    {['Full-Stack Development', 'Cloud Infrastructure', 'Intelligent Automation', 'System Security'].map((tag) => (
                                        <span key={tag} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-neutral-300 hover:border-cyan-400 hover:text-cyan-400 transition-colors cursor-default">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hassan Profile */}
                <div 
                    className="team-member grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
                    ref={(el) => { cardRefs.current[1] = el; }}
                >
                    {/* Reversed order for desktop */}
                    <div className="lg:col-span-7 space-y-10 group lg:order-1 order-2 text-left lg:text-right">
                        <div>
                            <h2 className="text-6xl md:text-8xl font-black mb-2 tracking-tighter text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-l group-hover:from-white group-hover:to-indigo-400 transition-all duration-500">Hassan</h2>
                            <p className="text-xl text-indigo-400 font-bold uppercase tracking-widest">Co-Founder & COO</p>
                        </div>
                        
                        <div className="space-y-6 text-xl text-neutral-400 leading-relaxed font-light flex flex-col lg:items-end">
                            <p className="max-w-2xl">
                                Hassan provides the strategic operational vision that transforms Digivixo&apos;s technical firepower into tangible commercial value. He ensures every solution aligns perfectly with long-term strategic goals.
                            </p>
                            
                            <div className="bg-neutral-900/50 backdrop-blur-xl p-8 rounded-[2rem] border border-white/5 hover:border-indigo-500/30 transition-colors shadow-2xl relative overflow-hidden text-left max-w-2xl w-full">
                                <div className="absolute top-0 right-0 w-1 h-full bg-indigo-500 hidden lg:block" />
                                <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500 lg:hidden" />
                                <h4 className="text-lg font-bold mb-3 text-white">Core Philosophy</h4>
                                <p className="text-neutral-300 italic">
                                    &quot;Technical excellence is only half the battle; true market leadership is achieved by designing systems around human interaction and operational reality.&quot;
                                </p>
                            </div>

                            <div className="w-full max-w-2xl text-left lg:text-right">
                                <h4 className="text-sm font-bold mb-4 text-white uppercase tracking-widest">Strategic Domains</h4>
                                <div className="flex flex-wrap gap-3 lg:justify-end">
                                    {['Operational Efficiency', 'Digital Product Strategy', 'UI/UX Engineering', 'Technical Management'].map((tag) => (
                                        <span key={tag} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-neutral-300 hover:border-indigo-400 hover:text-indigo-400 transition-colors cursor-default">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative group perspective-1000 lg:order-2 order-1">
                        <div className="holographic-glow absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/30 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 opacity-0 pointer-events-none z-20 mix-blend-screen" />
                        <div className="image-container aspect-[3/4] rounded-[2.5rem] overflow-hidden relative border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-neutral-900">
                            <div className="absolute inset-0 bg-gradient-to-bl from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                            <Image src="/hassan.jpeg" alt="Hassan" fill className="object-cover scale-105 group-hover:scale-110 transition-transform duration-1000" />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent pt-32 pb-8 px-8 z-20">
                                <div className="flex gap-4 text-white">
                                    <a href="#" className="hover:text-indigo-400 hover:-translate-y-1 transition-all"><Instagram /></a>
                                    <a href="#" className="hover:text-indigo-400 hover:-translate-y-1 transition-all"><Twitter /></a>
                                    <a href="mailto:e.com.hit@gmail.com" className="hover:text-indigo-400 hover:-translate-y-1 transition-all"><Mail /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
