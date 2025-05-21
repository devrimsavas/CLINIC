// app/admin/doctors/page.tsx

import AdminList from "@components/AdminList";
import { GET_ALL_DOCTORS } from "@/lib/constants";
import { deleteDoctor } from "@/modules/doctoractions";

export default async function AdminDoctorsPage() {
  const res = await fetch(GET_ALL_DOCTORS, { cache: "no-store" });
  const data = await res.json();
  const doctors = data.doctors || [];

  return (
    <AdminList
      title="Doctors"
      addHref="/admin/doctors/add"
      editHrefPrefix="/admin/doctors/edit"
      items={doctors}
      onDelete={deleteDoctor}
      columns={[
        { label: "First Name", key: "firstName" },
        { label: "Last Name", key: "lastName" },
        { label: "Clinic", key: "clinicName" },
        { label: "Speciality", key: "specialityName" },
      ]}
    />
  );
}