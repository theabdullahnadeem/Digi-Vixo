"use client";

import { CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function MarketingDeepDive() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
            }
        });

        tl.from(".left-content", {
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        })
            .from(".right-content", {
                x: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.6");
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 px-6 bg-neutral-900 border-t border-neutral-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="left-content space-y-8">
                    <h3 className="text-3xl font-bold text-primary">Strategic Digital Growth</h3>
                    <div className="prose prose-invert max-w-none text-neutral-400 text-xl">
                        <p>
                            We provide data-driven digital marketing solutions designed to amplify your brand presence and drive high-quality conversions through technical precision.
                        </p>
                        <p>
                            <strong>Social Media Engineering:</strong> We manage your presence across Meta, TikTok, and Snapchat with high-impact content and strategic audience targeting that builds genuine brand authority.
                        </p>
                        <p>
                            <strong>Search Engine Optimization (SEO):</strong> Our technical SEO approach focuses on site architecture, semantic structure, and performance benchmarks to ensure long-term organic visibility.
                        </p>
                        <p>
                            <strong>Performance Advertising (PPC):</strong> We engineer high-ROI campaigns across Google Ads and Social platforms, utilizing advanced data analytics to optimize every dollar spent.
                        </p>
                        <p>
                            <strong>The Result:</strong> A cohesive digital ecosystem that doesn&apos;t just generate traffic, but builds sustainable business growth through technical marketing excellence.
                        </p>
                    </div>
                </div>

                <div className="right-content bg-black p-10 rounded-3xl border border-neutral-800">
                    <h3 className="text-2xl font-bold mb-6">Execution Pillars</h3>
                    <ul className="space-y-4">
                        {[
                            "Technical SEO & Site Audits",
                            "Data-Driven Paid Social (Meta/TikTok)",
                            "High-Impact Multi-Channel SEM",
                            "Advanced Audience Segmentation",
                            "Real-Time Analytics & Reporting",
                            "Content Strategy & Brand Voice"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                <span className="text-neutral-300 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-10 pt-10 border-t border-neutral-800">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4">Growth Standards</h4>
                        <div className="flex gap-4 flex-wrap opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            <span className="px-4 py-2 bg-neutral-800 border rounded font-bold">ROI Focused</span>
                            <span className="px-4 py-2 bg-neutral-800 border rounded font-bold">Organic Growth</span>
                            <span className="px-4 py-2 bg-neutral-800 border rounded font-bold">Ad Compliance</span>
                            <span className="px-4 py-2 bg-neutral-800 border rounded font-bold">Data Sovereignty</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
