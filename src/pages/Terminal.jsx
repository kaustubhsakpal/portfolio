import React from "react";
import Windows from "../Windows/Windows";
import Terminal from 'react-console-emulator'
import "./Terminal.scss";

function Terminalcli({windowname,setWindowState}) {
 const commands = {

  'start-here': {
    description: 'Start portfolio intro',
    usage: 'start-here',
    fn: () => [
      "Welcome — I'm Kaustubh Sakpal, Full Stack Developer.",
      "Type 'about' to know more about me.",
      "Type 'projects' to see my projects.",
      "Type 'skills' to view my skills.",
      "Type 'contact' to get in touch."
    ]
  },

  about: {
    description: 'Short bio',
    usage: 'about',
    fn: () => [
      "I'm a passionate Full Stack Developer.",
      "I build modern web applications using MERN stack.",
      "Tech I use: React, Node.js, Express, MongoDB, Tailwind CSS, Java.",
      "Currently improving DSA and building real-world projects.",
      "Goal: Become a professional Full Stack Developer in 2026."
    ]
  },

  skills: {
    description: 'List skills',
    usage: 'skills',
    fn: () => 
      "React, Node.js, Express, MongoDB, JavaScript, Tailwind CSS, CSS3, Html5, Java, Git, Redux Toolkit"
  },

  projects: {
    description: 'List projects',
    usage: 'projects',
    fn: () => [
    "1. Snake Game — Classic snake game built using HTML, CSS & JavaScript.",
    "2. GitHub Productivity Dashboard — Track coding activity & productivity.",
    "3. BiteBuddy Website — Modern food ordering frontend website.",
    "4. Awarded Website Frontend — Responsive award-style landing page.",
    "5. Many more mini projects using JavaScript & React."
    ]
  },

project: {
  description: 'Project details: project <id>',
  usage: 'project <id>',
  fn: (id) => {
    if (!id) return "Usage: project <id>";

    if (id === "1") {
      return [
        "Snake Game",
        "Built using HTML, CSS, JavaScript.",
        "Features: Keyboard controls, score tracking, food generation, collision detection.",
        "Logic handled using array movement & game loop."
      ];
    }

    if (id === "2") {
      return [
        "GitHub Productivity Dashboard",
        "Built using React.js.",
        "Displays coding activity and productivity insights.",
        "Focus on clean UI and reusable components."
      ];
    }

    if (id === "3") {
      return [
        "BiteBuddy Website",
        "Frontend project using React + Tailwind CSS.",
        "Modern food ordering UI with responsive design.",
        "Component-based structure."
      ];
    }

    if (id === "4") {
      return [
        "Awarded Website Frontend",
        "Responsive landing page inspired by award-winning websites.",
        "Pixel-perfect UI with smooth layout structure.",
        "Strong focus on design and performance."
      ];
    }

    return "Project not found.";
  }
},


 

  contact: {
    description: 'Contact info',
    usage: 'contact',
    fn: () => [
      "Email: kaustubhsakpal9@email.com",
      "GitHub: https://github.com/kaustubhsakpal",
      "LinkedIn: https://www.linkedin.com/in/kaustubh-sakpal/"
    ]
  },

//   help: {
//     description: 'List all commands',
//     usage: 'help',
//     fn: () =>
//       Object.keys(commands).join(", ")
//   }

};


  return (
    <Windows windowname={windowname} setWindowState={setWindowState}>
      <div className="terminal-container">
         <Terminal
        commands={commands}
        welcomeMessage={`Welcome to kaustubh's interactive portfolio terminal. Type 'start-here' to begin a guided tour.`}
        promptLabel={'Kaustubh@portfolio:~$'}
        promptLabelStyle={{ color: 'lime' }}
      />
      </div>
    </Windows>
  );
}

export default Terminalcli;
