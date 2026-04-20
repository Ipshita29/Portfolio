const projects = [
  {
    id: 1,
    category: 'AI · Storytelling',
    title: 'FableGenie',
    description:
      'An AI-powered storytelling platform that generates immersive, personalized stories based on user prompts.',
    tech: ['React', 'Node.js', 'Gemini API'],
    link: 'https://fablegenie-5.onrender.com/',
    visual: {
      image: '/FableGenie.png',
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
    link: 'https://where-is-my-money-1.onrender.com/',
    visual: {
      image: '/whereismmymoney.png',
      pattern: 'wave',
    },
    featured: true,
  },
  {
    id: 3,
    category: 'Productivity · Tracking',
    title: 'Application Tracker',
    description:
      'Track job applications with status updates and notes.',
    tech: ['React', 'JavaScript', 'CSS'],
    link: 'https://69540af7452e6e05f10ac964--rainbow-lokum-569bc6.netlify.app/',
    visual: {
      image: '/AppTracker.png',
      pattern: 'grid',
    },
  },
  {
    id: 10,
    category: 'Mobile · Wellness',
    title: 'AIRA — Health Tracker',
    description:
      'Wellness app with AI chatbot, reminders, meditation, and habit tracking.',
    tech: ['React Native', 'Expo', 'AsyncStorage', 'OpenRouter API'],
    link: 'https://youtube.com/shorts/6cGqBKyOalk?feature=share',
    visual: {
      image: '/aira.png',
      pattern: 'soft',
    },
  },
  {
    id: 11,
    category: 'AI · Developer Tool',
    title: 'Codebase RAG',
    description:
      'Understand any GitHub repository instantly using AI ',
    tech: ['RAG', 'Langchain', 'Streamlit', 'FAISS', 'Python'],
    link: 'https://codebase-rag-hsfnlpf8igdfjgkxaccos9.streamlit.app/',
    visual: {
      image: '/codebase.png', 
      pattern: 'grid',
    },
  },
  {
    id: 12,
    category: 'AI · Visualization',
    title: 'Neural Network Visualizer',
    description:
      'An interactive web application that helps users understand how neural networks learn visually.',
    tech: ['Neural Networks', 'Streamlit', 'Scikit-learn'],
    link: 'https://neuralnetworks-gtzjlnrnxxmcfwizebvvgg.streamlit.app/',
    visual: {
      image: '/nn.png',
      pattern: 'stars',
    },
    featured: true,
  },
  {
    id: 13,
    category: 'AI · Analyzer',
    title: 'Job Skill Gap Analyzer',
    description:
      'A full-stack web application that compares a resume with a job description to identify skill gaps and provide actionable insights for improving job readiness.',
    tech: ['TF-IDF', 'React', 'Flask'],
    link: 'https://job-skill-gap-analyzer-frontend2.vercel.app/',
    visual: {
      image: '/jobskill.png',
      pattern: 'stars',
    },
    featured: true,
  }
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
        style={{
            backgroundImage: `url(${project.visual.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
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

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <div>
          <h2 className="section-heading">What I've made till now</h2>
        </div>
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