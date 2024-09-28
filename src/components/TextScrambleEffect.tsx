import React, { useEffect, useRef, useState } from 'react';
import { styled } from '@mui/material/styles';

const ScrambleText = styled('span')<{ isStable: boolean }>(({ isStable }) => ({
  fontFamily: 'Roboto Condensed, sans-serif',
  fontWeight: isStable ? 'bold' : 'normal',
  display: 'inline-block',
  minWidth: '200px',
  textAlign: 'center',
  transition: 'font-weight 0.3s ease',
}));

class TextScramble {
  el: HTMLElement;
  chars: string;
  queue: any[];
  frameRequest: number;
  frame: number;
  resolve: Function | null;

  constructor(el: HTMLElement) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.queue = [];
    this.frameRequest = 0;
    this.frame = 0;
    this.resolve = null;
  }

  setText(newText: string) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve?.();
    } else {
      this.frameRequest = requestAnimationFrame(() => this.update());
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

interface TextScrambleEffectProps {
  phrases: string[];
}

const TextScrambleEffect: React.FC<TextScrambleEffectProps> = ({ phrases }) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isStable, setIsStable] = useState(false);

  useEffect(() => {
    if (textRef.current) {
      const fx = new TextScramble(textRef.current);
      let counter = 0;

      const next = () => {
        fx.setText(phrases[counter]).then(() => {
          setIsStable(true);
          setTimeout(() => {
            setIsStable(false);
            counter = (counter + 1) % phrases.length;
            setCurrentPhraseIndex(counter);
            next();
          }, 2000);
        });
      };

      next();
    }
    return () => {
      if (textRef.current) {
        const fx = new TextScramble(textRef.current);
        cancelAnimationFrame(fx.frameRequest);
      }
    };
  }, [phrases]);

  return <ScrambleText ref={textRef} isStable={isStable}>{phrases[currentPhraseIndex]}</ScrambleText>;
};

export default TextScrambleEffect;