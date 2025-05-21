// modules/doctoractions.ts

"use client";

import {
  GET_ALL_DOCTORS,
  GET_DOCTOR_BY_ID,
  CREATE_DOCTOR,
  UPDATE_DOCTOR,
  DELETE_DOCTOR,
} from "@/lib/constants";

//add doctor
export async function addDoctor(doctorData: {
  firstName: string;
  lastName: string;
  clinicId: number;
  specialityId: number;
}) {
  const payload = {
    firstName: doctorData.firstName,
    lastName: doctorData.lastName,
    clinicID: doctorData.clinicId,
    specialityID: doctorData.specialityId,
  };

  console.log("Sending to API:", payload); // ✅ Debug log

  const res = await fetch(CREATE_DOCTOR, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errorText = await res.text(); // get error detail
    console.error("API error response:", errorText); // ✅ Debug error
    throw new Error("Failed to add doctor");
  }

  return await res.json();
}

export async function editDoctor(doctor: {
  id: number;
  firstName: string;
  lastName: string;
  clinicId: number;
  specialityId: number;
}) {
  const res = await fetch(UPDATE_DOCTOR(doctor.id), {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(doctor),
  });

  if (!res.ok) throw new Error("Failed to update doctor");
  return await res.json();
}

export async function deleteDoctor(id: number) {
  const res = await fetch(DELETE_DOCTOR(id), {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete doctor");
  return await res.json();
}
