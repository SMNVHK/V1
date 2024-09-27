import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import AnimatedBackground from '../components/AnimatedBackground';

const PageContent = styled('div')({
  paddingTop: '0',
  minHeight: 'calc(100vh - 80px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const CentralElement = styled(Box)({
  width: '300px',
  height: '400px',
  backgroundColor: 'white',
  borderRadius: '10px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
});

const FeatureItem = styled(Box)(({ theme }) => ({
  position: 'absolute',
  padding: theme.spacing(1),
  backgroundColor: 'rgba(255,255,255,0.8)',
  borderRadius: '5px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  maxWidth: '150px',
  textAlign: 'center',
}));

const Pricing: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ position: 'relative' }}
    >
      <AnimatedBackground />
      <PageContent>
        <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom align="center" style={{ color: 'white' }}>
            Votre Site Web Professionnel
          </Typography>
          <Typography variant="h3" gutterBottom align="center" style={{ color: 'white', marginBottom: '2rem' }}>
            999€ tout compris
          </Typography>
          
          <Box position="relative" width="100%" height="600px">
            <CentralElement>
              <Typography variant="h6">Votre Site Web</Typography>
              <Typography variant="body2">Design personnalisé</Typography>
            </CentralElement>
            
            <FeatureItem style={{ top: '10%', left: '10%' }}>
              <Typography variant="subtitle1">Jusqu'à 5 pages</Typography>
            </FeatureItem>
            
            <FeatureItem style={{ top: '30%', right: '10%' }}>
              <Typography variant="subtitle1">Formulaire CTA</Typography>
            </FeatureItem>
            
            <FeatureItem style={{ bottom: '30%', left: '5%' }}>
              <Typography variant="subtitle1">SEO optimisé</Typography>
            </FeatureItem>
            
            <FeatureItem style={{ bottom: '10%', right: '15%' }}>
              <Typography variant="subtitle1">Responsive Design</Typography>
            </FeatureItem>
            
            <FeatureItem style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <Typography variant="subtitle1">Hébergement inclus</Typography>
            </FeatureItem>
          </Box>
        </Container>
      </PageContent>
    </motion.div>
  );
};

export default Pricing;