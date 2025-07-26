import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Decagon Institute',
      location: 'Lagos, Nigeria',
      period: '2024 - Present',
      description: 'Working on enterprise-level Java applications, focusing on backend development with Spring Boot and microservices architecture.',
      achievements: [
        'Developed scalable RESTful APIs serving thousands of users',
        'Implemented microservices architecture using Spring Boot',
        'Optimized database queries improving performance by 40%',
        'Collaborated with cross-functional teams in agile environment'
      ],
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'AWS']
    },
    {
      title: 'Backend Developer',
      company: 'Freelance Projects',
      location: 'Remote',
      period: '2022 - 2024',
      description: 'Delivered custom backend solutions for various clients, specializing in Java-based web applications and API development.',
      achievements: [
        'Built e-commerce backend systems with payment integration',
        'Developed real-time chat applications using WebSocket',
        'Created automated testing suites with 90%+ code coverage',
        'Implemented secure authentication and authorization systems'
      ],
      technologies: ['Java', 'Spring Framework', 'MySQL', 'Redis', 'JWT']
    },
    {
      title: 'Junior Java Developer',
      company: 'Learning & Development',
      location: 'Nigeria',
      period: '2021 - 2022',
      description: 'Focused on learning Java fundamentals and building foundational projects while contributing to open-source initiatives.',
      achievements: [
        'Completed comprehensive Java certification programs',
        'Built multiple full-stack applications for portfolio',
        'Contributed to open-source Java projects on GitHub',
        'Participated in coding bootcamps and technical workshops'
      ],
      technologies: ['Core Java', 'Spring MVC', 'HTML/CSS', 'JavaScript', 'Git']
    }
  ];

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'Woolf University',
      location: 'Online',
      period: '2024 - Present',
      gpa: 'In Progress',
      relevant: ['Advanced Algorithms', 'Distributed Systems', 'Software Architecture', 'Machine Learning']
    },
    {
      degree: 'Certificate in Software Engineering',
      school: 'Decagon Institute',
      location: 'Lagos, Nigeria',
      period: '2024',
      gpa: 'Completed',
      relevant: ['Java Development', 'Spring Boot', 'Database Design', 'System Design']
    },
    {
      degree: 'Bachelor of Engineering in Electrical/Electronics',
      school: 'University of Benin',
      location: 'Benin City, Nigeria',
      period: '2015 - 2021',
      gpa: '3.5/4.0',
      relevant: ['Mathematics', 'Programming Fundamentals', 'Digital Systems', 'Project Management']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My career progression as a Backend Engineer, building expertise in Java and cloud technologies
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
            <Briefcase className="h-6 w-6 mr-3 text-blue-400" />
            Work Experience
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-blue-500 to-teal-500 z-0"></div>
                )}
                
                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-2">{exp.title}</h4>
                      <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-4">
                        <span className="text-blue-400 font-medium">{exp.company}</span>
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                  
                  <div className="mb-6">
                    <h5 className="text-lg font-medium text-white mb-3">Key Achievements:</h5>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-gray-300">
                          <span className="text-blue-400 mr-2 mt-1">•</span>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
            <div className="h-6 w-6 mr-3 text-teal-400 flex items-center justify-center">🎓</div>
            Education
          </h3>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                    <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-4">
                      <span className="text-teal-400 font-medium">{edu.school}</span>
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {edu.location}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.period}
                      </span>
                      <span className="text-green-400 font-medium">{edu.gpa}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-lg font-medium text-white mb-3">Relevant Coursework:</h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevant.map((course, courseIndex) => (
                      <span
                        key={courseIndex}
                        className="px-3 py-1 bg-teal-600/20 text-teal-400 rounded-full text-sm border border-teal-600/30"
                      >
                        {course}
                      </span>
                    ))}
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

export default Experience;