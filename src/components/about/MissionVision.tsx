"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Eye } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function MissionVision() {
    const containerRef = useRef<HTMLDivElement>(null);
    const pinRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Complex sticky pin for desktop
            let scrollTrigger: ScrollTrigger | null = null;
            
            // Only setup pinning on larger screens
            const mm = gsap.matchMedia();
            
            mm.add("(min-width: 768px)", () => {
                scrollTrigger = ScrollTrigger.create({
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=150%", // How long the pin lasts
                    pin: pinRef.current,
                    scrub: 1,
                });

                // Animate Mission out, Vision in
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "+=150%",
                        scrub: 1,
                    }
                });

                tl.to(".mission-card", {
                    opacity: 0,
                    scale: 0.9,
                    y: -50,
                    rotateX: 10,
                    duration: 1
                })
                .fromTo(".vision-card", 
                    { opacity: 0, scale: 1.1, y: 100, rotateX: -10 },
                    { opacity: 1, scale: 1, y: 0, rotateX: 0, duration: 1 },
                    "-=0.5"
                );
            });

            // Mobile fallback animations
            mm.add("(max-width: 767px)", () => {
                gsap.from(".mv-card-mobile", {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    },
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.3
                });
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative bg-black border-t border-white/5">
            {/* Desktop Pinned Layout */}
            <div className="hidden md:block h-[250vh]">
                <div ref={pinRef} className="h-screen w-full flex items-center justify-center p-6 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black">
                    <div className="max-w-7xl w-full grid grid-cols-2 gap-16 relative">
                        
                        {/* Static Header Plate */}
                        <div className="flex flex-col justify-center border-r border-white/10 pr-16">
                            <h2 className="text-6xl lg:text-8xl font-black tracking-tighter text-white leading-none">
                                The <br/>
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-indigo-500">Core</span> <br/>
                                Directives.
                            </h2>
                            <p className="max-w-sm mt-8 text-neutral-400 text-lg">Swipe through the foundational principles that guide every line of code we ship.</p>
                        </div>

                        {/* Interactive Cards Container */}
                        <div className="relative h-[500px] flex items-center">
                            {/* Mission Card */}
                            <div className="mission-card absolute inset-0 flex flex-col justify-center p-12 rounded-[2.5rem] bg-neutral-900 border border-white/10 shadow-2xl backdrop-blur-xl">
                                <Target className="w-16 h-16 text-cyan-400 mb-8" />
                                <h3 className="text-4xl font-bold mb-6 text-white">Our Mission</h3>
                                <p className="text-neutral-400 text-2xl leading-relaxed">
                                    To empower businesses by providing reliable, high-performance IT solutions that simplify complex processes, enhance digital presence, and drive sustainable growth through aggressive technical excellence.
                                </p>
                            </div>

                            {/* Vision Card */}
                            <div className="vision-card absolute inset-0 flex flex-col justify-center p-12 rounded-[2.5rem] bg-neutral-900 border border-white/10 shadow-[0_0_50px_rgba(99,102,241,0.1)] backdrop-blur-xl opacity-0">
                                <Eye className="w-16 h-16 text-indigo-400 mb-8" />
                                <h3 className="text-4xl font-bold mb-6 text-white">Our Vision</h3>
                                <p className="text-neutral-400 text-2xl leading-relaxed">
                                    To be a globally recognized engineering leader, known for absolute integrity and the rapid delivery of highly intelligent web architectures that dictate the future of SaaS technology.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* Mobile Fallback Layout */}
            <div className="md:hidden py-32 px-6">
                <div className="mb-16">
                    <h2 className="text-5xl font-black tracking-tighter text-white leading-none">
                        The Core <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-indigo-500">Directives.</span>
                    </h2>
                </div>
                <div className="space-y-8">
                    <div className="mv-card-mobile p-8 bg-neutral-900 rounded-[2rem] border border-white/10">
                        <Target className="w-12 h-12 text-cyan-400 mb-6" />
                        <h3 className="text-3xl font-bold mb-4 text-white">Our Mission</h3>
                        <p className="text-neutral-400 text-lg leading-relaxed">
                            To empower businesses by providing reliable, high-performance solutions that simplify processes and drive sustainable growth.
                        </p>
                    </div>
                    <div className="mv-card-mobile p-8 bg-neutral-900 rounded-[2rem] border border-white/10">
                        <Eye className="w-12 h-12 text-indigo-400 mb-6" />
                        <h3 className="text-3xl font-bold mb-4 text-white">Our Vision</h3>
                        <p className="text-neutral-400 text-lg leading-relaxed">
                            To be a globally recognized leader in digital transformation, known for our commitment to quality and intelligent solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
