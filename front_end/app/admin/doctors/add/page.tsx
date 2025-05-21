// app/admin/doctors/add/page.tsx

import DoctorForm from "@/components/DoctorForm";

export default function AddDoctorPage() {
  return (
    <section className="mt-10">
      <DoctorForm mode="add" />
    </section>
  );
}
