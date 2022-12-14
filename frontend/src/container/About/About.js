import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import AppWrap from "../../wrapper/AppWrap";

const abouts = [
  {
    title: "Web Developement",
    description: "i am a good web developer",
    imgUrl: images.about01,
  },
  {
    title: "Web Developement",
    description: "i am a good web developer",
    imgUrl: images.about02,
  },
  {
    title: "Web Developement",
    description: "i am a good web developer",
    imgUrl: images.about03,
  },
  {
    title: "Web Developement",
    description: "sqdq good it works",
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Apps</span>
        <br /> means <span>Good buisness</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, "about");
