"use client";

import IndustriesPreview from "@/components/home/IndustriesPreview";

export default function IndustriesPage() {
    return (
        <div className="min-h-screen bg-black pt-20">
            {/* Reusing the visual grid component for the main layout to keep it highly visual and concise */}
            <IndustriesPreview />
        </div>
    );
}
