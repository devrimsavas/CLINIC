//CompanyLogo.tsx

import CompanyLogoPicture from "./CompanyLogoPicture";
import { bebasNeue } from "@/fonts";

const CompanyLogo = () => {
  return (
    <div className="flex items-center gap-1 relative z-10">
      {/* Blur background behind logo */}
      <div className="absolute w-[300px] h-[70px] bg-white/20 blur-2xl rounded-full -z-10" />

      <CompanyLogoPicture />

      <span
        className={`text-3xl md:text-4xl text-white ${bebasNeue.className} -ml-1`}
      >
        <span className="uppercase tracking-wide">NovaMed Group</span>
      </span>
    </div>
  );
};

export default CompanyLogo;
