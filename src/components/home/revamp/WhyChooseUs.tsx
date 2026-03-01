"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Layers, Users, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Masonry Offset Reveal with fromTo for guaranteed start state
        gsap.fromTo(".why-card-left", 
            { x: -100, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
                x: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
            }
        );

        gsap.fromTo(".why-card-right", 
            { x: 100, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
                x: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
            }
        );

        // Dynamic Skew Background
        gsap.to(".skew-bg", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
            skewX: -20,
            xPercent: 10,
            ease: "none"
        });
    }, { scope: sectionRef });

    const features = [
        {
            icon: <Briefcase className="w-12 h-12 text-emerald-400" />,
            title: "Business-First Strategy",
            description: "We align our technical solutions with your business goals, ensuring every project delivers measurable value and supports your long-term growth.",
            className: "why-card-left mt-0",
            glow: "from-emerald-500/10"
        },
        {
            icon: <Layers className="w-12 h-12 text-blue-400" />,
            title: "Scalable Architecture",
            description: "Our websites and applications are built with scalability in mind, allowing your digital infrastructure to grow seamlessly as your business expands.",
            className: "why-card-right md:mt-24", // Masonry offset
            glow: "from-blue-500/10"
        },
        {
            icon: <Users className="w-12 h-12 text-purple-400" />,
            title: "User-Centered Design",
            description: "We prioritize the user experience, creating intuitive and accessible interfaces that engage your audience and drive higher conversion rates.",
            className: "why-card-left mt-8 md:mt-0",
            glow: "from-purple-500/10"
        },
        {
            icon: <Lightbulb className="w-12 h-12 text-amber-400" />,
            title: "Innovative Automation",
            description: "Leverage the power of AI and workflow automation to eliminate repetitive tasks, reduce operational costs, and increase overall efficiency.",
            className: "why-card-right mt-8 md:mt-24", // Masonry offset
            glow: "from-amber-500/10"
        },
    ];

    return (
        <section ref={sectionRef} className="py-40 px-6 bg-black text-white relative overflow-hidden border-t border-white/5">
            {/* Dynamic CSS Architecture Elements */}
            <div className="skew-bg absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-white/5 to-transparent skew-x-12 transform origin-top-right -z-10" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 pt-28 md:pt-0 items-center">
                <div className="lg:w-1/3 z-10 sticky top-40 self-start">
                    <div className="inline-block px-4 py-1 mb-8 rounded-full bg-white/5 border border-white/10 text-cyan-400 font-bold tracking-widest text-sm uppercase shadow-[0_0_20px_rgba(6,182,212,0.15)]">Why Digivixo?</div>
                    <h3 className="text-6xl md:text-8xl font-black tracking-tighter leading-tight">
                        Built on <br/>
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-neutral-400 to-neutral-700">Trust.</span>
                    </h3>
                    <p className="mt-8 text-xl text-neutral-400 max-w-sm">We don't just write code. We engineer complete technical ecosystems designed for aggressive commercial scaling.</p>
                </div>

                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    {features.map((feature, index) => (
                        <div key={index} className={cn(
                            "relative p-10 rounded-[2.5rem] bg-neutral-900 border border-white/10 hover:border-white/30 transition-all duration-500 group overflow-hidden shadow-2xl backdrop-blur-xl",
                            feature.className
                        )}>
                            {/* Interactive Glow Inject */}
                            <div className={cn("absolute inset-0 bg-linear-to-br to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none", feature.glow)} />
                            
                            <div className="w-20 h-20 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-8 transform group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 relative z-10">
                                {feature.icon}
                            </div>
                            <h4 className="text-3xl font-bold mb-4 text-white relative z-10">{feature.title}</h4>
                            <p className="text-neutral-400 leading-relaxed text-lg relative z-10">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
