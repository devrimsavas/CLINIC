// components/PatientForm.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addPatient, editPatient } from "@/modules/patientactions";
import FormButton from "./ui/FormButton";
import Alert from "./ui/Alert";

interface PatientFormProps {
  initialData?: {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: string;
    gender: string;
  };
  mode: "add" | "edit";
}

export default function PatientForm({ initialData, mode }: PatientFormProps) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    id: initialData?.id ?? 0,
    firstName: initialData?.firstName ?? "",
    lastName: initialData?.lastName ?? "",
    email: initialData?.email ?? "",
    birthDate: initialData?.birthDate ?? "",
    gender: initialData?.gender ?? "Male",
  });

  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (mode === "add") {
        await addPatient(formData);
        setAlertMessage("Patient added successfully!");
      } else {
        await editPatient(formData);
        setAlertMessage("Patient updated successfully!");
      }

      setTimeout(() => {
        router.push("/admin/patients");
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
        {mode === "add" ? "Add New Patient" : "Edit Patient"}
      </h1>

      {alertMessage && <Alert message={alertMessage} />}

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

        <label className="font-semibold">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-2 rounded border"
        />

        <label className="font-semibold">Birth Date:</label>
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate.slice(0, 10)}
          onChange={handleChange}
          required
          className="p-2 rounded border"
        />

        <label className="font-semibold">Gender:</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          className="p-2 rounded border"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Prefer not to say">Prefer not to say</option>
        </select>
      </div>

      <div className="flex gap-4">
        <FormButton
          type="submit"
          text={mode === "add" ? "Add Patient" : "Update Patient"}
          color="primary"
        />
        <FormButton
          type="button"
          text="Cancel"
          color="secondary"
          onClick={() => router.push("/admin/patients")}
        />
      </div>
    </form>
  );
}
