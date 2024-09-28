import React, { useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { motion, useAnimation } from 'framer-motion';

const HighlightWrapper = styled('div')({
  maxWidth: '900px',
  fontFamily: 'Inter, Arial',
  fontSize: '1.5em',
  fontWeight: 600,
  color: 'inherit',
  lineHeight: 1.6,
  textAlign: 'center',
  margin: '2rem 0',
});

const Highlight = styled(motion.span)(({ color }) => ({
  position: 'relative',
  color: 'inherit',
  display: 'inline-block',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '30%',
    backgroundColor: color,
    zIndex: -1,
    opacity: 0.3,
  },
}));

const HighlightEffect = styled(motion.div)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'currentColor',
  opacity: 0.2,
  zIndex: -1,
});

interface HighlightTextProps {
  text: string;
  highlights: { word: string; color: string }[];
}

const HighlightText: React.FC<HighlightTextProps> = ({ text, highlights }) => {
  const controls = useAnimation();

  useEffect(() => {
    const animateHighlights = async () => {
      await controls.start(i => ({
        scaleX: [0, 1, 1, 0],
        originX: ['left', 'left', 'right', 'right'],
        transition: { 
          delay: i * 0.5,
          duration: 1,
          times: [0, 0.4, 0.6, 1],
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 3
        },
      }));
    };

    animateHighlights();
  }, [controls]);

  const renderText = () => {
    const words = text.split(/\s+/);
    return words.map((word, index) => {
      const highlight = highlights.find(h => h.word.toLowerCase() === word.toLowerCase());
      const content = (
        <React.Fragment key={index}>
          {index > 0 && ' '}
          {highlight ? (
            <Highlight color={highlight.color}>
              <HighlightEffect
                custom={index}
                animate={controls}
                initial={{ scaleX: 0 }}
                style={{ backgroundColor: highlight.color }}
              />
              {word}
            </Highlight>
          ) : word}
        </React.Fragment>
      );
      return content;
    });
  };

  return <HighlightWrapper>{renderText()}</HighlightWrapper>;
};

export default HighlightText;