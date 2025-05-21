// app/admin/appointments/add/page.tsx

import AdminAppointmentForm from "@/components/AdminAppointmentForm";

export default function AddAppointmentPage() {
  return (
    <section className="mt-10">
      <AdminAppointmentForm mode="add" />
    </section>
  );
}
