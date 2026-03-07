"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CompanyStory() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 75%",
            }
        });

        tl.fromTo(".story-image-wrap", 
            { opacity: 0, scale: 0.95, y: 30 },
            { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power3.out" }
        )
        .fromTo(".story-content > *",
            { opacity: 0, x: 30 },
            { opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" },
            "-=0.6"
        );
    }, { scope: container });

    return (
        <section ref={container} className="py-24 px-6 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* Left: Image */}
                <div className="story-image-wrap relative h-[500px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                    <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/20 to-transparent z-10 pointer-events-none mix-blend-overlay" />
                    <Image
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                        alt="Digivixo Team"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right: Copy */}
                <div className="story-content flex flex-col justify-center">
                    <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8">
                        Founded by engineers tired of watching businesses struggle with broken digital systems.
                    </h2>
                    
                    <p className="text-xl text-neutral-400 leading-relaxed mb-10">
                        We build software that actually works — fast, scalable, and built to grow with you.
                    </p>

                    <div>
                        <Link href="/team" className="group flex items-center gap-3 text-cyan-400 font-bold text-lg hover:text-cyan-300 transition-colors pb-1 border-b-2 border-transparent hover:border-cyan-400 w-fit">
                            Meet the Team
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
