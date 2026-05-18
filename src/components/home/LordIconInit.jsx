"use client";

import { useEffect } from "react";

export default function LordIconInit() {
  useEffect(() => {
    const initLordIcon = () => {
      import("lottie-web/build/player/lottie_light").then((lottie) => {
        import("@lordicon/element").then(({ defineElement }) => {
          // Prevent re-defining the element and crashing if it already exists
          if (!customElements.get("lord-icon")) {
            defineElement(lottie.default.loadAnimation);
          }
        });
      });
    };

    if (typeof window !== "undefined") {
      // Defer loading using requestIdleCallback to free up main thread for critical paint (FCP/LCP)
      if (document.readyState === "complete") {
        const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 1000));
        idleCallback(initLordIcon);
      } else {
        const handleLoad = () => {
          const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 1000));
          idleCallback(initLordIcon);
        };
        window.addEventListener("load", handleLoad);
        return () => window.removeEventListener("load", handleLoad);
      }
    }
  }, []);

  return null;
}

