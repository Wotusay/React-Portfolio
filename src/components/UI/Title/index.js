import styles from "./title.module.css";


const Title = ({text, tag}) => {
    return(
        <>
        <div className={styles.wrapper}>
        <div  className={styles.line}>
            <svg width="101" height="7" viewBox="0 0 101 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3.34401H100.728" stroke="white" stroke-width="6"/>
            </svg>
        </div>

        <div className={styles.text}>  
        <h1 className={styles.title}>{text}</h1>
        <p className={styles.tagline}>{tag}</p>
        </div>

        </div>
        </>
    )
}

export default Title;