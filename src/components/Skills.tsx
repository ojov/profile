import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Python', level: 80 },
        { name: 'JavaScript', level: 75 },
        { name: 'SQL', level: 90 },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Spring Boot', level: 95 },
        { name: 'Spring Framework', level: 90 },
        { name: 'Hibernate/JPA', level: 85 },
        { name: 'React', level: 75 },
      ],
    },
    {
      title: 'Databases & Storage',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 75 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 80 },
        { name: 'Kubernetes', level: 70 },
        { name: 'Git', level: 95 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-white mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">Certifications & Learning</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">AWS Certified</h4>
              <p className="text-gray-400">Cloud Practitioner</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h4 className="text-lg font-semibold text-teal-400 mb-2">Scrum Fundamentals</h4>
              <p className="text-gray-400">Certified Professional</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h4 className="text-lg font-semibold text-green-400 mb-2">EF SET English</h4>
              <p className="text-gray-400">C2 Proficient Level</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;