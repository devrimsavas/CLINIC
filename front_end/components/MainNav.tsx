//MainNav.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { rubik } from "@/fonts"; // 

export default function MainNav() {
  const pathname = usePathname();

  const navLink = (href: string, label: string) => (
    <Link
      href={href}
      className={`transition font-medium text-base md:text-lg px-3 py-1 rounded-md ${
        pathname === href
          ? "bg-white text-primary"
          : "text-white hover:bg-white hover:text-primary"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className={`flex gap-4 md:gap-6 ${rubik.className}`}>
      {navLink("/", "Book Appointment")}
      {navLink("/search", "Search Doctor")}
      {navLink("/admin", "Admin")}
      {navLink("/calendar", "Appointment Calendar")}
    </nav>
  );
}
