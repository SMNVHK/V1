import React from 'react';
import { styled } from '@mui/material/styles';
import { useTheme } from './ThemeSwitch';

const StylishButtonWrapper = styled('div')({
  display: 'inline-block',
  padding: '10px',
});

const ButtonTwo = styled('div')(({ theme }) => {
  const { colors } = useTheme();
  return {
    color: colors.text,
    transition: 'all 0.5s',
    position: 'relative',
    cursor: 'pointer',
    padding: '10px 20px',
    '& span': {
      zIndex: 2,
      display: 'block',
      position: 'relative',
    },
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1,
      transition: 'all 0.5s',
      border: `1px solid ${colors.primary}`,
      backgroundColor: 'rgba(255,255,255,0.1)',
    },
    '&:hover::before': {
      transform: 'rotate(-45deg)',
      backgroundColor: 'rgba(255,255,255,0)',
    },
    '&:hover::after': {
      transform: 'rotate(45deg)',
      backgroundColor: 'rgba(255,255,255,0)',
    },
  };
});

interface StylishButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const StylishButton: React.FC<StylishButtonProps> = ({ children, onClick }) => {
  return (
    <StylishButtonWrapper>
      <ButtonTwo onClick={onClick}>
        <span>{children}</span>
      </ButtonTwo>
    </StylishButtonWrapper>
  );
};

export default StylishButton;