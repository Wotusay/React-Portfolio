import { motion } from "framer-motion";
import styles from './progress.module.css';

const Proggress = () => { 
    return (
        <>
        <div className={styles.proggressWrapper}>
            <p className={styles.number}>01</p>

            <svg className={styles.bigStroke} width="62" height="6" viewBox="0 0 62 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.593262 3.09552H61.4053" stroke="white" stroke-width="5"/>
            </svg>
            <p className={styles.number}>08</p>
        </div>
        </>
    )
}

export default Proggress;