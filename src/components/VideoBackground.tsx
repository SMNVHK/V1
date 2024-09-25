import React, { useEffect, useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import { useTheme } from './ThemeSwitch';

const VideoWrapper = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  zIndex: 1, // Assurez-vous que c'est la valeur la plus basse
});

const StyledVideo = styled('video')({
  minWidth: '100%',
  minHeight: '100%',
  width: 'auto',
  height: 'auto',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  objectFit: 'cover',
});

const VideoBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { currentTheme, colors } = useTheme();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && videoRef.current) {
          const videoSrc = `/videos/background-${currentTheme}.mp4`;
          videoRef.current.src = videoSrc;
          videoRef.current.load();
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [currentTheme]);

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  return (
    <VideoWrapper style={{ backgroundColor: colors.background }}>
      <StyledVideo 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline
        onLoadedData={handleLoadedData}
        style={{ opacity: isLoaded ? 1 : 0 }}
      >
        Votre navigateur ne supporte pas la lecture de vidéos.
      </StyledVideo>
    </VideoWrapper>
  );
};

export default VideoBackground;