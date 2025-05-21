// app/admin/patients/page.tsx

import AdminList from "@/components/AdminList";
import { GET_ALL_PATIENTS } from "@/lib/constants";
import { deletePatient } from "@/modules/patientactions";

interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  gender: string;
}

export default async function AdminPatientsPage() {
  const res = await fetch(GET_ALL_PATIENTS, { cache: "no-store" });
  const data = await res.json();

  const patients = (data.patients || []).map((p: Patient) => ({
    ...p,
    birthDate: p.birthDate?.split("T")[0] ?? "", // strip time
  }));

  return (
    <AdminList
      title="Patients"
      addHref="/admin/patients/add"
      editHrefPrefix="/admin/patients/edit"
      items={patients}
      onDelete={deletePatient}
      columns={[
        { label: "First Name", key: "firstName" },
        { label: "Last Name", key: "lastName" },
        { label: "Email", key: "email" },
        { label: "Birth Date", key: "birthDate" },
        { label: "Gender", key: "gender" },
      ]}
    />
  );
}
