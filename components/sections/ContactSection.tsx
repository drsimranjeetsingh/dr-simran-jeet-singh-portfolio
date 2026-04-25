"use client";

import { useState, useRef } from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";

export default function ContactPage() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);
        const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_URL || "";

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setSuccess(true);
                formRef.current?.reset();
                setTimeout(() => setSuccess(false), 5000);
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <Section id="contact" className="bg-gradient-to-b from-white via-blue-50 to-white py-20">
            <Container>
                <div className="text-center mb-16">
                    <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
                        Next Step
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
                        Let's Transform Your <span className="text-blue-600">Smile</span>
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        Ready to start your smile journey? Reach out and let's discuss your smile goals.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto items-center">
                    {/* Left Column - Contact Info */}
                    <div className="flex flex-col justify-center order-2 lg:order-1">
                        <h3 className="text-3xl font-bold mb-4 text-neutral-900">
                            Get In Touch
                        </h3>
                        <p className="text-neutral-600 mb-10 leading-relaxed max-w-md">
                            Whether you're looking for a consultation, have a question, or are ready to transform your smile—I'd love to hear from you.
                        </p>

                        <div className="space-y-8">
                            {/* Phone */}
                            <div className="flex items-center gap-5 group">
                                <div className="w-14 h-14 rounded-2xl bg-blue-50/50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-neutral-400 mb-1 uppercase tracking-widest">Phone</h4>
                                    <a href="tel:+919081237115" className="text-lg font-semibold text-neutral-900 hover:text-blue-600 transition-colors">+91 9081237115</a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-5 group">
                                <div className="w-14 h-14 rounded-2xl bg-blue-50/50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-neutral-400 mb-1 uppercase tracking-widest">Email</h4>
                                    <a href="mailto:sjsingh201@gmail.com" className="text-lg font-semibold text-neutral-900 hover:text-blue-600 transition-colors">sjsingh201@gmail.com</a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-5 group">
                                <div className="w-14 h-14 rounded-2xl bg-blue-50/50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-neutral-400 mb-1 uppercase tracking-widest">Location</h4>
                                    <a href="https://maps.google.com/?q=Gandhinagar,+Ahmedabad" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-neutral-900 hover:text-blue-600 transition-colors">Ahmedabad, Gandhinagar</a>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-12 pt-8 border-t border-neutral-100 text-center md:text-left">
                            <h3 className="text-xs font-bold mb-4 text-neutral-400 uppercase tracking-widest">
                                Follow My Journey
                            </h3>

                            <div className="flex gap-4 justify-center md:justify-start">
                                <a
                                    href="https://youtube.com/@drsimranjeetsingh?si=KqLAeoC5NWFRupjt"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.082 0 12 0 12s0 3.918.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.918 24 12 24 12s0-3.918-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.instagram.com/dr.sj_singh?igsh=cmE0NWw5cDRzOXhq"
                                    aria-label="Instagram Profile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
                                >
                                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-[1.35rem] h-[1.35rem]">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="relative order-1 lg:order-2 mb-10 lg:mb-0">
                        <div className="absolute -inset-4 bg-gradient-to-br from-blue-200 to-purple-200 rounded-[2.5rem] blur-2xl opacity-40 -z-10" />

                        <div className="bg-white rounded-[2rem] p-7 sm:p-10 shadow-[0_10px_40px_-10px_rgba(30,58,138,0.08)] border border-blue-50 relative overflow-hidden">
                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full opacity-60"></div>

                            <h3 className="text-2xl font-bold mb-2 text-neutral-900 relative z-10">
                                Send a Message
                            </h3>
                            <p className="text-neutral-500 text-sm mb-8 relative z-10">
                                Fill out the form below and we'll get back to you promptly.
                            </p>

                            {success ? (
                                <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl p-6 text-center shadow-sm relative z-10">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                                        ✨
                                    </div>
                                    <h4 className="font-bold text-lg mb-1">Message Sent!</h4>
                                    <p className="text-sm">Thank you for reaching out. We will get back to you shortly.</p>
                                </div>
                            ) : (
                                <form
                                    ref={formRef}
                                    onSubmit={handleSubmit}
                                    className="space-y-5 relative z-10"
                                >
                                    {/* Honeypot Field */}
                                    <label htmlFor="_gotcha" className="sr-only">Honeypot</label>
                                    <input type="text" id="_gotcha" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                                    <div>
                                        <label htmlFor="name" className="block mb-1.5 text-sm font-medium text-neutral-700">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            placeholder="James Carter"
                                            className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white transition-all text-sm placeholder-neutral-400 text-neutral-900"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block mb-1.5 text-sm font-medium text-neutral-700">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            placeholder="james@example.com"
                                            className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white transition-all text-sm placeholder-neutral-400 text-neutral-900"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block mb-1.5 text-sm font-medium text-neutral-700">Phone Number (Optional)</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="+91 98765 43210"
                                            className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white transition-all text-sm placeholder-neutral-400 text-neutral-900"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block mb-1.5 text-sm font-medium text-neutral-700">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            required
                                            placeholder="How can we help you?"
                                            className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white transition-all text-sm resize-none placeholder-neutral-400 text-neutral-900"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5 mt-4 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                                    >
                                        {loading ? "Sending..." : "Send Message"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}