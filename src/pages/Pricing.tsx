import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Grid, Box, Button, Card, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import AnimatedBackground from '../components/AnimatedBackground';
import TextScrambleEffect from '../components/TextScrambleEffect';
import HighlightText from '../components/HighlightText';
import { useTheme } from '../components/ThemeSwitch';

const PageContent = styled('div')({
  minHeight: '100vh',
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
});


const ContentFrame = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 3,
  padding: '3rem',
  borderRadius: '15px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 8px 60px rgba(0, 0, 0, 0.2)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  width: '100%',
  maxWidth: '1200px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: '2rem 1rem',
  },
}));

const CentralImage = styled('img')(({ theme }) => ({
  width: '60%',
  height: 'auto',
  display: 'block',
  margin: '0 auto 1rem',
  zIndex: 1,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    opacity: 0.3,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));


const TitleCard = styled(Card)(({ theme }) => ({
  position: 'absolute',
  top: '0%',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 2,
  padding: '1rem',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  borderRadius: '15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '55%',
  [theme.breakpoints.down('sm')]: {
    position: 'relative',
    width: '100%',
    marginBottom: '2rem',
  },
}));

const TitleWrapper = styled(Typography)(({ theme }) => ({
  fontSize: '2.2rem',
  fontWeight: 'bold',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Roboto Condensed, sans-serif',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem',
    flexDirection: 'column',
  },
}));


const QualifierText = styled('span')(({ theme }) => ({
  display: 'inline-block',
  width: '220px',
  textAlign: 'center',
  margin: '0 0.5rem',
  fontFamily: 'Space Grotesk, sans-serif',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    margin: '0.5rem 0',
  },
}));

const PriceText = styled('span')(({ theme }) => ({
  color: '#FF5722',
  fontWeight: 'bold',
  fontSize: '3rem',
  marginLeft: '0.5rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
    marginLeft: '0',
  },
}));


const StyledCard = styled(Card)(({ theme }) => {
  const { colors, currentTheme } = useTheme();
  
  const getCardBackgroundColor = () => {
    switch (currentTheme) {
      case 'blue':
        return 'rgba(97, 218, 251, 0.1)';
      case 'pink':
        return 'rgba(255, 20, 147, 0.1)';
      case 'green':
        return 'rgba(0, 255, 0, 0.1)';
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
    padding: '0.5rem',
    borderRadius: '10px',
    textAlign: 'center',
    width: '110px',
    height: '110px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
    '&:hover': {
      transform: 'translateY(-5px)',
      transition: 'transform 0.3s ease-in-out',
    },
    '& .MuiTypography-caption': {
      fontSize: '0.9rem', // Augmentez légèrement la taille du texte des icônes
    },
  };
});

const IconWrapper = styled('div')({
  fontSize: '2.5rem',
  marginBottom: '0.25rem',
});


const FeaturesWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  marginTop: '-150px',
  zIndex: 2,
  background: 'transparent',
  padding: '1rem',
  width: '100%', // Ajout de cette ligne
  [theme.breakpoints.down('sm')]: {
    marginTop: '1rem',
  },
}));

const Pricing: React.FC = () => {
  const { colors, currentTheme } = useTheme();
  const isMobile = useMediaQuery('(max-width:600px)');

  const qualifiers = [
    'professionnel',
    'responsive',
    'unique',
    'performant',
    'sécurisé',
    'optimisé',
    'moderne',
    'élégant',
  ];

  const features = [
    { icon: '🎨', title: 'Design sur mesure' },
    { icon: '📱', title: 'Responsive' },
    { icon: '🚀', title: 'Performance' },
    { icon: '🔍', title: 'SEO optimisé' },
    { icon: '🛡️', title: 'Sécurité' },
    { icon: '🔧', title: 'Support 24/7' },
    { icon: '💼', title: 'Professionnel' },
    { icon: '💰', title: 'Abordable' },
  ];


  const getHighlightColors = () => {
    switch (currentTheme) {
      case 'blue':
        return ['#D9EDF8', '#E4F1EE', '#DEDAF4'];
      case 'pink':
        return ['#FFD6A5', '#FFADAD', '#FDFFB6'];
      case 'green':
        return ['#98FB98', '#90EE90', '#00FA9A'];
      default:
        return ['#D9EDF8', '#E4F1EE', '#DEDAF4'];
    }
  };

  const highlightColors = getHighlightColors();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ position: 'relative', minHeight: '100vh' }}
    >
      <AnimatedBackground />
      <PageContent>
        <ContentFrame style={{ color: colors.text }}>
          <Box position="relative" width="100%">
            <CentralImage src="/images/pricing.png" alt="Pricing Illustration" />
            <TitleCard>
              <TitleWrapper style={{ color: colors.text }}>
                {isMobile ? (
                  <>
                    Votre site
                    <QualifierText>
                      <TextScrambleEffect phrases={qualifiers} />
                    </QualifierText>
                    pour <PriceText>999€</PriceText>
                  </>
                ) : (
                  <>
                    Votre site{' '}
                    <QualifierText>
                      <TextScrambleEffect phrases={qualifiers} />
                    </QualifierText>{' '}
                    pour <PriceText>999€</PriceText>
                  </>
                )}
              </TitleWrapper>
            </TitleCard>
          </Box>
          
          <FeaturesWrapper>
            <Grid 
              container 
              spacing={2} 
              justifyContent="center"
              style={{ 
                margin: '0 auto', 
                maxWidth: isMobile ? '300px' : '800px' // Modifié cette ligne
              }}
            >
              {features.map((feature, index) => (
                <Grid item key={index} xs={6} sm={3}>
                  <StyledCard>
                    <IconWrapper>{feature.icon}</IconWrapper>
                    <Typography variant="caption">{feature.title}</Typography>
                  </StyledCard>
                </Grid>
              ))}
            </Grid>
          </FeaturesWrapper>
          
          <Box mt={4} mb={2}>
            <HighlightText
              text="Prêt à transformer votre présence en ligne ? Obtenez un site web professionnel, optimisé et sécurisé, avec un support continu pendant 6 mois."
              highlights={[
              { word: "transformer", color: highlightColors[0] },
              { word: "présence", color: highlightColors[1] },
              { word: "professionnel", color: highlightColors[2] },
              { word: "optimisé", color: highlightColors[0] },
              { word: "sécurisé", color: highlightColors[1] },
              { word: "support", color: highlightColors[2] },
  ]}
/>
          </Box>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ padding: '1rem 2rem', fontSize: '1.2rem', marginTop: '1rem', backgroundColor: colors.primary, color: colors.text }}
            >
              Profitez de cette offre limitée maintenant !
            </Button>
          </motion.div>
          
          <Box mt={4} textAlign="center">
            <Typography variant="subtitle1" style={{ color: colors.text }}>
              Garantie satisfait ou remboursé sous 30 jours
            </Typography>
            <Typography variant="body2" style={{ color: colors.text }}>
              Paiement 100% sécurisé | Livraison en 30 jours garantie
            </Typography>
          </Box>
        </ContentFrame>
      </PageContent>
    </motion.div>
  );
};


export default Pricing;