'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Data Scraping Dashboard',
    description: 'A dashboard that automates web scraping for real-time market data analysis with visualization features.',
    image: '/globe.svg',
    technologies: ['Python', 'FastAPI', 'React', 'TailwindCSS', 'Beautiful Soup'],
    link: '#'
  },
  {
    title: 'Discord Trading Bot',
    description: 'Automated trading bot that sends real-time alerts to Discord based on custom technical indicators.',
    image: '/window.svg',
    technologies: ['Python', 'Discord API', 'TA-Lib', 'MongoDB'],
    link: '#'
  },
  {
    title: 'Report Generator',
    description: 'CLI tool that automatically generates PDF reports from various data sources with customizable templates.',
    image: '/file.svg',
    technologies: ['Python', 'Pandas', 'ReportLab', 'SQL'],
    link: '#'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-900 py-24">
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Explore a selection of my recent work showcasing solutions for data automation, visualization, and custom tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-md p-4 transition-all duration-200 hover:shadow-lg overflow-hidden flex flex-col h-full">
              <div className="relative h-52 overflow-hidden bg-gray-700 rounded-md mb-3">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="object-contain p-10 opacity-75"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
              <p className="text-gray-300 mb-3 flex-grow text-sm">{project.description}</p>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-900 text-indigo-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center text-sm"
                >
                  View Project
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 