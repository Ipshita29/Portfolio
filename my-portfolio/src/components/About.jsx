export default function About() {
  const skillGroups = [ 
                        { label: 'Languages', skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python'], }, 
                        { label: 'Frontend', skills: ['React', 'React Native', 'Tailwind CSS'], }, 
                        { label: 'Backend', skills: ['Node.js', 'Express.js'], }, 
                        { label: 'Databases & ORM', skills: ['MongoDB', 'MySQL', 'Prisma', 'Supabase'], }, 
                        { label: 'Tools & Platforms', skills: ['Git', 'GitHub', 'Vercel', 'Netlify', 'Render', 'Streamlit'], }, 
                        { label: 'AI & Libraries', skills: ['Gemini API', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'RAG', 'NLP' ,'Transformers'], }, 
                        { label: 'Design', skills: ['Figma', 'Canva'], }, { label: 'Auth & Services', skills: ['Clerk'], }, 
                      ];

  return (
    <section className="about-modern" id="about">
      <div className="about-left">
        <h2 className="about-heading">
          Designing + Building
          <br />
          <span>meaningful digital experiences</span>
        </h2>

        <p className="about-para">
          I’m an AI/ML engineer & full-stack developer focused on building products
          where <strong>function meets design</strong>. I enjoy solving real problems
          while keeping the experience clean and intuitive.
        </p>

        <p className="about-para">
          From <strong>Bunny Notes</strong> to <strong>FableGenie</strong>, I love creating
          tools that people actually enjoy using.
        </p>

        <a
          href="https://github.com/Ipshita29"
          target="_blank"
          rel="noopener noreferrer"
          className="about-link"
        >
          Explore my work →
        </a>
      </div>

      <div className="about-right">
        {skillGroups.map((group) => (
          <div key={group.label} className="skill-card">
            <div className="skill-card-header">
              <span>{group.label}</span>
            </div>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}