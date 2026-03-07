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

// Home Components for Page Flow
import CompanyStory from "@/components/home/CompanyStory";
import StatsBar from "@/components/home/StatsBar";
import CaseStudiesPreview from "@/components/home/CaseStudiesPreview";
import LeadMagnetOffers from "@/components/home/LeadMagnetOffers";
import Testimonials from "@/components/home/Testimonials";

export const metadata: Metadata = {
    title: "Services | DIGIVIXO - Professional IT & E-commerce Solutions",
    description: "Explore DIGIVIXO's core service pillars: Website Development, Web Applications & SaaS, Graphic Design, Shopify development, Amazon management, Digital Marketing, WordPress development, and AI solutions.",
};

const WaveDivider = ({ classNameContainer = "bg-neutral-900", fillClass = "text-black" }) => (
    <div className={`w-full overflow-hidden leading-[0] ${classNameContainer}`} aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px] lg:h-[80px]">
            <path className={`${fillClass} fill-current`} d="M0,64L48,80C96,96,192,128,288,122.7C384,117,480,75,576,58.7C672,43,768,53,864,69.3C960,85,1056,107,1152,101.3C1248,96,1344,64,1392,48L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
    </div>
);

export default function ServicesPage() {
    return (
        <PageTransitionWrapper>
            <div className="relative pt-40 pb-20 px-6 text-center space-y-8 bg-black overflow-hidden perspective-1000 min-h-[60vh] flex flex-col justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30 transform scale-105"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/90 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)] pointer-events-none" />
                
                <h1 className="relative z-10 text-6xl md:text-[7rem] lg:text-[8rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 leading-none">
                    Strategic <br className="hidden md:block" /> Infrastructure
                </h1>
                <p className="relative z-10 text-xl md:text-2xl text-cyan-500 max-w-3xl mx-auto font-semibold tracking-wide leading-relaxed">
                    Professional IT and E-commerce pillars. Scalable business solutions. One absolute commitment to technical excellence.
                </p>
                <div className="relative z-10 mt-12 flex justify-center pb-6">
                    <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-neutral-200 hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.15)] flex items-center gap-3">
                        Explore Offerings
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                </div>
            </div>

            <CompanyStory />
            <StatsBar />

            <HorizontalScrollServices />

            <React.Fragment>
                <div className="bg-black py-20 border-t border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at center, white 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
                    <div className="max-w-7xl mx-auto text-center mb-8 px-6 relative z-10">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter">Technical Specifications</h2>
                        <p className="text-neutral-400 mt-6 text-lg max-w-2xl mx-auto">Deep dive into our architectural standards, execution pillars, and technology stacks for each service offering.</p>
                    </div>
                </div>

                <WebDevDeepDive />
                <WaveDivider classNameContainer="bg-neutral-900" fillClass="text-black" />
                
                <ServiceProcess />
                <WaveDivider classNameContainer="bg-black" fillClass="text-neutral-900" />
                
                <WebAppsDeepDive />
                <TechStackGrid />
                <WaveDivider classNameContainer="bg-black" fillClass="text-neutral-900" />
                
                <SLASpecs />
                <DesignDeepDive />
                <WaveDivider classNameContainer="bg-neutral-900" fillClass="text-black" />
                
                <ShopifyDeepDive />
                <AmazonDeepDive />
                <WaveDivider classNameContainer="bg-neutral-900" fillClass="text-black" />
                
                <MarketingDeepDive />
                <WordPressDeepDive />
                <WaveDivider classNameContainer="bg-neutral-900" fillClass="text-black" />
                
                <AIDeepDive />
                <ServiceFAQ />
                
                <CaseStudiesPreview />
                <LeadMagnetOffers />
                <Testimonials />
                
                {/* Enhanced Bottom CTA Section */}
                <section className="relative py-32 px-6 overflow-hidden bg-black border-t border-white/10 group">
                    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" alt="Global Network" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
                    
                    <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-bold tracking-widest uppercase mb-4">
                            <span className="relative flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                            </span>
                            Ready to Scale?
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
                            Architect Your <br className="hidden md:block" /> Digital Future.
                        </h2>
                        <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                            Stop settling for templates. Partner with Digivixo for enterprise-grade engineering, bespoke design systems, and data-driven growth.
                        </p>
                        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-neutral-200 hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.15)]">
                                Start Your Project
                            </button>
                            <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-white/20 font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/5 transition-colors">
                                Schedule Strategy Call
                            </button>
                        </div>
                    </div>
                </section>
                
            </React.Fragment>
        </PageTransitionWrapper>
    );
}
