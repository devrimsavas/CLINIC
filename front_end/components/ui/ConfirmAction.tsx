// components/ui/ConfirmAction.tsx

"use client";

import { useState } from "react";
import FormButton from "@/components/ui/FormButton";

interface ConfirmActionProps {
  onConfirm: () => Promise<void>;
  confirmMessage?: string;
}

export default function ConfirmAction({
  onConfirm,
  confirmMessage = "Are you sure?",
}: ConfirmActionProps) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");

  const handleConfirm = async () => {
    try {
      await onConfirm();
      setShowConfirm(false);
      setError("");
    } catch (err: any) {
      console.error("Delete failed:", err.message);
      setError(err.message || "Delete failed.");
    }
  };

  return (
    <div className="relative inline-block">
      {!showConfirm ? (
        <FormButton
          text="Delete"
          color="danger"
          onClick={() => setShowConfirm(true)}
        />
      ) : (
        <div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            w-[300px] bg-white border border-gray-300 rounded shadow-lg z-50 p-6"
        >
          <p className="text-sm text-red-600 font-semibold mb-2">
            {confirmMessage}
          </p>

          <div className="flex gap-2 mb-2">
            <FormButton text="Yes" color="danger" onClick={handleConfirm} />
            <FormButton
              text="Cancel"
              color="accent"
              onClick={() => {
                setShowConfirm(false);
                setError("");
              }}
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 font-semibold mt-1">{error}</p>
          )}
        </div>
      )}
    </div>
  );
}
