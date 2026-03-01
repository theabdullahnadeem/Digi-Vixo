"use client";

import { CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ShopifyDeepDive() {
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
                    <h3 className="text-3xl font-bold text-primary">Shopify Platform Engineering</h3>
                    <div className="prose prose-invert max-w-none text-neutral-400 text-xl">
                        <p>
                            We provide professional Shopify engineering services that go beyond simple store setup. Our focus is on technical performance, custom functionality, and scalable architecture.
                        </p>
                        <p>
                            <strong>Custom Theme Development:</strong> We engineer bespoke Shopify themes designed for maximum conversion and lightning-fast performance. Our development process prioritizes clean code and modular design.
                        </p>
                        <p>
                            <strong>App Integration & Optimization:</strong> We strategically select and integrate Shopify apps to extend your store&apos;s functionality without compromising load speeds or security.
                        </p>
                        <p>
                            <strong>Headless Commerce Solutions:</strong> For businesses requiring ultimate flexibility, we build headless Shopify architectures that decouple the frontend from the backend, providing unparalleled control over the user experience.
                        </p>
                        <p>
                            <strong>The Result:</strong> High-performance e-commerce assets that drive revenue through technical excellence and superior user experience.
                        </p>
                    </div>
                </div>

                <div className="right-content bg-black p-10 rounded-3xl border border-neutral-800">
                    <h3 className="text-2xl font-bold mb-6">Execution Standards</h3>
                    <ul className="space-y-4">
                        {[
                            "Bespoke Theme Architecture",
                            "Data-Driven UX Optimization",
                            "Advanced Shopify Scripting",
                            "Seamless API Integrations",
                            "High-Speed Mobile Performance",
                            "Automated Testing Protocols"
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
                            <span className="px-4 py-2 bg-neutral-800 border rounded font-bold">Liquid Standards</span>
                            <span className="px-4 py-2 bg-neutral-800 border rounded font-bold">Checkout Extensibility</span>
                            <span className="px-4 py-2 bg-neutral-800 border rounded font-bold">Conversion-Ready</span>
                            <span className="px-4 py-2 bg-neutral-800 border rounded font-bold">Secure Gateway</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
