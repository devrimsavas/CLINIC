// components/ui/Alert.tsx

"use client";

import { CheckCircle, AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";

interface AlertProps {
  message: string;
  type?: "success" | "error";
  duration?: number; // milliseconds
  onClose?: () => void;
}

export default function Alert({
  message,
  type = "success",
  duration = 4000,
  onClose,
}: AlertProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, duration);

    return () => clearTimeout(timeout);
  }, [duration, onClose]);

  if (!visible) return null;

  const baseStyles = "p-4 rounded-md flex items-center gap-3 text-lg shadow-md";

  const successStyles = "bg-green-100 text-green-800 border border-green-300";
  const errorStyles = "bg-red-100 text-red-800 border border-red-300";

  const icon =
    type === "success" ? (
      <CheckCircle className="w-6 h-6 text-green-600" />
    ) : (
      <AlertTriangle className="w-6 h-6 text-red-600" />
    );

  return (
    <div
      className={`${baseStyles} ${
        type === "success" ? successStyles : errorStyles
      }`}
    >
      {icon}
      <span className="font-medium">{message}</span>
    </div>
  );
}
