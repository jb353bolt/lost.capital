import React from 'react';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Rocket className="w-8 h-8 text-indigo-600 rotate-45" />
            <span className="font-bold text-xl">Lost Capital</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
            <a 
              href="mailto:jamie@lost.capital?subject=I want to build an MVP"
              className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;