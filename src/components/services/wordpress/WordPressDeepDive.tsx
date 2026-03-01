"use client";

import { CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function WordPressDeepDive() {
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
                    <h3 className="text-3xl font-bold text-primary">Enterprise WordPress Ecosystems</h3>
                    <div className="prose prose-invert max-w-none text-neutral-400 text-xl">
                        <p>
                            We provide professional WordPress engineering services that transform the world&apos;s most popular CMS into an enterprise-grade digital asset.
                        </p>
                        <p>
                            <strong>Custom Theme Engineering:</strong> We develop bespoke, lightweight themes from the ground up. Our focus is on performance, accessibility, and unique brand identity, avoiding bloated pre-made templates.
                        </p>
                        <p>
                            <strong>Plugin Development & Integration:</strong> Whether it&apos;s custom functionality or strategic integration of existing tools, we ensure your WordPress backend is efficient, secure, and tailored to your workflow.
                        </p>
                        <p>
                            <strong>Performance & Security Hardening:</strong> We implement rigorous optimization protocols to ensure sub-second load times and enterprise-level security against vulnerabilities.
                        </p>
                        <p>
                            <strong>The Result:</strong> A scalable, high-performance WordPress platform that provides the flexibility of a CMS with the technical integrity of a custom-built solution.
                        </p>
                    </div>
                </div>

                <div className="right-content bg-black p-10 rounded-3xl border border-neutral-800">
                    <h3 className="text-2xl font-bold mb-6">Technical Standards</h3>
                    <ul className="space-y-4">
                        {[
                            "Bespoke Theme Architecture",
                            "Custom Plugin Engineering",
                            "Core Web Vitals Optimization",
                            "Advanced Security Hardening",
                            "Seamless API & CRM Integration",
                            "Managed Maintenance & Support"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                <span className="text-neutral-300 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-10 pt-10 border-t border-neutral-800">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4">Quality Benchmarks</h4>
                        <div className="flex gap-4 flex-wrap opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            <span className="px-4 py-2 bg-neutral-800 border rounded font-bold">SEO Ready</span>
                            <span className="px-4 py-2 bg-neutral-800 border rounded font-bold">Mobile First</span>
                            <span className="px-4 py-2 bg-neutral-800 border rounded font-bold">Gutenberg Optimized</span>
                            <span className="px-4 py-2 bg-neutral-800 border rounded font-bold">Secure Shield</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
