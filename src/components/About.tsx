import React from 'react';
import { Code, Database, Server, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A passionate Backend Engineer with expertise in building enterprise-grade Java applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a dedicated Backend Engineer with extensive experience in Java development, specializing in 
              Spring Boot, microservices architecture, and cloud technologies. Currently pursuing a Master's in 
              Computer Science at Woolf University while working as a Software Engineer.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My expertise spans from building robust RESTful APIs to implementing complex distributed systems. 
              I'm passionate about clean code, performance optimization, and staying current with the latest 
              developments in the Java ecosystem and cloud computing.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-700 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
              <Code className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Java & Spring</h3>
              <p className="text-gray-400 text-sm">Expert in Java development with Spring Boot framework</p>
            </div>
            
            <div className="bg-gray-700 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
              <Database className="h-12 w-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Database Design</h3>
              <p className="text-gray-400 text-sm">Proficient in SQL, NoSQL, and database optimization</p>
            </div>
            
            <div className="bg-gray-700 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
              <Server className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Cloud & DevOps</h3>
              <p className="text-gray-400 text-sm">Experience with AWS, Docker, and CI/CD pipelines</p>
            </div>
            
            <div className="bg-gray-700 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
              <Coffee className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Problem Solving</h3>
              <p className="text-gray-400 text-sm">Analytical thinking and innovative solution development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;