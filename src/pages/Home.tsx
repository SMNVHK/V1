import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Typography, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import StylishButton from '../components/StylishButton';
import AnimatedBackground from '../components/AnimatedBackground';
import TransitionAnimation from '../components/TransitionAnimation';
import { useTheme } from '../components/ThemeSwitch';

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
  backgroundColor: 'rgba(26, 35, 126, 0.2)', // Ajustez l'opacité selon vos préférences
  zIndex: 3,
});

const Section = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
}));

const Home: React.FC = () => {
  const { colors } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Section Hero */}
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
              Créez votre présence en ligne avec élégance
            </Typography>
            <Typography variant="h5" gutterBottom>
              WebCraft Studio : Des sites web sur mesure qui captivent votre audience et boostent votre visibilité
            </Typography>
            <Typography variant="body1">
              Découvrez nos services innovants pour transformer votre vision en réalité numérique
            </Typography>
          </HeroContent>
        </motion.div>
      </Hero>
      {/* Section "Notre Approche" */}
      <Container component={Section}>
        <Typography variant="h3" gutterBottom align="center">
          Notre Approche
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: 'Innovation',
              description: 'Nous utilisons les dernières technologies pour créer des sites web modernes et performants.'
            },
            {
              title: 'Personnalisation',
              description: 'Chaque projet est unique et nous nous assurons qu\'il reflète parfaitement votre identité.'
            },
            {
              title: 'Support',
              description: 'Nous offrons un support continu pour garantir le bon fonctionnement de votre site.'
            },
            {
              title: 'Sécurité',
              description: 'Nous implémentons des mesures de sécurité avancées pour protéger votre site et vos données.'
            },
            {
              title: 'Optimisation',
              description: 'Optimisation des performances pour un chargement rapide et une meilleure expérience utilisateur.'
            }
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <StyledPaper>
                  <Typography variant="h5" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography>
                    {item.description}
                  </Typography>
                </StyledPaper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Nouvelle Section "Témoignages" */}
      <Container component={Section}>
        <Typography variant="h3" gutterBottom align="center">
          Ce que disent nos clients
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              name: 'Marie Dupont',
              testimonial: 'WebCraft Studio a transformé notre présence en ligne. Leur équipe est professionnelle et créative.',
              image: 'clients/marie.jpg' // Ajoutez cette image dans le dossier public
            },
            {
              name: 'Jean Martin',
              testimonial: 'Grâce à WebCraft, notre site e-commerce a vu ses ventes augmenter de 50%. Je recommande vivement leurs services.',
              image: 'clients/jean.jpg' // Ajoutez cette image dans le dossier public
            },
            {
              name: 'Sophie Lemoine',
              testimonial: 'Leur support client est exceptionnel. Ils sont toujours disponibles pour répondre à nos besoins.',
              image: 'clients/sophie.jpg' // Ajoutez cette image dans le dossier public
            }
          ].map((client, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <StyledPaper>
                  {/* Image du client */}
                  <img 
                    src={`/${client.image}`} 
                    alt={client.name} 
                    style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem' }} 
                  />
                  <Typography variant="h5" gutterBottom>
                    {client.name}
                  </Typography>
                  <Typography>
                    "{client.testimonial}"
                  </Typography>
                </StyledPaper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Section "Nos Réalisations Récentes" */}
      <Container component={Section}>
        <Typography variant="h3" gutterBottom align="center">
          Nos Réalisations Récentes
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: 'E-commerce Innovant',
              description: 'Plateforme de vente en ligne avec une expérience utilisateur fluide et des fonctionnalités de pointe.',
              technologies: 'React, Node.js, MongoDB'
            },
            {
              title: 'Application Web Progressive',
              description: 'Application performante accessible sur tous les appareils, offrant une expérience proche du natif.',
              technologies: 'Vue.js, Firebase, Service Workers'
            },
            {
              title: 'Site Vitrine Dynamique',
              description: 'Présentation élégante et interactive d\'une entreprise, avec des animations subtiles et un design responsive.',
              technologies: 'Next.js, Framer Motion, Tailwind CSS'
            },
            {
              title: 'Blog Personnel',
              description: 'Plateforme de blog avec gestion de contenu facile et intégration des réseaux sociaux.',
              technologies: 'Gatsby, GraphQL, Contentful'
            },
            {
              title: 'Application Mobile',
              description: 'Application mobile cross-platform offrant une expérience utilisateur intuitive et réactive.',
              technologies: 'React Native, Redux, Firebase'
            }
          ].map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <StyledPaper>
                  <Typography variant="h5" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography>
                    {project.description}
                  </Typography>
                  <Typography variant="body2" style={{ marginTop: '10px', color: colors.secondary }}>
                    Technologies : {project.technologies}
                  </Typography>
                  <StylishButton>Voir le projet</StylishButton>
                </StyledPaper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Troisième Section avec 6 Boutons */}
      <Container component={Section}>
        <Typography variant="h3" gutterBottom align="center">
          Explorez nos fonctionnalités
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              title: 'Analyse SEO',
              description: 'Optimisez votre site pour les moteurs de recherche et augmentez votre visibilité en ligne.',
              icon: 'icons/seo.png' // Optionnel : ajoutez des icônes dans le dossier public
            },
            {
              title: 'Design Responsive',
              description: 'Assurez une expérience utilisateur optimale sur tous les appareils.',
              icon: 'icons/responsive.png'
            },
            {
              title: 'Sécurité Web',
              description: 'Protection avancée contre les menaces et les attaques en ligne.',
              icon: 'icons/security.png'
            },
            {
              title: 'Support 24/7',
              description: 'Assistance continue pour répondre à toutes vos questions et besoins.',
              icon: 'icons/support.png'
            },
            {
              title: 'Intégration API',
              description: 'Connectez votre site avec diverses API pour des fonctionnalités étendues.',
              icon: 'icons/api.png'
            },
            {
              title: 'Maintenance Régulière',
              description: 'Mises à jour et maintenance pour garantir le bon fonctionnement de votre site.',
              icon: 'icons/maintenance.png'
            }
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <StyledPaper style={{ minHeight: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  {/* Optionnel : Icône de la fonctionnalité */}
                  {feature.icon && (
                    <img 
                      src={`/${feature.icon}`} 
                      alt={feature.title} 
                      style={{ width: '50px', height: '50px', marginBottom: '1rem' }} 
                    />
                  )}
                  <Typography variant="h5" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography>
                    {feature.description}
                  </Typography>
                </StyledPaper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
};

export default Home;