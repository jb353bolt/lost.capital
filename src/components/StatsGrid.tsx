import React from 'react';
import { Play, Apple, Shapes } from 'lucide-react';

const StatCard = ({ number, label, className }: { number: string; label: string; className: string }) => (
  <div className={`rounded-3xl p-6 ${className}`}>
    <div className="flex justify-between items-start">
      <div>
        <div className="text-4xl font-bold">{number}</div>
        <div className="text-sm mt-1">{label}</div>
      </div>
      <div className="rounded-tr-lg rounded-bl-lg bg-black/10 p-1">
        <Shapes className="w-4 h-4" />
      </div>
    </div>
  </div>
);

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="aspect-video rounded-3xl bg-gray-800 relative overflow-hidden">
        <video
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800"
        >
          <source src="#" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <Play className="w-6 h-6 text-gray-900" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-rows-2 gap-4">
        <StatCard
          number="251"
          label="Projects"
          className="bg-emerald-100 text-emerald-900"
        />
        <StatCard
          number="156"
          label="Awards"
          className="bg-indigo-100 text-indigo-900"
        />
      </div>
      
      <div className="rounded-3xl bg-gray-800 p-6 flex items-center space-x-4">
        <Apple className="w-8 h-8 text-white" />
        <div className="text-white">
          <div className="text-2xl font-bold">Clients</div>
        </div>
      </div>
      
      <div className="rounded-3xl bg-gradient-to-br from-black to-gray-900 p-6 flex items-center justify-between">
        <div>
          <div className="text-amber-400 text-4xl font-bold">172</div>
          <div className="text-white text-sm">Global Design Awards</div>
        </div>
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-400"></div>
      </div>
    </div>
  );
};

export default StatsGrid;