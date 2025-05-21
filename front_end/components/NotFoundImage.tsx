import Image from "next/image";

const NotFoundImage = () => {
  return (
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1200px] h-[280px] md:h-[520px] lg:h-[560px] z-0">
      <Image
        src="/notfoundimage.png"
        alt="Doctor Illustration"
        fill
        className="object-contain opacity-90 pointer-events-none select-none"
      />
    </div>
  );
};

export default NotFoundImage;
