import React from "react";

const projects = [
  {
    title: "StaySphere",
    description: "Airbnb-inspired vacation rental platform with booking and property management.",
    link: "https://github.com/amit77t/StaySphere"
  },
  {
    title: "AttendEase",
    description: "AI-powered attendance system using face recognition and Streamlit.",
    link: "https://github.com/amit77t/AttendEase"
  },
  {
    title: "AIAssistDesk",
    description: "AI-driven support ticketing system using React, Node.js and Gemini API.",
    link: "https://github.com/amit77t/AI-ticket-system/tree/main"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((p, idx) => (
          <div className="project-card" key={idx}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <a href={p.link} target="_blank">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}
