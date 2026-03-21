export default function Hero() {
  return (
    <section className="hero-editorial hero-bg" id="hero">
      <div className="hero-top-decoration">
        <div className="hero-logo-large">
          <span className="word-port">PORTFOLIO</span>
        </div>
      </div>

      <div className="hero-middle-section">
        <div className="hero-badge-col">
          <div className="hero-id-badge">
            <div className="badge-lanyard"></div>

            <div className="badge-card">
              <div className="badge-photo">
                <img src="/myimg2.png" alt="Ipshita - Badge Photo" />
              </div>

              <div className="badge-details">
                <span className="badge-name">IPSHITA PATEL.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-bio-col">
          <div className="hero-bio-text">
            <h2>HI, I'm <span>Ipshita</span></h2>
            <p>
              I'm an AI/ML Engineer and a FullStack Developer specialized in building products where 
              logic meets aesthetics. I love tackling complex problems through clean code 
              and premium design.
            </p>
          </div>

          <div className="hero-details-grid">
            <div className="detail-item">
              <h3>EDUCATION</h3>
              <p>B.Tech in CS (AI Specialization)</p>
              <p className="detail-sub">Newton School of Technology, Pune , India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}