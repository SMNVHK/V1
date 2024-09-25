import React from 'react';
import { motion } from 'framer-motion';
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

const Pricing: React.FC = () => {
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
              Nos Tarifs
            </Typography>
            <Typography variant="h5" gutterBottom>
              Des solutions adaptées à tous les budgets
            </Typography>
          </HeroContent>
        </motion.div>
      </Hero>
      <Container component={Section}>
        <Typography variant="h3" gutterBottom align="center">
          Choisissez votre plan
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: 'Basique',
              price: '€500',
              features: [
                'Design personnalisé',
                'Site web responsive',
                'Support par email'
              ]
            },
            {
              title: 'Standard',
              price: '€1000',
              features: [
                'Tout du plan Basique',
                'Optimisation SEO',
                'Support par téléphone'
              ]
            },
            {
              title: 'Premium',
              price: '€2000',
              features: [
                'Tout du plan Standard',
                'Maintenance mensuelle',
                'Support 24/7'
              ]
            },
            // Nouveau contenu ajouté
            {
              title: 'Entreprise',
              price: '€5000',
              features: [
                'Tout du plan Premium',
                'Développement sur mesure',
                'Consulting stratégique'
              ]
            }
          ].map((plan, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <StyledPaper>
                  <Typography variant="h5" gutterBottom>
                    {plan.title}
                  </Typography>
                  <Typography variant="h4" gutterBottom>
                    {plan.price}
                  </Typography>
                  <ul>
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <StylishButton>Choisir ce plan</StylishButton>
                </StyledPaper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
};

export default Pricing;