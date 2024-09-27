import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import AnimatedBackground from './components/AnimatedBackground';
import Portfolio from './pages/Portfolio';
import { ThemeProvider } from './components/ThemeSwitch';
import { createGlobalStyle } from 'styled-components';


const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: '"Roboto Condensed", "Arial", sans-serif',
    fontWeightLight: 300,
    body1: {
      fontWeight: 300,
    },
    body2: {
      fontWeight: 300,
    },
  },
});

const AppWrapper = styled('div')({
  position: 'relative',
  minHeight: '100vh',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '80px', // Ajout de cette ligne
});

const GlassEffect = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
  backdropFilter: 'blur(2px)',
  zIndex: 0, // Changé de 1 à 0
  pointerEvents: 'none',
});

const PageContent = styled('div')({
  fontFamily: '"Roboto Condensed", Arial, sans-serif',
  fontWeight: 300,
  paddingTop: '0', // Changé de 80px à 0
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <AppWrapper>
            <AnimatedBackground />
            <GlassEffect />
            <Header />
            <PageContent>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/portfolio" element={<Portfolio />} />
              </Routes>
            </PageContent>
          </AppWrapper>
        </Router>
      </MuiThemeProvider>
    </ThemeProvider>
  );
};

export default App;