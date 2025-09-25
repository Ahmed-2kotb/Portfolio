import { useState, useEffect } from "react";
import "./Hero.css";
import myPhoto from "../imgs/35b31801-309c-42f1-bea8-187025c6db92.jpg";

const Hero = () => {
  const mainText = "Hi, I'm Ahmed Kotb 👋";
  const subText = "Frontend Developer | React Js";

  const [displayedMain, setDisplayedMain] = useState("");
  const [displayedSub, setDisplayedSub] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedMain(mainText.slice(0, index + 1));
      index++;
      if (index === mainText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let index = 0;
    const delay = mainText.length * 100 + 500; 
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedSub(subText.slice(0, index + 1));
        index++;
        if (index === subText.length) clearInterval(interval);
      }, 50);
    }, delay);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{displayedMain}</h1>
        <p className="hero-subtitle">{displayedSub}</p>
        <div className="hero-buttons fade-in delay-2">
          <a href="#projects" className="btn">
            Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-image-container fade-in delay-3">
        <img src={myPhoto} alt="Ahmed Kotb" className="hero-img" />
      </div>
    </section>
  );
};

export default Hero;
