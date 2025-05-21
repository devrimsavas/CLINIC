// components/AdminAppointmentForm.tsx

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import FormButton from "@/components/ui/FormButton";
import Alert from "@/components/ui/Alert";
import {
  API_CREATE_APPOINTMENT,
  API_UPDATE_APPOINTMENT,
  GET_ALL_DOCTORS,
  GET_ALL_PATIENTS,
  GET_ALL_CLINICS,
} from "@/lib/constants";

interface AppointmentFormProps {
  mode: "add" | "edit";
  initialData?: {
    id: number;
    appointmentDateTime: string;
    category: string;
    patientId: number;
    doctorId: number;
    clinicId: number;
    durationInMinutes: number;
  };
}

export default function AdminAppointmentForm({
  mode,
  initialData,
}: AppointmentFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    id: initialData?.id || 0,
    appointmentDateTime: initialData?.appointmentDateTime || "",
    category: initialData?.category || "",
    patientId: initialData?.patientId || 0,
    doctorId: initialData?.doctorId || 0,
    clinicId: initialData?.clinicId || 0,
    durationInMinutes: initialData?.durationInMinutes || 0,
  });

  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [clinics, setClinics] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    async function fetchDropdowns() {
      const [p, d, c] = await Promise.all([
        fetch(GET_ALL_PATIENTS).then((res) => res.json()),
        fetch(GET_ALL_DOCTORS).then((res) => res.json()),
        fetch(GET_ALL_CLINICS).then((res) => res.json()),
      ]);

      setPatients(p.patients || []);
      setDoctors(d.doctors || []);
      setClinics(c.clinics || []);
    }

    fetchDropdowns();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name.includes("Id") || name === "durationInMinutes"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const url =
      mode === "add"
        ? API_CREATE_APPOINTMENT
        : `${API_UPDATE_APPOINTMENT}/${formData.id}`;

    const res = await fetch(url, {
      method: mode === "add" ? "POST" : "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setAlertMessage(
        `Appointment ${mode === "add" ? "added" : "updated"} successfully!`
      );
      setTimeout(() => {
        router.push("/admin/appointments");
        router.refresh();
      }, 1500);
    } else {
      const err = await res.json();
      setAlertMessage(err.message || "Failed to submit.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-secondary-light p-8 rounded-lg shadow-md"
    >
      <h1 className="text-2xl font-bold mb-6">
        {mode === "add" ? "Add Appointment" : "Edit Appointment"}
      </h1>

      {alertMessage && <Alert message={alertMessage} />}

      <div className="flex flex-col gap-4 mb-6">
        <label>Date & Time:</label>
        <input
          type="datetime-local"
          name="appointmentDateTime"
          value={formData.appointmentDateTime}
          onChange={handleChange}
          className="p-2 rounded border"
          required
        />

        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="p-2 rounded border"
          required
        />

        <label>Patient:</label>
        <select
          name="patientId"
          value={formData.patientId}
          onChange={handleChange}
          className="p-2 rounded border"
          required
        >
          <option value="" disabled>
            Select patient
          </option>
          {patients.map((p: any) => (
            <option key={p.id} value={p.id}>
              {p.firstName} {p.lastName}
            </option>
          ))}
        </select>

        <label>Doctor:</label>
        <select
          name="doctorId"
          value={formData.doctorId}
          onChange={handleChange}
          className="p-2 rounded border"
          required
        >
          <option value="" disabled>
            Select doctor
          </option>
          {doctors.map((d: any) => (
            <option key={d.id} value={d.id}>
              {d.firstName} {d.lastName}
            </option>
          ))}
        </select>

        <label>Clinic:</label>
        <select
          name="clinicId"
          value={formData.clinicId}
          onChange={handleChange}
          className="p-2 rounded border"
          required
        >
          <option value="" disabled>
            Select clinic
          </option>
          {clinics.map((c: any) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>

        <label>Duration (minutes):</label>
        <input
          type="number"
          name="durationInMinutes"
          value={formData.durationInMinutes}
          onChange={handleChange}
          className="p-2 rounded border"
          min={0}
          required
        />
      </div>

      <div className="flex gap-4">
        <FormButton
          type="submit"
          text={mode === "add" ? "Add Appointment" : "Update Appointment"}
          color="primary"
        />
        <FormButton
          type="button"
          text="Cancel"
          color="secondary"
          onClick={() => router.push("/admin/appointments")}
        />
      </div>
    </form>
  );
}
