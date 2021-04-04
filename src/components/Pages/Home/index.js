import Title from "../../UI/Title";
import styles from './home.module.css';
import { motion } from "framer-motion";

const transition = { duration: 1.6, ease: [0.43, 0.13, 0.23, 0.96] };


const Home = () => {
    //<img className={styles.pictureLatest}  src='../assets/pictures/Neuromancer.png' />
    //<img className={styles.pictureNewest}  alt="pi" src='../assets/pictures/Neuromancer.png' />
    return ( 
        <>
        <div className={styles.homeWrapper}>

        <Title text={'Humo webshop'} tag={'Web experience'} ></Title>

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

        </>
    )
}

export default Home;