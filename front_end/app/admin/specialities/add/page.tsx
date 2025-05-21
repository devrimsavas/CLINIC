// app/admin/specialities/add/page.tsx

import SpecialityForm from "@/components/SpecialityForm";

export default function AddSpecialityPage() {
  return (
    <section className="mt-10">
      <SpecialityForm mode="add" />
    </section>
  );
}
