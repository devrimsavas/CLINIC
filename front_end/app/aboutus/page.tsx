// app/aboutus/page.tsx

import AboutUsImage from "@/components/AboutUsImage";

export default function AboutUsPage() {
  return (
    <section className="relative w-full overflow-hidden bg-white pb-16 px-4 sm:px-6 lg:px-8 shadow-lg rounded-xl">
      {/* Decorative Top Image */}
      <AboutUsImage />

      {/* Content Wrapper with padding to offset image */}
      <div className="relative z-10 max-w-4xl mx-auto text-center pt-[320px] md:pt-[520px] lg:pt-[560px]">
        <h1 className="text-4xl font-bold text-primary mb-6">
          About NovaMed Group
        </h1>
        <p className="text-lg text-text-muted mb-10 leading-relaxed">
          At NovaMed Group, our mission is to provide high-quality,
          patient-centered care through innovative technology and compassionate
          professionals.
        </p>

        <div className="space-y-8 text-left text-text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">
              Who We Are
            </h2>
            <p>
              NovaMed is a forward-thinking medical group dedicated to
              simplifying the healthcare experience. We partner with clinics and
              specialists to help patients easily find and manage their
              appointments online.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">
              What We Do
            </h2>
            <p>
              Our platform allows patients to seamlessly book appointments,
              access clinic information, and connect with doctors across
              multiple specialties — all from one place.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">
              Why Choose Us?
            </h2>
            <ul className="list-disc pl-6 text-sm text-text-muted">
              <li>Easy and secure online appointment booking</li>
              <li>Verified clinics and certified healthcare professionals</li>
              <li>Reliable reminders and schedule tracking</li>
              <li>Commitment to patient data privacy and care quality</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-2">
              Get in Touch
            </h2>
            <p>
              Have questions or feedback? Contact our support team at{" "}
              <a
                href="mailto:support@novamed.com"
                className="text-primary underline"
              >
                support@novamed.com
              </a>
              .
            </p>
          </section>
        </div>

        <p className="mt-12 text-sm text-text-muted italic text-center">
          Empowering care, one appointment at a time.
        </p>
      </div>
    </section>
  );
}
