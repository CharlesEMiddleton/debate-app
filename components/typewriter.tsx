"use client";

import { useState, useEffect, useRef } from "react";

interface TypewriterProps {
  prefix?: string;
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export function Typewriter({
  prefix = "",
  phrases,
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseDuration = 2500,
  className,
}: TypewriterProps) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const phraseIndex = useRef(0);

  useEffect(() => {
    const current = phrases[phraseIndex.current];

    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (text.length < current.length) {
        timeout = setTimeout(() => {
          setText(current.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(current.slice(0, text.length - 1));
        }, deletingSpeed);
      } else {
        phraseIndex.current = (phraseIndex.current + 1) % phrases.length;
        setIsDeleting(false);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {prefix}{text}
      <span className="animate-blink">|</span>
    </span>
  );
}
