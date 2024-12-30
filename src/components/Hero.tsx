import React from 'react';

const Hero = () => {
  return (
    <div className="py-20 text-center">
      <h1 className="text-7xl font-extrabold tracking-tight mb-8">
        <span className="bg-gradient-to-br from-indigo-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
          From Zero to One
          <br />
          10x Faster & 80% Less
        </span>
      </h1>

      <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
        Hi, I'm Jamie. I help founders build production-ready MVPs using AI.
        Same quality, fraction of the cost, 10x faster.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
        <a
          href="#projects"
          className="bg-indigo-600 text-white text-xl px-8 py-4 rounded-full hover:bg-indigo-700 text-center cursor-pointer transition-colors"
        >
          View My Projects
        </a>
        <a 
          href="mailto:jamie@lost.capital?subject=I want to build an MVP"
          className="bg-white text-indigo-600 text-xl px-8 py-4 rounded-full border-2 border-indigo-600 hover:bg-indigo-50 transition-colors"
        >
          Let's Connect
        </a>
      </div>

      <div className="max-w-2xl mx-auto">
        <p className="text-lg text-gray-600 mb-6">
          Using AI-powered development, we build and launch your MVP in weeks, not months.
          Perfect for validating your idea and getting to market fast.
        </p>
        <p className="text-lg text-gray-600">
          With over £2M spent on traditional development, I've learned the expensive way.
          Now I help founders build MVPs for a fraction of the cost.
        </p>
      </div>
    </div>
  );
};

export default Hero;