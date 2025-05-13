import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  { skill: "HTML + CSS", level: "intermediate", color: "red" },
  { skill: "JavaScript", level: "intermediate", color: "blue" },
  { skill: "Web Design", level: "intermediate", color: "green" },
  { skill: "Git and GitHub", level: "intermediate", color: "orange" },
  { skill: "React", level: "beginner", color: "lightblue" },
  { skill: "Java", level: "advanced", color: "orangered" },
];

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
        then create my own app SchoolEm and change lives. I love to learn, spend
        time with my gf, eat, enjoy nature, listen to music, and workout.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((item) => (
        <Skill skill={item.skill} color={item.color} level = {item.level} key={item.skill} /> // Pass the entire object
      ))}
    </div>
  );
}

function Skill({ color, skill, level }) { // Destructure the props
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "💪"}
        {level === "advanced" && "🔥"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
