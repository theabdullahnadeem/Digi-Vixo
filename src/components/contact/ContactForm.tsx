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
            <div className="flex flex-col items-center justify-center h-full space-y-6 min-h-[400px] text-center">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center animate-bounce">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-white">Message Sent!</h3>
                <p className="text-neutral-400 max-w-md">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="text-accent hover:underline text-sm"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* FormSubmit configuration */}
            <input type="hidden" name="_subject" value="New Contact Form Submission - Digivixo" />
            
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-neutral-300">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl focus:outline-none focus:border-accent transition-colors text-white placeholder:text-neutral-500"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-neutral-300">
                        Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl focus:outline-none focus:border-accent transition-colors text-white placeholder:text-neutral-500"
                    />
                </div>
            </div>

            {/* Company & Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-neutral-300">
                        Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        placeholder="Acme Inc."
                        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl focus:outline-none focus:border-accent transition-colors text-white placeholder:text-neutral-500"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-neutral-300">
                        Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl focus:outline-none focus:border-accent transition-colors text-white placeholder:text-neutral-500"
                    />
                </div>
            </div>

            {/* Service & Budget Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-neutral-300">
                        Service Interested In <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="service"
                        name="service"
                        required
                        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl focus:outline-none focus:border-accent transition-colors text-white"
                    >
                        <option value="">Select a service</option>
                        <option value="Web Development">Web Development</option>
                        <option value="SaaS Development">SaaS Development</option>
                        <option value="AI & Automation">AI & Automation</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Shopify Apps">Shopify Apps</option>
                        <option value="Technical Consulting">Technical Consulting</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium text-neutral-300">
                        Project Budget <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="budget"
                        name="budget"
                        required
                        className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl focus:outline-none focus:border-accent transition-colors text-white"
                    >
                        <option value="">Select budget range</option>
                        <option value="Under $5,000">Under $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                        <option value="$50,000+">$50,000+</option>
                    </select>
                </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-neutral-300">
                    Project Details <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-xl focus:outline-none focus:border-accent transition-colors text-white placeholder:text-neutral-500 resize-none"
                />
            </div>

            {/* Error Message */}
            {error && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm">
                    Something went wrong. Please try again or email us directly.
                </div>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-black py-4 px-8 rounded-full font-bold uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        Send Message
                        <Send className="w-5 h-5" />
                    </>
                )}
            </button>

            <p className="text-xs text-neutral-500 text-center">
                By submitting this form, you agree to our privacy policy.
            </p>
        </form>
    );
}
