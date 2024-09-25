import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import VideoBackground from '../components/VideoBackground';
import StylishButton from '../components/StylishButton';
import { useTheme } from '../components/ThemeSwitch';

const Hero = styled('div')(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: 'white',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 0,
  backgroundColor: theme.palette.background.default,
}));

const HeroContent = styled('div')({
  position: 'relative',
  zIndex: 3,
  padding: '2rem',
  borderRadius: '15px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
});

const OpaqueLayer = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(26, 35, 126, 0.2)',
  zIndex: 2,
});

const Section = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

const Portfolio: React.FC = () => {
  const { colors } = useTheme();

  const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    textAlign: 'center',
    backgroundColor: colors.background,
    color: colors.text,
  }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero>
        <VideoBackground />
        <OpaqueLayer />
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <HeroContent>
            <Typography variant="h2" gutterBottom>
              Notre Portfolio
            </Typography>
            <Typography variant="h5" gutterBottom>
              Découvrez nos réalisations exceptionnelles
            </Typography>
          </HeroContent>
        </motion.div>
      </Hero>
      <Container component={Section}>
        <Grid container spacing={4}>
          {['Projet 1', 'Projet 2', 'Projet 3', 'Projet 4', 'Projet 5'].map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <StyledPaper>
                  <Typography variant="h5" gutterBottom>
                    {project}
                  </Typography>
                  <Typography>
                    Description du projet et technologies utilisées.
                  </Typography>
                  <StylishButton>Voir le projet</StylishButton>
                </StyledPaper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
};

export default Portfolio;