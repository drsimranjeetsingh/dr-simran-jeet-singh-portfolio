"use client";

import { motion } from "framer-motion";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Button from "@/components/Button";
import doctor from "@/content/doctor.json";
import Image from "next/image";

export default function HeroSection() {
    const highlights = [
        { icon: "👥", label: "500+ Happy Smiles" },
        { icon: "⭐", label: "5+ Years Expertise" },
        { icon: "💯", label: "100% Satisfaction" },
    ];

    return (
        <Section
            id="home"
            className="bg-gradient-to-br from-white via-blue-50 to-white !py-12 md:!py-12"
        >
            <Container>
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 font-medium text-sm"
                        >
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            Aesthetic Dental Expert
                        </motion.div>

                        {/* Main Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mb-6 leading-tight text-5xl md:text-6xl font-bold bg-gradient-to-r from-neutral-900 via-blue-900 to-neutral-900 bg-clip-text text-transparent"
                        >
                            {doctor.name}
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-lg md:text-xl text-blue-600 font-semibold mb-4"
                        >
                            {doctor.title}
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mb-8 text-neutral-600 text-lg leading-relaxed"
                        >
                            Transforming smiles with evidence-based aesthetic dentistry. Serving Gandhinagar & Ahmedabad with personalized care, ethical practices, and stunning results.
                        </motion.p>

                        {/* Highlights */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="grid grid-cols-3 gap-4 mb-10"
                        >
                            {highlights.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200"
                                >
                                    <div className="text-2xl mb-2">{item.icon}</div>
                                    <p className="text-sm font-semibold text-neutral-800">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Button href="#cases" className="px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
                                View Smile Cases
                            </Button>

                            <Button href="#contact" variant="outline" className="px-8 py-4 rounded-xl font-semibold border-2 border-blue-600">
                                Book Consultation
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        className="perspective"
                        style={{
                            perspective: "1000px",
                        }}
                    >
                        {/* Glossy Card Wrapper */}
                        <div className="relative group">
                            {/* Decorative Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-300 to-pink-200 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>

                            {/* Image Card */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-2xl transition-shadow duration-300">
                                {/* Glass Effect Border */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-white opacity-20 pointer-events-none rounded-3xl"></div>

                                {/* Image */}
                                <Image
                                    src="/images/profile/profile.webp"
                                    alt="Dr. Simran Jeet Singh - Consulting Aesthetic Dentist"
                                    width={600}
                                    height={700}
                                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                                    priority
                                />

                                {/* Bottom Accent Bar */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -bottom-4 left-6 bg-white shadow-xl rounded-2xl px-6 py-4 border border-blue-200 flex flex-col"
                            >
                                <span className="font-bold text-blue-600 text-lg">Smile Design</span>
                                <span className="text-xs text-neutral-600">Expert</span>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex justify-center mt-20"
                >
                    <div className="text-center text-neutral-600">
                        <p className="text-sm font-medium mb-2">Scroll to explore</p>
                        <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex items-center justify-center mx-auto">
                            <div className="w-1 h-2 bg-neutral-400 rounded-full animate-bounce"></div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
}