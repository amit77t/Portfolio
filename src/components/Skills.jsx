import React from "react";
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDatabase } from "react-icons/fa";
import { SiCplusplus, SiMongodb, SiJavascript, SiTensorflow } from "react-icons/si";

const skills = [
  { name: "C++", icon: <SiCplusplus size={40} color="#00599C" /> },
  { name: "JavaScript", icon: <SiJavascript size={40} color="#F7DF1E" /> },
  { name: "React", icon: <FaReact size={40} color="#61DAFB" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} color="#3C873A" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" /> },
  { name: "Python", icon: <FaPython size={40} color="#3776AB" /> },
  { name: "SQL", icon: <FaDatabase size={40} color="#00758F" /> },
  { name: "Git", icon: <FaGitAlt size={40} color="#F05032" /> },
  { name: "Machine Learning", icon: <SiTensorflow size={40} color="#FF6F00" /> },
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
