import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import { useTheme } from './ThemeSwitch';
import { useNavigate } from 'react-router-dom';
import AnimatedLogo from './AnimatedLogo';
import { motion } from 'framer-motion';

const HeaderWrapper = styled('header')({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1100, // Cette valeur doit être supérieure au z-index du menu déroulant
  height: '80px', // Assurez-vous que cette hauteur correspond à votre design
  // ... autres styles
});

const StyledAppBar = styled(AppBar)<{ bgcolor: string }>(({ bgcolor }) => ({
  backgroundColor: `${bgcolor}CC`,
  backdropFilter: 'blur(10px)',
  boxShadow: 'none',
  zIndex: 1100, // Assurez-vous que cette valeur est supérieure au z-index du menu déroulant
  height: '80px',
  display: 'flex',
  justifyContent: 'center',
  fontFamily: 'Manrope, sans-serif',
}));

const StyledToolbar = styled(Toolbar)({
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
});

const LogoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  top: '3px', // Remonter de 3 pixels
  left: '5px', // Décalé encore plus à gauche
  zIndex: 1001,
});

const Title = styled(motion.div)<{ textcolor: string }>(({ textcolor }) => ({
  fontWeight: 'bold',
  fontSize: '76px',
  color: textcolor,
  textShadow: '0 0 5px rgba(97, 218, 251, 0.3)', // Diminuer l'intensité du glow
  marginLeft: '-15px',
  marginTop: '-139px',
  fontFamily: '"Space Grotesk", sans-serif',
  letterSpacing: '-8px',
  cursor: 'pointer', // Ajouté pour indiquer que c'est interactif
}));

const ButtonContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
  marginRight: '40px', // Ajouté pour déplacer les boutons vers la gauche
  '& > *': {
    marginLeft: '20px', // Augmenté l'espacement entre les boutons
  },
});

const ColorBubble = styled('div')<{ color: string }>(({ color }) => ({
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  backgroundColor: color,
  cursor: 'pointer',
}));

type ThemeType = 'blue' | 'pink' | 'green';

const Header: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { setTheme, colors, currentTheme } = useTheme();
  const navigate = useNavigate();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (theme: ThemeType) => {
    setTheme(theme);
    handleClose();
  };

  const getTitleColor = () => {
    switch (currentTheme) {
      case 'blue':
      case 'green':
        return '#ffffff';
      case 'pink':
        return '#000000';
      default:
        return '#61dafb';
    }
  };

  const getThemeColor = () => {
    switch (currentTheme) {
      case 'blue':
        return '#61dafb';
      case 'pink':
        return '#FF1493'; // Rose plus foncé pour une meilleure visibilité
      case 'green':
        return '#00FF00';
      default:
        return '#61dafb';
    }
  };

  const NavButton = styled(motion.div)<{ textcolor: string; themecolor: string }>(({ textcolor, themecolor }) => ({
    fontWeight: 'bold',
    fontSize: '20px', // Augmenté encore la taille de la police
    color: textcolor,
    textShadow: '0 0 3px rgba(97, 218, 251, 0.5)',
    fontFamily: '"Space Grotesk", sans-serif',
    letterSpacing: '-0.5px',
    cursor: 'pointer',
    padding: '8px 16px', // Ajout de padding pour agrandir le bouton
    position: 'relative',
    overflow: 'hidden',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '2px',
      background: themecolor, // Utilisation de la couleur du thème
      transform: 'scaleX(0)',
      transformOrigin: 'right',
      transition: 'transform 0.3s ease',
    },
    '&:hover::after': {
      transform: 'scaleX(1)',
      transformOrigin: 'left',
    },
  }));

  const buttonVariants = {
    hover: (themecolor: string) => ({
      backgroundColor: `${themecolor}1A`, // Ajout d'une transparence de 10%
      transition: { duration: 0.3 }
    }),
    tap: (themecolor: string) => ({
      backgroundColor: `${themecolor}33`, // Ajout d'une transparence de 20%
      transition: { duration: 0.1 }
    })
  };

  return (
    <HeaderWrapper>
      <StyledAppBar position="static" bgcolor={colors.primary}>
        <StyledToolbar>
          <LogoContainer
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatedLogo isHovered={isHovered} />
            <Title 
              className="boldpixel-title"
              textcolor={getTitleColor()}
              animate={{
                filter: isHovered ? `brightness(1.2) drop-shadow(0 0 15px white)` : 'brightness(1)',
              }}
              transition={{ duration: 0.3 }}
            >
              boldpixel
            </Title>
          </LogoContainer>
          <ButtonContainer>
            {['ACCUEIL', 'SERVICES', 'PRICING', 'PORTFOLIO'].map((text, index) => (
              <NavButton
                key={index}
                className="header-menu"
                textcolor={colors.text}
                themecolor={getThemeColor()} // Ajout de la couleur du thème
                onClick={() => navigate(text === 'ACCUEIL' ? '/' : `/${text.toLowerCase()}`)}
                variants={buttonVariants}
                custom={getThemeColor()} // Passage de la couleur du thème aux variants
                whileHover="hover"
                whileTap="tap"
              >
                {text}
              </NavButton>
            ))}
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
          </ButtonContainer>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              style: {
                backgroundColor: colors.background,
                color: colors.text,
              },
            }}
          >
            <MenuItem onClick={() => handleThemeChange('blue')}>
              <ColorBubble color="#3f51b5" />
            </MenuItem>
            <MenuItem onClick={() => handleThemeChange('pink')}>
              <ColorBubble color="#f50057" />
            </MenuItem>
            <MenuItem onClick={() => handleThemeChange('green')}>
              <ColorBubble color="#4caf50" />
            </MenuItem>
          </Menu>
        </StyledToolbar>
      </StyledAppBar>
    </HeaderWrapper>
  );
};

export default Header;