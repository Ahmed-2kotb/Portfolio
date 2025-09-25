import { useEffect, useRef, useState } from "react";
import "./About.css";

const About = () => {
  const paragraphsRef = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    paragraphsRef.current = paragraphsRef.current.slice(0, 2); // عدد الفقرات
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const updated = [...prev];
              updated[idx] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    paragraphsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      paragraphsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <p
          ref={(el) => (paragraphsRef.current[0] = el)}
          className={visible[0] ? "show" : ""}
        >
          Hi! I'm Ahmed Kotb, a passionate Frontend Developer who loves
          building interactive and responsive web applications using React.
          I enjoy turning ideas into reality with clean and efficient code.
        </p>
        <p
          ref={(el) => (paragraphsRef.current[1] = el)}
          className={visible[1] ? "show" : ""}
        >
          My main focus is on creating beautiful UI/UX experiences, animations,
          and engaging interfaces. I'm always learning new technologies and
          improving my skills.
        </p>
      </div>
    </section>
  );
};

export default About;
