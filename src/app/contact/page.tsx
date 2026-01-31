import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, MapPin, Phone, Globe } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us | Digivixo - Technical Solutions & Partnerships",
    description: "Connect with Digivixo for professional IT services, custom development, and digital transformation inquiries.",
};

export default function ContactPage() {
    return (
        <main className="pb-24 bg-black min-h-screen">
            <div className="relative py-24 text-center space-y-6 px-6 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80')" }}
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/80 to-black" />
                <h1 className="relative z-10 text-5xl md:text-8xl font-bold tracking-tighter">Get in Touch</h1>
                <p className="relative z-10 text-xl text-neutral-500 max-w-2xl mx-auto">
                    We are ready to build and scale your digital future. Let&apos;s discuss your next project.
                </p>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 px-6">

                {/* Contact Info Side */}
                <div className="flex-1 space-y-12">
                    <div className="bg-neutral-900 p-8 rounded-3xl border border-neutral-800 space-y-8">
                        <h2 className="text-2xl font-bold">Contact Information</h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-neutral-800 rounded-full">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Email Us</h3>
                                    <p className="text-neutral-500 text-sm mb-2">For general inquiries and support:</p>
                                    <a href="mailto:contact@digivixo.com" className="text-lg font-medium hover:underline">contact@digivixo.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-neutral-800 rounded-full">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Global HQ</h3>
                                    <p className="text-neutral-500">
                                        22 Southville Road  feltham <br /> Middlx London ,TW14 8AU
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-neutral-800 rounded-full">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Contact Us</h3>
                                    <a href="tel:+14254778523" className="text-lg font-medium hover:underline">+1 (425) 477-8523 </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-black text-white p-8 rounded-3xl space-y-6">
                        <h2 className="text-2xl font-bold">Expectations</h2>
                        <ul className="space-y-4 text-neutral-300">
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-white rounded-full" />
                                <span>All inquiries responded to within 24 hours.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-white rounded-full" />
                                <span>Dedicated support for active partners.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-white rounded-full" />
                                <span>Prioritized technical assistance.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Form Side */}
                <div className="flex-[1.5] bg-neutral-900 rounded-3xl p-8 md:p-12 border border-neutral-800 shadow-xl">
                    <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
                    <ContactForm />
                </div>
            </div>
        </main>
    );
}
