"use client";
import { useState, useEffect, useRef } from "react";

export default function LazyLoad({ children, rootMargin = "600px", minHeight = "50vh" }) {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin]);

  return (
    <div ref={ref} style={{ minHeight: isIntersecting ? "auto" : minHeight, width: "100%" }}>
      {isIntersecting ? children : null}
    </div>
  );
}
