"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pricingTiers = [
    { service: "Starter Business Website", price: "$1,500" },
    { service: "E-commerce & Shopify", price: "$2,500" },
    { service: "Custom Web Applications", price: "$5,000" },
    { service: "Custom SaaS Platforms", price: "$10,000" },
    { service: "AI & Automation Systems", price: "$2,000" },
];

export default function PricingPreview() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(".pricing-header", 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: container.current, start: "top 80%" } }
        );

        gsap.fromTo(".pricing-item",
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: ".pricing-list", start: "top 80%" } }
        );
    }, { scope: container });

    return (
        <section ref={container} className="py-24 px-6 bg-black relative">
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="pricing-header text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Transparent Pricing.</h2>
                    <p className="text-lg text-neutral-400">Premium digital solutions with clear starting points.</p>
                </div>

                <div className="pricing-list bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl mb-12">
                    <div className="grid grid-cols-2 bg-neutral-950 p-6 border-b border-white/10 text-sm font-bold text-neutral-400 uppercase tracking-widest">
                        <div>Service</div>
                        <div className="text-right">Starting From</div>
                    </div>
                    <div className="divide-y divide-white/5">
                        {pricingTiers.map((tier, i) => (
                            <div key={i} className="pricing-item grid grid-cols-2 p-6 md:px-8 hover:bg-neutral-800/50 transition-colors items-center">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                                    <span className="text-white font-semibold md:text-lg">{tier.service}</span>
                                </div>
                                <div className="text-right text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-indigo-500 font-bold text-xl md:text-2xl">
                                    {tier.price}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-neutral-400 mb-8 italic">
                        All projects start with a free consultation. Final pricing is scoped to your needs.
                    </p>
                    <Link href="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-cyan-500 text-black rounded-xl font-bold text-lg hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:-translate-y-1">
                        Book a Free Scoping Call
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
