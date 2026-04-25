import Container from "@/components/Container";
import Section from "@/components/Section";
import cases from "@/content/cases.json";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export const metadata = {
    title:
        "Smile Design & Cosmetic Cases | Dr. Simran Jeet Singh",
    description:
        "Explore before and after smile design and cosmetic dentistry cases treated by Dr. Simran Jeet Singh in Gandhinagar and Ahmedabad.",
};

export default function CasesPage() {
    return (
        <Section id="cases" className="bg-gradient-to-b from-white via-purple-50 to-white py-12 md:py-16">
            <Container>
                <div className="text-center mb-16">
                    <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
                        Real Results
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
                        Before & After <span className="text-blue-600">Gallery</span>
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        Real results from real patients. Drag the slider to compare the transformation.
                    </p>
                </div>

                {/* Cases Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 max-w-7xl mx-auto">
                    {cases.map((caseItem) => (
                        <div key={caseItem.id} className="group relative rounded-2xl overflow-hidden shadow-sm border border-neutral-100 hover:shadow-md transition-shadow bg-white pb-0">
                            {/* Before/After Slider */}
                            <BeforeAfterSlider
                                beforeImage={caseItem.beforeImage}
                                afterImage={caseItem.afterImage}
                                beforeLabel="Before"
                                afterLabel="After"
                                altBefore={caseItem.altBefore}
                                altAfter={caseItem.altAfter}
                            />
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16">
                    <div className="bg-white border border-blue-200 rounded-2xl p-12 md:p-14 text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                            Ready to Transform Your Smile?
                        </h3>
                        <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
                            Book your consultation today and let's create your perfect smile.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
                        >
                            Book Your Consultation
                            <span>→</span>
                        </a>
                    </div>
                </div>
            </Container>
        </Section>
    );
}