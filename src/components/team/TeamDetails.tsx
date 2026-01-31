"use client";

import { User, Linkedin, Twitter, Mail, Github, Instagram } from "lucide-react";
import Script from "next/script";
import Image from "next/image";

export default function TeamDetails() {
    return (
        <section className="relative py-24 px-6 bg-neutral-950 text-white overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-10"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80')" }}
            />
            <div className="max-w-6xl mx-auto space-y-32 relative z-10">
                {/* Abdullah Profile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <div className="aspect-[3/4] bg-neutral-800 rounded-2xl overflow-hidden relative group">
                            <Image src="/abdullah.jpeg" alt="Abdullah" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                <div className="flex gap-4 text-white">
                                    <a href="https://www.linkedin.com/in/abdullah-nadeem-ceo-digivixo/" className="hover:text-neutral-300 transition-colors"><Linkedin /></a>
                                    <a href="https://github.com/ab9898998989898" className="hover:text-neutral-300 transition-colors"><Github /></a>
                                    <a href="mailto:abdullahnadeem2580@gmail.com" className="hover:text-neutral-300 transition-colors"><Mail /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8 pt-8">
                        <div>
                            <h2 className="text-5xl font-bold mb-2">Abdullah</h2>
                            <p className="text-xl text-neutral-400 uppercase tracking-widest">Co-Founder, CEO & CTO</p>
                        </div>
                        <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                            <p>
                                Abdullah is the principal architect behind Digivixo&apos;s technical infrastructure. With a deep expertise in computer science and system architecture, he recognized that the core challenge for modern businesses is not just having a digital presence, but building reliable, scalable systems that can handle complex operational demands.
                            </p>
                            <p>
                                He has spent years engineering high-performance software solutions, focusing on streamlining complex data workflows and developing the proprietary frameworks that now drive Digivixo&apos;s intelligent automation and web applications.
                            </p>

                            <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
                                <h4 className="text-xl font-bold mb-4 text-white">Core Philosophy</h4>
                                <p className="italic text-neutral-400">
                                    &quot;Technology should empower, not complicate. Our goal is to build systems that automate the mundane so our clients can focus on innovation and growth.&quot;
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold mb-4 text-white">Areas of Expertise</h4>
                                <ul className="grid grid-cols-2 gap-4 text-sm text-neutral-400">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-accent rounded-full" /> Full-Stack Development
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-accent rounded-full" /> Cloud Infrastructure
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-accent rounded-full" /> Intelligent Automation
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-accent rounded-full" /> System Security
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hassan Profile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start md:grid-flow-col-dense">
                    <div className="space-y-8 pt-8 md:col-start-2">
                        <div className="aspect-[3/4] bg-neutral-800 rounded-2xl overflow-hidden relative group">
                            <Image src="/hassan.jpeg" alt="Hassan" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                <div className="flex gap-4 text-white">
                                    <a href="#" className="hover:text-neutral-300 transition-colors"><Instagram /></a>
                                    <a href="#" className="hover:text-neutral-300 transition-colors"><Twitter /></a>
                                    <a href="mailto:e.com.hit@gmail.com" className="hover:text-neutral-300 transition-colors"><Mail /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8 pt-8 md:col-start-1">
                        <div>
                            <h2 className="text-5xl font-bold mb-2">Hassan</h2>
                            <p className="text-xl text-neutral-400 uppercase tracking-widest">Co-Founder & COO</p>
                        </div>
                        <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                            <p>
                                Hassan provides the strategic operational vision that transforms Digivixo&apos;s technical capabilities into tangible business value. An expert in process optimization and digital transformation, he ensures that every solution we deliver is perfectly aligned with our clients&apos; long-term strategic goals.
                            </p>
                            <p>
                                His focus is on the human-centric design of digital products—building trust through transparent communication and ensuring that our IT solutions are as intuitive as they are powerful.
                            </p>

                            <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
                                <h4 className="text-xl font-bold mb-4 text-white">Core Philosophy</h4>
                                <p className="italic text-neutral-400">
                                    &quot;Technical excellence is only half the battle; true success comes from understanding the human impact of the systems we build.&quot;
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold mb-4 text-white">Areas of Expertise</h4>
                                <ul className="grid grid-cols-2 gap-4 text-sm text-neutral-400">
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-accent rounded-full" /> Operational Efficiency
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-accent rounded-full" /> Digital Product Strategy
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-accent rounded-full" /> UI/UX Engineering
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-accent rounded-full" /> Technical Management
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript" />
        </section>
    );
}
