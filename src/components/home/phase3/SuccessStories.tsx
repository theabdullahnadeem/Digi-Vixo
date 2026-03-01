"use client";

import { ArrowRight, Star } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SuccessStories() {
    const containerRef = useRef<HTMLDivElement>(null);
    const stories = [
        {
            brand: "Financial Services Startup",
            metric: "99.5%",
            timeframe: "Uptime Achieved",
            quote: "The team re-architected our payment processing platform to handle peak transaction loads. The system now processes thousands of transactions daily without performance issues.",
            role: "London-based FinTech",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
        },
        {
            brand: "E-commerce Brand",
            metric: "40%",
            timeframe: "Efficiency Gain",
            quote: "Their Shopify customization and automation workflows reduced our order processing time significantly, allowing our operations team to focus on customer experience.",
            role: "Fashion Retail",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
        },
        {
            brand: "B2B Software Company",
            metric: "3",
            timeframe: "Markets Launched",
            quote: "Digivixo helped us adapt our SaaS platform for multiple regional markets with localized interfaces and compliance requirements handled seamlessly.",
            role: "UK Software Firm",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
        }
    ];

    useGSAP(() => {
        // Dramatic 3D Flip Reveal
        gsap.from(".story-card", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 60%",
            },
            y: 100,
            opacity: 0,
            rotationX: -45,
            transformPerspective: 1000,
            duration: 1.2,
            stagger: 0.2,
            ease: "expo.out"
        });

        // Background Paralax shift
        gsap.to(".story-bg", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            },
            yPercent: 20,
            ease: "none"
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-40 px-6 bg-black relative border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto mb-24 flex flex-col md:flex-row justify-between items-end gap-12 relative z-10">
                <div className="space-y-6">
                    <div className="inline-block px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 font-bold tracking-widest text-sm uppercase">Success Stories</div>
                    <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-white">Legends of <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">Scale.</span></h3>
                </div>
                <button className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-neutral-200 transition-colors flex items-center gap-2 group hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    Read Case Studies <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
                {stories.map((story, i) => (
                    <div key={i} className="story-card relative p-10 rounded-[2rem] bg-neutral-900 border border-white/10 hover:border-indigo-500/50 transition-colors group flex flex-col justify-between min-h-[500px] overflow-hidden">
                        {/* Deep Parallax Background Image */}
                        <div className="absolute inset-0 overflow-hidden rounded-[2rem] opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none mix-blend-luminosity">
                            <div 
                                className="story-bg absolute inset-0 bg-cover bg-center -top-[20%] h-[140%] w-full"
                                style={{ backgroundImage: `url('${story.image}')` }}
                            />
                        </div>
                        {/* Glowing Overlay */}
                        <div className="absolute inset-0 bg-linear-to-b from-transparent via-neutral-900/80 to-neutral-900 z-0 pointer-events-none" />
                        
                        <div className="relative z-10 space-y-8">
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]" />)}
                            </div>
                            <blockquote className="text-2xl font-medium leading-relaxed text-white">
                                "{story.quote}"
                            </blockquote>
                        </div>

                        <div className="relative z-10 mt-12 pt-8 border-t border-white/10 flex justify-between items-end">
                            <div>
                                <div className="text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400 mb-2">{story.metric}</div>
                                <div className="text-xs text-neutral-400 uppercase tracking-widest font-bold">{story.timeframe}</div>
                            </div>
                            <div className="text-right">
                                <div className="font-bold text-white">{story.brand}</div>
                                <div className="text-sm text-neutral-500">{story.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
