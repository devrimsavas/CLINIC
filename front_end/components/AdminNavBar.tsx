// components/AdminNavBar.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/admin", label: "Admin Home" },
  { href: "/admin/clinics", label: "Clinics" },
  { href: "/admin/doctors", label: "Doctors" },
  { href: "/admin/patients", label: "Patients" },
  { href: "/admin/specialities", label: "Specialities" },

  { href: "/admin/appointments", label: "Appointments" },
];

export default function AdminNav() {
  const pathname = usePathname();
  return (
    <nav className="bg-primary-dark p-2 rounded-lg shadow-md flex flex-wrap justify-left gap-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`px-4 py-2 rounded hover:bg-secondary-dark hover:text-white transition 
                ${
                  pathname === link.href
                    ? "bg-secondary-dark text-white"
                    : "bg-primary-dark text-white"
                }
              `}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
