import ServiceSection from "@/components/services/ServiceSection";
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

export const metadata: Metadata = {
    title: "Services | DIGIVIXO - Professional IT & E-commerce Solutions",
    description: "Explore DIGIVIXO's core service pillars: Website Development, Web Applications & SaaS, Graphic Design, Shopify development, Amazon management, Digital Marketing, WordPress development, and AI solutions.",
};

export default function ServicesPage() {
    return (
        <main>
            <div className="relative py-24 px-6 text-center space-y-6 bg-linear-to-b from-neutral-900 to-black overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-15"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80')" }}
                />
                <h1 className="relative z-10 text-5xl md:text-7xl font-bold tracking-tighter">Your Strategic Digital Partner</h1>
                <p className="relative z-10 text-xl text-neutral-500 max-w-2xl mx-auto">
                    Professional IT and E-commerce pillars. Scalable business solutions. One commitment to technical excellence.
                </p>
            </div>

            <ServiceSection
                id="web-dev"
                title="Website Development"
                description="We build high-performance, responsive websites that serve as the foundation of your digital presence. From corporate portfolios to complex landing pages, our solutions are optimized for speed, security, and conversion."
                imageSrc="/web-dev.avif"
                features={[
                    "Custom Business Websites",
                    "Corporate Portfolio Sites",
                    "High-Converting Landing Pages",
                    "SEO-Friendly Architecture",
                    "Mobile-First Design"
                ]}
            />
            <WebDevDeepDive />

            <ServiceProcess />

            <ServiceSection
                id="web-apps"
                title="Web Applications & SaaS"
                description="Scale your operations with custom-built web applications and SaaS platforms. We design and develop powerful dashboards, admin panels, and business tools that streamline your internal processes."
                imageSrc="/saas.avif"
                reversed
                features={[
                    "Custom SaaS Dashboards",
                    "Business Admin Panels",
                    "Scalable Cloud Solutions",
                    "API Development & Integration",
                    "Professional UI/UX Interface"
                ]}
            />
            <WebAppsDeepDive />
            <TechStackGrid />
            <SLASpecs />

            <ServiceSection
                id="design"
                title="Graphic Design & UI/UX"
                description="Enhance your brand identity with professional design services. We focus on visual clarity and brand consistency to create memorable digital experiences for your users."
                imageSrc="/ui.jpg"
                features={[
                    "Modern Logo & Branding",
                    "UI & UX Design",
                    "Marketing Banners & Creatives",
                    "Social Media Assets",
                    "User-Centered Interfaces"
                ]}
            />
            <DesignDeepDive />

            <ServiceSection
                id="shopify"
                title="Shopify Development"
                description="Professional platform engineering and custom theme development for high-growth brands. We build scalable, high-conversion Shopify ecosystems tailored to your business goals."
                imageSrc="/shopifyy.jpg"
                reversed
                features={[
                    "Custom Theme Engineering",
                    "Advanced App Integration",
                    "Headless Commerce Solutions",
                    "Performance Optimization",
                    "Migration & Management"
                ]}
            />
            <ShopifyDeepDive />

            <ServiceSection
                id="amazon"
                title="Amazon Management"
                description="Data-driven marketplace growth and strategic management for Amazon Private Label. We optimize your operational technicalities to maximize marketplace dominance."
                imageSrc="/dropship.png"
                features={[
                    "Strategic Account Management",
                    "Advanced PPC Optimization",
                    "A9 Algorithm SEO",
                    "Account Health Monitoring",
                    "Global Expansion Strategy"
                ]}
            />
            <AmazonDeepDive />

            <ServiceSection
                id="marketing"
                title="Digital Marketing & Social Media"
                description="Technical marketing strategies designed for global reach. We manage your presence across Meta, TikTok, and Snapchat, while optimizing search visibility through advanced SEO and Google Ads."
                imageSrc="/digi.jpg"
                features={[
                    "Professional Social Media Management",
                    "Facebook & Instagram Ads (Meta)",
                    "TikTok & Snapchat Marketing",
                    "Search Engine Optimization (SEO)",
                    "Google Ads & SEM Performance"
                ]}
            />
            <MarketingDeepDive />

            <ServiceSection
                id="wordpress"
                title="WordPress Development"
                description="Professional ecosystem engineering and custom theme development for WordPress. We build secure, high-performance, and scalable CMS solutions tailored to your business needs."
                imageSrc="/wordpress.png"
                reversed
                features={[
                    "Custom Theme Engineering",
                    "Plugin Development & Integration",
                    "Core Web Vitals Optimization",
                    "Advanced Security Hardening",
                    "Managed CMS Maintenance"
                ]}
            />
            <WordPressDeepDive />

            <ServiceSection
                id="ai"
                title="Automation & AI Services"
                description="Optimize your business processes with intelligent automation and AI-driven solutions. We help you reduce costs and improve efficiency through cutting-edge technology integrations."
                imageSrc="/ai.jpg"
                reversed
                features={[
                    "Business Process Automation",
                    "Workflow Optimization",
                    "AI Tool Integrations",
                    "Intelligent Data Solutions",
                    "Custom AI Applications"
                ]}
            />
            <AIDeepDive />

            <ServiceFAQ />
        </main>
    );
}
