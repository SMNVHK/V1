import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const LogoWrapper = styled(motion.div)({
  position: 'relative',
  zIndex: 1001,
});

const Logo = styled(motion.img)({
  height: '60px',
  marginRight: '20px',
});

const BrandingInfo = styled(motion.div)({
  position: 'absolute',
  top: '100%',
  left: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: '10px',
  borderRadius: '0 0 5px 5px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
});

const BrandingItem = styled(motion.div)({
  margin: '5px 0',
  cursor: 'pointer',
});

const Branding: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const logoVariants = {
    initial: { rotate: 0, y: 0, scale: 1 },
    animate: { 
      rotate: 360, 
      y: 30, 
      scale: 1.2,
      transition: { 
        duration: 1.5,
        rotate: { duration: 2 },
        y: { duration: 0.5 },
        scale: { duration: 0.5 }
      }
    }
  };

  return (
    <Box 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}
    >
      <LogoWrapper
        initial="initial"
        animate={isHovered ? "animate" : "initial"}
        variants={logoVariants}
      >
        <Logo src="/images/logovitrine.png" alt="WebCraft Studio" />
      </LogoWrapper>
      <Typography variant="h6" sx={{ display: 'inline-block', verticalAlign: 'middle' }}>
        WebCraft Studio
      </Typography>
      <AnimatePresence>
        {isHovered && (
          <BrandingInfo
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <BrandingItem whileHover={{ scale: 1.05 }}>Nous contacter</BrandingItem>
            <BrandingItem whileHover={{ scale: 1.05 }}>Notre Équipe</BrandingItem>
            <BrandingItem whileHover={{ scale: 1.05 }}>Notre Vision</BrandingItem>
          </BrandingInfo>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Branding;