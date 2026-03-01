"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TeamPreview() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".team-card", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 px-6 bg-transparent text-white border-t border-white/5">
            <div className="max-w-7xl mx-auto text-center space-y-16">
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Meet The Founders</h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        The visionaries behind Digivixo, dedicated to building the future of digital transformation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Abdullah */}
                    <div className="team-card p-8 rounded-3xl bg-neutral-900/50 backdrop-blur-md border border-white/10 hover:border-cyan-400/50 transition-colors text-left space-y-6 group relative overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                        <div className="w-16 h-16 rounded-full bg-neutral-800 relative overflow-hidden group-hover:scale-110 transition-transform duration-500 shadow-xl border border-white/10">
                            <Image src="/abdullah.jpeg" alt="Abdullah" fill className="object-cover" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">Abdullah</h3>
                            <p className="text-cyan-400/80 text-sm uppercase tracking-widest font-bold mt-1">Chief Executive Officer</p>
                        </div>
                        <p className="text-neutral-400 leading-relaxed">
                            A strategic architect of technical ecosystems and high-performance software. Abdullah specializes in driving digital innovation and building scalable infrastructure that empowers modern businesses.
                        </p>
                    </div>

                    {/* Hassan */}
                    <div className="team-card p-8 rounded-3xl bg-neutral-900/50 backdrop-blur-md border border-white/10 hover:border-indigo-400/50 transition-colors text-left space-y-6 group relative overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-bl from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                        <div className="w-16 h-16 rounded-full bg-neutral-800 relative overflow-hidden group-hover:scale-110 transition-transform duration-500 shadow-xl border border-white/10">
                            <Image src="/hassan.jpeg" alt="Hassan" fill className="object-cover" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">Hassan</h3>
                            <p className="text-indigo-400/80 text-sm uppercase tracking-widest font-bold mt-1">Chief Operations Officer</p>
                        </div>
                        <p className="text-neutral-400 leading-relaxed">
                            The technical backbone of Digivixo. Hassan engineers seamless digital architectures and optimizes complex workflows to ensure operational efficiency and sustainable technical growth.
                        </p>
                    </div>
                </div>

                <Link href="/team" className="inline-block px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/50">
                    Read Full Bios
                </Link>
            </div>
        </section>
    );
}
