import React from 'react';

interface MouseLightProps {
  position: { x: number; y: number };
}

const MouseLight: React.FC<MouseLightProps> = ({ position }) => {
  return (
    <div 
      className="fixed inset-0 z-50 pointer-events-none"
      style={{
        background: `
          radial-gradient(
            circle 450px at ${position.x}px ${position.y}px,
            transparent,
            rgba(0, 0, 0, 0.95) 100%
          )
        `,
        backdropFilter: 'brightness(0.4)',
      }}
    >
      {/* Red glow effect */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle 230px at ${position.x}px ${position.y}px,
              rgba(255, 0, 0, 0.15),
              transparent 80%
            )
          `,
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
};

export default MouseLight;