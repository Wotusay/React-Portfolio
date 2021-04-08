import styles from './progress.module.css';
import React from 'react';
import { motion } from "framer-motion";


const Proggress = ({number, maxItems,animation}) => { 
    const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

    return (
        <>
        <div className={styles.proggressWrapper}>
            <p className={styles.number}>0
          <motion.span
            key={number}
            initial={{ opacity: 0, y: animation === 'Increase' ?  -50 : animation === 'Decrease' ? 50 : 50}}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: animation === 'Increase' ?  50 : animation === 'Decrease' ? -50 : 50 }}
            transition={transition}
            style={{ position: "absolute" }}
          >
            {number}
          </motion.span>            
        </p>

            <svg  style={{ marginLeft: "1.6rem"}} className={styles.bigStroke} width="62" height="6" viewBox="0 0 62 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.593262 3.09552H61.4053" stroke="white" stroke-width="5"/>
            </svg>
            <p className={styles.number}>0<span>{maxItems}</span></p>
        </div>
        </>
    )
}

export default Proggress;