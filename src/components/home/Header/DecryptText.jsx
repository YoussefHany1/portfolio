import { useState, useEffect } from 'react';

const randomChar = () => {
  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return chars[Math.floor(Math.random() * chars.length)];
};

export function DecryptText({ text, speed = 50, className = '' }) {
  const [displayText, setDisplayText] = useState('');
  const [isDecrypting, setIsDecrypting] = useState(true);

  useEffect(() => {
    if (screen.width <= 576) {
      setDisplayText(text);
      setIsDecrypting(false);
      return;
    }
    let currentIndex = 0;
    let scrambleInterval;
    let finalText = '';

    const startDecryption = () => {
      scrambleInterval = setInterval(() => {
        if (currentIndex >= text.length) {
          clearInterval(scrambleInterval);
          setDisplayText(text);
          setIsDecrypting(false);
          return;
        }

        finalText = text.substring(0, currentIndex);
        const scrambledPart = Array(text.length - currentIndex)
          .fill(0)
          .map(() => randomChar())
          .join('');

        setDisplayText(finalText + scrambledPart);
        currentIndex++;
      }, speed);
    };

    startDecryption();

    return () => {
      clearInterval(scrambleInterval);
    };
  }, [text, speed]);

  return (
    <span className={`${isDecrypting ? 'decrypt-animation' : ''} ${className}`}>
      {displayText}
    </span>
  );
}