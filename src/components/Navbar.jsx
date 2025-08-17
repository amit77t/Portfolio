import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Amit Chaurasia</div>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
    </nav>
  );
}
