import React from 'react';
import ProjectGraphic from './ProjectGraphic';

const projects = [
  {
    title: "SME Loans Platform",
    description: "Streamlined loan application platform for SMEs with real-time processing and automated decisioning",
    type: 'loans',
    link: "https://timely-paprenjak-aa5fc5.netlify.app",
  },
  {
    title: "Onyx Dashboard",
    description: "Enterprise-grade business intelligence platform with AI-powered insights",
    type: 'crm',
    link: "https://mellow-croissant-38ccb8.netlify.app",
  },
  {
    title: "Sales Dashboard",
    description: "Real-time sales analytics platform with predictive forecasting",
    type: 'sales',
    link: "https://admirable-chaja-fedef1.netlify.app",
  }
];

const Features = () => {
  return (
    <div id="projects" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-16">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-100 to-pink-100 p-2 shadow-xl">
              <div className="w-full h-[300px] rounded-xl shadow-lg transform transition-transform group-hover:scale-[1.01] bg-white">
                <ProjectGraphic type={project.type} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-full hover:bg-white transition-colors font-semibold"
                >
                  View Project
                </a>
              </div>
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;