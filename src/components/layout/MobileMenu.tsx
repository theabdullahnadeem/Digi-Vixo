"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { X } from "lucide-react";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    links: { name: string; href: string }[];
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
    const menuRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    useEffect(() => {
        const menu = menuRef.current;
        const overlay = overlayRef.current;

        if (!menu || !overlay) return;

        if (isOpen) {
            // Document body lock
            document.body.style.overflow = "auto";

            const tl = gsap.timeline();

            tl.to(overlay, {
                opacity: 1,
                duration: 0.3,
                pointerEvents: "auto",
                ease: "power2.out"
            })
                .to(menu, {
                    x: 0,
                    duration: 0.5,
                    ease: "power3.out"
                }, "-=0.2")
                .fromTo(linkRefs.current.filter(Boolean),
                    { x: 20, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" },
                    "-=0.3"
                );

        } else {
            // Release body lock
            document.body.style.overflow = "";

            const tl = gsap.timeline();

            tl.to(menu, {
                x: "100%",
                duration: 0.4,
                ease: "power3.in"
            })
                .to(overlay, {
                    opacity: 0,
                    duration: 0.3,
                    pointerEvents: "none",
                    ease: "power2.in"
                }, "-=0.2");
        }

    }, [isOpen]);

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity"
            onClick={onClose}
        >
            <div
                ref={menuRef}
                className="absolute top-0 right-0 h-screen w-[80%] max-w-sm bg-[#0a0a0a] border-l border-white/10 shadow-2xl translate-x-full flex flex-col p-8 z-[100]"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-end mb-12">
                    <button onClick={onClose} className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                        <X className="w-6 h-6 text-white" />
                    </button>
                </div>

                <nav className="flex flex-col gap-6">
                    {links.map((link, i) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={onClose}
                            ref={(el) => { if (el) linkRefs.current[i] = el; }}
                            className="text-2xl font-bold tracking-tighter text-white hover:text-accent transition-colors opacity-0"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="h-px bg-white/10 my-4" />
                    <Link
                        href="/contact"
                        onClick={onClose}
                        className="text-center py-4 rounded-full bg-accent text-black font-bold tracking-widest uppercase hover:bg-white transition-colors"
                    >
                        Get in Touch
                    </Link>
                </nav>
            </div>
        </div>
    );
}
