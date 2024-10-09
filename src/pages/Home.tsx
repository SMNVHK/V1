import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Typography, Container, Grid, Paper, Button, Card, Box, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import StylishButton from '../components/StylishButton';
import AnimatedBackground from '../components/AnimatedBackground';
import { useTheme } from '../components/ThemeSwitch';
import TextScrambleEffect from '../components/TextScrambleEffect';

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

const PageContent = styled('div')({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Centre horizontalement
  justifyContent: 'center', // Centre verticalement
  padding: '2rem',
  gap: '2rem', // Ajoute de l'espacement entre les éléments
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
  maxWidth: '800px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center', // Centrer le texte
  [theme.breakpoints.down('sm')]: {
    padding: '2rem 1rem',
  },
}));

const HighlightedText = styled(motion.span)(() => {
  const { colors } = useTheme();
  return {
    color: colors.primary,
    fontWeight: 'bold',
  };
});

const StyledCard = styled(Card)(({ theme }) => {
  const { colors, currentTheme } = useTheme();
  
  const getCardBackgroundColor = () => {
    switch (currentTheme) {
      case 'blue':
        return 'rgba(97, 218, 251, 0.1)'; // Variante légère de bleu
      case 'pink':
        return 'rgba(255, 20, 147, 0.1)'; // Variante légère de rose
      case 'green':
        return 'rgba(0, 255, 0, 0.1)'; // Variante légère de vert
      default:
        return 'rgba(97, 218, 251, 0.1)';
    }
  };

  return {
    backgroundColor: getCardBackgroundColor(),
    color: colors.text,
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(5px)',
    
    height: '100%', // Assurer une hauteur constante
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };
});

const StyledButton = styled(Button)(() => {
  const { colors } = useTheme();
  return {
    backgroundColor: colors.primary,
    color: colors.text,
    '&:hover': {
      backgroundColor: colors.secondary,
    },
  };
});

const StyledTypography = styled(Typography)<TypographyProps>(() => {
  const { colors } = useTheme();
  return {
    color: colors.text,
  };
});

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

