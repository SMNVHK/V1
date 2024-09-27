import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import AnimatedBackground from '../components/AnimatedBackground';
import StylishButton from '../components/StylishButton';

const PageContent = styled('div')({
  paddingTop: '120px',
});

const ContentFrame = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 3,
  padding: '2rem',
  borderRadius: '15px',
  backgroundColor: theme.palette.background.paper, // Utilisation de la couleur de fond du thème
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  color: theme.palette.text.primary, // Utilisation de la couleur de texte du thème
  marginBottom: theme.spacing(4),
  marginTop: theme.spacing(4),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  backgroundColor: theme.palette.background.paper, // Utilisation de la couleur de fond du thème
  backdropFilter: 'blur(10px)',
  color: theme.palette.text.primary, // Utilisation de la couleur de texte du thème
}));

const Pricing: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ position: 'relative', zIndex: 1 }}
    >
      <AnimatedBackground />
      <PageContent>
        <Container>
          <ContentFrame>
            <Typography variant="h2" gutterBottom>
              Nos Tarifs
            </Typography>
            <Typography variant="h5" gutterBottom>
              Des solutions adaptées à tous les budgets
            </Typography>
          </ContentFrame>

          <ContentFrame>
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
                <Grid item xs={12} md={3} key={index}>
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
          </ContentFrame>
        </Container>
      </PageContent>
    </motion.div>
  );
};

export default Pricing;