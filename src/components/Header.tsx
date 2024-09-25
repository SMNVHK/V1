import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import { useTheme } from './ThemeSwitch';
import NewStylishButton from './NewStylishButton';
import { useNavigate } from 'react-router-dom';
import AnimatedLogo from './AnimatedLogo';


const StyledAppBar = styled(AppBar)<{ bgcolor: string }>(({ bgcolor }) => ({
  backgroundColor: `${bgcolor}CC`,
  backdropFilter: 'blur(10px)',
  boxShadow: 'none',
  zIndex: 1000,
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
  top: '6px',
  left: '40px',
  zIndex: 1001,
});

const Title = styled(Typography)<{ textcolor: string }>(({ textcolor }) => ({
  fontWeight: 'bold',
  fontSize: '76px',
  color: textcolor,
  textShadow: '0 0 10px rgba(97, 218, 251, 0.5)',
  marginLeft: '-5px',
  marginTop: '-139px',
  
  fontFamily: '"Space Grotesk", sans-serif',
  letterSpacing: '-8px', // Réduire l'espacement entre les lettres
}));

const ButtonContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
  '& > *': {
    marginLeft: '10px',
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
        return '#ffffff';
      case 'pink':
        return '#000000';
      case 'green':
        return '#00FF00';
      default:
        return '#61dafb';
    }
  };

  const NavButton = styled(NewStylishButton)<{ textcolor: string }>(({ textcolor }) => ({
    fontWeight: 'bold',
    fontSize: '16px', // Plus petit que le titre
    color: textcolor,
    textShadow: '0 0 10px rgba(97, 218, 251, 0.5)',
    fontFamily: '"Space Grotesk", sans-serif',
    marginLeft: '10px',
    '&:hover': {
      color: '#61dafb', // Couleur de survol
    },
  }));

  return (
    <StyledAppBar position="static" bgcolor={colors.primary}>
      <StyledToolbar>
        <LogoContainer>
          <AnimatedLogo />
          <Title variant="h1" textcolor={getTitleColor()}>boldpixel</Title>
        </LogoContainer>
        <ButtonContainer>
          <NavButton textcolor={colors.primary} onClick={() => navigate('/')}>Accueil</NavButton>
          <NavButton textcolor={colors.primary} onClick={() => navigate('/services')}>Services</NavButton>
          <NavButton textcolor={colors.primary} onClick={() => navigate('/pricing')}>Tarifs</NavButton>
          <NavButton textcolor={colors.primary} onClick={() => navigate('/portfolio')}>Portfolio</NavButton>
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
  );
};

export default Header;