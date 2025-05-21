//BookingRules.tsx
// let say patient can only get appointment between 8-18 and not before today's date(fix it in backend)
"use client";

"use client";

import { CalendarClock, AlarmClock, Info } from "lucide-react";

const BookingRules = () => {
  return (
    <div className="bg-primary-light/10 border border-primary-light p-6 rounded-lg shadow-sm max-w-3xl mx-auto mb-6">
      <div className="flex items-center gap-2 mb-3">
        <CalendarClock className="text-primary w-6 h-6" />
        <h3 className="text-xl font-semibold text-primary">Booking Rules</h3>
      </div>
      <ul className="list-disc pl-6 text-text-base space-y-2">
        <li className="flex items-start gap-2">
          <Info className="mt-1 text-primary w-5 h-5" />
          Appointments cannot be booked for past dates.
        </li>
        <li className="flex items-start gap-2">
          <AlarmClock className="mt-1 text-primary w-5 h-5" />
          All bookings must be during working hours:{" "}
          <strong>08:00 – 18:00</strong>.
        </li>
        <li className="flex items-start gap-2">
          <Info className="mt-1 text-primary w-5 h-5" />
          Please choose a doctor and clinic before submitting your appointment.
        </li>
      </ul>
    </div>
  );
};

export default BookingRules;
