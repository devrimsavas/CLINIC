//PageFooter.tsx

import React from "react";
import MainFooter from "./MainFooter";
import CurrentYear from "./CurrentYear";

const PageFooter = () => {
  return (
    <footer className="bg-primary-dark text-white shadow-inner mt-8">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <div className="text-center md:text-left opacity-80">
          <span>
            &copy; <CurrentYear /> NovaMed Group. All rights reserved.
          </span>
        </div>

        <MainFooter />
      </div>
    </footer>
  );
};

export default PageFooter;
