'use client';

import React, { useState } from 'react';
import { Mail } from 'lucide-react';

interface FormStatus {
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<FormStatus>({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });
    
    try {
      // Using environment variable for API endpoint
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
      // Fix the URL construction to avoid double slashes
      const url = apiUrl.endsWith('/') ? `${apiUrl}api/contact` : `${apiUrl}/api/contact`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch {
      setFormStatus({ 
        isSubmitting: false, 
        isSubmitted: false, 
        error: 'There was an error submitting your message. Please use the direct email option below instead.'
      });
    }
  };

  return (
    <section id="contact" className="bg-white dark:bg-gray-800 py-24">
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Have a project in mind or want to discuss how I can help with your automation needs? 
              Send me a message and I&apos;ll get back to you soon.
            </p>
          </div>
          
          {formStatus.isSubmitted ? (
            <div className="bg-green-50 dark:bg-green-900 border-l-4 border-green-500 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-800 dark:text-green-200">
                    Thank you for your message! I&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="space-y-6 mb-8">
                {formStatus.error && (
                  <div className="bg-red-50 dark:bg-red-900 border-l-4 border-red-500 p-4 mb-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-red-800 dark:text-red-200">
                          {formStatus.error}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="shadow-sm block w-full border border-gray-300 rounded-md p-2 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="shadow-sm block w-full border border-gray-300 rounded-md p-2 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="shadow-sm block w-full border border-gray-300 rounded-md p-2 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={formStatus.isSubmitting}
                    className="w-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50"
                  >
                    {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>

              <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
                <div className="text-center">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Direct Contact</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Prefer to reach out directly? Feel free to email me at:
                  </p>
                  <a 
                    href="mailto:contact@gabrielsaban.com" 
                    className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    contact@gabrielsaban.com
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
} 