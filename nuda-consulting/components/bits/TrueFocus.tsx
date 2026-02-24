"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface TrueFocusProps {
  sentence?: string;
  focusedColor?: string;
  blurAmount?: number;
  borderColor?: string;
}

export default function TrueFocus({
  sentence = "NUDA SOFTWARE PURO",
  focusedColor = "var(--color-nuda-light)",
  blurAmount = 5,
  borderColor = "var(--color-nuda-light)",
}: TrueFocusProps) {
  const words = sentence.split(" ");
  const [focusedIndex, setFocusedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFocusedIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div ref={containerRef} className="relative flex flex-wrap justify-center gap-x-6">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={false}
          animate={{
            filter: focusedIndex === i ? `blur(0px)` : `blur(${blurAmount}px)`,
            opacity: focusedIndex === i ? 1 : 0.3,
            color: focusedIndex === i ? focusedColor : "var(--color-nuda-muted)",
          }}
          transition={{ duration: 0.5 }}
          className="relative text-7xl md:text-8xl font-bold tracking-tighter"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}