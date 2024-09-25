import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { keyframes } from '@emotion/react';
import { useTheme } from './ThemeSwitch';

const LogoWrapper = styled(motion.div)({
  position: 'relative',
  width: '204px', // Remettre à la taille d'origine
  height: '204px', // Remettre à la taille d'origine
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'visible',
});

const LogoImage = styled(motion.img)({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  position: 'relative',
  zIndex: 2,
});

const MenuContainer = styled(motion.div)({
  position: 'absolute',
  left: '100%',
  top: '35%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  zIndex: 3,
  transform: 'scale(0.5)', // Réduire la taille de moitié
  transformOrigin: 'top left', // Point d'origine de la transformation
});

const MenuItem = styled(motion.div)<{ bgcolor: string; bordercolor: string }>(({ bgcolor, bordercolor }) => ({
  margin: '5px 0',
  padding: '4px 6px', // Réduire le padding
  background: bgcolor,
  border: `1px solid ${bordercolor}`,
  boxShadow: `0 0 5px ${bordercolor}`, // Réduire l'ombre
  borderRadius: '0px', // Supprimer le border-radius
  cursor: 'pointer',
  overflow: 'hidden',
  position: 'relative',
  width: 'fit-content',
  whiteSpace: 'nowrap', // Assurer que le texte reste sur une seule ligne
}));

const MenuItemContent = styled(motion.div)({
  padding: '5px 10px',
  position: 'relative',
  zIndex: 2,
});

const Projector = styled(motion.div)<{ gradient: string }>(({ gradient }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: gradient,
  zIndex: 1,
}));

const projectorEffect = keyframes`
  0% { clip-path: polygon(0 0, 0 0, 0 100%, 0 100%); }
  100% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
`;

const AnimatedLogo: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { colors } = useTheme();

  const menuItems = [
    { text: 'NOTRE ÉQUIPE' },
    { text: 'NOUS CONTACTER' },
    { text: 'NOS PROJETS' },
  ];

  return (
    <LogoWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <LogoImage
        src="/images/boldpixel-logo.png"
        alt="BoldPixel Logo"
        animate={{
          filter: isHovered ? `brightness(1.2) drop-shadow(0 0 15px white)` : 'brightness(1)',
        }}
        transition={{ duration: 0.3 }}
      />
      <AnimatePresence>
        {isHovered && (
          <MenuContainer
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {menuItems.map((item, index) => (
              <MenuItem
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 0 20px ${colors.primary}`,
                }}
                bgcolor={`rgba(${parseInt(colors.primary.slice(1, 3), 16)}, ${parseInt(colors.primary.slice(3, 5), 16)}, ${parseInt(colors.primary.slice(5, 7), 16)}, 0.1)`}
                bordercolor={colors.primary}
              >
                <Projector
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ animation: `${projectorEffect} 0.5s ${index * 0.1}s forwards` }}
                  gradient={`linear-gradient(45deg, ${colors.primary}33, ${colors.primary}1A)`}
                />
                <MenuItemContent>
                  <Typography variant="body2" style={{ fontFamily: 'Manrope, sans-serif' }}>{item.text}</Typography>
                </MenuItemContent>
              </MenuItem>
            ))}
          </MenuContainer>
        )}
      </AnimatePresence>
    </LogoWrapper>
  );
};

export default AnimatedLogo;