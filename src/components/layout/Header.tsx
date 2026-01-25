"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

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

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10 text-white py-4 px-6 md:px-8 flex items-center justify-between">
      <Link
        href="/"
        className="relative h-10 w-32 md:h-12 md:w-48 transition-opacity hover:opacity-90"
      >
        <Image
          src="/og-logo.png"
          alt="DIGIVIXO"
          fill
          className="object-contain object-left"
          priority
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-sm uppercase tracking-widest hover:text-accent transition-colors",
              pathname === link.href ? "text-accent" : "text-white/80",
            )}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <Link
        href="/contact"
        className="hidden md:block px-6 py-2 rounded-full text-sm uppercase tracking-widest bg-white text-black hover:bg-accent hover:text-black transition-colors font-medium"
      >
        Get in Touch!
      </Link>

      {/* Mobile Menu Trigger */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="md:hidden p-2 text-white hover:text-accent transition-colors"
        aria-label="Open menu"
      >
        <Menu className="w-8 h-8" />
      </button>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        links={links}
      />
    </header>
  );
}
