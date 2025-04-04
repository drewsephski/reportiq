"use client";

import { useEffect } from "react";

export default function ClientHydrationFix() {
  useEffect(() => {
    // This runs only on the client after hydration is complete
    document.documentElement.setAttribute("data-hydrated", "true");
  }, []);

  // This component doesn't render anything
  return null;
} 