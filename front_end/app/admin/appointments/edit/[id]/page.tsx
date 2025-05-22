// app/admin/appointments/edit/[id]/page.tsx

import AdminAppointmentForm from "@/components/AdminAppointmentForm";
import {
  API_GET_APPOINTMENT_BY_ID,
  GET_ALL_PATIENTS,
  GET_ALL_DOCTORS,
  GET_ALL_CLINICS,
} from "@/lib/constants";

async function getData(id: number) {
  const [apptRes, patientsRes, doctorsRes, clinicsRes] = await Promise.all([
    fetch(API_GET_APPOINTMENT_BY_ID(id), { cache: "no-store" }),
    fetch(GET_ALL_PATIENTS),
    fetch(GET_ALL_DOCTORS),
    fetch(GET_ALL_CLINICS),
  ]);

  if (!apptRes.ok) throw new Error("Failed to fetch appointment");
  const appointmentData = await apptRes.json();
  const appointment = appointmentData.appointment;

  const patients = (await patientsRes.json()).patients;
  const doctors = (await doctorsRes.json()).doctors;
  const clinics = (await clinicsRes.json()).clinics;

  const matchedPatient = patients.find(
    (p: any) => `${p.firstName} ${p.lastName}` === appointment.patientName
  );
  const matchedDoctor = doctors.find(
    (d: any) => `${d.firstName} ${d.lastName}` === appointment.doctorName
  );
  const matchedClinic = clinics.find(
    (c: any) => c.name === appointment.clinicName
  );

  return {
    id: appointment.id,
    appointmentDateTime: appointment.appointmentDateTime,
    category: appointment.category,
    patientId: matchedPatient?.id || 0,
    doctorId: matchedDoctor?.id || 0,
    clinicId: matchedClinic?.id || 0,
    durationInMinutes: appointment.durationInMinutes,
  };
}

export default async function EditAppointmentPage({
  params,
}: {
  params: { id: string };
}) {
  const initialData = await getData(Number(params.id));

  return (
    <section className="mt-10">
      <AdminAppointmentForm mode="edit" initialData={initialData} />
    </section>
  );
}
