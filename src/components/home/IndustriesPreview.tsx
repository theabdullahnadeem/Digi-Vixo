"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Plane, ShoppingBag, Stethoscope, Briefcase, Code2 } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const industries = [
    { name: "SaaS Startups", desc: "Scalable MVPs and complex cloud architectures.", icon: Code2, color: "from-cyan-400 to-blue-500", link: "/industries" },
    { name: "E-commerce Brands", desc: "High-converting headless storefronts on Shopify.", icon: ShoppingBag, color: "from-emerald-400 to-teal-500", link: "/industries" },
    { name: "Healthcare & MedTech", desc: "Secure, HIPAA-compliant patient management portals.", icon: Stethoscope, color: "from-blue-400 to-indigo-500", link: "/industries" },
    { name: "Logistics & Operations", desc: "Automated inventory & real-time tracking systems.", icon: Plane, color: "from-orange-400 to-red-500", link: "/industries" },
    { name: "Professional Services", desc: "Client engagement and booking automation workflows.", icon: Briefcase, color: "from-purple-400 to-fuchsia-500", link: "/industries" },
];

export default function IndustriesPreview() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(".ind-header",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: container.current, start: "top 80%" } }
        );

        gsap.fromTo(".ind-card",
            { opacity: 0, scale: 0.95, y: 20 },
            { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: ".ind-grid", start: "top 75%" } }
        );
    }, { scope: container });

    return (
        <section ref={container} className="py-24 px-6 bg-black relative border-y border-white/5">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="ind-header flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                    <div className="max-w-2xl">
                        <div className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4">Industries</div>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            Who We Build For.
                        </h2>
                    </div>
                </div>

                <div className="ind-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
                    {industries.map((ind, i) => {
                        const Icon = ind.icon;
                        return (
                            <Link href={ind.link} key={i} className="ind-card group relative p-6 rounded-3xl bg-neutral-900 border border-white/10 overflow-hidden hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(6,182,212,0.15)] transition-all duration-300">
                                <div className={`absolute inset-0 bg-linear-to-b ${ind.color} opacity-0 group-hover:opacity-[0.05] transition-opacity`} />
                                
                                <div className="w-12 h-12 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                    <Icon className="w-5 h-5 text-neutral-400 group-hover:text-cyan-400 transition-colors" />
                                </div>
                                <h3 className="font-bold text-lg text-white mb-2 group-hover:text-cyan-400 transition-colors">{ind.name}</h3>
                                <p className="text-sm text-neutral-500 leading-relaxed mb-6">{ind.desc}</p>
                                
                                <div className="mt-auto flex items-center gap-2 text-xs font-bold text-white/50 group-hover:text-cyan-400 transition-colors">
                                    Our Approach
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
