"use client";

import { useEffect, useState } from "react";
import { Clock, CalendarDays } from "lucide-react";

const CurrentDateTime = () => {
  const [now, setNow] = useState(new Date());
  const [hasMounted, setHasMounted] = useState(false); // ✅

  useEffect(() => {
    setHasMounted(true); // ✅ trigger after client mount

    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!hasMounted) return null; // ✅ skip mismatched SSR

  const date = now.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const time = now.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="bg-white border border-border rounded-lg shadow-sm p-4 w-full text-center">
      <div className="flex justify-center items-center gap-2 mb-2">
        <CalendarDays className="text-primary w-5 h-5" />
        <h3 className="text-lg font-semibold text-primary">
          Current Date & Time
        </h3>
      </div>
      <p className="text-text-base flex items-center justify-center gap-2">
        <CalendarDays className="w-4 h-4 text-secondary" />
        {date}
      </p>
      <p className="text-text-muted flex items-center justify-center gap-2">
        <Clock className="w-4 h-4 text-secondary-dark" />
        {time}
      </p>
    </div>
  );
};

export default CurrentDateTime;
