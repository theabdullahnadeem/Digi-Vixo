import PricingPreview from "@/components/home/PricingPreview";

export const metadata = {
    title: "Pricing | Digivixo",
    description: "Transparent pricing for high-performance websites, SaaS development, and AI automation systems.",
};

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-black pt-20">
            <PricingPreview />
        </div>
    );
}
