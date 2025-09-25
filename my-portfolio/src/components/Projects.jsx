import { useEffect } from "react";
import "./Projects.css";

const Projects = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Short description of the project.</p>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>Short description of the project.</p>
        </div>
        <div className="project-card">
          <h3>Project 3</h3>
          <p>Short description of the project.</p>
        </div>
        <div className="project-card">
          <h3>Project 4</h3>
          <p>Short description of the project.</p>
        </div>
        <div className="project-card">
          <h3>Project 5</h3>
          <p>Short description of the project.</p>
        </div>
        <div className="project-card">
          <h3>Project 6</h3>
          <p>Short description of the project.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
