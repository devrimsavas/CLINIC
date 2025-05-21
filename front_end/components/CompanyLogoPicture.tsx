//company logo picture component
//components/CompanyLogoPicture.tsx

import Image from "next/image";
const CompanyLogoPicture = () => {
  return (
    <div className="relative w-64 h-20 md:w-80 md:h-24 transition-transform duration-200 hover:scale-105">
      <Image
        src="/novamedlogo.png"
        alt="Company Logo"
        fill
        sizes="(max-width:768px) 300px,400px "
        className="object-contain"
        priority
      />
    </div>
  );
};

export default CompanyLogoPicture;
