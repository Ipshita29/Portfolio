import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <a href="#hero" className="nav-logo" onClick={(e) => handleNav(e, 'hero')}>
        Ipshita.
      </a>
      <ul className="nav-links">
        <li><a href="#about" onClick={(e) => handleNav(e, 'about')}>About</a></li>
        <li><a href="#experience" onClick={(e) => handleNav(e, 'experience')}>Experience</a></li>
        <li><a href="#projects" onClick={(e) => handleNav(e, 'projects')}>Projects</a></li>
        <li><a href="#contact" onClick={(e) => handleNav(e, 'contact')}>Contact</a></li>
      </ul>
    </nav>
  );
}
