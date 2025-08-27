import { useEffect, useMemo, useRef, useState } from 'react';

function clampNumber(value, min, max) {
    return Math.min(max, Math.max(min, value));
}

export default function Typewriter({
    words,
    typeSpeed,
    deleteSpeed,
    holdDelay,
    className = '',
    loop = true,
}) {
    const safeWords = useMemo(() => (Array.isArray(words) && words.length ? words : ['magic']), [words]);
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const rafRef = useRef(null);
    const lastTsRef = useRef(0);
    const holdUntilRef = useRef(0);
    const textRef = useRef('');
    const isDeletingRef = useRef(false);
    const wordIndexRef = useRef(0);
    const wordsRef = useRef(safeWords);
    const optionsRef = useRef({ typeSpeed: 70, deleteSpeed: 45, holdMs: 900, loop: true });

    const stepTypeMs = clampNumber(Number(typeSpeed) || 70, 8, 200);
    const stepDeleteMs = clampNumber(Number(deleteSpeed) || 45, 6, 200);
    const holdMs = clampNumber(Number(holdDelay) || 900, 200, 5000);

    // keep option refs in sync without restarting the loop
    useEffect(() => {
        optionsRef.current = { typeSpeed: stepTypeMs, deleteSpeed: stepDeleteMs, holdMs, loop };
    }, [stepTypeMs, stepDeleteMs, holdMs, loop]);

    // keep words ref in sync
    useEffect(() => {
        wordsRef.current = safeWords;
        if (wordIndexRef.current >= safeWords.length) {
            wordIndexRef.current = 0;
            setWordIndex(0);
        }
    }, [safeWords]);

    // ensure refs mirror state for logic
    useEffect(() => { textRef.current = text; }, [text]);
    useEffect(() => { isDeletingRef.current = isDeleting; }, [isDeleting]);
    useEffect(() => { wordIndexRef.current = wordIndex; }, [wordIndex]);

    useEffect(() => {
        // initialize timing once
        lastTsRef.current = 0;
        holdUntilRef.current = 0;

        const tick = (ts) => {
            if (lastTsRef.current === 0) lastTsRef.current = ts;
            const { typeSpeed: tMs, deleteSpeed: dMs, holdMs: hMs, loop: doLoop } = optionsRef.current;
            const currentWords = wordsRef.current;
            const currentWord = currentWords[wordIndexRef.current % currentWords.length];
            const stepMs = isDeletingRef.current ? dMs : tMs;
            const elapsed = ts - lastTsRef.current;

            if (holdUntilRef.current > ts) {
                rafRef.current = requestAnimationFrame(tick);
                return;
            }

            if (elapsed >= stepMs) {
                lastTsRef.current = ts;
                if (!isDeletingRef.current) {
                    const nextLen = clampNumber(textRef.current.length + 1, 0, currentWord.length);
                    const nextText = currentWord.slice(0, nextLen);
                    if (nextText !== textRef.current) {
                        textRef.current = nextText;
                        setText(nextText);
                    }
                    if (nextLen === currentWord.length) {
                        isDeletingRef.current = true;
                        setIsDeleting(true);
                        holdUntilRef.current = ts + hMs;
                    }
                } else {
                    const nextLen = clampNumber(textRef.current.length - 1, 0, currentWord.length);
                    const nextText = currentWord.slice(0, nextLen);
                    if (nextText !== textRef.current) {
                        textRef.current = nextText;
                        setText(nextText);
                    }
                    if (nextLen === 0) {
                        isDeletingRef.current = false;
                        setIsDeleting(false);
                        const nextIndex = wordIndexRef.current + 1;
                        if (!doLoop && nextIndex >= currentWords.length) {
                            cancelAnimationFrame(rafRef.current);
                            rafRef.current = null;
                            return;
                        }
                        const wrapped = nextIndex % currentWords.length;
                        wordIndexRef.current = wrapped;
                        setWordIndex(wrapped);
                    }
                }
            }

            rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
        };
    }, []);

    return (
        <span className={className}>{text}</span>
    );
}


