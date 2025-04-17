'use client';

import React from 'react';

const services = [
  {
    title: 'Python Automation',
    description: 'End-to-end automation systems for practical, real-world problems:',
    items: [
      'Custom Discord bots with real-time data triggers',
      'Task and workflow automation with API/webhook integration',
      'Automated notifications for price changes, emails, and metrics',
      'Scripting pipelines for Google Sheets, Notion, and databases'
    ],
    icon: (
      <svg className="h-8 w-8 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Data Scraping & Analysis',
    description: 'Tools for extracting, processing, and analyzing structured and unstructured data:',
    items: [
      'Web scraping with BeautifulSoup, Playwright, and Selenium',
      'Competitor tracking tools (e.g. Etsy product scrapers)',
      'Sentiment analysis using NLP and OpenAI APIs',
      'ETL pipelines feeding dashboards, APIs, or reports'
    ],
    icon: (
      <svg className="h-8 w-8 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Custom Tools & Predictive Models',
    description: 'Smart, lightweight tools tailored for automation and decision-making:',
    items: [
      'Stock/crypto technical indicator bots with backtesting',
      'Lightweight CLI utilities and data pipeline scripts',
      'Early-stage predictive models (e.g. poker outcome estimation)',
      'Smart beta models (momentum, volatility, regime detection)'
    ],
    icon: (
      <svg className="h-8 w-8 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  }
];


export default function Services() {
  return (
    <section id="services" className="bg-gray-800 py-24">
      <div className="w-full max-w-6xl mx-auto px-6 py-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Services</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Specialized in developing automation solutions and web applications to streamline your workflow and boost productivity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-700 rounded-lg shadow-lg p-6 transition-all duration-200 hover:shadow-xl hover:bg-gray-600 flex flex-col h-full">
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
              <div className="mt-2 space-y-1 text-sm text-gray-400 flex-grow">
                {service.items.map((item, i) => (
                  <div key={i} className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 