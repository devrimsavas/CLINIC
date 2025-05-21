// app/admin/appointments/edit/[id]/page.tsx

import AdminAppointmentForm from "@/components/AdminAppointmentForm";
import { API_GET_APPOINTMENT_BY_ID } from "@/lib/constants";

async function getAppointment(id: number) {
  const res = await fetch(API_GET_APPOINTMENT_BY_ID(id), { cache: "no-store" });

  if (!res.ok) throw new Error("Failed to fetch appointment");

  const data = await res.json();
  return data.appointment;
}

export default async function EditAppointmentPage({
  params,
}: {
  params: { id: string };
}) {
  const appointment = await getAppointment(Number(params.id));

  return (
    <section className="mt-10">
      <AdminAppointmentForm
        mode="edit"
        initialData={{
          id: appointment.id,
          appointmentDateTime: appointment.appointmentDateTime,
          category: appointment.category,
          patientId: appointment.patientId,
          doctorId: appointment.doctorId,
          clinicId: appointment.clinicId,
          durationInMinutes: appointment.durationInMinutes,
        }}
      />
    </section>
  );
}
