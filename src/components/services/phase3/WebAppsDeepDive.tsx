"use client";

import { Server, Cloud, CodeXml } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function WebAppsDeepDive() {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".feature-card", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out"
        });

        gsap.from(".case-study", {
            scrollTrigger: {
                trigger: ".case-study",
                start: "top 85%",
            },
            scale: 0.95,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.3
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 px-6 bg-black border-t border-neutral-800">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center max-w-3xl mx-auto">
                    <h3 className="text-3xl font-bold text-primary mb-6">Scalable Enterprise Solutions</h3>
                    <p className="text-neutral-400 text-xl">
                        For businesses requiring more than a static presence, our web application division builds dynamic, data-driven platforms that automate complex workflows and drive operational efficiency.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="feature-card p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:shadow-xl transition-shadow">
                        <Server className="w-12 h-12 text-amber-500 mb-6" />
                        <h4 className="text-xl font-bold mb-4">Robust Backend Architecture</h4>
                        <p className="text-neutral-400 leading-relaxed text-sm">
                            We architect powerful server-side solutions capable of handling high-concurrency and complex data workloads. Built with redundancy and fault tolerance for 24/7 availability.
                        </p>
                    </div>
                    <div className="feature-card p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:shadow-xl transition-shadow">
                        <Cloud className="w-12 h-12 text-blue-500 mb-6" />
                        <h4 className="text-xl font-bold mb-4">Cloud Infrastructure</h4>
                        <p className="text-neutral-400 leading-relaxed text-sm">
                            Leverage the flexibility and power of modern cloud environments. We design scalable infrastructure that grows seamlessly with your user base and traffic spikes.
                        </p>
                    </div>
                    <div className="feature-card p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:shadow-xl transition-shadow">
                        <CodeXml className="w-12 h-12 text-emerald-500 mb-6" />
                        <h4 className="text-xl font-bold mb-4">Advanced API Integration</h4>
                        <p className="text-neutral-400 leading-relaxed text-sm">
                            Connect your digital ecosystem effortlessly. We build custom APIs that allow different software systems to communicate and automate cross-platform workflows.
                        </p>
                    </div>
                </div>

                {/* Visual Case Study & Tech Stack */}
                <div className="case-study group relative p-12 rounded-3xl overflow-hidden shadow-2xl border border-white/10 min-h-[400px] flex flex-col justify-center">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" alt="SaaS Dashboard Background" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px] pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center justify-between">
                        <div className="space-y-6 flex-1">
                            <div className="text-cyan-400 font-bold uppercase tracking-widest text-sm">Case Study: SaaS Transformation</div>
                            <h4 className="text-3xl md:text-4xl font-bold text-white leading-tight">Optimizing Process Management</h4>
                            <p className="text-neutral-300 text-lg max-w-xl leading-relaxed">
                                &quot;Digivixo helped us migrate our fragmented manual processes into a unified SaaS dashboard. The transition improved our team&apos;s efficiency by 45% and reduced operational overhead significantly.&quot;
                            </p>
                            
                            <div className="pt-6 border-t border-white/10 mt-6 inline-block">
                                <h5 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">Tech Stack</h5>
                                <div className="flex gap-4 items-center">
                                    <img src="https://cdn.simpleicons.org/nodedotjs/white" alt="Node.js" className="w-6 h-6 opacity-50 hover:opacity-100 transition-opacity" />
                                    <img src="https://cdn.simpleicons.org/amazonaws/white" alt="AWS" className="w-6 h-6 opacity-50 hover:opacity-100 transition-opacity" />
                                    <img src="https://cdn.simpleicons.org/postgresql/white" alt="PostgreSQL" className="w-6 h-6 opacity-50 hover:opacity-100 transition-opacity" />
                                    <img src="https://cdn.simpleicons.org/docker/white" alt="Docker" className="w-6 h-6 opacity-50 hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 min-w-[240px] text-center shadow-xl">
                            <div className="text-5xl font-black text-white mb-2">99.9%</div>
                            <div className="text-cyan-400 font-bold uppercase tracking-widest text-sm">System Uptime</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
