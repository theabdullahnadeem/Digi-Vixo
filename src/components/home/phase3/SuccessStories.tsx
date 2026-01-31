"use client";

import { ArrowRight, Star } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function SuccessStories() {
    const containerRef = useRef(null);
    const stories = [
        {
            brand: "Financial Services Startup",
            metric: "99.5%",
            timeframe: "Uptime Achieved",
            quote: "The team re-architected our payment processing platform to handle peak transaction loads. The system now processes thousands of transactions daily without performance issues.",
            founder: "Technical Lead",
            role: "London-based FinTech"
        },
        {
            brand: "E-commerce Brand",
            metric: "40%",
            timeframe: "Efficiency Gain",
            quote: "Their Shopify customization and automation workflows reduced our order processing time significantly, allowing our operations team to focus on customer experience.",
            founder: "Operations Manager",
            role: "Fashion Retail"
        },
        {
            brand: "B2B Software Company",
            metric: "3",
            timeframe: "Markets Launched",
            quote: "Digivixo helped us adapt our SaaS platform for multiple regional markets with localized interfaces and compliance requirements handled seamlessly.",
            founder: "Product Director",
            role: "UK Software Firm"
        }
    ];

    useGSAP(() => {
        gsap.from(".story-card", {
            scrollTrigger: {
                trigger: containerRef.current,

                start: "top 70%",
            },

            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-32 px-6 bg-background">
            <div className="max-w-7xl mx-auto mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
                <div className="space-y-4">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-accent">Success Stories</h2>
                    <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">Legends of Scale.</h3>
                </div>
                <a href="/services" className="px-8 py-4 rounded-full border border-neutral-800 hover:bg-neutral-900 transition-colors flex items-center gap-2 group">
                    Read Case Studies <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stories.map((story, i) => (
                    <div key={i} className="story-card relative p-10 rounded-3xl bg-neutral-900/50 border border-neutral-800 hover:border-accent/50 transition-colors group flex flex-col justify-between h-full overflow-hidden">
                        {/* Background Image */}
                        <div 
                            className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-15 transition-opacity"
                            style={{ backgroundImage: i === 0 ? "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80')" : i === 1 ? "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80')" : "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80')" }}
                        />
                        <div className="relative z-10 space-y-8">
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 fill-gold text-gold" />)}
                            </div>
                            <blockquote className="text-xl leading-relaxed text-neutral-300">
                                "{story.quote}"
                            </blockquote>
                        </div>

                        <div className="relative z-10 mt-12 pt-8 border-t border-neutral-800 flex justify-between items-end">
                            <div>
                                <div className="text-3xl font-bold text-foreground mb-1">{story.metric}</div>
                                <div className="text-sm text-neutral-500 uppercase tracking-wide">{story.timeframe}</div>
                            </div>
                            <div className="text-right">
                                <div className="font-bold">{story.brand}</div>
                                <div className="text-sm text-neutral-500">{story.founder}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
