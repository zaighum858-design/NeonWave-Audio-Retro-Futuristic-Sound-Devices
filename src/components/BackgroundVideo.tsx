import React, { useEffect, useRef } from 'react';

interface BackgroundVideoProps {
  overlayOpacity?: number; // 0.30 - 0.55 for optimal contrast
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  overlayOpacity = 0.40, // Darker tint for high text legibility
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.play().catch(() => {
        // Autoplay policy fallback: trigger play on first interaction
        const handleInteraction = () => {
          video.play().catch(() => {});
          window.removeEventListener('click', handleInteraction);
          window.removeEventListener('touchstart', handleInteraction);
        };
        window.addEventListener('click', handleInteraction, { once: true });
        window.addEventListener('touchstart', handleInteraction, { once: true });
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden select-none">
      {/* 1. True HTML5 <video> element fixed as the absolute background playing Pinterest video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster="/images/pinterest-delorean-poster.jpg"
        className="fixed inset-0 w-full h-full object-cover -z-10 pointer-events-none"
      >
        <source src="/videos/delorean-synthwave.mp4" type="video/mp4" />
        <source
          src="https://v1.pinimg.com/videos/iht/expMp4/7f/43/6c/7f436c5390ea5385fd2c00fdb03d0d5f_720w.mp4"
          type="video/mp4"
        />
      </video>

      {/* 2. Direct dark tint overlay for enhanced text readability */}
      <div
        className="fixed inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          backgroundColor: '#090214',
          opacity: overlayOpacity, // 40% dark overlay for clear text contrast
        }}
      />

      {/* 3. Subtle ambient vignette overlay to keep text crisp while retaining synthwave sunset glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 40%, rgba(9, 2, 18, 0.15) 0%, rgba(9, 2, 18, 0.65) 100%)',
        }}
      />
    </div>
  );
};
