// components/GoogleAnalyticsOptOutScript.tsx

"use client";

import { useEffect } from "react";

export default function GoogleAnalyticsOptOutScript() {
  useEffect(() => {
    document.documentElement.setAttribute("data-google-analytics-opt-out", "");
  }, []);

  return null;
}
