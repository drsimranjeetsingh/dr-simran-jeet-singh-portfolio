import Container from "@/components/Container";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-gradient-to-b from-white to-blue-50 overflow-hidden border-t border-blue-100 py-10">
            {/* Soft background glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3" />

            <Container className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-8">
                    {/* Brand Column */}
                    <div>
                        {/* Social Links */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://youtube.com/@drsimranjeetsingh?si=KqLAeoC5NWFRupjt"
                                aria-label="YouTube Channel"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 h-10 rounded-xl bg-white border border-red-200 flex items-center justify-center gap-2.5 text-red-600 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all shadow-sm hover:shadow-md"
                            >
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.082 0 12 0 12s0 3.918.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.918 24 12 24 12s0-3.918-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                                <span className="text-sm font-bold tracking-tight">@drsimranjeetsingh</span>
                            </a>
                            <a
                                href="https://www.instagram.com/dr.sj_singh?igsh=cmE0NWw5cDRzOXhq"
                                aria-label="Instagram Profile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 h-10 rounded-xl bg-white border border-pink-200 flex items-center justify-center gap-2 text-pink-600 hover:bg-pink-600 hover:border-pink-600 hover:text-white transition-all shadow-sm hover:shadow-md"
                            >
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm font-bold tracking-tight">@dr.sj_singh</span>

                            </a>
                        </div>
                    </div>

                    {/* Quick Links Horizontal */}
                    <div>
                        <ul className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3 text-sm font-medium">
                            {[
                                { name: "Home", href: "#home" },
                                { name: "About", href: "#about" },
                                { name: "Expertise", href: "#expertise" },
                                { name: "Cases", href: "#cases" },
                                { name: "Testimonials", href: "#testimonials" },
                                { name: "Contact", href: "#contact" },
                            ].map((link) => (
                                <li key={link.href} className={link.name === "Contact" ? "hidden sm:block" : ""}>
                                    <a href={link.href} className="text-neutral-600 hover:text-blue-600 transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Divider & Copyright */}
                <div className="pt-6 mt-6 border-t border-blue-200/60 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-neutral-500 text-sm font-medium">
                        © {currentYear} Dr. Simran Jeet Singh. All rights reserved.
                    </p>
                    <p className="text-neutral-500 text-sm flex items-center gap-1 font-medium">
                        Made with <span className="text-red-500 text-lg">♥</span> for beautiful smiles
                    </p>
                </div>
            </Container>
        </footer>
    );
}
