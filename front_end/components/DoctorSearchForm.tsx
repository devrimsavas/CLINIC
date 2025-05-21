"use client";

import { useState } from "react";
import FormButton from "./ui/FormButton";
import { Search, XCircle, ListOrdered } from "lucide-react";

interface Props {
  onSearch: (firstName: string, lastName: string) => void;
  onClearResults: () => void;
  onShowAllDoctors: () => void;
}

export default function DoctorSearchForm({
  onSearch,
  onClearResults,
  onShowAllDoctors,
}: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(firstName.trim(), lastName.trim());
    setFirstName("");
    setLastName("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl bg-white p-6 rounded-xl shadow-md border border-border space-y-6"
    >
      <p className="text-base text-text-muted">
        Search for a doctor by <strong>name</strong> and/or{" "}
        <strong>surname</strong>.
      </p>

      {/* Name */}
      <div className="flex flex-col space-y-1">
        <label className="form-label">Name</label>
        <input
          type="text"
          placeholder="e.g. John"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="input-field"
        />
      </div>

      {/* Surname */}
      <div className="flex flex-col space-y-1">
        <label className="form-label">Surname</label>
        <input
          type="text"
          placeholder="e.g. Doe"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="input-field"
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4">
        <FormButton
          text="Search Doctor"
          type="submit"
          color="primary"
          icon={<Search className="w-4 h-4" />}
        />
        <FormButton
          text="Clear Results"
          type="button"
          color="danger"
          icon={<XCircle className="w-4 h-4" />}
          onClick={onClearResults}
        />
        <FormButton
          text="Show All Doctors"
          type="button"
          color="secondary"
          icon={<ListOrdered className="w-4 h-4" />}
          onClick={onShowAllDoctors}
        />
      </div>
    </form>
  );
}
