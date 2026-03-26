import Container from "@/components/Container";
import Section from "@/components/Section";
import services from "@/content/services.json";

export const metadata = {
    title:
        "Clinical Expertise | Dr. Simran Jeet Singh - Aesthetic Dentist in Gandhinagar & Ahmedabad",
    description:
        "Explore the clinical expertise of Dr. Simran Jeet Singh including smile design, cosmetic dentistry, and aesthetic dental treatments in Gandhinagar and Ahmedabad.",
};

export default function ExpertisePage() {
    const colors = [
        { bg: "bg-blue-50", border: "border-blue-200", hover: "group-hover:border-blue-500", accent: "from-blue-500 to-blue-600", text: "text-blue-600" },
        { bg: "bg-purple-50", border: "border-purple-200", hover: "group-hover:border-purple-500", accent: "from-purple-500 to-purple-600", text: "text-purple-600" },
        { bg: "bg-pink-50", border: "border-pink-200", hover: "group-hover:border-pink-500", accent: "from-pink-500 to-pink-600", text: "text-pink-600" },
        { bg: "bg-green-50", border: "border-green-200", hover: "group-hover:border-green-500", accent: "from-green-500 to-green-600", text: "text-green-600" },
        { bg: "bg-amber-50", border: "border-amber-200", hover: "group-hover:border-amber-500", accent: "from-amber-500 to-amber-600", text: "text-amber-600" },
    ];

    return (
        <Section id="expertise" className="bg-gradient-to-b from-white via-blue-50 to-white py-12 md:py-16">
            <Container>
                <div className="text-center mb-16">
                    <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
                        What We Offer
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
                        Areas of <span className="text-blue-600">Expertise</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {services.map((service, index) => {
                        const color = colors[index % colors.length];
                        const icon = service.icon || "🦷";

                        return (
                            <div
                                key={index}
                                className="group relative cursor-pointer h-full"
                            >
                                {/* Glossy Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${color.bg} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl`}></div>

                                {/* Card Container */}
                                <div className={`relative h-full ${color.bg} border-2 ${color.border} ${color.hover} rounded-2xl overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1`}>
                                    {/* Top Accent Bar */}
                                    <div className={`h-1 bg-gradient-to-r ${color.accent}`}></div>

                                    <div className="p-5">
                                        {/* Icon */}
                                        <div className="text-4xl mb-3 transform group-hover:scale-120 transition-transform duration-300">
                                            {icon}
                                        </div>

                                        {/* Title */}
                                        <h3 className={`text-lg font-bold text-neutral-900 ${color.text}`}>
                                            {service.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Benefits Section */}
                <div className="mt-20 grid md:grid-cols-4 gap-8">
                    {[
                        { icon: "⚡", title: "Quick Results", desc: "Fast and efficient treatments" },
                        { icon: "🛡️", title: "Safe & Proven", desc: "Evidence-based procedures" },
                        { icon: "😊", title: "Pain-Free", desc: "Comfortable experiences" },
                        { icon: "🎯", title: "Personalized", desc: "Customized for you" },
                    ].map((benefit, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl mb-3">{benefit.icon}</div>
                            <h4 className="font-semibold text-neutral-900 mb-1">{benefit.title}</h4>
                            <p className="text-sm text-neutral-600">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}