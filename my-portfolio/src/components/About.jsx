export default function About() {
  const skillGroups = [
  {
    label: 'Languages',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python'],
  },
  {
    label: 'Frontend',
    skills: ['React', 'React Native', 'Tailwind CSS'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Express.js'],
  },
  {
    label: 'Databases & ORM',
    skills: ['MongoDB', 'MySQL', 'Prisma', 'Supabase'],
  },
  {
    label: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Vercel', 'Netlify', 'Render'],
  },
  {
    label: 'AI & Libraries',
    skills: ['Gemini API', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib'],
  },
  {
    label: 'Design',
    skills: ['Figma', 'Canva'],
  },
  {
    label: 'Auth & Services',
    skills: ['Clerk'],
  },
];

  return (
    <section className="about" id="about">
      <div className="about-left fade-in">
        <div className="about-image-wrapper">
          <img
            src="/avatar.png"
            alt="Ipshita Patel"
            className="about-image-main"
          />
        </div>
      </div>

      <div className="about-right">
        <div className="fade-in">
          <div className="section-label">
            <div className="section-label-line"></div>
            <span>About Me</span>
          </div>
          <h2 className="section-heading">
            A curious builder who turns<br />ideas into real experiences.
          </h2>
        </div>

        <p className="about-text fade-in fade-in-delay-1">
          I started with simple <strong>HTML, CSS, and JavaScript</strong> projects and gradually explored deeper areas — UI/UX design, AI-integrated applications, and frontend engineering. What drives me isn't just writing code, but understanding <strong>how people interact with what I build</strong>.
        </p>

        <p className="about-text fade-in fade-in-delay-2">
          I've built everything from calming micro-experiences like <strong>Bunny Notes</strong> (a soft productivity planner with themes & affirmations), to idea-driven platforms like <strong>FableGenie</strong> (AI storytelling), to practical tools like an <strong>Application Tracker</strong> focused on usability and clarity.
        </p>

        <p className="about-text fade-in fade-in-delay-3">
          Along the way I've contributed to <strong>open source</strong>, participated in Hacktoberfest, and worked in internship environments collaborating on real-world production systems.{' '}
          <a href="https://github.com/Ipshita29" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>GitHub →</a>
        </p>

        <div className="about-text fade-in fade-in-delay-4" style={{ fontStyle: 'italic', color: 'var(--black)', fontWeight: 400, fontSize: '0.95rem', borderLeft: '2px solid var(--accent)', paddingLeft: '1rem', marginTop: '0.25rem' }}>
          "I enjoy building things that feel simple, thoughtful, and slightly creative — where design and development come together seamlessly."
        </div>

        {/* Skills Groups */}
        <div className="skills-groups fade-in fade-in-delay-4">
          {skillGroups.map((group) => (
            <div key={group.label} className="skill-group">
              <div className="skill-group-header">
                <span className="skill-group-icon">{group.icon}</span>
                <span className="skill-group-label">{group.label}</span>
              </div>
              <div className="skill-group-tags">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    <div className="skill-dot"></div>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
