import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import VideoBackground from '../components/VideoBackground';
import { useTheme } from '../components/ThemeSwitch';
import StylishButton from '../components/StylishButton';

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
  flex: 1,
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  color: 'white',
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

const projects = [
  { title: 'Projet 1', description: 'Description du projet 1' },
  { title: 'Projet 2', description: 'Description du projet 2' },
  { title: 'Projet 3', description: 'Description du projet 3' },
  // Ajoutez d'autres projets ici
];

const Portfolio: React.FC = () => {
  const { colors } = useTheme();

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ minHeight: '100vh', paddingTop: '80px' }}
    >
      <VideoBackground style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} />
      <PageContent>
        <Container>
          <ContentFrame>
            <Typography variant="h2" gutterBottom style={{ color: colors.text }}>
              Notre Portfolio
            </Typography>
            <Grid container spacing={4}>
              {projects.map((project, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div
                    whileHover="hover"
                    variants={projectVariants}
                  >
                    <StyledPaper style={{ backgroundColor: colors.background, color: colors.text }}>
                      <Typography variant="h5" gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography variant="body1" paragraph>
                        {project.description}
                      </Typography>
                      <StylishButton>Voir le projet</StylishButton>
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

export default Portfolio;