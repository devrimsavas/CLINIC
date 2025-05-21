"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { addClinic, editClinic } from "@/modules/clinicactions";
import FormButton from "./ui/FormButton";
import Alert from "./ui/Alert";

interface ClinicFormProps {
  initialData?: {
    id?: number;
    name: string;
    address: string;
  };
  mode: "add" | "edit";
}

export default function ClinicForm({ initialData, mode }: ClinicFormProps) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    id: 0,
    name: "",
    address: "",
  });

  const [alertMessage, setAlertMessage] = useState("");

  //  Populate form data when editing
  useEffect(() => {
    if (initialData) {
      setFormData({
        id: initialData.id ?? 0,
        name: initialData.name ?? "",
        address: initialData.address ?? "",
      });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (mode === "add") {
        await addClinic({ name: formData.name, address: formData.address });
        setAlertMessage("Clinic added successfully!");
      } else {
        await editClinic({
          id: formData.id,
          name: formData.name,
          address: formData.address,
        });
        setAlertMessage("Clinic updated successfully!");
      }

      setTimeout(() => {
        router.push("/admin/clinics");
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
        {mode === "add" ? "Add New Clinic" : "Edit Clinic"}
      </h1>

      {alertMessage && <Alert message={alertMessage} />}

      <div className="flex flex-col gap-4 mb-6">
        <label className="font-semibold">Clinic Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-2 rounded border"
        />

        <label className="font-semibold">Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="p-2 rounded border"
        />
      </div>

      <div className="flex gap-4">
        <FormButton
          type="submit"
          text={mode === "add" ? "Add Clinic" : "Update Clinic"}
          color="primary"
        />
        <FormButton
          type="button"
          text="Cancel"
          color="secondary"
          onClick={() => router.push("/admin/clinics")}
        />
      </div>
    </form>
  );
}
