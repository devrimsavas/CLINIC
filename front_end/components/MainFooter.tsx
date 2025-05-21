//MainFooter.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Twitter, Linkedin, ArrowUp } from "lucide-react";
import { montserrat } from "@/fonts";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/aboutus", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
];

const MainFooter = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
      {/* Navigation Links */}
      <nav
        className={`flex flex-wrap justify-center gap-4 text-sm ${montserrat.className}`}
      >
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`transition hover:text-background-light ${
              pathname === href ? "underline text-background-light" : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Social Icons */}
      <div className="flex gap-4 mt-2 md:mt-0">
        <a href="https://facebook.com" target="_blank" aria-label="Facebook">
          <Facebook className="w-5 h-5 hover:text-blue-500 transition" />
        </a>
        <a href="https://twitter.com" target="_blank" aria-label="Twitter">
          <Twitter className="w-5 h-5 hover:text-sky-400 transition" />
        </a>
        <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
          <Linkedin className="w-5 h-5 hover:text-blue-400 transition" />
        </a>
      </div>

      {/* Back to Top */}
      <a
        href="#top"
        aria-label="Back to top"
        className="hidden md:inline-flex items-center gap-1 text-sm hover:text-primary-light transition"
      >
        <ArrowUp className="w-4 h-4" />
        Back to Top
      </a>
    </div>
  );
};

export default MainFooter;
