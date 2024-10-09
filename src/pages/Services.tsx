import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Box, Button, Grid, Card, CardContent, TypographyProps, Icon } from '@mui/material';
import { styled } from '@mui/material/styles';
import AnimatedBackground from '../components/AnimatedBackground';
import { useTheme } from '../components/ThemeSwitch';
import { WebOutlined, CodeOutlined, SearchOutlined, BuildOutlined } from '@mui/icons-material';

const PageContent = styled('div')({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
  gap: '4rem',
});

const ContentFrame = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 3,
  padding: '3rem',
  borderRadius: '15px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  width: '100%',
  maxWidth: '1200px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: '2rem 1rem',
  },
}));

const BlueTypography = styled(Typography)<TypographyProps>(() => {
  const { colors } = useTheme();
  return {
    color: colors.primary,
    opacity: 0.9,
  };
});

const WhiteTypography = styled(Typography)<TypographyProps>(() => {
  const { colors } = useTheme();
  return {
    color: colors.text,
  };
});

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  transition: 'transform 0.3s ease-in-out',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
}));

const IconWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const Services: React.FC = () => {
  const { colors } = useTheme();

  const services = [
    { title: 'Conception de sites web', description: 'Des sites web modernes et réactifs qui captivent votre audience.', icon: <WebOutlined fontSize="large" /> },
    { title: 'Développement d\'applications', description: 'Des applications web et mobiles performantes pour répondre à vos besoins spécifiques.', icon: <CodeOutlined fontSize="large" /> },
    { title: 'Optimisation SEO', description: 'Améliorez votre visibilité en ligne et attirez plus de clients potentiels.', icon: <SearchOutlined fontSize="large" /> },
    { title: 'Maintenance et support', description: 'Un support continu pour garantir le bon fonctionnement de vos solutions numériques.', icon: <BuildOutlined fontSize="large" /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ position: 'relative', minHeight: '100vh' }}
    >
      <AnimatedBackground />
      <PageContent>
        <ContentFrame>
          <BlueTypography variant="h3" component="h1" gutterBottom sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 'bold', letterSpacing: '-2px' }}>
            Nos Services
          </BlueTypography>
          <WhiteTypography variant="h5" gutterBottom>
            Des solutions web innovantes pour votre entreprise
          </WhiteTypography>
          <WhiteTypography variant="body1" paragraph align="center">
            Chez Boldpixel, nous offrons une gamme complète de services web pour répondre à tous vos besoins numériques. Notre équipe d'experts est prête à transformer votre vision en réalité.
          </WhiteTypography>
        </ContentFrame>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <StyledCard>
                <CardContent>
                  <IconWrapper>
                    <Icon component={motion.div} whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} style={{ color: colors.primary }}>
                      {service.icon}
                    </Icon>
                  </IconWrapper>
                  <BlueTypography variant="h6" gutterBottom align="center">
                    {service.title}
                  </BlueTypography>
                  <WhiteTypography variant="body2" align="center">
                    {service.description}
                  </WhiteTypography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        <ContentFrame>
          <BlueTypography variant="h4" gutterBottom>
            Notre Processus et Pourquoi Nous Choisir
          </BlueTypography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <WhiteTypography variant="h6" gutterBottom>Notre Processus</WhiteTypography>
              <Box mb={2}>
                <BlueTypography variant="subtitle1">1. Consultation</BlueTypography>
                <WhiteTypography variant="body2">Nous discutons de vos besoins et objectifs pour comprendre votre vision.</WhiteTypography>
              </Box>
              <Box mb={2}>
                <BlueTypography variant="subtitle1">2. Planification</BlueTypography>
                <WhiteTypography variant="body2">Nous élaborons une stratégie détaillée et un plan de projet sur mesure.</WhiteTypography>
              </Box>
              <Box mb={2}>
                <BlueTypography variant="subtitle1">3. Création</BlueTypography>
                <WhiteTypography variant="body2">Notre équipe développe votre solution en utilisant les dernières technologies.</WhiteTypography>
              </Box>
              <Box>
                <BlueTypography variant="subtitle1">4. Lancement et Support</BlueTypography>
                <WhiteTypography variant="body2">Nous lançons votre projet et fournissons un support continu pour assurer son succès.</WhiteTypography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <WhiteTypography variant="h6" gutterBottom>Pourquoi Choisir Boldpixel ?</WhiteTypography>
              <Box mb={2}>
                <BlueTypography variant="subtitle1">Expertise Technique</BlueTypography>
                <WhiteTypography variant="body2">Notre équipe maîtrise les dernières technologies web pour créer des solutions performantes.</WhiteTypography>
              </Box>
              <Box mb={2}>
                <BlueTypography variant="subtitle1">Design Créatif</BlueTypography>
                <WhiteTypography variant="body2">Nous combinons esthétique et fonctionnalité pour créer des expériences utilisateur uniques.</WhiteTypography>
              </Box>
              <Box mb={2}>
                <BlueTypography variant="subtitle1">Support Personnalisé</BlueTypography>
                <WhiteTypography variant="body2">Nous sommes là pour vous à chaque étape, assurant une communication claire et un support continu.</WhiteTypography>
              </Box>
              <Box>
                <BlueTypography variant="subtitle1">Résultats Mesurables</BlueTypography>
                <WhiteTypography variant="body2">Nous nous concentrons sur la création de solutions qui apportent une réelle valeur à votre entreprise.</WhiteTypography>
              </Box>
            </Grid>
          </Grid>
        </ContentFrame>

        <ContentFrame>
          <WhiteTypography variant="h5" gutterBottom>
            Prêt à donner vie à votre projet web ?
          </WhiteTypography>
          <BlueTypography paragraph>
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et commencer votre transformation numérique avec Boldpixel.
          </BlueTypography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ marginTop: '1rem', backgroundColor: colors.primary, color: colors.text }}
          >
            Demander un devis
          </Button>
        </ContentFrame>
      </PageContent>
    </motion.div>
  );
};

export default Services;