import React from 'react';
import { ExternalLink, Github, Server, Database, Cloud } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Backend API',
      description: 'A comprehensive e-commerce backend built with Spring Boot, featuring user authentication, product management, shopping cart, and payment processing with Stripe integration.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Spring Boot', 'PostgreSQL', 'Redis', 'Docker', 'JWT', 'Stripe API'],
      githubUrl: 'https://github.com/ojov',
      liveUrl: '#',
      featured: true,
    },
    {
      title: 'Real-time Chat Application',
      description: 'A scalable chat application supporting real-time messaging, file sharing, and group conversations using WebSocket technology and Spring Security.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Spring Boot', 'WebSocket', 'MongoDB', 'JWT', 'React'],
      githubUrl: 'https://github.com/ojov',
      liveUrl: '#',
      featured: true,
    },
    {
      title: 'Task Management System',
      description: 'RESTful API for task management with advanced features like project collaboration, time tracking, and comprehensive reporting capabilities.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Spring Boot', 'JPA/Hibernate', 'MySQL', 'Swagger', 'JUnit'],
      githubUrl: 'https://github.com/ojov',
      liveUrl: '#',
      featured: false,
    },
    {
      title: 'Banking System Backend',
      description: 'Secure banking system with transaction processing, account management, and fraud detection using advanced security patterns and microservices.',
      image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Spring Security', 'PostgreSQL', 'Apache Kafka', 'Docker'],
      githubUrl: 'https://github.com/ojov',
      liveUrl: '#',
      featured: false,
    },
    {
      title: 'Inventory Management API',
      description: 'Enterprise-level inventory management system with real-time stock tracking, automated reordering, and comprehensive analytics dashboard.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Spring Boot', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
      githubUrl: 'https://github.com/ojov',
      liveUrl: '#',
      featured: false,
    },
    {
      title: 'Event Management Platform',
      description: 'Full-featured event management platform with ticket booking, payment processing, attendee management, and real-time notifications.',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Spring Boot', 'Stripe API', 'PostgreSQL', 'WebSocket'],
      githubUrl: 'https://github.com/ojov',
      liveUrl: '#',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and contributions to various Java applications and backend systems
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Highlighted Work</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <Github className="h-5 w-5" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;