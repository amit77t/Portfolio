import React from "react";

const skills = [
  { name: "C++", icon: "💻" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🌐" },
  { name: "MongoDB", icon: "🗄️" },
  { name: "Python", icon: "🐍" },
  { name: "SQL", icon: "📊" },
  { name: "Git", icon: "🔧" },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((s, i) => (
          <div className="skill-card" key={i}>
            <span className="skill-icon">{s.icon}</span>
            <p>{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
