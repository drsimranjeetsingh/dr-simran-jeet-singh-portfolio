import Container from "@/components/Container";
import Section from "@/components/Section";
import doctor from "@/content/doctor.json";

export const metadata = {
    title:
        "About Dr. Simran Jeet Singh | Aesthetic Dentist in Gandhinagar & Ahmedabad",
    description:
        "Learn more about Dr. Simran Jeet Singh, consulting aesthetic dentist based in Gandhinagar, offering smile design and cosmetic dentistry services across Gandhinagar and Ahmedabad.",
};

export default function AboutPage() {
    const values = [
        {
            icon: "💎",
            title: "Ethical Excellence",
            description: "Evidence-based treatments with transparency and integrity"
        },
        {
            icon: "🤝",
            title: "Patient-Centric Care",
            description: "Your comfort and satisfaction is our top priority"
        },
        {
            icon: "🎯",
            title: "Precision & Artistry",
            description: "Delivering confident smiles through science and aesthetics"
        },
    ];



    return (
        <>
            <Section id="about" className="bg-gradient-to-b from-white via-blue-50 to-white py-12 md:py-16">
                <Container>
                    {/* Header */}
                    <div className="text-center mb-20">
                        <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
                            Our Mission
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
                            Creating Confident Smiles,<br />
                            One Patient at a Time
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                            As a Consulting Aesthetic Dentist, I provide personalized smile transformations backed by clinical expertise and evidence-based care, with a strong focus on patient satisfaction and compassionate, individualized treatment.
                        </p>
                    </div>

                    {/* Core Values Section */}
                    <div>
                        <h3 className="text-3xl font-bold text-center mb-12 text-neutral-900">
                            Why Choose <span className="text-blue-600">Dr. Simran</span>
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="relative group cursor-pointer h-full"
                                >
                                    {/* Glossy Card Background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Card */}
                                    <div className="relative h-full flex flex-col bg-white border-2 border-blue-200 rounded-2xl p-8 group-hover:border-blue-400 transition-all duration-300 group-hover:shadow-xl">
                                        {/* Icon */}
                                        <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                            {value.icon}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-grow">
                                            <h4 className="text-xl font-bold text-neutral-900 mb-2">
                                                {value.title}
                                            </h4>
                                            <p className="text-neutral-600 group-hover:text-neutral-700 transition-colors">
                                                {value.description}
                                            </p>
                                        </div>

                                        {/* Accent Line */}
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-transparent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mt-auto"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                </Container>
            </Section>
        </>
    );
}