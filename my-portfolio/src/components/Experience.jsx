export default function Experience() {
  const experiences = [
    {
      number: '01',
      title: 'AI & Tech Intern',
      company: 'Lenn Chartered & Co.',
      period: 'Apr 2026 — Oct 2026',
      description:
        'Working as an AI & Tech Intern, contributing to real-world business solutions by integrating AI tools and modern web technologies. Focused on building efficient workflows, automation, and user-centric digital solutions.',
      tags: ['AI Tools', 'Automation', 'Web Tech'],
    },
    {
      number: '02',
      title: 'Open Source Contributor',
      company: 'MDN Web Docs, Jenkins.io, Shiki & More',
      period: '2025 — Present',
      description:
        'Actively contributing to open-source projects by improving documentation, fixing issues, and enhancing developer resources. Participated in Hacktoberfest and collaborated with global contributors across multiple repositories.',
      tags: ['Open Source', 'GitHub', 'Documentation'],
    },
    {
      number: '03',
      title: 'Hackathon Participant',
      company: 'SIH & 24-Hour College Hackathons',
      period: '2024 — Present',
      description:
        'Participated in multiple hackathons including Smart India Hackathon (SIH) and intense 24-hour college hackathons. Built innovative web-based solutions under pressure, focusing on creativity, teamwork, and rapid prototyping.',
      tags: ['Hackathons', 'Teamwork', 'Rapid Prototyping'],
    },
    {
      number: '04',
      title: 'FullStack Developer',
      company: 'Personal & Academic Projects',
      period: '2023 — Present',
      description:
        'Building modern, responsive web applications using React, HTML, and CSS. Focused on clean UI, smooth interactions, and translating design ideas into functional products.',
      tags: ['React', 'JavaScript', 'CSS'],
    },
    {
      number: '05',
      title: 'UI/UX Designer',
      company: 'Personal Work',
      period: '2023 — Present',
      description:
        'Designing intuitive user experiences from wireframes to high-fidelity prototypes. Passionate about blending aesthetics with usability to create meaningful digital experiences.',
      tags: ['Figma', 'UX Research', 'Prototyping'],
    },
    {
      number: '06',
      title: 'Event & Decor Team Member',
      company: 'College Fests & Cultural Events',
      period: '2023 — Present',
      description:
        'Contributed to organizing and executing college fests and events as part of the decor team. Designed creative setups, managed on-ground execution, and collaborated with cross-functional teams to deliver engaging event experiences under tight timelines.',
      tags: ['Event Management', 'Creativity', 'Teamwork'],
    }
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
            Built through<br />real-world impact.
          </h2>
        </div>
      </div>

      <div className="experience-grid">
        {experiences.map((exp, i) => (
          <div key={exp.number} className="exp-card fade-in" style={{ animationDelay: `${i * 0.2}s` }}>
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