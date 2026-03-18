export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        <div className="hero-eyebrow fade-in">
          <div className="hero-eyebrow-line"></div>
          <span>Full-Stack · AI/ML · UI/UX</span>
        </div>

        <h1 className="hero-title fade-in fade-in-delay-1">
          Hi, I'm
          <span>Ipshita</span>
        </h1>

        <p className="hero-subtitle fade-in fade-in-delay-2">
          I design experiences that feel effortless — turning ideas into real, usable products where design and code meet.
        </p>

        <div className="hero-cta fade-in fade-in-delay-3">
          <a href="#projects" className="btn-primary" onClick={(e) => {
            e.preventDefault();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <span>View Work</span>
          </a>
          <a href="#contact" className="btn-secondary" onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <span>Let's Talk</span>
          </a>
        </div>
      </div>

      <div className="hero-right fade-in fade-in-delay-2">
        <div className="avatar-container">
          <div className="avatar-ring"></div>
          <div className="avatar-blob">
            <img src="/avatar.png" alt="Ipshita — Developer & Designer" />
          </div>
          <div className="avatar-badge">
            <div className="avatar-badge-dot"></div>
            <span className="avatar-badge-text">Open to Work</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="hero-scroll-line"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
