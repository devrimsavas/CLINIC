// modules/patientactions.ts

"use client";

import {
  CREATE_PATIENT,
  DELETE_PATIENT,
  UPDATE_PATIENT,
  GET_PATIENT,
} from "@/lib/constants";

export async function addPatient(patientData: {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  gender: string;
}) {
  const res = await fetch(CREATE_PATIENT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(patientData),
  });

  if (!res.ok) throw new Error("Failed to add patient");
  return res.json();
}

export async function editPatient(patientData: {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  gender: string;
}) {
  const res = await fetch(UPDATE_PATIENT(patientData.id), {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(patientData),
  });

  if (!res.ok) throw new Error("Failed to update patient");
  return res.json();
}

/*
export async function deletePatient(id: number) {
  const res = await fetch(DELETE_PATIENT(id), { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete patient");
  return res.json();
}
  */

//problem with delete patient with appointment
//alternative
export async function deletePatient(id: number) {
  const res = await fetch(DELETE_PATIENT(id), { method: "DELETE" });

  if (!res.ok) {
    const errorData = await res.json();
    const message = errorData.message || "Failed to delete patient.";
    throw new Error(message);
  }

  return res.json();
}

export async function getPatientById(id: number) {
  const res = await fetch(GET_PATIENT(id), { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch patient");
  return res.json();
}
