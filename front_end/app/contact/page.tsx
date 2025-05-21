// app/contact/page.tsx

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

        <form className="space-y-6">
          <div>
            <label className="form-label">Your Name</label>
            <input type="text" placeholder="John Doe" className="input-field" />
          </div>

          <div>
            <label className="form-label">Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="input-field"
            />
          </div>

          <div>
            <label className="form-label">Message</label>
            <textarea
              rows={5}
              placeholder="Write your message here..."
              className="input-field resize-none"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2 rounded bg-primary-dark text-white font-semibold hover:bg-primary-light transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
