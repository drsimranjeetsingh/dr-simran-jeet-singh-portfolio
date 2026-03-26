import Container from "@/components/Container";
import Section from "@/components/Section";
import Link from "next/link";

export default function ThankYouPage() {
    return (
        <Section>
            <Container>
                <div className="text-center max-w-xl mx-auto">
                    <h1 className="mb-6">Thank You</h1>
                    <p className="mb-8 text-neutral-600">
                        Your consultation request has been received.
                        Our team will get back to you shortly.
                    </p>

                    <Link
                        href="/"
                        className="text-blue-600 font-medium hover:underline"
                    >
                        Return to Home
                    </Link>
                </div>
            </Container>
        </Section>
    );
}