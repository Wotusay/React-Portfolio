import styles from './title.module.css';
import { motion } from 'framer-motion';
import React from 'react';

const transition = { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] };
const transitionOne = { duration: 1.6, ease: [0.43, 0.13, 0.23, 0.96] };
const transitionTwo = { duration: 1.4, ease: [0.43, 0.13, 0.23, 0.96] };

const Title = ({ text, tag, count }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <motion.div
          key={count}
          initial={{ translateX: '-101px', opacity: 0 }}
          animate={{ translateX: '0px', opacity: 1 }}
          exit={{ translateX: '-101px', opacity: 0 }}
          transition={transitionOne}
          className={styles.line}>
          <svg
            width="101"
            height="7"
            viewBox="0 0 101 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path className={styles.stroke} d="M0 3.34401H100.728" stroke="white" strokeWidth="6" />
          </svg>
        </motion.div>

        <div className={styles.text}>
          <motion.h1
            key={text}
            initial={{ translateX: '-101px', opacity: 0 }}
            animate={{ translateX: '0px', opacity: 1 }}
            exit={{ translateX: '-101px', opacity: 0 }}
            transition={transition}
            className={styles.title}>
            {text}
          </motion.h1>
          <motion.p
            key={count}
            initial={{ translateX: '-101px', opacity: 0 }}
            animate={{ translateX: '0px', opacity: 1 }}
            exit={{ translateX: '-101px', opacity: 0 }}
            transition={transitionTwo}
            className={styles.tagline}>
            {tag}
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Title;
