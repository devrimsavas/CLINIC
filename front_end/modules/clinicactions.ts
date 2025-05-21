//modules/clinicactions.ts 

"use client";

import { GET_ALL_CLINICS,GET_CLINIC,CREATE_CLINIC,EDIT_CLINIC,DELETE_CLINIC } from "@/lib/constants";


// Add a new clinic
export async function addClinic(clinicData: {
    name: string;
    address: string;
  }) {
    const res = await fetch(CREATE_CLINIC, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(clinicData),
    });
  
    if (!res.ok) {
      throw new Error("Failed to add clinic");
    }
  
    return await res.json();
  }
  
  // Update an existing clinic
  export async function editClinic({
    id,
    name,
    address,
  }: {
    id: number;
    name: string;
    address: string;
  }) {
    try {
      const res = await fetch(`${EDIT_CLINIC}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, address }),
      });

      if (!res.ok) {
        throw new Error("Failed to update clinic");
      }

      return await res.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  // Delete a clinic by ID
  export async function deleteClinic(id: number) {
    const res = await fetch(`${DELETE_CLINIC}/${id}`, {
      method: "DELETE",
    });
  
    if (!res.ok) {
      throw new Error("Failed to delete clinic");
    }
  
    return await res.json();
  }
