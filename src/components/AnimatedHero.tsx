import React from 'react';
import { Rocket, Zap, Clock, DollarSign } from 'lucide-react';

const AnimatedHero = () => {
  return (
    <div className="relative h-96 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 -mt-16">
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          >
            <div className="h-1 w-1 bg-white/20 rounded-full" />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left side with rocket */}
        <div className="w-1/2 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2">
            <Rocket className="w-32 h-32 text-white animate-pulse" />
          </div>
        </div>

        {/* Right side with stats */}
        <div className="w-1/2 space-y-8">
          <div className="flex items-center space-x-4 animate-slideRight" style={{ animationDelay: '0.2s' }}>
            <div className="p-4 bg-white/10 backdrop-blur-lg rounded-xl">
              <Zap className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="text-white">
              <div className="text-2xl font-bold">10x Faster</div>
              <div className="text-white/80">Development Speed</div>
            </div>
          </div>

          <div className="flex items-center space-x-4 animate-slideRight" style={{ animationDelay: '0.4s' }}>
            <div className="p-4 bg-white/10 backdrop-blur-lg rounded-xl">
              <DollarSign className="w-8 h-8 text-green-400" />
            </div>
            <div className="text-white">
              <div className="text-2xl font-bold">80% Less</div>
              <div className="text-white/80">Development Cost</div>
            </div>
          </div>

          <div className="flex items-center space-x-4 animate-slideRight" style={{ animationDelay: '0.6s' }}>
            <div className="p-4 bg-white/10 backdrop-blur-lg rounded-xl">
              <Clock className="w-8 h-8 text-blue-400" />
            </div>
            <div className="text-white">
              <div className="text-2xl font-bold">2-4 Weeks</div>
              <div className="text-white/80">Time to Market</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHero;