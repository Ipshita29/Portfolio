import React from "react";
import "./App.css"; // Import CSS file

const Portfolio = () => {
  return (
    <div>
      {/* Header Section */}
      <header>
        <h1>Ipshita Patel</h1>
        <p>Aspiring Web Developer | UI/UX Enthusiast</p>
      </header>

      {/* Profile Image */}
      <img src="/photo.jpeg" alt="Ipshita Patel" className="profile-img" />

      {/* About Section */}
      <div className="section">
        <h2>About Me</h2>
        <p>I'm a 19-year-old aspiring software developer with a passion for creativity and problem-solving.</p>
      </div>

      {/* Education Section */}
      <div className="section">
        <h2>Education</h2>
        <p>
          Pursuing my degree from{" "}
          <a href="https://www.newtonschool.co/newton-school-of-technology-nst/nst-adypu-pune">
            Newton School of Technology
          </a>
        </p>
        <p>Completed schooling from Bhopal.</p>
      </div>

      {/* Skills Section */}
      <div className="section">
        <h2>Skills</h2>
        <p>Web Development (HTML, CSS, JavaScript, React)</p>
        <p>UI/UX Design (Figma, Canva)</p>
        <p>Painting, Blogging, Problem Solving</p>
      </div>

      {/* Contact Section */}
      <div className="section contact">
        <h2>Contact Me</h2>
        <p>
          Email: <a href="mailto:ipshita2908@gmail.com">ipshita2908@gmail.com</a>
        </p>
        <p>
          GitHub: <a href="https://github.com/yourgithub">github.com/yourgithub</a>
        </p>
        <p>
          LinkedIn: <a href="https://linkedin.com/in/yourlinkedin">linkedin.com/in/yourlinkedin</a>
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
