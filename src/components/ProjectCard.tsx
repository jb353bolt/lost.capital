import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

const ProjectCard = ({ title, description, image, link, tags }: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl">
      <img
        src={image}
        alt={title}
        className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="absolute bottom-0 p-6 space-y-3">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="text-gray-200">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 text-sm bg-white/20 rounded-full text-white">
                {tag}
              </span>
            ))}
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-white hover:text-blue-300 transition-colors mt-4"
          >
            <ExternalLink className="w-5 h-5" />
            <span>View Project</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;