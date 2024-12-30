import React from 'react';
import { Mail } from 'lucide-react';

const ProfileCard = () => {
  return (
    <div className="bg-indigo-400 rounded-3xl p-8 relative overflow-hidden">
      <div className="absolute top-4 left-4">
        <span className="text-white/80 font-medium">About Me</span>
      </div>
      
      <div className="mt-12 space-y-6">
        <div className="relative w-48 h-48 mx-auto">
          <div className="absolute inset-0 bg-pink-300 rounded-full"></div>
          <img
            src="/profile.jpg"
            alt="Profile"
            className="relative w-full h-full rounded-full object-cover border-4 border-white filter contrast-125 saturate-0"
            style={{
              WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cfilter id=\'sketch\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.03\' numOctaves=\'3\'/%3E%3CfeDisplacementMap in=\'SourceGraphic\' scale=\'5\'/%3E%3C/filter%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23sketch)\'/%3E%3C/svg%3E")',
              maskImage: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cfilter id=\'sketch\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.03\' numOctaves=\'3\'/%3E%3CfeDisplacementMap in=\'SourceGraphic\' scale=\'5\'/%3E%3C/filter%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23sketch)\'/%3E%3C/svg%3E")'
            }}
          />
        </div>
        
        <div className="text-white space-y-2">
          <div className="text-3xl font-light">
            I'm,
            <h1 className="text-5xl font-bold">James</h1>
          </div>
          
          <div className="flex items-center space-x-2 text-sm">
            <Mail className="w-4 h-4" />
            <a href="mailto:james@example.com" className="hover:underline">
              james@example.com
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 right-8">
          <div className="rounded-full bg-black text-white text-xs px-4 py-2">
            2024 Design Portfolio
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;