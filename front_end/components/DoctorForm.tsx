// components/DoctorForm.tsx

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { addDoctor, editDoctor } from "@/modules/doctoractions";
import { GET_ALL_CLINICS, GET_ALL_SPECIALITIES } from "@/lib/constants";
import FormButton from "./ui/FormButton";
import Alert from "./ui/Alert";

interface DoctorFormProps {
  initialData?: {
    id?: number;
    firstName: string;
    lastName: string;
    clinicId: number;
    specialityId: number;
  };
  mode: "add" | "edit";
}

export default function DoctorForm({ initialData, mode }: DoctorFormProps) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    id: initialData?.id ?? 0,
    firstName: initialData?.firstName ?? "",
    lastName: initialData?.lastName ?? "",
    clinicId: initialData?.clinicId?.toString() ?? "",
    specialityId: initialData?.specialityId?.toString() ?? "",
  });

  const [clinics, setClinics] = useState<{ id: number; name: string }[]>([]);
  const [specialities, setSpecialities] = useState<
    { id: number; name: string }[]
  >([]);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const [clinicRes, specialityRes] = await Promise.all([
          fetch(GET_ALL_CLINICS),
          fetch(GET_ALL_SPECIALITIES),
        ]);

        const clinicData = await clinicRes.json();
        const specialityData = await specialityRes.json();

        setClinics(clinicData.clinics || []);
        setSpecialities(specialityData.specialities || []);
      } catch (error) {
        console.error("Failed to fetch dropdown data", error);
      }
    }

    fetchData();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.clinicId || !formData.specialityId) {
      setAlertMessage("Please select both a clinic and a speciality.");
      return;
    }

    try {
      const payload = {
        id: formData.id,
        firstName: formData.firstName,
        lastName: formData.lastName,
        clinicId: Number(formData.clinicId),
        specialityId: Number(formData.specialityId),
      };

      if (mode === "add") {
        await addDoctor(payload);
        setAlertMessage("Doctor added successfully!");
      } else {
        await editDoctor(payload);
        setAlertMessage("Doctor updated successfully!");
      }

      setTimeout(() => {
        router.push("/admin/doctors");
        router.refresh();
      }, 1500);
    } catch (error) {
      setAlertMessage("Error submitting the form.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-secondary-light p-8 rounded-lg shadow-md"
    >
      <h1 className="text-2xl font-bold mb-6">
        {mode === "add" ? "Add New Doctor" : "Edit Doctor"}
      </h1>

      {alertMessage && <Alert message={alertMessage} type="error" />}

      <div className="flex flex-col gap-4 mb-6">
        <label className="font-semibold">First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="p-2 rounded border"
        />

        <label className="font-semibold">Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="p-2 rounded border"
        />

        <label className="font-semibold">Clinic:</label>
        <select
          name="clinicId"
          value={formData.clinicId}
          onChange={handleChange}
          required
          className="p-2 rounded border"
        >
          <option value="" disabled>
            Select a clinic
          </option>
          {clinics.map((clinic) => (
            <option key={clinic.id} value={clinic.id}>
              {clinic.name}
            </option>
          ))}
        </select>

        <label className="font-semibold">Speciality:</label>
        <select
          name="specialityId"
          value={formData.specialityId}
          onChange={handleChange}
          required
          className="p-2 rounded border"
        >
          <option value="" disabled>
            Select a speciality
          </option>
          {specialities.map((spec) => (
            <option key={spec.id} value={spec.id}>
              {spec.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-4">
        <FormButton
          type="submit"
          text={mode === "add" ? "Add Doctor" : "Update Doctor"}
          color="primary"
        />
        <FormButton
          type="button"
          text="Cancel"
          color="secondary"
          onClick={() => router.push("/admin/doctors")}
        />
      </div>
    </form>
  );
}
