"use client";

import { useState } from "react";
import Container from "./Container";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#expertise", label: "Expertise" },
        { href: "#cases", label: "Cases" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav className="py-3 border-b border-neutral-200 bg-white sticky top-0 z-50">
            <Container className="flex justify-between items-center">

                {/* Logo / Brand */}
                <a
                    href="#home"
                    className="text-lg font-semibold tracking-tight text-neutral-900"
                >
                    Dr. Simran Jeet Singh
                </a>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex gap-8 text-sm font-medium">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-neutral-700 hover:text-blue-600 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle menu"
                >
                    <span
                        className={`w-6 h-0.5 bg-neutral-900 transition-all ${isOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-neutral-900 transition-all ${isOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-neutral-900 transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                    />
                </button>
            </Container>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-neutral-200 mt-4 pt-4">
                    <Container className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-neutral-700 hover:text-blue-600 transition-colors py-2 font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </Container>
                </div>
            )}
        </nav>
    );
}