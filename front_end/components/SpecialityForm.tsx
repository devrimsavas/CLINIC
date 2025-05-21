// components/SpecialityForm.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addSpeciality, editSpeciality } from "@/modules/specialityactions";
import Alert from "@/components/ui/Alert";
import FormButton from "@/components/ui/FormButton";

interface SpecialityFormProps {
  initialData?: {
    id?: number;
    name: string;
  };
  mode: "add" | "edit";
}

export default function SpecialityForm({
  initialData,
  mode,
}: SpecialityFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    id: initialData?.id || 0,
    name: initialData?.name || "",
  });
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (mode === "add") {
        await addSpeciality({ name: formData.name });
        setAlertMessage("Speciality added successfully!");
      } else {
        await editSpeciality({ id: formData.id, name: formData.name });
        setAlertMessage("Speciality updated successfully!");
      }

      setTimeout(() => {
        router.push("/admin/specialities");
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
        {mode === "add" ? "Add New Speciality" : "Edit Speciality"}
      </h1>

      {alertMessage && <Alert message={alertMessage} />}

      <div className="flex flex-col gap-4 mb-6">
        <label className="font-semibold">Speciality Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-2 rounded border"
        />
      </div>

      <div className="flex gap-4">
        <FormButton
          type="submit"
          text={mode === "add" ? "Add Speciality" : "Update Speciality"}
          color="primary"
        />
        <FormButton
          type="button"
          text="Cancel"
          color="secondary"
          onClick={() => router.push("/admin/specialities")}
        />
      </div>
    </form>
  );
}
