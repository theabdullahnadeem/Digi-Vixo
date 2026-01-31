export default function FounderPhilosophy() {
    return (
        <section className="relative py-32 px-6 bg-neutral-900 border-y border-neutral-800 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80')" }}
            />
            <div className="absolute inset-0 bg-black/75" />
            <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
                <blockquote className="text-3xl md:text-5xl font-serif italic leading-tight text-neutral-200">
                    &quot;Technical excellence is not just about writing code; it's about building reliable systems that solve real business problems and empower organizations to scale with confidence.&quot;
                </blockquote>
                <div className="flex flex-col items-center gap-2">
                    <cite className="not-italic font-bold text-lg uppercase tracking-widest">Abdullah &amp; Hassan</cite>
                    <span className="text-neutral-500">Founders, DIGIVIXO</span>
                </div>
            </div>
        </section>
    );
}
