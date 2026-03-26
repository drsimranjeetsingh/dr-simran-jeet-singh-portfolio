"use client";

import { useState } from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";

export default function ContactPage() {
    const [loading, setLoading] = useState(false);

    return (
        <Section id="contact" className="bg-gradient-to-b from-white via-blue-50 to-white py-20">
            <Container>
                <div className="text-center mb-20">
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

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Left Column - Contact Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-neutral-900">
                            Get In Touch
                        </h3>

                        <div className="space-y-4">
                            {/* Phone Card */}
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all">
                                <h4 className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wider">
                                    📞 Phone
                                </h4>
                                <div className="text-lg font-bold text-neutral-900">
                                    <a href="tel:+919876543210" className="hover:text-blue-600 transition-colors">+91 9876543210</a>
                                </div>
                            </div>

                            {/* Email Card */}
                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-6 hover:shadow-lg transition-all">
                                <h4 className="text-sm font-semibold text-purple-600 mb-2 uppercase tracking-wider">
                                    ✉️ Email
                                </h4>
                                <div className="text-lg font-bold text-neutral-900">
                                    <a href="mailto:hello@drsimran.com" className="hover:text-purple-600 transition-colors">hello@drsimran.com</a>
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-6 hover:shadow-lg transition-all">
                                <h4 className="text-sm font-semibold text-green-600 mb-2 uppercase tracking-wider">
                                    📍 Location
                                </h4>
                                <div className="text-lg font-bold text-neutral-900">
                                    Gandhinagar, Gujarat
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-12">
                            <h3 className="text-lg font-bold mb-6 text-neutral-900">
                                Follow My Journey
                            </h3>

                            <div className="flex gap-4">
                                <a
                                    href="https://facebook.com"
                                    aria-label="Facebook Profile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white hover:shadow-lg hover:scale-110 transition-all text-xl font-bold"
                                >
                                    f
                                </a>
                                <a
                                    href="https://instagram.com"
                                    aria-label="Instagram Profile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white hover:shadow-lg hover:scale-110 transition-all text-xl"
                                >
                                    📸
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-neutral-900">
                            Send a Message
                        </h3>

                        <form
                            action="https://formspree.io/f/mqedozoz"
                            method="POST"
                            onSubmit={() => setLoading(true)}
                            className="space-y-6 bg-gradient-to-br from-neutral-50 to-neutral-100 border border-neutral-200 rounded-2xl p-8"
                        >
                            {/* Honeypot Field (Anti-Spam) */}
                            <label htmlFor="_gotcha" className="sr-only">Honeypot</label>
                            <input type="text" id="_gotcha" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-semibold text-neutral-700">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Enter your name"
                                    className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-neutral-400 bg-white transition"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-semibold text-neutral-700">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-neutral-400 bg-white transition"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-semibold text-neutral-700">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-neutral-400 bg-white transition"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-semibold text-neutral-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    placeholder="Tell us about your smile goals..."
                                    className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-neutral-400 bg-white transition resize-none"
                                />
                            </div>

                            <input type="hidden" name="_redirect" value="/thank-you" />

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </Container>
        </Section>
    );
}