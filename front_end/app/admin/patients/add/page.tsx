// app/admin/patients/add/page.tsx

import PatientForm from "@/components/PatientForm";

export default function AddPatientPage() {
  return (
    <section className="mt-10">
      <PatientForm mode="add" />
    </section>
  );
}
