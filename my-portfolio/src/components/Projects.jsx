const projects = [
  {
    id: 1,
    category: 'AI · Storytelling',
    title: 'FableGenie',
    description:
      'An AI-powered storytelling platform that generates immersive, personalized stories based on user prompts.',
    tech: ['React', 'Node.js', 'Gemini API'],
    link: 'https://fable-genie.vercel.app',
    visual: {
      bg: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)',
      pattern: 'stars',
    },
    featured: true,
  },
  {
    id: 2,
    category: 'AI · Finance',
    title: 'Where Is My Money?',
    description:
      'Analyzes expenses, categorizes spending, and detects anomalies using AI.',
    tech: ['React', 'Node.js', 'Gemini API', 'SQLite'],
    link: '#',
    visual: {
      bg: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
      pattern: 'wave',
    },
    featured: true,
  },
  {
    id: 3,
    category: 'AI · Developer Tool',
    title: 'CodeAtlas',
    description:
      'AI system that analyzes repositories and generates docs, architecture, and insights.',
    tech: ['React', 'Node.js', 'FastAPI', 'MySQL', 'OpenAI API'],
    link: '#',
    visual: {
      bg: 'linear-gradient(135deg, #141e30, #243b55)',
      pattern: 'grid',
    },
  },
  {
    id: 4,
    category: 'AI · Career',
    title: 'Career Profile Analyzer',
    description:
      'Suggests roles, calculates ATS score, and visualizes skills.',
    tech: ['Python', 'Flask', 'Pandas', 'Matplotlib'],
    link: '#',
    visual: {
      bg: 'linear-gradient(135deg, #232526, #414345)',
      pattern: 'bars',
    },
  },
  {
    id: 5,
    category: 'Mobile · Wellness',
    title: 'AIRA — Health Tracker',
    description:
      'Wellness app with AI chatbot, reminders, meditation, and habit tracking.',
    tech: ['React Native', 'Expo', 'AsyncStorage', 'OpenRouter API'],
    link: '#',
    visual: {
      bg: 'linear-gradient(135deg, #1d2671, #c33764)',
      pattern: 'soft',
    },
  },
  {
    id: 6,
    category: 'Productivity · Tracking',
    title: 'Application Tracker',
    description:
      'Track job applications with status updates and notes.',
    tech: ['React', 'JavaScript', 'CSS'],
    link: 'https://application-tracker-six.vercel.app',
    visual: {
      bg: 'linear-gradient(135deg, #0a0a0a, #1c1c1c, #2a2a2a)',
      pattern: 'grid',
    },
  },
];

/* keeps compatibility with your existing pattern logic */
function PatternOverlay({ pattern }) {
  return <div className={`project-visual-pattern pattern-${pattern}`} />;
}

/* FIXED: uses your existing class names (not card/card-bg etc) */
function ProjectCard({ project }) {
  const isLive = project.link && project.link !== '#';

  return (
    <div className="project-card fade-in">
      <div
        className="project-card-visual"
        style={{ background: project.visual.bg }}
      >
        <div className="project-card-visual-inner">
          <PatternOverlay pattern={project.visual.pattern} />
          <span className="project-visual-emoji">
            {project.visual.emoji}
          </span>
        </div>

        <div className="project-card-overlay">
          <a
            href={isLive ? project.link : '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="project-overlay-link"
            onClick={(e) => {
              if (!isLive) e.preventDefault();
            }}
          >
            {isLive ? 'View Project ↗' : 'Coming Soon'}
          </a>
        </div>
      </div>

      <div className="project-card-body">
        <span className="project-category">{project.category}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <div className="project-card-footer">
          <div className="project-tech">
            {project.tech.slice(0, 3).map((t, i) => (
              <span key={t} className="project-tech-tag">
                {t}
                {i < Math.min(project.tech.length, 3) - 1 ? ' · ' : ''}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="project-tech-tag">
                +{project.tech.length - 3}
              </span>
            )}
          </div>

          <a
            href={isLive ? project.link : '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-arrow"
            style={
              !isLive
                ? { opacity: 0.3, pointerEvents: 'none' }
                : {}
            }
          >
            ↗
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <div>
          <h2 className="section-heading">Selected Work</h2>
        </div>

        <a
          href="https://github.com/Ipshita29"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          All on GitHub ↗
        </a>
      </div>

      {/* All Projects */}
      <div className="row">
        <h3>All Projects</h3>
        <div className="scroll-row">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}