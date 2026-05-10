'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}

const Typewriter = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
  className = "",
}: TypewriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        timer = setTimeout(() => {
          setCurrentText(word.substring(0, currentText.length - 1));
        }, deletingSpeed);
      }
    } else {
      if (currentText === word) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      } else {
        timer = setTimeout(() => {
          setCurrentText(word.substring(0, currentText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <div className={`flex items-center ${className}`}>
      <h3 className="leading-tight min-h-[1.2em] font-mono whitespace-nowrap">
        {currentText}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
          className="inline-block w-[2px] h-[0.8em] bg-current ml-1 align-middle"
        />
      </h3>
    </div>
  );
};

export default Typewriter;
