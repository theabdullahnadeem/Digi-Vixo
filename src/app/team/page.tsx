import type { Metadata } from "next";
import TeamDetails from "@/components/team/TeamDetails";
import AdvisoryBoard from "@/components/team/phase4/AdvisoryBoard";

export const metadata: Metadata = {
    title: "Leadership Team | Digivixo",
    description: "Meet the leadership behind Digivixo, Abdullah and Hassan. Experts in technical innovation and digital transformation.",
};

export default function TeamPage() {
    return (
        <main className="bg-black">
            <div className="relative py-32 px-6 text-center bg-black overflow-hidden">
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-50"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80')" }}
                />
                <div className="absolute inset-0 bg-black/70" />
                <h1 className="relative z-10 text-5xl md:text-8xl font-bold tracking-tighter">The Visionaries</h1>
                <p className="relative z-10 text-xl text-neutral-500 max-w-2xl mx-auto">
                    Building the digital infrastructure for the next generation of business.
                </p>
            </div>
            <div className="bg-black p-1" />
            <TeamDetails />
        </main>
    );
}
