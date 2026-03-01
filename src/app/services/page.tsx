import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import WebDevDeepDive from "@/components/services/phase3/WebDevDeepDive";
import WebAppsDeepDive from "@/components/services/phase3/WebAppsDeepDive";
import DesignDeepDive from "@/components/services/phase4/DesignDeepDive";
import AIDeepDive from "@/components/services/phase4/AIDeepDive";
import ShopifyDeepDive from "@/components/services/ecom/ShopifyDeepDive";
import AmazonDeepDive from "@/components/services/ecom/AmazonDeepDive";
import TechStackGrid from "@/components/services/phase4/TechStackGrid";
import MarketingDeepDive from "@/components/services/marketing/MarketingDeepDive";
import WordPressDeepDive from "@/components/services/wordpress/WordPressDeepDive";
import SLASpecs from "@/components/services/phase4/SLASpecs";
import type { Metadata } from "next";
import PageTransitionWrapper from "@/components/layout/PageTransitionWrapper";
import HorizontalScrollServices from "@/components/services/HorizontalScrollServices";
import React from "react";

export const metadata: Metadata = {
    title: "Services | DIGIVIXO - Professional IT & E-commerce Solutions",
    description: "Explore DIGIVIXO's core service pillars: Website Development, Web Applications & SaaS, Graphic Design, Shopify development, Amazon management, Digital Marketing, WordPress development, and AI solutions.",
};

export default function ServicesPage() {
    return (
        <PageTransitionWrapper>
            <div className="relative py-32 px-6 text-center space-y-8 bg-black overflow-hidden perspective-1000">
                {/* Immersive Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30 transform scale-110"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80')" }}
                />
                <div className="absolute inset-0" />
                <h1 className="relative z-10 text-6xl md:text-[8rem] font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white to-neutral-500 leading-none">
                    Strategic <br/> Infrastructure
                </h1>
                <p className="relative z-10 text-2xl text-cyan-700 max-w-2xl mx-auto font-semibold tracking-wide">
                    Professional IT and E-commerce pillars. Scalable business solutions. One absolute commitment to technical excellence.
                </p>
            </div>
            <HorizontalScrollServices />
            <React.Fragment>
                <div className="bg-black py-20 border-t border-white/5">
                    <div className="max-w-7xl mx-auto text-center mb-16 px-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">Technical Specifications</h2>
                        <p className="text-neutral-400 mt-4">Deep dive into our architectural standards and tech stack.</p>
                    </div>
                </div>
                <WebDevDeepDive />
                <ServiceProcess />
                <WebAppsDeepDive />
                <TechStackGrid />
                <SLASpecs />
                <DesignDeepDive />
                <ShopifyDeepDive />
                <AmazonDeepDive />
                <MarketingDeepDive />
                <WordPressDeepDive />
                <AIDeepDive />
                <ServiceFAQ />
            </React.Fragment>
        </PageTransitionWrapper>
    );
}
