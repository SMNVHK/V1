import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { styled, useTheme } from '@mui/material/styles'; // Ajoutez useTheme ici
import { Typography, IconButton, Chip, Box, Grid } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import StylishButton from './StylishButton';

const CarouselContainer = styled('div')({
  position: 'relative',
  height: '600px', // Augmenté pour accommoder un cadre plus grand
  width: '100%',
  perspective: '1000px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'visible',
});

const SlideContainer = styled(animated.div)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  transformStyle: 'preserve-3d',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});


const Slide = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '300px',
  height: '200px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  borderRadius: '15px',
  color: theme.palette.text.primary,
  transition: 'all 0.3s ease-in-out',
  overflow: 'hidden',
  cursor: 'pointer',
}));

const ProjectImage = styled('img')({
  width: '100%',
  height: '100px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginBottom: '10px',
});

const GalleryImage = styled('img')({
  width: '100%',
  height: '100px',
  objectFit: 'cover',
  borderRadius: '8px',
});

const ButtonWrapper = styled('div')({
  marginTop: 'auto',
});

// ... (autres styles restent inchangés)

export interface ProjectItem {
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  gallery: string[];
}

const NavigationButton = styled(IconButton)({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 10,
});

const Carousel3D: React.FC<{ items: ProjectItem[] }> = ({ items }) => {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme(); // Ajoutez cette ligne pour utiliser le thème

  const props = useSpring({
    transform: `rotateY(${index * -72}deg)`,
    config: { mass: 5, tension: 350, friction: 40 },
  });

  const handlePrev = () => setIndex((index - 1 + items.length) % items.length);
  const handleNext = () => setIndex((index + 1) % items.length);

  const handleSlideClick = (i: number) => {
    if (i === index) {
      setExpanded(!expanded);
    } else {
      setIndex(i);
      setExpanded(false);
    }
  };

  return (
    <CarouselContainer>
      <NavigationButton onClick={handlePrev} style={{ left: '10px', zIndex: 10 }}>
        <ChevronLeftIcon />
      </NavigationButton>
      <SlideContainer style={props}>
        {items.map((item, i) => (
          <Slide
            key={i}
            onClick={() => handleSlideClick(i)}
            style={{
              transform: `rotateY(${i * 72}deg) translateZ(400px)`,
              opacity: Math.abs(index - i) <= 2 ? 1 - Math.abs(index - i) * 0.3 : 0.1,
              filter: index === i ? 'none' : `blur(${Math.abs(index - i) * 2}px)`,
              height: expanded && index === i ? '500px' : '200px', // Augmenté quand expandé
              width: expanded && index === i ? '800px' : '300px',
              backgroundColor: expanded && index === i ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.1)',
              backdropFilter: expanded && index === i ? 'none' : 'blur(10px)',
              border: `1px solid ${expanded && index === i ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.3)'}`,
              overflowY: 'auto',
              display: 'flex',
              flexDirection: expanded && index === i ? 'row' : 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              padding: expanded && index === i ? '20px' : theme.spacing(2),
            }}
          >
            <Box width={expanded && index === i ? '50%' : '100%'} pr={expanded && index === i ? 2 : 0}>
              <Typography variant="h5" gutterBottom style={{ color: expanded && index === i ? '#000' : 'inherit' }}>
                {item.title}
              </Typography>
              {item.thumbnail && (
                <ProjectImage 
                  src={item.thumbnail} 
                  alt={item.title} 
                  style={{
                    height: expanded && index === i ? '250px' : '100px', // Augmenté quand expandé
                  }}
                />
              )}
              <Typography variant="body2" paragraph style={{ 
                color: expanded && index === i ? '#000' : 'inherit',
                marginTop: '5px',
              }}>
                {item.description}
              </Typography>
              <ButtonWrapper>
                <StylishButton>Voir le projet</StylishButton>
              </ButtonWrapper>
            </Box>
            {expanded && index === i && (
              <Box width="50%" pl={2}>
                <Typography variant="subtitle1" style={{ color: '#000' }}>Technologies utilisées :</Typography>
                {item.technologies.map((tech, index) => (
                  <Chip key={index} label={tech} size="small" style={{ margin: '0 4px 4px 0', backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />
                ))}
                <Box mt={2}>
                  <Typography variant="subtitle1" style={{ color: '#000' }}>Galerie :</Typography>
                  <Grid container spacing={2}>
                    {item.gallery.map((img, index) => (
                      <Grid item xs={6} key={index}>
                        <GalleryImage src={img} alt={`Gallery ${index + 1}`} />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
            )}
          </Slide>
        ))}
      </SlideContainer>
      <NavigationButton onClick={handleNext} style={{ right: '10px', zIndex: 10 }}>
        <ChevronRightIcon />
      </NavigationButton>
    </CarouselContainer>
  );
};

export default Carousel3D;