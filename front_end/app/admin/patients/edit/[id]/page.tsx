// app/admin/patients/edit/[id]/page.tsx

import PatientForm from "@/components/PatientForm";
import { GET_PATIENT } from "@/lib/constants";

interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  gender: string;
}

async function getPatient(id: number): Promise<Patient> {
  const res = await fetch(GET_PATIENT(id), { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch patient");
  }

  const data = await res.json();
  return data.patient; // assuming backend returns { patient: {...} }
}

export default async function EditPatientPage({
  params,
}: {
  params: { id: string };
}) {
  const patientId = Number(params.id);
  const patient = await getPatient(patientId);

  return (
    <section className="mt-10">
      <PatientForm
        key={patient.id}
        mode="edit"
        initialData={{
          id: patient.id,
          firstName: patient.firstName,
          lastName: patient.lastName,
          email: patient.email,
          birthDate: patient.birthDate,
          gender: patient.gender,
        }}
      />
    </section>
  );
}
