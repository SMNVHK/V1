import React, { ReactNode } from 'react';
import { styled } from '@mui/material/styles';

const Button = styled('button')({
  color: '#FFF',
  transition: 'all 0.5s',
  position: 'relative',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '10px 20px',
  fontSize: '16px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  overflow: 'hidden',
  zIndex: 1,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    transition: 'all 0.3s',
  },
  '&:hover::before': {
    opacity: 0,
    transform: 'scale(0.5,0.5)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    opacity: 0,
    transition: 'all 0.3s',
    border: '1px solid rgba(255,255,255,0.5)',
    transform: 'scale(1.2,1.2)',
  },
  '&:hover::after': {
    opacity: 1,
    transform: 'scale(1,1)',
  },
});

interface NewStylishButtonProps {
  onClick?: () => void;
  children: ReactNode;
}

const NewStylishButton: React.FC<NewStylishButtonProps> = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default NewStylishButton;