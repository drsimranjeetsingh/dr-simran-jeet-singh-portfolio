import Container from "@/components/Container";
import Section from "@/components/Section";
import services from "@/content/services.json";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
    title:
        "Clinical Expertise | Dr. Simran Jeet Singh - Aesthetic Dentist in Gandhinagar & Ahmedabad",
    description:
        "Explore the clinical expertise of Dr. Simran Jeet Singh including smile design, cosmetic dentistry, and aesthetic dental treatments in Gandhinagar and Ahmedabad.",
};

export default function ExpertisePage() {
    // Clean, minimalist approach instead of multiple colors

    return (
        <Section id="expertise" className="bg-gradient-to-b from-white via-blue-50 to-white py-12 md:py-16">
            <Container>
                <div className="text-center mb-16">
                    <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
                        What We Offer
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
                        Dental <span className="text-blue-600">Services</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-10 max-w-6xl mx-auto px-1 sm:px-0">
                    {services.map((service, index) => (
                        <div key={index} className="group relative w-full px-5 py-4 sm:px-6 sm:py-5 bg-white/70 backdrop-blur-md rounded-2xl border border-white shadow-[inset_0_2px_6px_rgba(255,255,255,0.8),0_2px_10px_-2px_rgba(30,58,138,0.06)] hover:bg-white hover:border-blue-50 hover:shadow-[0_10px_25px_-5px_rgba(59,130,246,0.15)] hover:-translate-y-1 transition-all duration-400 ease-out flex items-center gap-4 cursor-default">
                                                        
                            {/* Premium Alive Dot */}
                            <div className="relative flex items-center justify-center w-2.5 h-2.5 shrink-0">
                                <div className="absolute w-full h-full bg-blue-300 rounded-full group-hover:bg-blue-600 transition-colors duration-400"></div>
                                <div className="absolute w-full h-full bg-blue-500 rounded-full animate-ping opacity-0 group-hover:opacity-40 transition-opacity duration-400" style={{ animationDuration: '2s' }}></div>
                            </div>
                            
                            <h3 className={`${outfit.className} text-[15px] sm:text-base font-medium text-neutral-600 group-hover:text-neutral-900 transition-colors duration-300 tracking-tight leading-snug`}>
                                {service.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Benefits Section */}
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { 
                            title: "Quick Results", 
                            desc: "Fast and efficient treatments",
                            icon: <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        },
                        { 
                            title: "Safe & Proven", 
                            desc: "Evidence-based procedures",
                            icon: <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                        },
                        { 
                            title: "Pain-Free", 
                            desc: "Comfortable experiences",
                            icon: <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        },
                        { 
                            title: "Personalized", 
                            desc: "Customized for you",
                            icon: <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                        },
                    ].map((benefit, index) => (
                        <div key={index} className="relative p-6 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden text-center flex flex-col items-center cursor-pointer">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-100 via-blue-400 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
                                {benefit.icon}
                            </div>
                            <h4 className="font-bold text-neutral-900 mb-2 group-hover:text-blue-600 transition-colors">{benefit.title}</h4>
                            <p className="text-sm text-neutral-500">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}