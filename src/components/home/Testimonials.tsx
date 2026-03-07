"use client";

import { useRef } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "CTO, FinTech Startup",
        quote: "Digivixo transformed our monolithic legacy backend into a scalable microservices architecture in half the time we expected. Our processing speeds are up 80%.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
    },
    {
        name: "Marcus Chen",
        role: "Head of Digital, RetailCo",
        quote: "Their headless Shopify implementation completely changed our trajectory. The mobile loading speed went from 4s to under 1s, directly boosting conversions.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
    },
    {
        name: "Elena Rodriguez",
        role: "Operations Director, MedTech",
        quote: "The custom AI automation system they built for our data entry cut our manual processing hours by over 40%. It paid for itself in two months.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop"
    }
];

export default function Testimonials() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(".test-header",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: container.current, start: "top 80%" } }
        );

        gsap.fromTo(".test-card",
            { opacity: 0, scale: 0.95, y: 30 },
            { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.15, scrollTrigger: { trigger: ".test-grid", start: "top 75%" } }
        );
    }, { scope: container });

    return (
        <section ref={container} className="py-32 px-6 bg-black relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,var(--brand-indigo)_0,transparent_60%)] opacity-5 pointer-events-none" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="test-header text-center mb-20 max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-semibold tracking-wide mb-6">
                        Client Feedback
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                        Don't just take our word for it.
                    </h2>
                </div>

                <div className="test-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-grab active:cursor-grabbing">
                    {testimonials.map((t, i) => (
                        <div key={i} className="test-card p-8 rounded-3xl bg-neutral-900 border border-white/5 shadow-xl flex flex-col justify-between">
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                                ))}
                            </div>
                            
                            <p className="text-neutral-300 text-lg leading-relaxed mb-10 flex-1">
                                "{t.quote}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full overflow-hidden relative border border-white/20">
                                    <Image
                                        src={t.image}
                                        alt={t.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white leading-snug">{t.name}</h4>
                                    <p className="text-sm text-cyan-400 font-medium">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
