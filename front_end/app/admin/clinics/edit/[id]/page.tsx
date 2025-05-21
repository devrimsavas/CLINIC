// app/admin/clinics/edit/[id]/page.tsx

import ClinicForm from "@/components/ClinicForm";
import { GET_CLINIC } from "@/lib/constants";

interface Clinic {
  id: number;
  name: string;
  address: string;
}

async function getClinic(id: number): Promise<Clinic> {
  const res = await fetch(GET_CLINIC(id), { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch clinic");
  }

  const data = await res.json();
  return data.clinic;
}

export default async function EditClinicPage({
  params,
}: {
  params: { id: string };
}) {
  const clinicId = Number(params.id);
  const clinic = await getClinic(clinicId);
  //debug
  console.log("this is edit line", clinic.address);

  return (
    <section className="mt-10">
      <ClinicForm
        key={clinic.id} //
        mode="edit"
        initialData={{
          id: clinic.id,
          name: clinic.name,
          address: clinic.address,
        }}
      />
    </section>
  );
}
