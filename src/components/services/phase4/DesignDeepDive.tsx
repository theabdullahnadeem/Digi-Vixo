"use client";

import { CheckCircle2, Download, FileText, Layout, PlayCircle } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function DesignDeepDive() {
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
                    <h3 className="text-3xl font-bold text-primary">Design Centricity</h3>
                    <div className="prose prose-invert max-w-none text-neutral-400 text-xl">
                        <p>
                            At Digivixo, we believe that design is not just about aesthetics; it&apos;s about <strong>visual communication</strong> and user interaction. Our design process is rooted in psychology and accessibility standards.
                        </p>
                        <p>
                            <strong>Brand Consistency:</strong> We develop comprehensive design systems that ensure your brand identity remains consistent across every digital and physical touchpoint.
                        </p>
                        <p>
                            <strong>User-Centered UX:</strong> Every interface we design is built on a foundation of user research and clear information architecture. We focus on reducing friction and guiding users toward their objectives with intuitive navigation and layouts.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Visual Clarity:</strong> Clean designs that prioritize content and ease of use.</li>
                            <li><strong>Accessibility:</strong> Designs that meet international standards for inclusive digital experiences.</li>
                            <li><strong>Strategic Branding:</strong> Logo and identity design that reflects your core values and business mission.</li>
                        </ul>
                    </div>
                </div>

                <div className="right-content bg-black p-10 rounded-3xl border border-neutral-800">
                    <h3 className="text-2xl font-bold mb-6">Design Deliverables</h3>
                    <ul className="space-y-4">
                        {[
                            "Custom Logo & Identity Systems",
                            "Full UI/UX Design for Web & Apps",
                            "High-Fidelity Interactive Prototypes",
                            "Marketing Assets & Social Media Kits",
                            "Style Guides & Design Systems",
                            "Print-Ready Marketing Creatives"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                <span className="text-neutral-300 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-10 pt-10 border-t border-neutral-800">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4">Standard Formats</h4>
                        <div className="flex gap-4 flex-wrap">
                            <span className="flex items-center gap-2 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded font-bold text-sm">
                                <Layout className="w-4 h-4 text-purple-500" /> Figma
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded font-bold text-sm">
                                <FileText className="w-4 h-4 text-blue-500" /> SVG/AI
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded font-bold text-sm">
                                <PlayCircle className="w-4 h-4 text-red-500" /> WebP/PNG
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded font-bold text-sm">
                                <Download className="w-4 h-4 text-green-500" /> Asset Pack
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
