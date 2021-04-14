import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../consts";
import styles from "./nav.module.css";
import { motion } from "framer-motion";
import React from 'react';



const Nav = () => {
    const transitionOne = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };
    const transitionTwo = { duration: 1.8, ease: [0.43, 0.13, 0.23, 0.96] };
    const transitionThree= { duration: 2.2, ease: [0.43, 0.13, 0.23, 0.96] };

    return (
        <>
        <nav className={styles.NavGrid}>
            <motion.div initial={{translateY:'-101px',opacity:0}}
         style={{translateY:'-101px',opacity:0}} animate={{translateY:'0px',opacity:1}} 
                    transition={ transitionOne} className={styles.titleWrapper}>
                <NavLink className={styles.Navitem} style={{textDecoration: 'none'}} to={ROUTES.home}>
                    <span className={styles.logo} >Wout.</span>
                </NavLink>
            </motion.div>

            <div className={styles.Navitems}>
            <motion.div initial={{translateY:'-101px',opacity:0}}
         style={{translateY:'-101px',opacity:0}} animate={{translateY:'0px',opacity:1}} 
                    transition={ transitionTwo}>
                <NavLink  className={styles.Navitem} style={{textDecoration: 'none'}} to={ROUTES.home}>
                    <span className={styles.item}>Work</span>
                </NavLink>
            </motion.div>

            <motion.div initial={{translateY:'-101px',opacity:0}}
         style={{translateY:'-101px',opacity:0}} animate={{translateY:'0px',opacity:1}} 
                    transition={ transitionTwo}>
                <NavLink className={styles.Navitem} style={{textDecoration: 'none'}} to={ROUTES.about}>
                    <span className={styles.item}>About</span>
                </NavLink>
            </motion.div> 
            <motion.div initial={{translateY:'-101px',opacity:0}}
         style={{translateY:'-101px',opacity:0}} animate={{translateY:'0px',opacity:1}} 
                    transition={ transitionTwo} className={styles.item}> 
                <svg width="2" height="22" viewBox="0 0 2 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.791992 1.4942V21" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            </motion.div>
            <div >
                <motion.div initial={{translateY:'-101px',opacity:0}}
         style={{translateY:'-101px',opacity:0}} animate={{translateY:'0px',opacity:1}} 
                    transition={ transitionThree} className={styles.socials}>
                <a className={styles.social} href='https://github.com/Wotusay' ><svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 22.027V18.157C15.0375 17.6802 14.9731 17.2008 14.811 16.7508C14.6489 16.3008 14.3929 15.8904 14.06 15.547C17.2 15.197 20.5 14.007 20.5 8.54702C20.4997 7.15085 19.9627 5.80822 19 4.79702C19.4559 3.57553 19.5136 2.2251 19 1.02675C19 1.02675 17.73 0.677024 15 2.50702C12.708 1.88585 10.292 1.88585 8 2.50702C5.27 0.677024 4.09 1.02702 4.09 1.02702C3.57638 2.22537 3.54414 3.57553 4 4.79702C3.03013 5.81572 2.49252 7.17049 2.5 8.57702C2.5 13.997 5.8 15.187 8.94 15.577C8.611 15.917 8.35726 16.3224 8.19531 16.7669C8.03335 17.2115 7.96681 17.6851 8 18.157V22.027M8 19.027C3 20.527 3 16.527 1 16.027L8 19.027Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </a>


                <a className={styles.social} href='https://www.linkedin.com/in/wout-salembier-12345w/' ><svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 7.01355C17.0913 7.01355 18.6174 7.64569 19.7426 8.77091C20.8679 9.89613 21.5 11.4223 21.5 13.0135V20.0135H17.5V13.0135C17.5 12.4831 17.2893 11.9744 16.9142 11.5993C16.5391 11.2243 16.0304 11.0135 15.5 11.0135C14.9696 11.0135 14.4609 11.2243 14.0858 11.5993C13.7107 11.9744 13.5 12.4831 13.5 13.0135V20.0135H9.5V13.0135C9.5 11.4223 10.1321 9.89613 11.2574 8.77091C12.3826 7.64569 13.9087 7.01355 15.5 7.01355V7.01355Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.5 8.01355H1.5V20.0135H5.5V8.01355Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.5 5.01355C4.60457 5.01355 5.5 4.11812 5.5 3.01355C5.5 1.90898 4.60457 1.01355 3.5 1.01355C2.39543 1.01355 1.5 1.90898 1.5 3.01355C1.5 4.11812 2.39543 5.01355 3.5 5.01355Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </a>

                <a className={styles.social} href='https://www.instagram.com/wot.u.say/' ><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 1.51355H6.5C3.73858 1.51355 1.5 3.75213 1.5 6.51355V16.5135C1.5 19.275 3.73858 21.5135 6.5 21.5135H16.5C19.2614 21.5135 21.5 19.275 21.5 16.5135V6.51355C21.5 3.75213 19.2614 1.51355 16.5 1.51355Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.5002 10.8836C15.6236 11.7159 15.4815 12.5658 15.094 13.3126C14.7065 14.0594 14.0933 14.665 13.3418 15.0433C12.5903 15.4215 11.7386 15.5532 10.908 15.4195C10.0773 15.2859 9.30996 14.8937 8.71503 14.2988C8.12011 13.7038 7.72793 12.9365 7.59426 12.1058C7.4606 11.2752 7.59226 10.4235 7.97052 9.67198C8.34878 8.92046 8.95438 8.30735 9.70118 7.91985C10.448 7.53235 11.2979 7.3902 12.1302 7.51361C12.9791 7.63949 13.765 8.03507 14.3719 8.64191C14.9787 9.24876 15.3743 10.0347 15.5002 10.8836Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 6.01355H17.01" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </a>

                </motion.div>
            </div>
            </div>
        </nav>
        </>
    )
}

export default Nav; 