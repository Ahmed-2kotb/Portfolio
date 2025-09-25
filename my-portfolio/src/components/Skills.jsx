import { useEffect, useRef, useState } from "react";
import "./Skills.css";

const skills = [
  { name: "HTML", icon: "💻" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "🟨" },
  { name: "SASS", icon: "🟪" },
  { name: "Bootstrap", icon: "📦" },
  { name: "Tailwind", icon: "🌬️" },
  { name: "ReactJS", icon: "⚛️" },
  { name: "Git/GitHub", icon: "🔧" },
  { name: "Agile", icon: "🏃‍♂️" },
];

const Skills = () => {
  const gridRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);   
          } else {
            setVisible(false);  
          }
        });
      },
      { threshold: 0.3 }
    );

    if (gridRef.current) observer.observe(gridRef.current);

    return () => {
      if (gridRef.current) observer.unobserve(gridRef.current);
    };
  }, []);

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-grid" ref={gridRef}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`skill-card ${visible ? "show" : ""}`}
            style={{ transitionDelay: `0s` }} 
          >
            <span className="skill-icon">{skill.icon}</span>
            <h3 className="skill-name">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
