//AboutUsImage.tsx

import Image from "next/image";

const AboutUsImage = () => {
  return (
    <div className="absolute top-0 left-1/2 w-full max-w-[1200px] h-[280px] md:h-[520px] lg:h-[560px] z-0 transform -translate-x-1/2">
      <div className="w-full h-full animate__animated animate__backInDown">
        <Image
          src="/aboutus.png"
          alt="about us image"
          fill
          className="object-contain opacity-90 pointer-events-none select-none"
        />
      </div>
    </div>
  );
};

export default AboutUsImage;
