import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ['Backend Engineer', 'Java Developer', 'Spring Boot Expert', 'Cloud Architect'];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = setInterval(() => {
      if (!isDeleting && charIndex < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, charIndex + 1));
        charIndex++;
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentTitle.slice(0, charIndex - 1));
        charIndex--;
      } else if (!isDeleting && charIndex === currentTitle.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      } else if (isDeleting && charIndex === 0) {
        setCurrentIndex((prev) => (prev + 1) % titles.length);
        isDeleting = false;
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(typeEffect);
  }, [currentIndex]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%234F46E5%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 p-1">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">OO</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Osamudiamen Ojo</span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12 flex items-center justify-center">
            <span>I'm a </span>
            <span className="text-blue-400 ml-2 font-semibold min-w-[200px] text-left">
              {displayText}<span className="animate-pulse">|</span>
            </span>
          </div>
          
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experienced Backend Engineer specializing in Java, Spring Boot, and cloud technologies. 
            I build scalable, high-performance applications that power modern digital experiences.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2"
          >
            <Mail className="h-5 w-5" />
            <span>Get In Touch</span>
          </button>
          
          <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
            <Download className="h-5 w-5" />
            <span>Download Resume</span>
          </button>
        </div>

        <div className="flex justify-center space-x-8 mb-16">
          <a href="https://github.com/ojov" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
            <Github className="h-8 w-8" />
          </a>
          <a href="https://linkedin.com/in/ojov/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
            <Linkedin className="h-8 w-8" />
          </a>
          <a href="mailto:victorojo007@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
            <Mail className="h-8 w-8" />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce text-gray-400 hover:text-blue-400 transition-colors duration-300"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;