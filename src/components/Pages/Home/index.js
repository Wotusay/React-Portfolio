import Title from "../../UI/Title";
import styles from './home.module.css';


const Home = () => {
    //<img className={styles.pictureLatest}  src='../assets/pictures/Neuromancer.png' />

    return ( 
        <>
        <div className={styles.homeWrapper}>

        <Title text={'Humo webshop'} tag={'Web experience'} ></Title>

        <div className={styles.pics}>

        <img className={styles.picture} alt="pic1"  src='../assets/pictures/Neuromancer.png' />
        <img className={styles.pictureNewest}  alt="pi" src='../assets/pictures/Neuromancer.png' />
        </div>
        </div>

        </>
    )
}

export default Home;