// app/contact/page.tsx

import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="relative w-full min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow-md border border-border">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">
          Contact Us
        </h1>

        <p className="text-base text-text-muted mb-8 text-center">
          Have a question or need help? Fill out the form below and we’ll get
          back to you.
        </p>

        <ContactForm />
      </div>
    </section>
  );
}
