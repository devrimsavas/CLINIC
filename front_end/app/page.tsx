//main page
//BookingAppointmentPage

"use client";

import AppointmentForm from "@/components/AppointmentForm";
import BookingRules from "@/components/BookingRules";
import CurrentDateTime from "@/components/CurrentDateTime";
import { CalendarPlus } from "lucide-react";

export default function BookingAppointmentPage() {
  return (
    <section className="max-w-6xl mx-auto w-full px-4 md:px-6">
      {/* Header */}
      <div className="mb-10 text-center">
        <div className="flex justify-center items-center gap-3 mb-2">
          <CalendarPlus className="text-primary w-7 h-7" />
          <h1 className="text-4xl font-bold text-primary">
            Book an Appointment
          </h1>
        </div>
        <p className="text-lg md:text-xl text-text-muted">
          Review clinic rules and current availability before filling out the
          form.
        </p>

        {/* Blue line separator */}
        <div className="w-3/4 md:w-1/2 h-1 bg-primary mx-auto rounded-full mt-4" />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left: Form (2/3 width) */}
        <div className="lg:col-span-2 flex flex-col justify-start">
          <div className="mt-0">
            <AppointmentForm />
          </div>
        </div>

        {/* Right: Info stack (BookingRules + CurrentDateTime) */}
        <div className="flex flex-col justify-start space-y-4">
          <BookingRules />
          <CurrentDateTime />
        </div>
      </div>
    </section>
  );
}
