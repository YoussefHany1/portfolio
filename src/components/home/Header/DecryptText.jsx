import { useEffect, useMemo, useRef, useState } from 'react';

const CHARSET = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// fast random index (fallback to Math.random)
function randIndex(max) {
  if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
    // fast uniform random using Uint32
    const r = crypto.getRandomValues(new Uint32Array(1))[0] / 0xffffffff;
    return Math.floor(r * max);
  }
  return Math.floor(Math.random() * max);
}

function randomScramble(len) {
  // build array then join (more efficient than repeated +=)
  const arr = new Array(len);
  const charsetLen = CHARSET.length;
  for (let i = 0; i < len; i++) {
    arr[i] = CHARSET[randIndex(charsetLen)];
  }
  return arr.join('');
}

export function DecryptText({ text = '', speed = 50, className = '' }) {
  const [displayText, setDisplayText] = useState('');
  const [isDecrypting, setIsDecrypting] = useState(true);

  // stable values
  const normalizedText = useMemo(() => String(text), [text]);
  // enforce a reasonable minimum step (avoid starving the main thread)
  const stepMs = useMemo(() => Math.max(8, Number(speed) || 50), [speed]);

  const rafRef = useRef(null);
  const idxRef = useRef(0);
  const lastTsRef = useRef(0);
  const visibleRef = useRef(true);

  useEffect(() => {
    const onVisChange = () => {
      visibleRef.current = document.visibilityState === 'visible';
      // reset timing so elapsed calculation doesn't spuriously jump
      lastTsRef.current = 0;
    };
    document.addEventListener('visibilitychange', onVisChange);
    return () => document.removeEventListener('visibilitychange', onVisChange);
  }, []);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const isSmallScreen = typeof window !== 'undefined' && window.innerWidth <= 576;

    if (prefersReducedMotion || isSmallScreen || normalizedText.length === 0) {
      // immediate render, avoid animation cost
      idxRef.current = normalizedText.length;
      setDisplayText(normalizedText);
      setIsDecrypting(false);
      return;
    }

    // reset for new run
    idxRef.current = 0;
    lastTsRef.current = 0;
    setIsDecrypting(true);

    const tick = (ts) => {
      // if hidden, skip scheduling until visible (saves CPU)
      if (!visibleRef.current) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      if (idxRef.current >= normalizedText.length) {
        // end
        setDisplayText(normalizedText);
        setIsDecrypting(false);
        return;
      }

      if (lastTsRef.current === 0) lastTsRef.current = ts;
      const elapsed = ts - lastTsRef.current;

      if (elapsed >= stepMs) {
        const steps = Math.max(1, Math.floor(elapsed / stepMs));
        idxRef.current = Math.min(idxRef.current + steps, normalizedText.length);
        lastTsRef.current = ts;

        const revealed = normalizedText.substring(0, idxRef.current);
        const remaining = normalizedText.length - idxRef.current;

        if (remaining > 0) {
          // build scrambled tail efficiently
          setDisplayText(revealed + randomScramble(remaining));
        } else {
          setDisplayText(revealed);
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [normalizedText, stepMs]); // depend on stable values

  return (
    <span className={`${isDecrypting ? 'decrypt-animation' : ''} ${className}`}>
      {displayText}
    </span>
  );
}
