import React from "react";
import "../styles/Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaCode,
  FaGithub,
} from "react-icons/fa";
import { SiExpress, SiFigma, SiFlask, SiTailwindcss, SiPostgresql } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

import skills from "../data/skills";

const iconMap = {
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  FaJsSquare: <FaJsSquare />,
  FaReact: <FaReact />,
  FaNodeJs: <FaNodeJs />,
  FaPython: <FaPython />,
  SiExpress: <SiExpress />,
  SiFlask: <SiFlask />,
  GrMysql: <GrMysql />,
  FaGitAlt: <FaGitAlt />,
  FaGithub: <FaGithub />,
  FaCode: <FaCode />,
  SiFigma: <SiFigma />,
  SiTailwindcss: <SiTailwindcss />,
  SiPostgresql: <SiPostgresql />,
};

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      {Object.entries(skills).map(([category, items]) => (
        <div className="skills-category" key={category}>
          <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          <ul>
            {items.map((skill, index) => (
              <li key={index} style={{ color: skill.color }}>
                {iconMap[skill.icon]} {skill.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skills;
