"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Team", href: "/team" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 0.2 }
    );
  }, { scope: headerRef });

  return (
    <header 
      ref={headerRef}
      className="fixed top-6 inset-x-0 mx-auto w-[95%] max-w-7xl z-50 rounded-full bg-black/40 backdrop-blur-2xl border border-white/10 text-white py-3 px-6 md:px-8 flex items-center justify-between shadow-2xl transition-all duration-300"
    >
      <Link
        href="/"
        className="relative transition-transform hover:scale-105"
        style={{ width: '160px', height: '40px' }}
      >
        <Image
          src="/new.png"
          alt="DIGIVIXO"
          className="object-contain object-left"
          priority
          fill
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group relative flex items-center text-sm font-medium tracking-wide transition-colors hover:text-white text-white/70"
          >
            {link.name}
            {/* Animated underline indicator */}
            <span
              className={cn(
                "absolute -bottom-1 left-0 h-[2px] w-0 bg-brand-blue transition-all duration-300 group-hover:w-full",
                pathname === link.href && "w-full bg-brand-indigo"
              )}
            />
          </Link>
        ))}
      </nav>

      <Link
        href="/contact"
        className="hidden md:flex px-6 py-2.5 rounded-full text-sm font-semibold bg-white text-black hover:bg-brand-blue hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
      >
        Let's Talk
      </Link>

      {/* Mobile Menu Trigger */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="md:hidden p-2 text-white hover:text-brand-blue transition-colors"
        aria-label="Open menu"
      >
        <Menu className="w-7 h-7" />
      </button>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        links={links}
      />
    </header>
  );
}
