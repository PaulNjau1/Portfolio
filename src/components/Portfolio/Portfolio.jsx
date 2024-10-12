import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import {
  fadeIn,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion";

const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div
          variants={textVariant(0.4)}
          className={`flexCenter ${css.heading}`}
        >
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{ marginTop: "10px" }}>
              Perfect solution for digital experience
            </p>
          </div>
          <span className="secondaryText">Explore More Works</span>
        </motion.div>

        <div className={`flexCenter ${css.showCase}`}>
          {/* Image with hover effect */}
          <motion.div
            className={css.imageContainer}
            variants={fadeIn("up", "tween", 0.5, 0.6)}
          >
            <motion.img src="./showCase1.png" alt="project" />
            <div className={css.buttons}>
              <button
                onClick={() => {
                  window.location.href =
                    "https://notetakingapp-ashy.vercel.app/";
                }}
                className={css.button}
              >
                View
              </button>
              <button
                onClick={() => {
                  window.location.href =
                    " https://github.com/PaulNjau1/Notion-clone";
                }}
                className={css.button}
              >
                Code
              </button>
            </div>
          </motion.div>

          <motion.div
            className={css.imageContainer}
            variants={fadeIn("up", "tween", 0.7, 0.6)}
          >
            <motion.img src="./showCase2.png" alt="project" />
            <div className={css.buttons}>
            <button
                onClick={() => {
                  window.location.href =
                    "https://sommai-ad6pzomih-paulnjau1s-projects.vercel.app/";
                }}
                className={css.button}
              >
                View
              </button>
              <button
                onClick={() => {
                  window.location.href =
                    "https://vercel.com/paulnjau1s-projects/sommai/5ui44erk8JZKcw6trS1L71Tcmsf7/source";
                }}
                className={css.button}
              >
                Code
              </button>
            </div>
          </motion.div>

          <motion.div
            className={css.imageContainer}
            variants={fadeIn("up", "tween", 0.9, 0.6)}
          >
            <motion.img src="./showCase3.JPG" alt="project" />
            <div className={css.buttons}>
              <button
                onClick={() => {
                  window.location.href =
                    "https://trello-appwrite-clone-lpxbkzf94-paulnjau1.vercel.app/";
                }}
                className={css.button}
              >
                View
              </button>
              <button
                onClick={() => {
                  window.location.href =
                    "https://github.com/PaulNjau1/Trello2.0";
                }}
                className={css.button}
              >
                Code
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
