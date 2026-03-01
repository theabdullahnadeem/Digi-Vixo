"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PageTransitionWrapper({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!container.current) return;
        // Global ambient animations (if any) can go here instead of targeting children directly
    }, { scope: container });

    return (
        <div ref={container} className={`w-full min-h-screen bg-black text-foreground ${className}`}>
            {/* Global Ambient Glow for all internal pages */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-indigo/10 blur-[200px] rounded-full pointer-events-none -z-10" />
            <div className="fixed bottom-0 right-0 w-[800px] h-[800px] bg-brand-blue/5 blur-[200px] rounded-full pointer-events-none -z-10" />
            
            {/* Page Content */}
            <div className="relative z-10 w-full overflow-hidden">
                {children}
            </div>
        </div>
    );
}
