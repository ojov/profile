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
            A senior engineer with a strong track record of building scalable, secure, and reliable software systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a senior software engineer with 5+ years of experience designing and delivering production-grade systems across fintech, compliance, and cloud-native platforms —
              including payment infrastructure running at 99.9% uptime and KYC workflows serving 1,000+ users. My work spans API design, distributed services, platform reliability, and technical leadership.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I've led architecture decisions that cut latency and load times by up to 30%, driven CI/CD automation that accelerated releases, and mentored 200+ engineers —
              all while meeting strict security, scalability, and reliability requirements. I value pragmatic engineering, clean architecture, and measurable business impact.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">200+</div>
                <div className="text-gray-400">Engineers Mentored</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-700 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
              <Code className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Backend Engineering</h3>
              <p className="text-gray-400 text-sm">Expert in Java, Spring Boot, and building robust backend services</p>
            </div>
            
            <div className="bg-gray-700 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
              <Database className="h-12 w-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Distributed Systems</h3>
              <p className="text-gray-400 text-sm">Experienced in event-driven architecture, APIs, and scalable data design</p>
            </div>
            
            <div className="bg-gray-700 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
              <Server className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Cloud & DevOps</h3>
              <p className="text-gray-400 text-sm">Experience with AWS, Docker, CI/CD, and platform reliability</p>
            </div>
            
            <div className="bg-gray-700 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
              <Coffee className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Leadership</h3>
              <p className="text-gray-400 text-sm">Mentoring engineers and driving delivery with sound technical judgment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;