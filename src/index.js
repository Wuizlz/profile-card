import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  { skill: "HTML + CSS💪", level: "intermediate💪", color: "red" },
  { skill: "JavaScript", level: "intermediate💪", color: "blue" },
  { skill: "Web Design", level: "intermediate💪", color: "green" },
  { skill: "Git and GitHub", level: "intermediate💪", color: "orange" },
  { skill: "React", level: "beginner👶", color: "lightblue" },
  { skill: "Java", level: "advanced🔥", color: "orangered" },
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
        <Skill skillObj={item} key={item.skill} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>{skillObj.level}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
