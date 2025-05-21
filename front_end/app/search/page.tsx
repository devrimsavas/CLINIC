// search/page.tsx
// Search for doctor page

"use client";

import { useState } from "react";
import DoctorSearchForm from "@/components/DoctorSearchForm";
import DoctorSearchList from "@/components/DoctorSearchList";
import { DoctorSearchResult, searchDoctors } from "@/modules/doctorsearch";
import { GET_ALL_DOCTORS } from "@/lib/constants";

export default function SearchDoctorPage() {
  const [results, setResults] = useState<DoctorSearchResult[]>([]);

  const handleSearch = async (firstName: string, lastName: string) => {
    try {
      const data = await searchDoctors({ firstName, lastName });
      setResults(data);
    } catch (error: any) {
      console.error("Search failed:", error.message);
      setResults([]);
    }
  };

  const handleClearResults = () => {
    setResults([]);
  };

  const handleShowAllDoctors = async () => {
    try {
      const res = await fetch(GET_ALL_DOCTORS);
      const data = await res.json();

      const mapped = data.doctors.map((doc: any) => ({
        fullName: `${doc.firstName} ${doc.lastName}`,
        clinicName: doc.clinicName || null,
        specialityName: doc.specialityName || null,
      }));

      setResults(mapped);
    } catch (err) {
      console.error("Failed to fetch all doctors", err);
    }
  };

  return (
    <section className="w-full flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-bold text-primary mb-6 text-center">
        Search Doctor
      </h1>

      <div className="w-full max-w-2xl space-y-8">
        <DoctorSearchForm
          onSearch={handleSearch}
          onClearResults={handleClearResults}
          onShowAllDoctors={handleShowAllDoctors}
        />

        {results.length > 0 && <DoctorSearchList doctors={results} />}
      </div>
    </section>
  );
}
