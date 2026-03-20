"use client";

import { useEffect } from "react";

export default function LordIconInit() {
  useEffect(() => {
    import("lottie-web/build/player/lottie_light").then((lottie) => {
      import("@lordicon/element").then(({ defineElement }) => {
        // Prevent re-defining the element and crashing if it already exists from a previous fast refresh
        if (!customElements.get("lord-icon")) {
          defineElement(lottie.default.loadAnimation);
        }
      });
    });
  }, []);

  return null;
}
