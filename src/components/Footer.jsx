import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <h2 className="contact">Contact Me</h2>
      <p>📧 Email: <a href="mailto:amitchaurasia774@gmail.com">amitchaurasia774@gmail.com</a></p>
      <p>📱 Mobile: <a href="tel:+918601139977">+91 8601139977</a></p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/amit-chaurasia-0b9976290/" target="_blank">LinkedIn</a>
        <a href="https://github.com/amit77t" target="_blank">GitHub</a>
      </div>
      <p className="footer-copy">
        © {new Date().getFullYear()} Amit Chaurasia 
      </p>
    </footer>
  );
}
