// modules/actions.ts
import { API_CREATE_APPOINTMENT_WITHPATIENT } from "@/lib/constants";

export async function bookAppointmentWithPatient(payload: any) {
  const response = await fetch(API_CREATE_APPOINTMENT_WITHPATIENT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to book appointment.");
  }

  return response.json();
}




