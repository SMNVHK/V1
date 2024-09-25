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
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

const AppWrapper = styled('div')({
  position: 'relative',
  minHeight: '100vh',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
});

const GlassEffect = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
  backdropFilter: 'blur(2px)', // Réduction légère du flou
  zIndex: 1,
  pointerEvents: 'none', // Permet de cliquer à travers cette couche
});

const ContentWrapper = styled('div')({
  flex: 1,
  overflow: 'auto',
});

const GlobalStyle = createGlobalStyle`
  @keyframes fadeInOut {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
  }

  @keyframes fadeOutIn {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }

  body {
    overflow-x: hidden;
  }

  .background {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .blue-purple {
    background: linear-gradient(to right, #1D2B64, #F8CDDA);
    animation: fadeInOut 25s ease infinite;
  }

  .green-blue {
    background: linear-gradient(to right, #43cea2, #185a9d);
    animation: fadeOutIn 25s ease infinite;
  }
`;

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <AppWrapper>
            <Header /> {/* Assurez-vous que le Header est inclus ici */}
            <ContentWrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/portfolio" element={<Portfolio />} />
              </Routes>
            </ContentWrapper>
          </AppWrapper>
        </Router>
      </MuiThemeProvider>
    </ThemeProvider>
  );
};

export default App;