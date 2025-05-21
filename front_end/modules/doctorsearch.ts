// modules/doctorsearch.ts
import { SEARCH_DOCTOR } from "@/lib/constants";

export interface DoctorSearchResult {
  fullName: string;
  clinicName: string | null;
  specialityName: string | null;
}

export async function searchDoctors({
  firstName,
  lastName,
}: {
  firstName?: string;
  lastName?: string;
}): Promise<DoctorSearchResult[]> {
  const response = await fetch(SEARCH_DOCTOR, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ firstName, lastName }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.Message || "Doctor search failed.");
  }

  const data = await response.json();
  return data.results; // array of { fullName, clinicName, specialityName }
}
