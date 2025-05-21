// app/admin/clinics/add/page.tsx

import ClinicForm from "@/components/ClinicForm";

export default function AddClinicPage() {
  return (
    <section className="mt-10">
      <ClinicForm mode="add" />
    </section>
  );
}
