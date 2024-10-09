import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Box, Typography, useMediaQuery } from '@mui/material';
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
  zIndex: 1100,
  height: '80px',
});

const StyledAppBar = styled(AppBar)<{ bgcolor: string }>(({ bgcolor }) => ({
  backgroundColor: `${bgcolor}CC`,
  backdropFilter: 'blur(10px)',
  boxShadow: 'none',
  zIndex: 1100,
  height: '80px',
  display: 'flex',
  justifyContent: 'center',
  fontFamily: 'Manrope, sans-serif',
}));

const Header: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { setTheme, colors, currentTheme } = useTheme();
  const navigate = useNavigate();

  const isMobile = useMediaQuery('(max-width:768px)');

  const StyledToolbar = styled(Toolbar)({
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    padding: '0 20px',
  });

  const LogoContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: '3px',
    left: isMobile ? '10px' : '20px',
    zIndex: 1001,
  });

  const Title = styled(motion.div)<{ textcolor: string }>(({ textcolor }) => ({
    fontWeight: 'bold',
    fontSize: isMobile ? '48px' : '78px',
    color: textcolor,
    textShadow: '0 0 5px rgba(97, 218, 251, 0.3)',
    marginLeft: isMobile ? '-80px' : '-100px',
    marginTop: '-139px',
    fontFamily: '"Space Grotesk", sans-serif',
    letterSpacing: isMobile ? '-4px' : '-8px',
    cursor: 'pointer',
  }));

  const ButtonContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    '& > *': {
      marginLeft: '20px',
    },
  });

  const ColorBubble = styled('div')<{ color: string }>(({ color }) => ({
    width: isMobile ? '16px' : '20px',
    height: isMobile ? '16px' : '20px',
    borderRadius: '50%',
    backgroundColor: color,
    cursor: 'pointer',
  }));

  const StyledMenu = styled(Menu)(({ theme }) => ({
    '& .MuiPaper-root': {
      width: isMobile ? '200px' : 'auto',
      right: isMobile ? '0 !important' : 'auto',
      left: 'auto !important',
    },
  }));

  const ColorBubbleContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: '8px',
  });

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = (theme: 'blue' | 'pink' | 'green') => {
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
        return '#FF1493';
      case 'green':
        return '#00FF00';
      default:
        return '#61dafb';
    }
  };

  const NavButton = styled(motion.div)<{ textcolor: string; themecolor: string }>(({ textcolor, themecolor }) => ({
    fontWeight: 'bold',
    fontSize: '20px',
    color: textcolor,
    cursor: 'pointer',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-5px',
      left: 0,
      width: '100%',
      height: '2px',
      backgroundColor: themecolor,
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
    hover: {
      backgroundColor: `${getThemeColor()}33`,
      transition: { duration: 0.3 }
    },
    tap: {
      backgroundColor: `${getThemeColor()}4D`,
      transition: { duration: 0.1 }
    }
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    handleClose();
  };

  const menuItems = ['ACCUEIL', 'SERVICES', 'PRICING', 'PORTFOLIO'];

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
            {!isMobile && (
              <>
                {menuItems.map((text, index) => (
                  <NavButton
                    key={index}
                    className="header-menu"
                    textcolor={colors.text}
                    themecolor={getThemeColor()}
                    onClick={() => handleNavigation(text === 'ACCUEIL' ? '/' : `/${text.toLowerCase()}`)}
                    variants={buttonVariants}
                    custom={getThemeColor()}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    {text}
                  </NavButton>
                ))}
              </>
            )}
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
          <StyledMenu
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
            {isMobile && menuItems.map((text, index) => (
              <MenuItem key={index} onClick={() => handleNavigation(text === 'ACCUEIL' ? '/' : `/${text.toLowerCase()}`)}>
                {text}
              </MenuItem>
            ))}
            {isMobile ? (
              <ColorBubbleContainer>
                <ColorBubble color="#3f51b5" onClick={() => handleThemeChange('blue')} />
                <ColorBubble color="#f50057" onClick={() => handleThemeChange('pink')} />
                <ColorBubble color="#4caf50" onClick={() => handleThemeChange('green')} />
              </ColorBubbleContainer>
            ) : (
              <>
                <MenuItem onClick={() => handleThemeChange('blue')}>
                  <ColorBubble color="#3f51b5" />
                </MenuItem>
                <MenuItem onClick={() => handleThemeChange('pink')}>
                  <ColorBubble color="#f50057" />
                </MenuItem>
                <MenuItem onClick={() => handleThemeChange('green')}>
                  <ColorBubble color="#4caf50" />
                </MenuItem>
              </>
            )}
          </StyledMenu>
        </StyledToolbar>
      </StyledAppBar>
    </HeaderWrapper>
  );
};

export default Header;