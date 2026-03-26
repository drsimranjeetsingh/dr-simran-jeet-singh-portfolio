import Container from "@/components/Container";
import Section from "@/components/Section";
import Image from "next/image";

export default function BookLaunchSection() {
  return (
    <Section
      id="book"
      className="bg-gradient-to-b from-white via-blue-50 to-white pt-24 pb-24"
    >
      <Container>
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
            Upcoming Book
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
            A Fresher Dentist’s <span className="text-blue-600">Journey</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A premium, honest read about the early years of dentistry—confidence, mistakes,
            patient communication, and building a career with skill and ethics.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-blue-400 via-purple-300 to-pink-200 rounded-[32px] blur-2xl opacity-20" />
            <div className="relative mx-auto w-[260px] sm:w-[330px] aspect-[3/4]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white via-blue-50 to-white border border-blue-200 shadow-2xl" />
              <div className="absolute inset-[10px] rounded-2xl bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-800 overflow-hidden">
                <Image
                  src="/images/book/cover.webp"
                  alt="Book cover"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-[22px] rounded-2xl border border-white/20" />
              <div className="absolute inset-[10px] rounded-2xl bg-gradient-to-tr from-white/0 via-white/10 to-white/0" />

              <div className="absolute left-7 right-7 bottom-7">
                <div className="h-[3px] w-16 bg-gradient-to-r from-white/90 via-white/60 to-white/10 rounded-full" />
              </div>
            </div>
          </div>

          <div className="bg-white/80 border border-blue-100 rounded-3xl p-7 md:p-8 shadow-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
              <span className="w-2 h-2 bg-blue-600 rounded-full" />
              Launching Soon
            </div>

            <h3 className="mt-5 text-2xl md:text-3xl font-bold text-neutral-900">
              A premium read for fresh dentists & students.
            </h3>

            <p className="mt-3 text-neutral-600 leading-relaxed">
              A focused book that shares the mindset shifts, chairside realities, and practical
              decisions that shape the first phase of a dentist’s career—without fluff.
            </p>

            <div className="mt-6 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5">
              <h4 className="text-sm font-bold text-neutral-900">Highlights</h4>
              <div className="mt-3 grid sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-blue-100 text-sm">
                    💬
                  </span>
                  <p className="text-sm text-neutral-700">Patient communication that builds trust</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-blue-100 text-sm">
                    🦷
                  </span>
                  <p className="text-sm text-neutral-700">Chairside confidence in real cases</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-blue-100 text-sm">
                    🧠
                  </span>
                  <p className="text-sm text-neutral-700">Mindset shifts from fresher to clinician</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-blue-100 text-sm">
                    ✅
                  </span>
                  <p className="text-sm text-neutral-700">Short lessons with clear takeaways</p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-blue-100 bg-white p-5">
                <h4 className="text-sm font-bold text-neutral-900">Who it’s for</h4>
                <p className="mt-1 text-sm text-neutral-600">
                  Fresher dentists, interns, final-year students, and early-career clinicians.
                </p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-white p-5">
                <h4 className="text-sm font-bold text-neutral-900">Inside the chapters</h4>
                <p className="mt-1 text-sm text-neutral-600">
                  First patients, difficult conversations, building trust, and learning from mistakes.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
              <div className="text-sm text-neutral-600">
                <span className="font-semibold text-neutral-900">Status:</span> Coming soon
              </div>
              <button
                type="button"
                className="inline-flex justify-center rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-shadow"
                aria-label="Book launching soon"
                disabled
              >
                Launching Soon
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
