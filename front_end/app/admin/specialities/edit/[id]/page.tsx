// app/admin/specialities/edit/[id]/page.tsx

import SpecialityForm from "@/components/SpecialityForm";
import { GET_SPECIALITY_BY_ID } from "@/lib/constants";

interface Speciality {
  id: number;
  name: string;
}

async function getSpeciality(id: number): Promise<Speciality> {
  const res = await fetch(GET_SPECIALITY_BY_ID(id), { cache: "no-store" });

  if (!res.ok) throw new Error("Failed to fetch speciality");

  const data = await res.json();
  return data.speciality;
}

export default async function EditSpecialityPage({
  params,
}: {
  params: { id: string };
}) {
  const specialityId = Number(params.id);
  const speciality = await getSpeciality(specialityId);

  return (
    <section className="mt-10">
      <SpecialityForm
        mode="edit"
        initialData={{
          id: speciality.id,
          name: speciality.name,
        }}
      />
    </section>
  );
}
