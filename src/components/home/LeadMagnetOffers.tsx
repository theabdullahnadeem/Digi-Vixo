"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Search, Cpu, GitMerge } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const offers = [
    {
        title: "Free Website Audit",
        desc: "We'll review your site's speed, SEO, and conversion rate — free.",
        icon: Search,
        btn: "Claim Free Audit",
        color: "from-blue-500 to-cyan-400"
    },
    {
        title: "Free SaaS Architecture Call",
        desc: "Map out your product's architecture and MVP roadmap in 30 minutes.",
        icon: Cpu,
        btn: "Book Free Call",
        color: "from-indigo-500 to-purple-500"
    },
    {
        title: "Free Automation Strategy Session",
        desc: "Find out which workflows in your business can be automated — and what you'd save.",
        icon: GitMerge,
        btn: "Get Free Session",
        color: "from-emerald-500 to-teal-400"
    }
];

export default function LeadMagnetOffers() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(".offer-card",
            { opacity: 0, scale: 0.9, y: 30 },
            { opacity: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "back.out(1.2)", scrollTrigger: { trigger: container.current, start: "top 80%" } }
        );
    }, { scope: container });

    return (
        <section ref={container} className="py-24 px-6 bg-black relative border-y border-white/5">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {offers.map((offer, i) => {
                        const Icon = offer.icon;
                        return (
                            <div key={i} className="offer-card group relative p-8 rounded-3xl bg-neutral-900 border border-white/10 hover:border-white/20 transition-all shadow-2xl overflow-hidden flex flex-col justify-between min-h-[320px]">
                                {/* Background glow on hover */}
                                <div className={`absolute inset-0 bg-linear-to-br ${offer.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
                                
                                <div>
                                    <div className="w-14 h-14 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                                        <Icon className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">{offer.title}</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed">{offer.desc}</p>
                                </div>

                                <div className="mt-8">
                                    <Link href="/contact" className={`group/btn w-full inline-flex items-center justify-between p-4 rounded-xl bg-linear-to-r ${offer.color} text-white font-bold text-sm shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all hover:scale-[1.02]`}>
                                        {offer.btn}
                                        <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center group-hover/btn:bg-white/30 transition-colors">
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
