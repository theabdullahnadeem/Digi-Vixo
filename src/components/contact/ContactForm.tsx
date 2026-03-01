"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(false);

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch("https://formsubmit.co/ajax/abdullahnadeem2580@gmail.com", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                setError(true);
            }
        } catch {
            setError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="flex flex-col items-center justify-center h-full space-y-6 min-h-[400px] text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center animate-bounce shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-white tracking-tight">Message Sent!</h3>
                <p className="text-neutral-400 max-w-md leading-relaxed">
                    Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors text-sm font-medium"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
            {/* Background Glow inside form */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-indigo/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-brand-blue/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10">
                {/* FormSubmit configuration */}
                <input type="hidden" name="_subject" value="New Contact Form Submission - Digivixo" />
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-neutral-300">
                            Full Name <span className="text-brand-blue">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="John Doe"
                            className="w-full px-5 py-3.5 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-white placeholder:text-neutral-600 shadow-inner"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-neutral-300">
                            Email Address <span className="text-brand-blue">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="john@company.com"
                            className="w-full px-5 py-3.5 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-white placeholder:text-neutral-600 shadow-inner"
                        />
                    </div>
                </div>

                {/* Company & Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-neutral-300">
                            Company Name <span className="text-brand-blue">*</span>
                        </label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            required
                            placeholder="Acme Inc."
                            className="w-full px-5 py-3.5 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-white placeholder:text-neutral-600 shadow-inner"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-neutral-300">
                            Phone Number <span className="text-brand-blue">*</span>
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            placeholder="+1 (555) 000-0000"
                            className="w-full px-5 py-3.5 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-white placeholder:text-neutral-600 shadow-inner"
                        />
                    </div>
                </div>

                {/* Service & Budget Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium text-neutral-300">
                            Service Interested In <span className="text-brand-blue">*</span>
                        </label>
                        <div className="relative">
                            <select
                                id="service"
                                name="service"
                                required
                                className="w-full px-5 py-3.5 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-white appearance-none cursor-pointer shadow-inner"
                            >
                                <option value="" className="bg-neutral-900">Select a service</option>
                                <option value="Web Development" className="bg-neutral-900">Web Development</option>
                                <option value="SaaS Development" className="bg-neutral-900">SaaS Development</option>
                                <option value="AI & Automation" className="bg-neutral-900">AI & Automation</option>
                                <option value="UI/UX Design" className="bg-neutral-900">UI/UX Design</option>
                                <option value="Shopify Apps" className="bg-neutral-900">Shopify Apps</option>
                                <option value="Technical Consulting" className="bg-neutral-900">Technical Consulting</option>
                                <option value="Other" className="bg-neutral-900">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="budget" className="text-sm font-medium text-neutral-300">
                            Project Budget <span className="text-brand-blue">*</span>
                        </label>
                        <div className="relative">
                            <select
                                id="budget"
                                name="budget"
                                required
                                className="w-full px-5 py-3.5 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-white appearance-none cursor-pointer shadow-inner"
                            >
                                <option value="" className="bg-neutral-900">Select budget range</option>
                                <option value="Under $5,000" className="bg-neutral-900">Under $5,000</option>
                                <option value="$5,000 - $10,000" className="bg-neutral-900">$5,000 - $10,000</option>
                                <option value="$10,000 - $25,000" className="bg-neutral-900">$10,000 - $25,000</option>
                                <option value="$25,000 - $50,000" className="bg-neutral-900">$25,000 - $50,000</option>
                                <option value="$50,000+" className="bg-neutral-900">$50,000+</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Message */}
                <div className="space-y-2 mb-8">
                    <label htmlFor="message" className="text-sm font-medium text-neutral-300">
                        Project Details <span className="text-brand-blue">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us about your project, goals, and timeline..."
                        className="w-full px-5 py-3.5 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-white placeholder:text-neutral-600 resize-none shadow-inner"
                    />
                </div>

                {/* Error Message */}
                {error && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-5 py-4 text-red-400 text-sm mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        Something went wrong. Please try again or email us directly.
                    </div>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black py-4 px-8 rounded-xl font-bold uppercase tracking-widest hover:bg-brand-blue hover:text-white transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_14px_0_rgba(255,255,255,0.1)] hover:shadow-[0_6px_20px_rgba(6,182,212,0.4)]"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Processing Request...
                        </>
                    ) : (
                        <>
                            Launch Project
                            <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </>
                    )}
                </button>

                <p className="text-xs text-neutral-500 text-center mt-6">
                    By submitting this form, you agree to our privacy policy and terms of service.
                </p>
            </div>
        </form>
    );
}
