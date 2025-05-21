// app/admin/doctors/edit/[id]/page.tsx

import DoctorForm from "@/components/DoctorForm";
import { GET_DOCTOR_BY_ID } from "@/lib/constants";

interface Doctor {
  id: number;
  firstName: string;
  lastName: string;
  clinicId: number;
  specialityId: number;
}

async function getDoctor(id: number): Promise<Doctor> {
  const res = await fetch(GET_DOCTOR_BY_ID(id), { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch doctor");
  }

  const data = await res.json();
  return data.doctor; //   the API returns { doctor: { ... } }?? check later
}

export default async function EditDoctorPage({
  params,
}: {
  params: { id: string };
}) {
  const doctorId = Number(params.id);
  const doctor = await getDoctor(doctorId);

  return (
    <section className="mt-10">
      <DoctorForm
        key={doctor.id}
        mode="edit"
        initialData={{
          id: doctor.id,
          firstName: doctor.firstName,
          lastName: doctor.lastName,
          clinicId: doctor.clinicId,
          specialityId: doctor.specialityId,
        }}
      />
    </section>
  );
}
