//components/GeneralLoading.tsx

"use client";
import { Clapperboard } from "lucide-react";
import LoadingImage from "./LoadingImage";

const GeneralLoading = ({
  label = "Loading content...",
}: {
  label?: string;
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center h-[70vh] text-center overflow-hidden">
      {/* Background image */}
      <LoadingImage />

      {/* Glow */}
      <div className="absolute w-[800px] h-[700px] bg-white/20 blur-3xl z-0" />

      {/* Clapperboard Icon */}
      <Clapperboard className="w-12 h-12 text-white mb-4 z-10" />

      {/* Spinner */}
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-primary mb-4 z-10" />

      {/* Text */}
      <h1 className="text-2xl font-semibold text-gray-50 z-10">{label}</h1>
      <p className="text-sm text-muted mt-2 z-10">
        Please wait while we load your content.
      </p>
    </div>
  );
};

export default GeneralLoading;
