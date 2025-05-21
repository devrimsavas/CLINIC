// modules/specialityactions.ts

"use client";

import {
  GET_ALL_SPECIALITIES,
  GET_SPECIALITY_BY_ID,
  CREATE_SPECIALITY,
  UPDATE_SPECIALITY,
  DELETE_SPECIALITY,
} from "@/lib/constants";

export async function addSpeciality(data: { name: string }) {
  const res = await fetch(CREATE_SPECIALITY, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to add speciality");
  return await res.json();
}

export async function editSpeciality(data: { id: number; name: string }) {
  const res = await fetch(UPDATE_SPECIALITY(data.id), {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: data.name }),
  });

  if (!res.ok) throw new Error("Failed to update speciality");
  return await res.json();
}

export async function deleteSpeciality(id: number) {
  const res = await fetch(DELETE_SPECIALITY(id), {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete speciality");
  return await res.json();
}
