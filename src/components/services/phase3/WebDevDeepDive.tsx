"use client";

import { CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function WebDevDeepDive() {
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
                    <h3 className="text-3xl font-bold text-primary">Engineering Excellence</h3>
                    <div className="prose prose-invert max-w-none text-neutral-400 text-xl">
                        <p>
                            At Digivixo, we don&apos;t just build websites; we engineer digital assets designed for ultimate performance and long-term business scalability.
                        </p>
                        <p>
                            <strong>Performance Optimization:</strong> Every line of code is written with speed in mind. Our websites consistently achieve top-tier Core Web Vitals scores, ensuring your brand provides a lightning-fast experience that search engines and users love.
                        </p>
                        <p>
                            <strong>High-Security Standards:</strong> We implement rigorous security protocols from the ground up. From advanced encryption to secure data handling, we ensure your digital presence is resilient against modern threats and fully compliant with data protection standards.
                        </p>
                        <p>
                            <strong>SEO-First Architecture:</strong> Our development process integrates fundamental SEO principles at the foundational level. We focus on semantic HTML structure, schema markup, and optimized metadata to ensure your website is ready to climb search rankings from day one.
                        </p>
                        <p>
                            <strong>The Result:</strong> Websites that are not only visually stunning but also technically superior, providing a 99.9% uptime and superior user engagement metrics.
                        </p>
                    </div>
                </div>

                <div className="right-content bg-black p-10 rounded-3xl border border-neutral-800">
                    <h3 className="text-2xl font-bold mb-6">Development Standards</h3>
                    <ul className="space-y-4">
                        {[
                            "Responsive & Adaptive Layouts",
                            "High-Speed Asset Delivery",
                            "Semantic & Clean Codebase",
                            "Comprehensive Browser Testing",
                            "Integrated Security Layers",
                            "Conversion-Focused Design"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                <span className="text-neutral-300 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-10 pt-10 border-t border-neutral-800">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4">Quality Standards</h4>
                        <div className="flex gap-4 flex-wrap opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            <span className="px-4 py-2 bg-neutral-800 border rounded font-bold">W3C Compliance</span>
                            <span className="px-4 py-2 bg-neutral-800 border rounded font-bold">Core Web Vitals</span>
                            <span className="px-4 py-2 bg-neutral-800 border rounded font-bold">WCAG Accessibility</span>
                            <span className="px-4 py-2 bg-neutral-800 border rounded font-bold">SSL Secure</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
