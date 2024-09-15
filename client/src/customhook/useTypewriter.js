import { useState, useEffect } from 'react';

const useTypewriter = (text, speed = 150) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const typewriterEffect = () => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text[currentIndex]);
        currentIndex += 1;
        setTimeout(typewriterEffect, speed);
      }
    };

    typewriterEffect();

    // Cleanup function to reset state if text changes
    return () => {
      setDisplayedText('');
    };
  }, [text, speed]);

  return displayedText;
};

export default useTypewriter;
