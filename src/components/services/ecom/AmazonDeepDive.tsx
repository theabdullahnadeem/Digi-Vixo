"use client";

import { CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function AmazonDeepDive() {
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
                    <h3 className="text-3xl font-bold text-primary">Amazon Marketplace Growth</h3>
                    <div className="prose prose-invert max-w-none text-neutral-400 text-xl">
                        <p>
                            We provide comprehensive Amazon management services focusing on data-driven growth, operational efficiency, and marketplace dominance for private label brands.
                        </p>
                        <p>
                            <strong>Strategic Account Management:</strong> We handle the technical complexities of Seller Central, ensuring your account remains healthy, compliant, and optimized for maximum visibility.
                        </p>
                        <p>
                            <strong>PPC & Advertising Optimization:</strong> Our team engineers intelligent advertising campaigns that maximize ROI. We use advanced analytics to target the right audience and optimize your ad spend.
                        </p>
                        <p>
                            <strong>Inventory & Supply Chain Integration:</strong> We bridge the gap between technical management and physical operations, ensuring your inventory levels are optimized to prevent stockouts and maximize sell-through.
                        </p>
                        <p>
                            <strong>The Result:</strong> A scalable and robust Amazon presence that drives consistent growth through professional management and strategic execution.
                        </p>
                    </div>
                </div>

                <div className="right-content bg-black p-10 rounded-3xl border border-neutral-800">
                    <h3 className="text-2xl font-bold mb-6">Management Pillars</h3>
                    <ul className="space-y-4">
                        {[
                            "Advanced SEO & Listing Optimization",
                            "Data-Driven PPC Management",
                            "Account Health & Compliance Audit",
                            "Strategic Brand Registry Support",
                            "Predictive Inventory Management",
                            "Global Marketplace Expansion"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                <span className="text-neutral-300 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-10 pt-10 border-t border-neutral-800">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4">Operational Standards</h4>
                        <div className="flex gap-4 flex-wrap opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            <span className="px-4 py-2 bg-neutral-800 border rounded font-bold">A9 Algorithm Ready</span>
                            <span className="px-4 py-2 bg-neutral-800 border rounded font-bold">FBA Integration</span>
                            <span className="px-4 py-2 bg-neutral-800 border rounded font-bold">ROI Focused</span>
                            <span className="px-4 py-2 bg-neutral-800 border rounded font-bold">Global Compliance</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
