import React from 'react';
import { styled } from '@mui/material/styles';
import { useTheme } from './ThemeSwitch';
import { motion } from 'framer-motion';

const StylishButtonWrapper = styled(motion.div)({
  display: 'inline-block',
  padding: '10px',
});

const ButtonContent = styled('span')(({ theme }) => {
  const { colors } = useTheme();
  return {
    fontWeight: 'bold',
    fontSize: '20px',
    color: colors.text,
    textShadow: '0 0 3px rgba(97, 218, 251, 0.5)',
    fontFamily: '"Space Grotesk", sans-serif',
    letterSpacing: '-0.5px',
    cursor: 'pointer',
    padding: '8px 16px',
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-block',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '2px',
      background: colors.primary,
      transform: 'scaleX(0)',
      transformOrigin: 'right',
      transition: 'transform 0.3s ease',
    },
    '&:hover::after': {
      transform: 'scaleX(1)',
      transformOrigin: 'left',
    },
  };
});

interface StylishButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const StylishButton: React.FC<StylishButtonProps> = ({ children, onClick }) => {
  const { colors } = useTheme();

  const buttonVariants = {
    hover: {
      backgroundColor: `${colors.primary}33`, // Opacité augmentée à 20% (33 en hexadécimal)
      transition: { duration: 0.3 }
    },
    tap: {
      backgroundColor: `${colors.primary}4D`, // Opacité augmentée à 30% (4D en hexadécimal)
      transition: { duration: 0.1 }
    }
  };

  return (
    <StylishButtonWrapper
      onClick={onClick}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <ButtonContent>{children}</ButtonContent>
    </StylishButtonWrapper>
  );
};

export default StylishButton;