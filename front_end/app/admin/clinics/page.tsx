// app/admin/clinics/page.tsx

import AdminList from "@components/AdminList";
import { GET_ALL_CLINICS } from "@/lib/constants";
import { deleteClinic } from "@/modules/clinicactions";

export default async function AdminClinicsPage() {
  const res = await fetch(GET_ALL_CLINICS, { cache: "no-store" });
  const data = await res.json();
  const clinics = data.clinics || [];

  return (
    <AdminList
      title="Clinics"
      addHref="/admin/clinics/add"
      editHrefPrefix="/admin/clinics/edit"
      items={clinics}
      onDelete={deleteClinic}
      columns={[
        { label: "Clinic Name", key: "name" },
        { label: "Address", key: "address" },
      ]}
    />
  );
}
