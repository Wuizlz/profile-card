import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="./photocard.jpg" alt="Daniel Briseno" className="avatar" />;
}

function Intro() {
  return (
    <div className="intro">
      <h1>Daniel Briseno</h1>
      <p>
        Full-stack web developer and soon to be app developer. I would like to
        then create my own app SchoolEm and change lives. I love to learn, spend time with my gf, eat,
        enjoy nature, listen to music, and workout.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML + CSS" level="💪" color="red" />
      <Skill skill="JavaScript" level="💪" color="blue" />
      <Skill skill="Web Design" level="💻" color="green" />
      <Skill skill="Git and GitHub" level="👍" color="orange" />
      <Skill skill="React" level="⚛️" color="lightblue" />
      <Skill skill="Java" level="🔥" color="orangered" />
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{level}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
