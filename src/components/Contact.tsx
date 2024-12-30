import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold">Let's Work Together</h2>
          <p className="text-gray-600">Have a project in mind? Let's create something amazing.</p>
        </div>
        
        <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white py-2 px-4 rounded-md hover:from-blue-600 hover:to-pink-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex justify-center space-x-6">
              <a href="#" className="social-link">
                <Mail className="h-6 w-6" />
              </a>
              <a href="#" className="social-link">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="social-link">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="social-link">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;