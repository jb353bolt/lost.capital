import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#',
    github: '#'
  },
  {
    title: 'Portfolio Generator',
    description: 'Dynamic portfolio creator for professionals',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['TypeScript', 'Next.js', 'Tailwind'],
    link: '#',
    github: '#'
  },
  {
    title: 'Task Management',
    description: 'Collaborative task management application',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Firebase', 'Material-UI'],
    link: '#',
    github: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-200">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 text-sm bg-white/20 rounded-full text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a href={project.link} className="icon-link">
                      <ExternalLink className="h-5 w-5" />
                      <span>Live Demo</span>
                    </a>
                    <a href={project.github} className="icon-link">
                      <Github className="h-5 w-5" />
                      <span>Source</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;