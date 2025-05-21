// components/ui/FormButton.tsx
"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  color?: "primary" | "accent" | "danger" | "secondary";
  type?: "button" | "submit";
  icon?: ReactNode;
}

export default function FormButton({
  text,
  href,
  onClick,
  icon,
  color = "primary",
  type = "button",
}: ButtonProps) {
  const baseClass = "px-4 py-2 rounded transition font-semibold";
  const colorClass = {
    primary: "bg-primary-dark text-white hover:bg-primary-light",
    accent: "bg-blue-600 text-white hover:bg-accent-2",
    danger: "bg-red-500 text-white hover:bg-red-600",
    secondary: "bg-secondary text-white hover:bg-secondary-dark",
  }[color];

  if (href) {
    return (
      <Link href={href} className={`${baseClass} ${colorClass}`}>
        {text}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClass} ${colorClass}`}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
}
