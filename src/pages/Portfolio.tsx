import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import VideoBackground from '../components/VideoBackground';
import { useTheme } from '../components/ThemeSwitch';
import Carousel3D from '../components/Carousel3D';
import type { ProjectItem } from '../components/Carousel3D';

const getVideoSource = (currentTheme: string) => {
  switch (currentTheme) {
    case 'green':
      return '/videos/background-green.mp4';
    case 'blue':
      return '/videos/background-blue.mp4';
    case 'pink':
      return '/videos/background-pink.mp4';
    default:
      return '/videos/background-blue.mp4';
  }
};

const PageContent = styled('div')({
  minHeight: '100vh',
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
});

const ContentFrame = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 10,
  padding: '2rem',
  borderRadius: '15px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(4),
  marginTop: theme.spacing(4),
  width: '100%', // Ajouté pour s'assurer que le cadre occupe toute la largeur
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderRadius: '15px',
  color: theme.palette.text.primary,
}));

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

const projectVariants = {
  hover: { scale: 1.05 }
};

const projects: ProjectItem[] = [
  {
    title: 'Voyager 2.0',
    description: 'Une autre façon de voyager',
    thumbnail: '/images/voyager_accueil.png',
    technologies: ['Next.js App router', 'react-three-fiber', 'Lenis', 'Theatre.js'],
    gallery: [
      '/images/service_1.png',
      '/images/voyager_accueil2.png',
      '/images/destinations_2.png'
    ],
  },
  {
    title: 'Projet 2',
    description: 'Description du projet 2',
    thumbnail: '',
    technologies: [],
    gallery: [],
  },
  {
    title: 'Projet 3',
    description: 'Description du projet 3',
    thumbnail: '',
    technologies: [],
    gallery: [],
  },
  // Ajoutez d'autres projets si nécessaire
];

const PortfolioTitle = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: 'bold',
  color: '#ffffff',
  textShadow: '0 0 10px rgba(0,255,255,0.5), 0 0 20px rgba(0,255,255,0.3), 0 0 30px rgba(0,255,255,0.2)',
  marginBottom: theme.spacing(4),
  textAlign: 'center',
  fontFamily: "'Orbitron', sans-serif", // Assurez-vous d'avoir importé cette police si ce n'est pas déjà fait
}));

const Portfolio: React.FC = () => {
  const { colors, currentTheme } = useTheme();
  const [videoSource, setVideoSource] = React.useState(getVideoSource(currentTheme));

  React.useEffect(() => {
    setVideoSource(getVideoSource(currentTheme));
  }, [currentTheme]);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ minHeight: '100vh', paddingTop: '80px' }}
    >
      <VideoBackground key={videoSource} videoSource={videoSource} />
      <PageContent>
        <Container maxWidth="lg">
          <ContentFrame>
            <PortfolioTitle variant="h1">
              Notre Portfolio
            </PortfolioTitle>
            <Carousel3D items={projects} />
          </ContentFrame>
        </Container>
      </PageContent>
    </motion.div>
  );
};

export default Portfolio;