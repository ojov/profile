import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
  {
    title: 'Senior Backend Engineer',
    company: 'Trybe Mobile',
    location: 'Austin, Texas, USA',
    period: 'Jul 2024 - Present',
    description:
      'Leading backend architecture and platform initiatives for mission-critical customer acquisition and revenue systems, achieving 99.9% uptime and strengthening data integrity through multi-layer authentication.',
    achievements: [
      'Architected and evolved a resilient AWS-based backend platform to support high-volume customer acquisition and revenue workflows at scale.',
      'Implemented OAuth2 and SSO integrations with Google and Apple sign-in, reducing onboarding friction while strengthening authentication for revenue-driving user interactions.',
      'Introduced semantic search using OpenAI embeddings in pgvector — chosen over Elasticsearch as the better fit for the data model — and integrated Cloudinary to efficiently manage thousands of images and videos for content delivery.',
      'Established CI/CD automation and deployment standards, cutting release time by 10% and improving reliability across cloud-native services.'
    ],
    technologies: [
      'Java', 'Spring Boot', 'PostgreSQL', 'pgvector', 'AWS', 'OAuth2', 'Google Sign-In', 'Apple Sign-In', 'Cloudinary', 'CI/CD'
    ]
  },
  {
    title: 'Senior Backend Engineer',
    company: 'Simplify Synergy',
    location: 'Abuja, Nigeria',
    period: 'Jul 2024 - May 2026',
    description:
      'Built and modernized backend capabilities for compliance-driven fintech workflows, focusing on scalability, security, and dependable service delivery.',
    achievements: [
      'Led data migration from a relational database to NoSQL, improving transaction speeds by 30% while preserving data integrity for high-volume distributed processing.',
      'Designed event-driven microservices with Spring Boot, reactive programming, and Kafka — cutting load times by 30% while ensuring high-throughput, fault-tolerant processing.',
      'Implemented OAuth2 and Keycloak-based authentication and authorization for 1,000+ users, reinforcing security for critical operations.',
      'Collaborated with product and compliance stakeholders to deliver performant KYC and onboarding APIs that supported business growth.'
    ],
    technologies: [
      'Spring Boot', 'Reactive Programming', 'OAuth2', 'Keycloak', 'Kafka', 'NoSQL', 'KYC', 'Microservices'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Decagon',
    location: 'Benin, Nigeria',
    period: 'Sep 2022 - Jul 2024',
    description:
      'Contributed to cross-functional product delivery using Agile practices, building reliable backend services that helped reduce project delivery times by 20%.',
    achievements: [
      'Implemented Docker-based containerization for web and mobile APIs, improving deployment speed by 30% and consistency across environments.',
      'Designed JPA-based data access layers, improving query efficiency by 40% and reducing bottlenecks in application workflows.',
      'Mentored over 200 aspiring engineers in backend development using Java and Spring Boot, strengthening team capability and delivery quality.'
    ],
    technologies: [
      'Java', 'Spring Boot', 'Docker', 'JPA', 'Agile', 'Mentorship'
    ]
  },
  {
    title: 'Technical Trainer & Data Analyst',
    company: 'Kebbi Tech Hub',
    location: 'Birnin Kebbi, Nigeria',
    period: 'Jun 2021 - Aug 2022',
    description:
      'Delivered technical training in data analysis, cloud fundamentals, and programming to professional learners across structured cohort programmes.',
    achievements: [
      'Designed and taught cohort curricula covering data analysis, programming fundamentals, and cloud concepts.',
      <>
        Earned{' '}
        <a
          href="https://aws.amazon.com/certification/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline decoration-blue-500/50 hover:text-teal-400"
        >
          AWS Certified Cloud Practitioner
        </a>{' '}
        during this period, building foundational knowledge in cloud architecture, storage, and compute.
      </>
    ],
    technologies: [
      'Python', 'SQL', 'Data Analysis', 'AWS', 'Technical Training'
    ]
  }
];

  const education = [
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
            My career progression as a senior engineer building scalable platforms, leading delivery, and driving technical excellence
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