import { useEffect, useRef } from "react";

function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });

    const fps = 30;
    const interval = 1000 / fps;
    let now;
    let then = Date.now();
    let delta;

    const isMobile = window.innerWidth < 768;
    const fontSize = isMobile ? 16 : 12;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVXYZ".repeat(2).split("");

    let columns = 0;
    let drops = [];
    let rafId = 0;

    const setSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      columns = Math.ceil(width / fontSize);

      if (drops.length !== columns) {
        drops = new Array(columns).fill(1);
      }

      ctx.font = `${fontSize}px monospace`;
    };

    setSize();

    const draw = () => {
      ctx.fillStyle = "rgb(16, 16, 16, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0f0";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
      }
    };

    const animate = () => {
      rafId = requestAnimationFrame(animate);

      now = Date.now();
      delta = now - then;

      if (delta > interval) {
        then = now - (delta % interval);
        draw();
      }
    };

    animate();

    const onResize = () => setSize();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      drops = [];

      // مسح محتوى الكانفاس برمجياً
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute z-[-1] opacity-30 inset-0 w-full h-full pointer-events-none"
    ></canvas>
  );
}

export default Background;
