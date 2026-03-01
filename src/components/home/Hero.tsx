"use client";

import { useRef } from "react";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.fromTo(".hero-badge", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.2 })
          .fromTo(".hero-title .line", { opacity: 0, y: 40, rotateX: -90 }, { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.15, ease: "power4.out" }, "-=0.3")
          .fromTo(".hero-desc", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
          .fromTo(".hero-btn", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.5)" }, "-=0.4")
          .fromTo(".hero-visual", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1, ease: "power3.out" }, "-=0.8");

        gsap.to(".floating-shape", {
            y: "-=20",
            rotation: "+=5",
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: 0.2
        });
    }, { scope: container });

    return (
        <section ref={container} className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-black">
            {/* Unique Background */}
            <div className="absolute top-0 right-0 w-full h-[500px] bg-linear-to-b from-brand-indigo/20 via-brand-blue/5 to-transparent blur-3xl pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10 pt-10">
                {/* Left Content */}
                <div className="text-left">
                    <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-semibold tracking-wide mb-8">
                        <Sparkles className="w-4 h-4" />
                        <span>Redefining Digital Experiences</span>
                    </div>

                    <h1 className="hero-title text-6xl md:text-8xl font-black tracking-tighter text-white leading-[1.1] mb-6" style={{ perspective: '1000px' }}>
                        <div className="line origin-bottom">Build Faster.</div>
                        <div className="line origin-bottom">Scale <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-indigo-500">Smarter.</span></div>
                        <div className="line origin-bottom">Dominate.</div>
                    </h1>

                    <p className="hero-desc text-lg md:text-xl text-neutral-400 max-w-xl leading-relaxed mb-10">
                        We architect premium, high-performance SaaS platforms and AI-driven ecosystems that push modern businesses beyond the limitations of standard software.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <Link href="/services" className="hero-btn group flex items-center justify-center gap-3 px-8 py-4 bg-cyan-500 text-black rounded-xl font-bold text-lg hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:-translate-y-1">
                            Start Building Now
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link href="/contact" className="hero-btn group flex items-center justify-center gap-3 px-8 py-4 bg-white/5 text-white border border-white/20 rounded-xl font-bold text-lg hover:bg-white/10 transition-all hover:border-white/30 backdrop-blur-md">
                            <Play className="w-5 h-5 text-cyan-400" />
                            Partner With Us
                        </Link>
                    </div>
                </div>

                {/* Right Visual Element */}
                <div className="hero-visual relative hidden lg:block h-[600px] w-full" style={{ perspective: '2000px' }}>
                    <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-12deg) rotateX(6deg)' }}>
                        {/* 3D Glass Cards */}
                        <div className="floating-shape absolute top-10 right-10 w-72 h-80 bg-white/5 backdrop-blur-3xl border border-white/20 rounded-3xl p-6 shadow-2xl flex flex-col gap-4" style={{ transform: 'translateZ(100px)' }}>
                            <div className="w-12 h-12 rounded-full bg-linear-to-br from-cyan-400 to-indigo-500 mb-4 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                            <div className="w-3/4 h-4 rounded-full bg-white/10" />
                            <div className="w-1/2 h-4 rounded-full bg-white/10" />
                            <div className="w-full h-24 mt-auto rounded-xl bg-linear-to-t from-white/10 to-transparent border border-white/5" />
                        </div>
                        
                        <div className="floating-shape absolute bottom-20 left-10 w-64 h-72 bg-indigo-500/10 backdrop-blur-xl border border-indigo-500/30 rounded-3xl p-6 shadow-2xl flex flex-col gap-4" style={{ transform: 'translateZ(50px)' }}>
                            <div className="w-full h-32 rounded-xl bg-indigo-500/20 mb-4 flex items-center justify-center">
                                <Sparkles className="w-10 h-10 text-indigo-400" />
                            </div>
                            <div className="w-full h-4 rounded-full bg-white/10" />
                            <div className="w-4/5 h-4 rounded-full bg-white/10" />
                        </div>

                        {/* Abstract Wireframe Rings */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-500/30 rounded-full" style={{ transform: 'translateZ(-50px)' }} />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-500/20 rounded-full" style={{ transform: 'rotateX(60deg) translateZ(-50px)' }} />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-indigo-500/20 rounded-full" style={{ transform: 'rotateY(60deg) translateZ(-50px)' }} />
                    </div>
                </div>
            </div>
            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black to-transparent z-10 pointer-events-none" />
        </section>
    );
}
