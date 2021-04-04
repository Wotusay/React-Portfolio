import styles from "./title.module.css";
import { motion } from "framer-motion";

const transition = { duration: 1.4, ease: [0.43, 0.13, 0.23, 0.96] };
const transitionOne = { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] };
const transitionTwo = { duration: 1.6, ease: [0.43, 0.13, 0.23, 0.96] };


const Title = ({text, tag}) => {
    return(
        <>
        <div className={styles.wrapper}>
        <motion.div 
        initial={{translateX:'-101px',opacity:0}}
         style={{translateX:'-101px',opacity:0}} animate={{translateX:'0px',opacity:1}} 
                    transition={ transitionOne}   className={styles.line}>
            <svg width="101" height="7" viewBox="0 0 101 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3.34401H100.728" stroke="white" stroke-width="6"/>
            </svg>
        </motion.div>

        <div className={styles.text}>  
        <motion.h1  initial={{translateX:'-101px'}}
         style={{translateX:'-501px',  opacity:0}} animate={{translateX:'0px', opacity:1}} 
                    transition={ transition}  className={styles.title}>{text}</motion.h1>
        <motion.p  initial={{translateX:'-101px'}}
         style={{translateX:'-501px', opacity:0}} animate={{translateX:'0px', opacity:1}} 
                    transition={ transitionTwo}  className={styles.tagline}>{tag}</motion.p>
        </div>

        </div>
        </>
    )
}

export default Title;