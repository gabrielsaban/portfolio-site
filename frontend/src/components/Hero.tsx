'use client';

import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-gray-900 pt-28 pb-16 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-1/2 space-y-6 text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-5xl font-bold text-white">
            Gabriel Saban
          </h1>
          <h2 className="text-2xl text-indigo-400">
            Python Automation + Full-Stack Dev
          </h2>
          <p className="text-lg text-gray-300 max-w-xl">
            Transforming ideas into powerful automation solutions and beautiful web applications. Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm"
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-base font-medium rounded-md text-gray-200 bg-gray-800 hover:bg-gray-700 shadow-sm"
            >
              View Projects
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative h-72 w-72 rounded-full overflow-hidden border-4 border-indigo-500 shadow-xl">
            {/* Replace with your profile image */}
            <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-7xl font-bold">
              GS
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration - adjusted for better position */}
      <div className="absolute top-0 right-0 -z-10 opacity-15 lg:block">
        <svg width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
          <defs>
            <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-15 lg:block">
        <svg width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
          <defs>
            <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c2)" />
        </svg>
      </div>
    </section>
  );
} 