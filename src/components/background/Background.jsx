import { useEffect, useRef } from 'react';

function Header() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        // CONFIG
        const fontSize = 12;              // عدّل هذه لزيادة/تقليل كثافة الأعمدة
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZ'.repeat(6).split('');
        const lettersLen = letters.length;
        const clearAlpha = 0.06;          // مقدار التلاشي للخلفية (trail)
        const speed = 0.5;                // السرعة (الوحدات بالأسطر لكل إطار). كبّرها لتسريع المطر
        const resetChance = 0.99;        // احتمال إعادة عمود بعد وصوله للأسفل (أكبر = أعمدة أطول)

        // State that will change
        let dpr = Math.max(1, window.devicePixelRatio || 1);
        let width = 0, height = 0, columns = 0;
        let drops = new Float32Array(0);
        let rafId = 0;

        let seed = (Math.random() * 0xffffffff) | 1;
        const rand = () => {
            seed ^= seed << 13;
            seed >>>= 0;
            seed ^= seed >>> 17;
            seed ^= seed << 5;
            return (seed >>> 0) / 0xffffffff;
        };

        const setSize = () => {
            dpr = Math.max(1, window.devicePixelRatio || 1);
            width = Math.floor(window.innerWidth);
            height = Math.floor(window.innerHeight);

            // CSS size
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';

            // actual pixel buffer size for DPR
            canvas.width = Math.max(1, Math.floor(width * dpr));
            canvas.height = Math.max(1, Math.floor(height * dpr));

            // scale drawing operations back to CSS pixels
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            columns = Math.max(1, Math.floor(width / fontSize));
            const newDrops = new Float32Array(columns);
            // initialize drops randomly so effect looks organic after resize
            for (let i = 0; i < columns; i++) {
                newDrops[i] = Math.floor(rand() * (height / fontSize));
            }
            drops = newDrops;
            ctx.font = `${fontSize}px monospace`;
            ctx.textBaseline = 'top';
        };

        // Initial size
        setSize();

        // draw loop — optimized
        const draw = () => {
            // translucent fill to create trailing effect
            ctx.fillStyle = `rgba(16,16,16,${clearAlpha})`;
            ctx.fillRect(0, 0, width, height);

            // single fillStyle for letters
            ctx.fillStyle = '#0f0';

            // locals for speed
            const localDrops = drops;
            const localLetters = letters;
            const localLettersLen = lettersLen;
            const fSize = fontSize;
            const h = height;
            for (let i = 0, L = localDrops.length; i < L; i++) {
                const x = i * fSize;
                const y = localDrops[i] * fSize;
                // choose random letter — use rand() or Math.random()
                const idx = ((rand() * localLettersLen) | 0);
                ctx.fillText(localLetters[idx], x, y);
                localDrops[i] += speed;
                // reset with a small probability when passes bottom
                if (localDrops[i] * fSize > h && rand() > resetChance) {
                    localDrops[i] = 0;
                }
            }
        };

        const animate = () => {
            draw();
            rafId = requestAnimationFrame(animate);
        };
        rafId = requestAnimationFrame(animate);

        // resize handling (debounced via rAF)
        let resizeReq = null;
        const onResize = () => {
            if (resizeReq !== null) cancelAnimationFrame(resizeReq);
            resizeReq = requestAnimationFrame(() => {
                setSize();
                resizeReq = null;
            });
        };
        window.addEventListener('resize', onResize);

        // cleanup
        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener('resize', onResize);
        };
    }, []);
    return (
        <>
            <canvas ref={canvasRef} className='absolute z-[-1] opacity-30 inset-0 w-full h-full'></canvas>
        </>
    )
}
export default Header