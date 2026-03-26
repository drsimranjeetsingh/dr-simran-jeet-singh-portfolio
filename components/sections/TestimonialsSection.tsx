"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/Container";
import Section from "@/components/Section";
import testimonialsData from "@/content/testimonials.json";

type Testimonial = {
    id: number;
    name: string;
    tag: string;
    text: string;
    image: string;
};

export default function TestimonialsSection() {
    const [isPaused, setIsPaused] = useState(false);

    const items = testimonialsData as Testimonial[];
    const loopItems = [...items, ...items];

    return (
        <Section
            id="testimonials"
            className="bg-gradient-to-b from-white via-sky-50 to-white pt-20 pb-20"
        >
            <style jsx global>{`
                .testimonial-marquee {
                    position: relative;
                    overflow-x: hidden;
                    overflow-y: visible;
                    width: 100%;
                    padding: 22px 0 70px;
                }

                .testimonial-track {
                    display: flex;
                    width: max-content;
                    will-change: transform;
                    animation: testimonialScroll 24s linear infinite;
                    padding: 8px 0;
                }

                .testimonial-track.paused {
                    animation-play-state: paused;
                }

                @keyframes testimonialScroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                /* Flip card specific overrides (make sure image shows, not mirrored text) */
                .flip-card {
                    perspective: 1200px;
                    transform-style: preserve-3d;
                    -webkit-transform-style: preserve-3d;
                }

                .flip-card-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    transform-style: preserve-3d;
                    -webkit-transform-style: preserve-3d;
                    transition: transform 650ms cubic-bezier(0.22, 0.61, 0.36, 1);
                    will-change: transform;
                }

                .flip-card:hover .flip-card-inner {
                    transform: rotateY(180deg);
                }

                .flip-card-front,
                .flip-card-back {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    display: block;
                    backface-visibility: hidden;
                    -webkit-backface-visibility: hidden;
                }

                .flip-card-front {
                    transform: rotateY(0deg) translateZ(1px);
                    z-index: 2;
                }

                .flip-card-back {
                    transform: rotateY(180deg) translateZ(1px);
                    z-index: 1;
                }
            `}</style>

            <Container>
                <div className="text-center mb-16">
                    <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
                        Patient Stories
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
                        Trusted by <span className="text-blue-600">Happy Smiles</span>
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        A glimpse of the experiences shared by patients who trusted Dr. Simran
                        with their smile journey in Gandhinagar and Ahmedabad.
                    </p>
                </div>

                {/* Auto-rotating carousel with 2–3 visible flip cards */}
                <div
                    className="mt-4 pb-6"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="testimonial-marquee">
                        <div className={`testimonial-track ${isPaused ? "paused" : ""}`}>
                            {loopItems.map((item, index) => (
                                <div
                                    key={`${item.id}-${index}`}
                                    className="px-2 md:px-3"
                                    aria-hidden={index >= items.length}
                                >
                                    <div className="flip-card cursor-pointer w-[260px] md:w-[320px] h-[260px] md:h-[300px]">
                                        <div className="flip-card-inner h-full">
                                            <div className="flip-card-front">
                                                <div className="h-full rounded-3xl shadow-xl bg-white/90 border border-blue-100 overflow-hidden">
                                                    <div className="p-6 md:p-7 flex flex-col justify-between bg-white h-full">
                                                        <div>
                                                            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-700 uppercase tracking-wider">
                                                                <span className="text-base">“</span>
                                                                <span>Patient Story</span>
                                                            </div>
                                                            <p className="text-neutral-700 text-sm md:text-base leading-relaxed line-clamp-5">
                                                                {item.text}
                                                            </p>
                                                        </div>

                                                        <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                                                            <div>
                                                                <p className="text-sm font-semibold text-neutral-900">{item.name}</p>
                                                                <p className="text-xs text-neutral-500">{item.tag}</p>
                                                            </div>
                                                            {/* <p className="text-[10px] text-neutral-500 uppercase tracking-widest">
                                                                Hover to flip
                                                            </p> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flip-card-back">
                                                <div className="h-full rounded-3xl shadow-xl border border-blue-100 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white">
                                                    <div className="relative h-full w-full">
                                                        <Image
                                                            src={item.image}
                                                            alt={`${item.name} with Dr. Simran`}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
