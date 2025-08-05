import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
  {
    title: 'Lead Backend Engineer',
    company: 'Trybe Mobile',
    location: 'Austin, Texas, USA',
    period: 'Jul 2024 - Present',
    description:
      'Designed and engineered a scalable AWS backend architecture to support mission-critical customer acquisition and revenue operations, achieving 99.9% uptime and enhancing data integrity through robust multi-layer authentication.',
    achievements: [
      'Implemented OAuth2 authentication and integrated Google and Apple sign-in to reduce onboarding friction and secure revenue-driving user interactions.',
      'Integrated Cloudinary for dynamic media storage, efficiently managing thousands of images and videos to optimize content delivery and customer experience.',
      'Leveraged OpenAI Embeddings to integrate semantic search, improving content relevance and supporting scalable system enhancements.',
      'Automated CI/CD pipelines to optimize deployment processes, reducing release time by 10% and boosting system reliability in a cloud-native environment.'
    ],
    technologies: [
      'AWS', 'OAuth2', 'Google Sign-In', 'Apple Sign-In', 'Cloudinary', 'OpenAI', 'CI/CD', 'Node.js', 'TypeScript'
    ]
  },
  {
    title: 'Backend Developer',
    company: 'Simplify Synergy',
    location: 'Abuja, Nigeria',
    period: 'Jul 2024 - Jun 2025',
    description:
      'Developed robust KYC API and secure onboarding workflows to facilitate dynamic regulatory compliance and enhance customer experience, aligning with scalable system requirements.',
    achievements: [
      'Executed data migration from a relational database to NoSQL, improving transaction speeds by 30%, while ensuring data integrity crucial for distributed systems.',
      'Implemented a microservices architecture using Spring Boot and reactive programming to reduce load times by 30%, ensuring system scalability and high reliability.',
      'Engineered a secure authentication and authorization system with OAuth2 and Keycloak for over 1,000 users, reinforcing data security in critical operations.',
      'Utilized Kafka for event-driven processing, ensuring high throughput and fault tolerance, key aspects in maintaining robust revenue and customer acquisition systems.'
    ],
    technologies: [
      'Spring Boot', 'Reactive Programming', 'OAuth2', 'Keycloak', 'Kafka', 'NoSQL', 'KYC', 'Microservices'
    ]
  },
  {
    title: 'Associate Software Engineer',
    company: 'Decagon',
    location: 'Benin, Nigeria',
    period: 'Sep 2022 - Jul 2024',
    description:
      'Worked with cross-functional teams to design and develop web applications using Agile methodologies, resulting in a 20% reduction in project delivery times.',
    achievements: [
      'Designed and implemented Docker-based containerization for web and mobile APIs, improving deployment speed by 30%.',
      'Designed and implemented JPA-based data access layers, optimizing database interactions and improving query efficiency by 40%.',
      'Mentored over 200 aspiring software engineers in backend development using Java and Spring Boot.'
    ],
    technologies: [
      'Java', 'Spring Boot', 'Docker', 'JPA', 'Agile', 'Mentorship'
    ]
  }
];

  const education = [
  {
    degree: 'MSc, Financial Engineering',
    school: 'WorldQuant University',
    location: 'Washington, USA',
    period: '2025 – Present',
    gpa: 'In Progress',
    relevant: ['Stochastic Calculus', 'Financial Modeling', 'Risk Management']
  },
  {
    degree: 'Higher Diploma, Computer Science',
    school: 'Kibo School of Technology',
    location: 'New York, USA',
    period: '2022 – 2024',
    gpa: 'Completed',
    relevant: ['Algorithms', 'Distributed Systems', 'Database Systems']
  },
  {
    degree: 'Bachelor of Science, Mathematics',
    school: 'University of Benin',
    location: 'Benin, Nigeria',
    period: '2015 – 2019',
    gpa: 'Completed',
    relevant: ['Linear Algebra', 'Probability Theory', 'Numerical Methods']
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