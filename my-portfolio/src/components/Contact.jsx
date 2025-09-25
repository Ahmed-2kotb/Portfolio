import { useEffect, useRef, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);   // يظهر الأنيميشن
          } else {
            setVisible(false);  // يختفي لما نطلع
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! (demo)");
  };

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <h2 className={`contact-title ${visible ? "show" : ""}`}>Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        className={`contact-form ${visible ? "show" : ""}`}
      >
        <label htmlFor="first_name">First Name</label>
        <input type="text" id="first_name" name="first_name" placeholder="Your First Name" required />

        <label htmlFor="last_name">Last Name</label>
        <input type="text" id="last_name" name="last_name" placeholder="Your Last Name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="user_email" placeholder="Your Email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
