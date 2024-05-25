import React, { useEffect } from 'react';

const DotLottiePlayer: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
    script.type = 'module';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <dotlottie-player
      src="https://lottie.host/b57e970f-aa27-4989-afdb-3de1feb2d73a/5Etq3Rr6dk.json"
      background="transparent"
      speed="1"
      style={{ width: '300px', height: '300px' }}
      loop
      autoplay
    ></dotlottie-player>
  );
};

export default DotLottiePlayer;
