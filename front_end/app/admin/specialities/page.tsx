// app/admin/specialities/page.tsx

import AdminList from "@/components/AdminList";
import { GET_ALL_SPECIALITIES } from "@/lib/constants";
import { deleteSpeciality } from "@/modules/specialityactions";

export default async function AdminSpecialitiesPage() {
  const res = await fetch(GET_ALL_SPECIALITIES, { cache: "no-store" });
  const data = await res.json();
  const specialities = data.specialities || [];

  return (
    <section className="w-full max-w-5xl mx-auto mt-10">
      <AdminList
        title="Specialities"
        addHref="/admin/specialities/add"
        editHrefPrefix="/admin/specialities/edit"
        items={specialities}
        onDelete={deleteSpeciality}
        columns={[{ label: "Speciality Name", key: "name" }]}
      />
    </section>
  );
}
