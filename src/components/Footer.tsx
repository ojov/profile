import React from 'react';
import { Code2, Heart, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code2 className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">Osamudiamen Ojo</span>
          </div>
          
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Passionate Backend Engineer creating robust Java solutions that power modern applications. 
            Always learning, always coding, always growing.
          </p>

          <div className="flex items-center justify-center space-x-2 text-gray-400 mb-6">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and lots of</span>
            <Coffee className="h-4 w-4 text-yellow-500" />
            <span>by Osamudiamen Ojo</span>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              © {currentYear} Osamudiamen Ojo. All rights reserved. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;