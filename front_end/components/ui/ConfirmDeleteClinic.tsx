// components/ui/ConfirmDelete.tsx

"use client";

import { useRouter } from "next/navigation";
//import { deleteMovie } from "@/modules/actions";
import { useState } from "react";
import FormButton from "@components/ui/FormButton";
import { deleteClinic } from "@/modules/clinicactions";

interface ConfirmDeleteProps {
  id: number;
}

export default function ConfirmDeleteStudio({ id }: ConfirmDeleteProps) {
  const router = useRouter();
  const [isConfirming, setIsConfirming] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "">("");

  const handleDelete = async () => {
    try {
      await deleteClinic(id);
      setStatus("success");
      setTimeout(() => {
        setStatus("");
        router.refresh();
      }, 1000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  if (isConfirming) {
    return (
      <div className="flex flex-col items-start gap-1">
        <p className="text-sm text-danger-dark">Are you sure?</p>
        <div className="flex gap-2">
          <FormButton
            type="button"
            text="Yes, Delete"
            color="danger"
            onClick={handleDelete}
          />
          <FormButton
            type="button"
            text="Cancel"
            color="secondary"
            onClick={() => setIsConfirming(false)}
          />
        </div>
        {status === "success" && (
          <p className="text-sm text-green-600 font-semibold">Deleted!</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-600 font-semibold">Error deleting.</p>
        )}
      </div>
    );
  }

  return (
    <FormButton
      type="button"
      text="Delete"
      color="danger"
      onClick={() => setIsConfirming(true)}
    />
  );
}
