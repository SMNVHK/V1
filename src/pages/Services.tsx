import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typography, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import AnimatedBackground from '../components/AnimatedBackground';
import StylishButton from '../components/StylishButton';

const Hero = styled('div')({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: 'white',
  position: 'relative',
  overflow: 'hidden',
});

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

const AnimatedBackgroundWrapper = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
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

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  color: 'white',
}));

const Services: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero>
        <AnimatedBackgroundWrapper>
          <AnimatedBackground />
        </AnimatedBackgroundWrapper>
        <OpaqueLayer />
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <HeroContent>
            <Typography variant="h2" gutterBottom>
              Nos Services
            </Typography>
            <Typography variant="h5" gutterBottom>
              Des solutions web sur mesure pour votre succès en ligne
            </Typography>
          </HeroContent>
        </motion.div>
      </Hero>
      <Container component={Section}>
        <Typography variant="h3" gutterBottom align="center">
          Ce que nous offrons
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: 'Conception Web',
              description: 'Création de designs uniques et attrayants pour votre site web, adaptés à votre marque et à vos objectifs.'
            },
            {
              title: 'Développement',
              description: 'Développement de sites web performants et responsifs, utilisant les dernières technologies pour garantir une expérience utilisateur optimale.'
            },
            {
              title: 'SEO',
              description: 'Optimisation de votre site pour les moteurs de recherche, afin d\'améliorer votre visibilité en ligne et attirer plus de visiteurs.'
            },
            // Nouveau contenu ajouté
            {
              title: 'Maintenance',
              description: 'Services de maintenance régulière pour assurer la mise à jour et le bon fonctionnement de votre site.'
            },
            {
              title: 'Intégration API',
              description: 'Intégration d\'API tierces pour étendre les fonctionnalités de votre site web.'
            }
          ].map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <StyledPaper>
                  <Typography variant="h5" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography>
                    {service.description}
                  </Typography>
                  <StylishButton>En savoir plus</StylishButton>
                </StyledPaper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
};

export default Services;