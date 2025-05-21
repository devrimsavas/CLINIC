//DoctorSearchList.tsx

import { Stethoscope } from "lucide-react";
import type { DoctorSearchResult } from "@/modules/doctorsearch";

interface Props {
  doctors: DoctorSearchResult[];
}

export default function DoctorSearchList({ doctors }: Props) {
  if (doctors.length === 0) {
    return (
      <p className="text-red-600 font-semibold mt-6 text-center">
        No matching doctors found.
      </p>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto mt-10 space-y-4">
      <h2 className="text-4xl font-bold text-primary mb-4">Found Doctors</h2>

      <ul className="space-y-4">
        {doctors.map((doc, index) => (
          <li
            key={index}
            className="flex items-start gap-14 p-6 border border-border rounded-lg bg-white shadow-sm"
          >
            <Stethoscope className="text-primary-dark w-6 h-6 mt-1" />

            <div>
              <p className="text-xl font-semibold text-text-base">
                {doc.fullName}
              </p>
              <p className="text-sm text-text-muted">
                Clinic: {doc.clinicName || "N/A"}
              </p>
              <p className="text-sm text-text-muted">
                Speciality: {doc.specialityName || "N/A"}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
