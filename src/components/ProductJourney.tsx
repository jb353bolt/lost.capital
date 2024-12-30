import React from 'react';
import { Lightbulb, Code2, Rocket, TrendingUp, Sparkles } from 'lucide-react';

const ProductJourney = () => {
  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
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

      {/* Journey Path */}
      <div className="relative max-w-6xl mx-auto">
        <div className="relative grid grid-cols-4 gap-8">
          {/* Ideation Stage */}
          <div className="space-y-4 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 mx-auto bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center transform transition-all duration-300 hover:scale-125 hover:bg-white/20">
              <Lightbulb className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">Ideation</h3>
              <p className="text-white/80 text-sm">
                Transform your idea into a clear product vision using AI-powered planning
              </p>
            </div>
          </div>

          {/* Development Stage */}
          <div className="space-y-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 mx-auto bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center transform transition-all duration-300 hover:scale-125 hover:bg-white/20">
              <Code2 className="w-8 h-8 text-blue-400" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">Development</h3>
              <p className="text-white/80 text-sm">
                Rapid development with AI assistance and automated testing
              </p>
            </div>
          </div>

          {/* Launch Stage */}
          <div className="space-y-4 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="w-16 h-16 mx-auto bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center transform transition-all duration-300 hover:scale-125 hover:bg-white/20">
              <Rocket className="w-8 h-8 text-purple-400" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">Launch</h3>
              <p className="text-white/80 text-sm">
                Deploy to market with confidence and start gathering feedback
              </p>
            </div>
          </div>

          {/* Growth Stage */}
          <div className="space-y-4 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            <div className="w-16 h-16 mx-auto bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center transform transition-all duration-300 hover:scale-125 hover:bg-white/20">
              <TrendingUp className="w-8 h-8 text-green-400" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">Growth</h3>
              <p className="text-white/80 text-sm">
                Scale your product with data-driven improvements
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductJourney;