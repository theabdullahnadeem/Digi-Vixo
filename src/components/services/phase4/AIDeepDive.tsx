"use client";

import { CheckCircle2, Bot, Zap, Database, Brain } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function AIDeepDive() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
            }
        });

        tl.from(".left-content-s", {
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        })
            .from(".right-content-s", {
                x: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.6");
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 px-6 bg-neutral-900 border-t border-neutral-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="left-content-s space-y-8">
                    <h3 className="text-3xl font-bold text-primary">Intelligent Automation & AI</h3>
                    <div className="prose prose-invert max-w-none text-neutral-400 text-xl">
                        <p>
                            Digivixo empowers organizations with cutting-edge automation and AI-driven tools designed to optimize business processes and unlock new levels of efficiency.
                        </p>
                        <p>
                            <strong>Process Optimization:</strong> We analyze your current workflows to identify bottlenecks and implement automated solutions that eliminate manual errors and save valuable time.
                        </p>
                        <p>
                            <strong>Intelligent AI Integration:</strong> From advanced chatbots to data-driven predictive models, we integrate AI into your digital infrastructure to enhance decision-making and improve user experiences.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Workflow Automation:</strong> Streamlining repetitive tasks across different platforms.</li>
                            <li><strong>AI-Powered Tools:</strong> Building custom applications that leverage machine learning.</li>
                            <li><strong>Data-Driven Insights:</strong> Converting complex data sets into actionable business intelligence.</li>
                            <li><strong>Smart Integrations:</strong> Connecting your digital tools with intelligent interfaces.</li>
                        </ul>
                    </div>
                </div>

                <div className="right-content-s bg-black p-10 rounded-3xl border border-neutral-800">
                    <h3 className="text-2xl font-bold mb-6">Core Capabilities</h3>
                    <ul className="space-y-4">
                        {[
                            "Business Process Automation",
                            "Intelligent Chatbot Solutions",
                            "Data Management & Analytics",
                            "Cross-Platform Workflow Sync",
                            "Predictive AI Modeling",
                            "Automated Reporting Systems"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                <span className="text-neutral-300 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-10 pt-10 border-t border-neutral-800">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4">Innovation Focus</h4>
                        <div className="flex gap-4 flex-wrap">
                            <span className="flex items-center gap-2 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded font-bold text-sm">
                                <Bot className="w-4 h-4 text-blue-500" /> AI-Driven
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded font-bold text-sm">
                                <Zap className="w-4 h-4 text-amber-500" /> Automation
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded font-bold text-sm">
                                <Database className="w-4 h-4 text-purple-500" /> Big Data
                            </span>
                            <span className="flex items-center gap-2 px-4 py-2 bg-neutral-800 border border-neutral-700 rounded font-bold text-sm">
                                <Brain className="w-4 h-4 text-red-500" /> Machine Learning
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
