import React from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";
import ReactTooltip from "react-tooltip";
import { images } from "../../constants";

const skills = [
  "html",
  "css",
  "sass",
  "javascript",
  "typescript",
  "react",
  "redux",
  "node",
  "git",
];
const experiences = [
  {
    year: 2021,
    works: [
      {
        name: "zoro",
        company: "strawhat pirates",
        description: "they call me pirate hunter zoro",
      },
      {
        name: "killer",
        company: "captain kid crew",
        description: "wofufufufuf Kid is pirate king",
      },
    ],
  },
  {
    year: 2022,
    works: [
      {
        name: "Yamato",
        company: "strawhat pirates",
        description:
          "My name is Oden and I am Kaido's Son and protector of wano kuni",
      },
    ],
  },
];

const Skills = () => {
  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill}
            >
              <div className="app__flex">
                <img src={images[skill]} alt="skill" />
              </div>
              <p className="p-text">{skill}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {experiences.map((work) => (
            <motion.div key={work.year} className="app__skills-exp-item">
              <div className="app__skills-exp-year">
                <p className="bold-text">{work.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {work.works.map((job, index) => (
                  <div key={index + 50}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={job.name}
                    >
                      <h4 className="bold-text">{job.name}</h4>
                      <p className="p-text">{job.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={job.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {job.description}
                    </ReactTooltip>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Skills, "skills");
