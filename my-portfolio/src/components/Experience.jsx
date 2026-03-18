export default function Experience() {
  const experiences = [
    {
      number: '01',
      title: 'UI/UX Design & Branding',
      company: 'Freelance Projects',
      period: '2023 — Present',
      description: 'Designing and delivering end-to-end UI experiences for web applications. From wireframes to polished prototypes, I craft interfaces that balance aesthetics with usability.',
      tags: ['Figma', 'UX Research', 'Prototyping'],
    },
    {
      number: '02',
      title: 'Frontend Development',
      company: 'Academic & Personal Projects',
      period: '2022 — Present',
      description: 'Building modern, responsive web applications using React, HTML, and CSS. Focused on clean component architecture and pixel-perfect implementation from design files.',
      tags: ['React', 'JavaScript', 'CSS'],
    },
    {
      number: '03',
      title: 'Student Developer',
      company: 'Newton School of Technology',
      period: '2023 — Present',
      description: 'Actively building full-stack projects and exploring the intersection of design and engineering in academic and collaborative team settings.',
      tags: ['Full-Stack', 'Collaboration', 'Agile'],
    },
  ];

  return (
    <section className="experience" id="experience">
      <div className="experience-header">
        <div className="fade-in">
          <div className="section-label">
            <div className="section-label-line"></div>
            <span>Experience</span>
          </div>
          <h2 className="section-heading">
            Craft refined<br />through practice.
          </h2>
        </div>
      </div>

      <div className="experience-grid">
        {experiences.map((exp, i) => (
          <div key={exp.number} className={`exp-card fade-in fade-in-delay-${i + 1}`}>
            <div className="exp-number">{exp.number}</div>
            <div>
              <div className="exp-company">{exp.company}</div>
              <div className="exp-title">{exp.title}</div>
            </div>
            <div className="exp-period">{exp.period}</div>
            <p className="exp-desc">{exp.description}</p>
            <div className="exp-tags">
              {exp.tags.map((tag) => (
                <span key={tag} className="exp-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
