//PageHeader.tsx 

import React from "react";
import Link from "next/link";
import MainNav from "./MainNav";
import CompanyLogo from "./CompanyLogo";

const PageHeader = () => {
  return (
    <header className="relative bg-primary-dark text-primary-light shadow-md px-0 overflow-hidden">
      <div className="relative z-10 flex justify-between items-center p-2">
        <Link href="/" className="block">
          <CompanyLogo/>
        </Link>
        <MainNav />
      </div>
    </header>
  );
};

export default PageHeader;
