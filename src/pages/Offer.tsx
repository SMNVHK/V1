import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import AnimatedBackground from '../components/AnimatedBackground';
import StylishButton from '../components/StylishButton';
import { useTheme } from '../components/ThemeSwitch';

const PageContent = styled('div')({
  paddingTop: '0',
  minHeight: 'calc(100vh - 80px)',
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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
  width: '80%',
  maxWidth: '1200px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const ImageContainer = styled('div')({
  width: '100%',
  height: '400px', // Ajustez selon vos besoins
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '10px',
  marginBottom: '2rem',
});

const FloatingElement = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  padding: '1rem',
  borderRadius: '10px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(5px)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
}));

const Offer: React.FC = () => {
  const { colors } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ position: 'relative', minHeight: '100vh' }}
    >
      <AnimatedBackground />
      <PageContent>
        <ContentFrame style={{ backgroundColor: colors.background, color: colors.text }}>
          <Typography variant="h2" gutterBottom align="center" style={{ color: colors.text }}>
            Nos Offres
          </Typography>
          <ImageContainer>
            {/* Remplacez la ligne suivante par votre image */}
            <img src="/path/to/your/image.jpg" alt="Offres" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </ImageContainer>
          
          {/* Éléments flottants */}
          <FloatingElement
            style={{ top: '10%', left: '5%', color: colors.text }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Typography variant="h6">Offre de base</Typography>
            <Typography>À partir de 499€</Typography>
          </FloatingElement>
          
          <FloatingElement
            style={{ top: '20%', right: '5%', color: colors.text }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            <Typography variant="h6">Offre premium</Typography>
            <Typography>À partir de 999€</Typography>
          </FloatingElement>
          
          <FloatingElement
            style={{ bottom: '10%', left: '10%', color: colors.text }}
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <Typography variant="h6">Support 24/7</Typography>
          </FloatingElement>
          
          <FloatingElement
            style={{ bottom: '20%', right: '10%', color: colors.text }}
            animate={{ x: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2.7 }}
          >
            <Typography variant="h6">Personnalisation complète</Typography>
          </FloatingElement>
          
          <StylishButton>Demander un devis</StylishButton>
        </ContentFrame>
      </PageContent>
    </motion.div>
  );
};

export default Offer;