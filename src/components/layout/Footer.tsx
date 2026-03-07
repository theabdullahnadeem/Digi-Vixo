import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-background text-foreground pt-32 pb-8 px-6 md:px-12 overflow-hidden border-t border-white/5">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-brand-indigo/5 mix-blend-overlay pointer-events-none" />

            <div className="relative max-w-7xl mx-auto z-10 flex flex-col gap-24">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
                    <div className="flex flex-col gap-8 max-w-sm">
                        <Link href="/" className="inline-block">
                            <h2 className="text-3xl font-bold tracking-tight text-white">DIGIVIXO</h2>
                        </Link>
                        <p className="text-neutral-400 leading-relaxed text-sm">
                            Empowering modern businesses with premium IT solutions, custom SaaS platforms, and intelligent digital experiences.
                        </p>
                        <div className="flex gap-4">
                            <a href="mailto:contact@digivixo.com" className="group flex items-center gap-2 text-sm font-medium text-white hover:text-brand-blue transition-colors">
                                Let's collaborate <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24 w-full lg:w-auto">
                        <div className="flex flex-col gap-5">
                            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Navigation</h3>
                            <div className="flex flex-col gap-3">
                                <Link href="/about" className="text-sm text-neutral-300 hover:text-white transition-colors relative w-fit group">
                                    About Us
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
                                </Link>
                                <Link href="/services" className="text-sm text-neutral-300 hover:text-white transition-colors relative w-fit group">
                                    Services
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
                                </Link>
                                <Link href="/case-studies" className="text-sm text-neutral-300 hover:text-white transition-colors relative w-fit group">
                                    Case Studies
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
                                </Link>
                                <Link href="/industries" className="text-sm text-neutral-300 hover:text-white transition-colors relative w-fit group">
                                    Industries
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
                                </Link>
                                <Link href="/pricing" className="text-sm text-neutral-300 hover:text-white transition-colors relative w-fit group">
                                    Pricing
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
                                </Link>
                                <Link href="/team" className="text-sm text-neutral-300 hover:text-white transition-colors relative w-fit group">
                                    Team
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
                                </Link>
                                <Link href="/blog" className="text-sm text-neutral-300 hover:text-white transition-colors relative w-fit group">
                                    Blog
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Legal</h3>
                            <div className="flex flex-col gap-3">
                                <Link href="/privacy-policy" className="text-sm text-neutral-300 hover:text-white transition-colors relative w-fit group">
                                    Privacy Policy
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
                                </Link>
                                <Link href="/terms-of-service" className="text-sm text-neutral-300 hover:text-white transition-colors relative w-fit group">
                                    Terms of Service
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Connect</h3>
                            <div className="flex flex-col gap-3">
                                <a href="https://www.linkedin.com/company/digi-vixo/" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-300 hover:text-white transition-colors relative w-fit group">
                                    LinkedIn
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
                                </a>
                                <a href="mailto:contact@digivixo.com" className="text-sm text-neutral-300 hover:text-white transition-colors relative w-fit group">
                                    Email Us
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Massive Text & Copyright */}
                <div className="flex flex-col gap-8">
                    <div className="w-full text-center overflow-hidden">
                        <h1 className="text-[12vw] leading-none font-bold tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white to-white/10 select-none">
                            DIGIVIXO
                        </h1>
                    </div>
                    
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-500 text-xs border-t border-white/5 pt-8">
                        <p>&copy; {new Date().getFullYear()} Digivixo. All rights reserved.</p>
                        <div className="flex gap-6">
                            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
                            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
