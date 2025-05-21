//components/ContactForm.tsx

"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // TODO: Send data to backend or email service
    setForm({ name: "", email: "", message: "" }); // clear form
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="form-label">Your Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="John Doe"
          className="input-field"
          required
        />
      </div>

      <div>
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className="input-field"
          required
        />
      </div>

      <div>
        <label className="form-label">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Write your message here..."
          className="input-field resize-none"
          required
        />
      </div>

      <button
        type="submit"
        className="px-6 py-2 rounded bg-primary-dark text-white font-semibold hover:bg-primary-light transition"
      >
        Send Message
      </button>
    </form>
  );
}
