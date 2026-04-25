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
            New Book
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
              Available Now
            </div>

            <h3 className="mt-5 text-2xl md:text-3xl font-bold text-neutral-900 leading-[1.3] pr-2">
              A heartfelt, practical guide for fresh dentists & students.
            </h3>

            <p className="mt-3 text-neutral-600 leading-relaxed max-w-lg">
              Written by a fellow clinician, this guide tackles unspoken realities no textbook covers—from &ldquo;no scope&rdquo; anxieties and shaky hands to imposter syndrome—offering a genuine roadmap to true clinical confidence.
            </p>

            <div className="mt-5 w-full">
              <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <h4 className="text-sm font-bold text-neutral-900">Inside the chapters</h4>
                <p className="mt-1.5 text-sm text-neutral-600 leading-relaxed">
                  First patients, understanding clinical scope, choosing your true path, building patient trust, and learning from early mistakes.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="https://www.amazon.in/dp/9376868498"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden w-full inline-flex items-center justify-center rounded-xl bg-white border border-blue-200 px-6 py-3 text-sm font-semibold text-blue-700 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-blue-200/50 hover:bg-blue-50 hover:-translate-y-0.5 hover:ring-2 hover:ring-blue-200/50"
                aria-label="Buy on Amazon"
              >
                <span className="absolute inset-0 w-full h-full -left-[100%] bg-gradient-to-r from-transparent via-blue-200/50 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out -skew-x-12" />
                <span className="relative flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="currentColor" className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <path d="M10.813 11.968c.157.083.36.074.5-.05l.005.005a90 90 0 0 1 1.623-1.405c.173-.143.143-.372.006-.563l-.125-.17c-.345-.465-.673-.906-.673-1.791v-3.3l.001-.335c.008-1.265.014-2.421-.933-3.305C10.404.274 9.06 0 8.03 0 6.017 0 3.77.75 3.296 3.24c-.047.264.143.404.316.443l2.054.22c.19-.009.33-.196.366-.387.176-.857.896-1.271 1.703-1.271.435 0 .929.16 1.188.55.264.39.26.91.257 1.376v.432q-.3.033-.621.065c-1.113.114-2.397.246-3.36.67C3.873 5.91 2.94 7.08 2.94 8.798c0 2.2 1.387 3.298 3.168 3.298 1.506 0 2.328-.354 3.489-1.54l.167.246c.274.405.456.675 1.047 1.166ZM6.03 8.431C6.03 6.627 7.647 6.3 9.177 6.3v.57c.001.776.002 1.434-.396 2.133-.336.595-.87.961-1.465.961-.812 0-1.286-.619-1.286-1.533M.435 12.174c2.629 1.603 6.698 4.084 13.183.997.28-.116.475.078.199.431C13.538 13.96 11.312 16 7.57 16 3.832 16 .968 13.446.094 12.386c-.24-.275.036-.4.199-.299z"/>
                    <path d="M13.828 11.943c.567-.07 1.468-.027 1.645.204.135.176-.004.966-.233 1.533-.23.563-.572.961-.762 1.115s-.333.094-.23-.137c.105-.23.684-1.663.455-1.963-.213-.278-1.177-.177-1.625-.13l-.09.009q-.142.013-.233.024c-.193.021-.245.027-.274-.032-.074-.209.779-.556 1.347-.623"/>
                  </svg>
                  Amazon
                </span>
              </a>

              <a
                href="https://www.flipkart.com/product/p/itme?pid=9789376868490"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden w-full inline-flex items-center justify-center rounded-xl bg-white border border-blue-200 px-6 py-3 text-sm font-semibold text-blue-700 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-blue-200/50 hover:bg-blue-50 hover:-translate-y-0.5 hover:ring-2 hover:ring-blue-200/50"
                aria-label="Buy on Flipkart"
              >
                <span className="absolute inset-0 w-full h-full -left-[100%] bg-gradient-to-r from-transparent via-blue-200/50 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out -skew-x-12" />
                <span className="relative flex items-center gap-2">
                  {/* Filled Shopping Cart */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-1">
                    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                  </svg>
                  Flipkart
                </span>
              </a>

              <a
                href="https://astitvaprakashan.com/?post_type=product&p=10212&preview=true"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden w-full inline-flex items-center justify-center rounded-xl bg-white border border-blue-200 px-6 py-3 text-sm font-semibold text-blue-700 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-blue-200/50 hover:bg-blue-50 hover:-translate-y-0.5 hover:ring-2 hover:ring-blue-200/50"
                aria-label="Buy on Astitva Store"
              >
                <span className="absolute inset-0 w-full h-full -left-[100%] bg-gradient-to-r from-transparent via-blue-200/50 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out -skew-x-12" />
                <span className="relative flex items-center gap-2">
                  {/* Filled Shopping Bag */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-300 group-hover:scale-110">
                    <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3z"/>
                  </svg>
                  Astitva Store
                </span>
              </a>

              <a
                href="https://classicshelf.in/products/extract-learning-dentistry-discovering-self"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden w-full inline-flex items-center justify-center rounded-xl bg-white border border-blue-200 px-6 py-3 text-sm font-semibold text-blue-700 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-blue-200/50 hover:bg-blue-50 hover:-translate-y-0.5 hover:ring-2 hover:ring-blue-200/50"
                aria-label="Buy on Classic Shelf"
              >
                <span className="absolute inset-0 w-full h-full -left-[100%] bg-gradient-to-r from-transparent via-blue-200/50 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out -skew-x-12" />
                <span className="relative flex items-center gap-2">
                  {/* Filled Bookmark/Book */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-300 group-hover:scale-110">
                    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
                  </svg>
                  Classic Shelf
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
