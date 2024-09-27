import React from 'react';
import { styled } from '@mui/material/styles';

interface VideoBackgroundProps {
  style?: React.CSSProperties;
}

const VideoWrapper = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  zIndex: -1,
});

const VideoBackground: React.FC<VideoBackgroundProps> = ({ style }) => {
  return (
    <VideoWrapper style={style}>
      <video
        autoPlay
        loop
        muted
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src="/path/to/your/video.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo HTML5.
      </video>
    </VideoWrapper>
  );
};

export default VideoBackground;