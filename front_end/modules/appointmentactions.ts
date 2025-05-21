// modules/appointmentactions.ts

"use client";

import {
  API_GET_ALL_APPOINTMENTS,
  API_CREATE_APPOINTMENT,
  API_UPDATE_APPOINTMENT,
  API_DELETE_APPOINTMENT,
  API_GET_APPOINTMENT_BY_ID,
} from "@/lib/constants";

// Add appointment
export async function addAppointment(data: {
  appointmentDateTime: string;
  category: string;
  patientId: number;
  doctorId: number;
  clinicId: number;
  durationInMinutes: number;
}) {
  const res = await fetch(API_CREATE_APPOINTMENT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create appointment");
  return await res.json();
}

// Edit appointment
export async function editAppointment(data: {
  id: number;
  appointmentDateTime: string;
  category: string;
  patientId: number;
  doctorId: number;
  clinicId: number;
  durationInMinutes: number;
}) {
  const res = await fetch(`${API_UPDATE_APPOINTMENT}/${data.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update appointment");
  return await res.json();
}

// Delete appointment
export async function deleteAppointment(id: number) {
  const res = await fetch(API_DELETE_APPOINTMENT(id), {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete appointment");
  return await res.json();
}

// Get one appointment (for edit page)
export async function getAppointmentById(id: number) {
  const res = await fetch(API_GET_APPOINTMENT_BY_ID(id), {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch appointment");
  return await res.json();
}
