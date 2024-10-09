import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { useTheme } from './ThemeSwitch';
import { Link } from 'react-router-dom';

interface AnimatedLogoProps {
  isHovered: boolean;
}

const LogoWrapper = styled(motion.div)({
  position: 'relative',
  width: '204px',
  height: '204px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'visible',
});

// Suppression de LogoImage

const MenuContainer = styled(motion.div)<{ bgcolor: string }>(({ bgcolor }) => ({
  position: 'absolute',
  left: '50%', // Modifié : centré par rapport au titre
  top: 'calc(35% + 5px)',
  transform: 'translateX(-50%)', // Modifié : centré par rapport au titre
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 999,
  padding: '2px 10px',
  backgroundColor: bgcolor,
  borderRadius: '0 0 5px 5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  whiteSpace: 'nowrap',
}));

const MenuItem = styled(motion(Link))<{ textcolor: string }>(({ textcolor }) => ({
  margin: '0 5px',
  padding: '2px 5px',
  color: textcolor,
  textDecoration: 'none',
  fontSize: '0.8rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  zIndex: 999,
  position: 'relative',
  overflow: 'hidden',
  fontFamily: '"Space Grotesk", sans-serif',
  letterSpacing: '-0.5px',
  textShadow: '0 0 3px rgba(97, 218, 251, 0.5)',
}));

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ isHovered }) => {
  const { colors } = useTheme();

  const menuItems = [
    { text: 'L\'ÉQUIPE', link: '/team' },
    { text: 'LE CONTACT', link: '/contact' },
    { text: 'LES PROJETS', link: '/projects' },
  ];

  const headerColor = `${colors.primary}CC`;

  return (
    <LogoWrapper>
      {/* Suppression de LogoImage */}
      <AnimatePresence>
        {isHovered && (
          <MenuContainer
            className="mouse-hover-menu"
            bgcolor={headerColor}
            initial={{ opacity: 0, y: -6, scaleY: 0 }}
            animate={{ opacity: 1, y: 1, scaleY: 1 }}
            exit={{ opacity: 0, y: -6, scaleY: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {menuItems.map((item, index) => (
              <MenuItem
                key={index}
                to={item.link}
                textcolor={colors.text}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ 
                  duration: 0.15, 
                  delay: index * 0.03,
                }}
              >
                <Typography variant="body2" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.5px' }}>
                  {item.text}
                </Typography>
              </MenuItem>
            ))}
          </MenuContainer>
        )}
      </AnimatePresence>
    </LogoWrapper>
  );
};

export default AnimatedLogo;