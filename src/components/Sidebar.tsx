import React from 'react';
import { Mail } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-16 flex flex-col items-center py-8 bg-white/80 backdrop-blur-md border-r border-gray-100">
      <div className="space-y-6 writing-mode-vertical transform rotate-180">
        <a href="#clients" className="sidebar-link">Clients</a>
        <a href="#research" className="sidebar-link">Research</a>
        <a href="#portfolio" className="sidebar-link">Portfolio</a>
        <a href="#podcast" className="sidebar-link">Podcast</a>
      </div>
    </div>
  );
};

export default Sidebar;