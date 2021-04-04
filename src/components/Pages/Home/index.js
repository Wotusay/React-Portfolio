import Title from "../../UI/Title";
import styles from './home.module.css';
import { motion } from "framer-motion";
import Proggress from "../../UI/Progress";

const transition = { duration: 1.6, ease: [0.43, 0.13, 0.23, 0.96] };


const Home = () => {
    //<img className={styles.pictureLatest}  src='../assets/pictures/Neuromancer.png' />
    //<img className={styles.pictureNewest}  alt="pi" src='../assets/pictures/Neuromancer.png' />
    return ( 
        <>
        <div className={styles.homeWrapper}>

        <Title text={'Humo webshop'} tag={'Web experience'} />

        <div>

        <motion.img
           whileHover={{ scale: 1.1 }}
           initial={{translateX:'101px',opacity:0}}
           animate={{translateX:'0px', opacity:1}}
           transition={transition}
           className={styles.picture}
          alt="pic1"  src='../assets/pictures/Neuromancer.png' />
        </div>
        </div>

        <div className={styles.footerWrapper}>
            <button className={styles.buttonLeft}><svg width="18" height="30" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.1216 28.189L3.02814 15.0955L16.1216 2.00208" stroke="white" stroke-width="3" stroke-linecap="round"/>
</svg>
</button>
            <Proggress/>
            <button className={styles.buttonRight}><svg width="18" height="30" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.91406 25.535L13.6341 13.815L1.91406 2.09497" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
        </div>

        </>
    )
}

export default Home;