const Home: React.FC = () => {
  const { colors } = useTheme();
  const navigate = useNavigate();

  const scrambleWords = ['innovantes', 'créatives', 'uniques', 'performantes'];

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
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <StyledTypography 
              variant="h3" 
              component="h1" 
              gutterBottom 
              sx={{ 
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 'bold',
                letterSpacing: '-2px'
              }}
            >
              Bienvenue chez <HighlightedText>Boldpixel</HighlightedText>
            </StyledTypography>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <StyledTypography variant="h5" gutterBottom>
              Nous créons des solutions web{' '}
              <TextScrambleEffect phrases={scrambleWords} />
            </StyledTypography>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <StyledTypography variant="body1" paragraph>
              Transformez votre présence en ligne avec nos sites web sur mesure, conçus pour captiver votre audience et booster votre visibilité.
            </StyledTypography>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <StyledButton
              variant="contained"
              size="large"
              style={{ marginTop: '1rem' }}
            >
              Découvrez nos services
            </StyledButton>
          </motion.div>
        </ContentFrame>

        <ContentFrame>
          <BlueTypography variant="h4" gutterBottom>
            Notre Approche
          </BlueTypography>
          <Box display="flex" justifyContent="space-between" flexWrap="wrap">
            <Box flex="1" minWidth="200px" margin="1rem">
              <BlueTypography variant="h6">Innovation</BlueTypography>
              <WhiteTypography>
                Nous utilisons les dernières technologies pour créer des sites web modernes et performants.
              </WhiteTypography>
            </Box>
            <Box flex="1" minWidth="200px" margin="1rem">
              <BlueTypography variant="h6">Personnalisation</BlueTypography>
              <WhiteTypography>
                Chaque projet est unique et nous nous assurons qu'il reflète parfaitement votre identité.
              </WhiteTypography>
            </Box>
            <Box flex="1" minWidth="200px" margin="1rem">
              <BlueTypography variant="h6">Support</BlueTypography>
              <WhiteTypography>
                Nous offrons un support continu pour garantir le bon fonctionnement de votre site.
              </WhiteTypography>
            </Box>
          </Box>
        </ContentFrame>

        {/* Section "À Propos de Nous" */}
        <ContentFrame>
          <BlueTypography variant="h4" gutterBottom>
            À Propos de Nous
          </BlueTypography>
          <WhiteTypography variant="h6" gutterBottom>
            Notre Mission
          </WhiteTypography>
          <WhiteTypography paragraph>
            Chez Boldpixel, notre mission est de fournir des solutions web innovantes et personnalisées qui répondent aux besoins uniques de chaque client. Nous nous engageons à créer des expériences en ligne mémorables qui stimulent la croissance et la réussite de votre entreprise.
          </WhiteTypography>
          <WhiteTypography variant="h6" gutterBottom>
            Notre Vision
          </WhiteTypography>
          <WhiteTypography paragraph>
            Nous envisageons un monde où chaque entreprise, grande ou petite, a accès à des sites web de haute qualité qui reflètent fidèlement leur marque et facilitent leur interaction avec le public. En combinant créativité et expertise technique, nous aspirons à être le partenaire de confiance pour toutes vos initiatives numériques.
          </WhiteTypography>
        </ContentFrame>

        {/* Section "Ce que disent nos clients" */}
        

        {/* Section "Nos Réalisations Récentes" */}
        <ContentFrame>
          <BlueTypography variant="h4" gutterBottom>
            Nos Réalisations Récentes
          </BlueTypography>
          <Grid container spacing={4}>
            {[
              {
                title: 'E-commerce Innovant',
                description: 'Plateforme de vente en ligne avec une expérience utilisateur fluide et des fonctionnalités de pointe.',
                technologies: 'React, Node.js, MongoDB',
                image: 'projects/ecommerce.jpg' // Ajoutez cette image dans le dossier public
              },
              {
                title: 'Application Web Progressive',
                description: 'Application performante accessible sur tous les appareils, offrant une expérience proche du natif.',
                technologies: 'Vue.js, Firebase, Service Workers',
                image: 'projects/pwa.jpg' // Ajoutez cette image dans le dossier public
              },
              {
                title: 'Site Vitrine Dynamique',
                description: 'Présentation élégante et interactive d\'une entreprise, avec des animations subtiles et un design responsive.',
                technologies: 'Next.js, Framer Motion, Tailwind CSS',
                image: 'projects/vitrine.jpg' // Ajoutez cette image dans le dossier public
              },
              {
                title: 'Blog Personnel',
                description: 'Plateforme de blog avec gestion de contenu facile et intégration des réseaux sociaux.',
                technologies: 'Gatsby, GraphQL, Contentful',
                image: 'projects/blog.jpg' // Ajoutez cette image dans le dossier public
              },
              {
                title: 'Application Mobile',
                description: 'Application mobile cross-platform offrant une expérience utilisateur intuitive et réactive.',
                technologies: 'React Native, Redux, Firebase',
                image: 'projects/mobile.jpg' // Ajoutez cette image dans le dossier public
              },
              {
                title: 'Tableau de Bord Analytique',
                description: 'Outil de visualisation de données permettant d\'analyser les performances en temps réel.',
                technologies: 'D3.js, Python, Django',
                image: 'projects/dashboard.jpg' // Ajoutez cette image dans le dossier public
              }
            ].map((project, index) => (
              <Grid item xs={12} md={4} key={index}>
                <StyledCard elevation={3} sx={{ padding: 2, height: '100%' }}>
                  {/* Image du projet */}
                  <img 
                    src={`/${project.image}`} 
                    alt={project.title} 
                    style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px', marginBottom: '1rem' }} 
                  />
                  <Typography variant="h5" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography>
                    {project.description}
                  </Typography>
                  <Typography variant="body2" sx={{ marginTop: '10px', color: colors.secondary }}>
                    Technologies : {project.technologies}
                  </Typography>
                  <StylishButton onClick={() => navigate(`/portfolio/${index + 1}`)}>Voir le projet</StylishButton>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </ContentFrame>

        {/* Section "Explorez nos fonctionnalités" */}
        <ContentFrame>
          <BlueTypography variant="h4" gutterBottom>
            Explorez nos fonctionnalités
          </BlueTypography>
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                title: 'Analyse SEO',
                description: 'Optimisez votre site pour les moteurs de recherche et augmentez votre visibilité en ligne.',
                icon: 'icons/seo.png' // Ajoutez cette image dans le dossier public
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
                <StyledCard elevation={3} sx={{ padding: 2, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  {/* Icône de la fonctionnalité */}
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
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </ContentFrame>

        {/* Section "Appel à l'Action" */}
        <ContentFrame>
          <WhiteTypography variant="h5" gutterBottom>
            Prêt à transformer votre présence en ligne ?
          </WhiteTypography>
          <BlueTypography paragraph>
            Contactez-nous dès aujourd'hui pour démarrer votre projet personnalisé avec Boldpixel.
          </BlueTypography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <StylishButton onClick={() => navigate('/contact')}>
                Contactez-nous
              </StylishButton>
            </Grid>
            <Grid item>
              <StylishButton onClick={() => navigate('/portfolio')}>
                Voir nos projets
              </StylishButton>
            </Grid>
          </Grid>
        </ContentFrame>
      </PageContent>
    </motion.div>
  );
};

export default Home;