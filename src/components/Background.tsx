import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gray-900/5 backdrop-blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              transform: `scale(${Math.random() * 0.5 + 0.5})`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Background;