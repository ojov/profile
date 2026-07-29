import { Github, BookOpen, Play, Package, Lock, Archive } from 'lucide-react';

type ProjectLink = {
  label: string;
  href: string;
  icon: typeof Github;
};

type Project = {
  title: string;
  category: string;
  org: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  links: ProjectLink[];
  note?: { icon: typeof Github; text: string };
};

const projects: Project[] = [
  {
    title: 'Cyrus — Payment Identity Infrastructure',
    category: 'Fintech Infrastructure',
    org: 'Personal project',
    summary:
      'A customer payment identity layer built on Nomba. Every customer gets a persistent identity and a dedicated virtual bank account, so merchants can collect and disburse funds without ever holding Nomba credentials themselves.',
    highlights: [
      'Double-entry ledger backing merchant wallets, with bank-transfer payouts.',
      'Every inbound webhook is verified against Nomba’s requery endpoint before a wallet is credited — no crediting on webhook trust alone.',
      'Dual authentication: RSA-signed JWT cookies for the dashboard, scoped API keys for server-to-server traffic.',
      'Misdirected-payment recovery surfaces orphaned payments for manual reattribution instead of silently losing them.',
      'JobRunr-backed webhook retries; reconciliation runs on virtual threads.',
      'Ships a published Python SDK and a full developer documentation site covering authentication, webhooks, payouts, and error semantics.',
    ],
    technologies: [
      'Java 25',
      'Spring Boot 4.1',
      'PostgreSQL',
      'Flyway',
      'Spring Security',
      'OAuth2',
      'JobRunr',
      'Docker',
      'GCP Cloud Run',
      'Next.js',
    ],
    links: [
      { label: 'Source', href: 'https://github.com/ojov/cyrus', icon: Github },
      { label: 'Demo', href: 'https://youtu.be/65M7bqUCou8', icon: Play },
      { label: 'Docs', href: 'https://trycyrus.app', icon: BookOpen },
      { label: 'Python SDK', href: 'https://pypi.org/project/cyrus-payments/', icon: Package },
    ],
    note: { icon: Archive, text: 'Live deployment retired — see demo walkthrough' },
  },
  {
    title: 'KYC & Compliance Platform',
    category: 'Regulated Fintech',
    org: 'Simplify Synergy',
    summary:
      'Production KYC and onboarding infrastructure for a regulated fintech platform, built as event-driven microservices on Java and Spring Boot.',
    highlights: [
      'Scalable KYC API supporting regulatory compliance and customer onboarding at production volume.',
      'Apache Kafka for event-driven processing across services — fault-tolerant and high-throughput.',
      'OAuth2 and Keycloak authentication with RBAC and OpenID Connect, serving 1,000+ users.',
      'Migrated unstructured data from PostgreSQL to MongoDB, cutting API latency by 30%.',
      'Deployed containerised services to Google Kubernetes Engine and AWS with autoscaling, rolling deployments, and health checks.',
      'Built Java/Spring SDKs for third-party KYC and compliance providers, plus a commercial bank integration.',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Apache Kafka',
      'Keycloak',
      'OAuth2',
      'PostgreSQL',
      'MongoDB',
      'GKE',
      'AWS',
      'Docker',
    ],
    links: [],
    note: { icon: Lock, text: 'Private — client work under NDA' },
  },
  {
    title: 'RelayPay AI Support Agent',
    category: 'AI & Retrieval',
    org: 'RelayPay',
    summary:
      'A voice and text agent handling first-line customer support 24/7, answering strictly from an approved knowledge base rather than generating freely.',
    highlights: [
      'Notion documentation crawled with Firecrawl, chunked, and embedded into a Supabase vector store.',
      'Answers are constrained to retrieved source material — no free-form generation, so responses stay auditable.',
      'Questions needing human judgment escalate cleanly: callback booked to Google Calendar, case logged to Airtable with category and priority, team alerted on Telegram.',
      'Built to a latency budget of under 6s for voice and under 3s for text.',
      'Targeting 60–70% of routine questions resolved without escalation.',
    ],
    technologies: ['VAPI', 'Supabase', 'Firecrawl', 'OpenAI', 'n8n', 'Notion', 'Airtable'],
    links: [
      { label: 'Demo', href: 'https://youtu.be/9LtKC62gGF0', icon: Play },
    ],
  },
  {
    title: 'kcsocial — Keycloak Social Login',
    category: 'Open Source & Speaking',
    org: 'Nigeria Java User Group',
    summary:
      'A reference implementation of social login with Keycloak in Spring Boot, built for and presented as a talk session at the Nigeria Java User Group.',
    highlights: [
      'Walks through federated identity with Keycloak as the identity provider for a Spring Boot service.',
      'Written as teaching material — readable end to end rather than optimised for cleverness.',
      'Presented live to the Nigeria JUG community.',
    ],
    technologies: ['Java', 'Spring Boot', 'Keycloak', 'OAuth2', 'OpenID Connect'],
    links: [
      { label: 'Source', href: 'https://github.com/ojov/kcsocial', icon: Github },
      { label: 'Talk', href: 'https://youtu.be/xmoLFOuSV9Y', icon: Play },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Selected{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Work
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Backend systems I designed, built, and shipped — payment infrastructure, regulated
            compliance workflows, and retrieval-backed AI services.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-gray-900 rounded-lg p-6 md:p-8 border border-gray-700 hover:border-blue-500 transition-colors duration-300"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium border border-blue-600/30">
                    {project.category}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{project.org}</p>
                </div>

                {project.note && (
                  <span className="flex items-center gap-2 text-xs text-gray-400 bg-gray-800 border border-gray-700 rounded-md px-3 py-2">
                    <project.note.icon className="h-3.5 w-3.5" aria-hidden="true" />
                    {project.note.text}
                  </span>
                )}
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">{project.summary}</p>

              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start text-gray-400">
                    <span className="text-blue-400 mr-3 mt-1" aria-hidden="true">
                      •
                    </span>
                    <span className="text-sm leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-gray-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-gray-800 text-gray-300 rounded text-xs border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.links.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.links.map(({ label, href, icon: Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} — ${label}`}
                        className="inline-flex items-center gap-2 text-xs font-medium px-3 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 transition-colors duration-200"
                      >
                        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                        {label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/ojov"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
          >
            <Github className="h-5 w-5" aria-hidden="true" />
            <span>More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
