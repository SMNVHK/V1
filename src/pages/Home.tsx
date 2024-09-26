import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Typography, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import StylishButton from '../components/StylishButton';
import AnimatedBackground from '../components/AnimatedBackground';
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

const PageContent = styled('div')({
  paddingTop: '120px', // Augmenté de 80px à 120px
});

const ContentFrame = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 3,
  padding: '2rem',
  borderRadius: '15px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  color: 'white',
  marginBottom: theme.spacing(4),
  marginTop: theme.spacing(4), // Ajout d'une marge en haut
}));

const Home: React.FC = () => {
  const { colors } = useTheme();
  const navigate = useNavigate();

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
          {/* Section Hero */}
          <ContentFrame>
            <Typography variant="h2" gutterBottom>
              Créez votre présence en ligne avec élégance
            </Typography>
            <Typography variant="h5" gutterBottom>
              Boldpixel : Des sites web sur mesure qui captivent votre audience et boostent votre visibilité
            </Typography>
            <Typography variant="body1">
              Découvrez nos services innovants pour transformer votre vision en réalité numérique
            </Typography>
            <StylishButton onClick={() => navigate('/services')}>Nos Services</StylishButton>
          </ContentFrame>

          {/* Section "Notre Approche" */}
          <ContentFrame>
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
                  <Paper elevation={3} sx={{ padding: 2, height: '100%' }}>
                    <Typography variant="h5" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography>
                      {item.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </ContentFrame>

          {/* Section "À Propos de Nous" */}
          <ContentFrame>
            <Typography variant="h3" gutterBottom align="center">
              À Propos de Nous
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom>
                  Notre Mission
                </Typography>
                <Typography variant="body1">
                  Chez Boldpixel, notre mission est de fournir des solutions web innovantes et personnalisées qui répondent aux besoins uniques de chaque client. Nous nous engageons à créer des expériences en ligne mémorables qui stimulent la croissance et la réussite de votre entreprise.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom>
                  Notre Vision
                </Typography>
                <Typography variant="body1">
                  Nous envisageons un monde où chaque entreprise, grande ou petite, a accès à des sites web de haute qualité qui reflètent fidèlement leur marque et facilitent leur interaction avec le public. En combinant créativité et expertise technique, nous aspirons à être le partenaire de confiance pour toutes vos initiatives numériques.
                </Typography>
              </Grid>
            </Grid>
          </ContentFrame>

          {/* Section "Ce que disent nos clients" */}
          <ContentFrame>
            <Typography variant="h3" gutterBottom align="center">
              Ce que disent nos clients
            </Typography>
            <Grid container spacing={4}>
              {[
                {
                  name: 'Marie Dupont',
                  testimonial: 'Boldpixel a transformé notre présence en ligne. Leur équipe est professionnelle et créative.',
                  image: 'clients/marie.jpg' // Ajoutez cette image dans le dossier public
                },
                {
                  name: 'Jean Martin',
                  testimonial: 'Grâce à Boldpixel, notre site e-commerce a vu ses ventes augmenter de 50%. Je recommande vivement leurs services.',
                  image: 'clients/jean.jpg' // Ajoutez cette image dans le dossier public
                },
                {
                  name: 'Sophie Lemoine',
                  testimonial: 'Leur support client est exceptionnel. Ils sont toujours disponibles pour répondre à nos besoins.',
                  image: 'clients/sophie.jpg' // Ajoutez cette image dans le dossier public
                },
                {
                  name: 'Lucas Bernard',
                  testimonial: 'Leur approche innovante a vraiment aidé notre entreprise à se démarquer. Excellent travail!',
                  image: 'clients/lucas.jpg' // Ajoutez cette image dans le dossier public
                },
                {
                  name: 'Élise Dubois',
                  testimonial: 'Boldpixel a su comprendre nos besoins et les a traduits en un site magnifique et fonctionnel.',
                  image: 'clients/elise.jpg' // Ajoutez cette image dans le dossier public
                },
                {
                  name: 'Marc Lefèvre',
                  testimonial: 'Leur expertise en SEO nous a permis d\'améliorer notre visibilité en ligne de manière significative.',
                  image: 'clients/marc.jpg' // Ajoutez cette image dans le dossier public
                }
              ].map((client, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Paper elevation={3} sx={{ padding: 2, height: '100%' }}>
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
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </ContentFrame>

          {/* Section "Nos Réalisations Récentes" */}
          <ContentFrame>
            <Typography variant="h3" gutterBottom align="center">
              Nos Réalisations Récentes
            </Typography>
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
                  <Paper elevation={3} sx={{ padding: 2, height: '100%' }}>
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
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </ContentFrame>

          {/* Section "Explorez nos fonctionnalités" */}
          <ContentFrame>
            <Typography variant="h3" gutterBottom align="center">
              Explorez nos fonctionnalités
            </Typography>
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
                  <Paper elevation={3} sx={{ padding: 2, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
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
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </ContentFrame>

          {/* Section "Appel à l'Action" */}
          <ContentFrame>
            <Typography variant="h3" gutterBottom>
              Prêt à transformer votre présence en ligne ?
            </Typography>
            <Typography variant="h6" gutterBottom>
              Contactez-nous dès aujourd'hui pour démarrer votre projet personnalisé avec Boldpixel.
            </Typography>
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
        </Container>
      </PageContent>
    </motion.div>
  );
};

export default Home;