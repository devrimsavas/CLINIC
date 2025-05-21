// app/admin/appointments/page.tsx

import AdminList from "@/components/AdminList";
import { API_GET_ALL_APPOINTMENTS } from "@/lib/constants";
import { deleteAppointment } from "@/modules/appointmentactions";

interface Appointment {
  id: number;
  appointmentDateTime: string;
  category: string;
  patientName: string;
  doctorName: string;
  clinicName: string;
  durationInMinutes: number;
}

export default async function AdminAppointmentsPage() {
  const res = await fetch(API_GET_ALL_APPOINTMENTS, { cache: "no-store" });
  const data = await res.json();
  const appointments: Appointment[] = data.appointments || [];

  return (
    <AdminList
      title="Appointments"
      addHref="/admin/appointments/add"
      editHrefPrefix="/admin/appointments/edit"
      items={appointments}
      onDelete={deleteAppointment}
      columns={[
        { label: "Date", key: "appointmentDateTime" },
        { label: "Category", key: "category" },
        { label: "Patient", key: "patientName" },
        { label: "Doctor", key: "doctorName" },
        { label: "Clinic", key: "clinicName" },
        { label: "Duration", key: "durationInMinutes" },
      ]}
    />
  );
}
