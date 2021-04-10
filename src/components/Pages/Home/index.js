import Title from "../../UI/Title";
import styles from './home.module.css';
import { motion } from "framer-motion";
import Proggress from "../../UI/Progress";
import React, { useState } from 'react';
import { useStores } from "../../../hooks";
import { useObserver } from 'mobx-react-lite';



const transition = { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] };
const transitionOne = { duration: 1.8, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = () => {
    const [count, setCount ] = useState(0);
    const [clickedNext, setClickedNext] = useState(false);
    const [clickedPrev, setClickedPrev] = useState(false);
    const [animationNumber, setAnimationNumber] = useState('');
    const {portfolioStore} = useStores();
    const allItems = portfolioStore.portfolioItems.length;
    const [countProgress, setCountProgress ] = useState(1);


    const imageVariants = {
      start: {
        translateX:'0px', 
        opacity:1
      }, 
      next: {
        rotate: '10deg', 
        translateY:'-680px',
        translateX:'50px',
        opacity:0.7,
      }, 
      back: {
        rotate: '0deg', 
        translateY:'0px',
        translateX:'0px',
        opacity:1,
      }
    }

    const imageTwoVariants = {
      start: {
        translateX:'50px', 
        opacity:0.7, 
        rotate: '-10deg', 
        translateY:'100px'
      }, 
      next: {
        rotate: '0deg', 
        translateY:'-650px',
        translateX:'10px',
        opacity:1,
      }, 
      back: {
        translateX:'50px', 
        opacity:0.7, 
        rotate: '-10deg', 
        translateY:'100px'
      }
    }

    


    const handleClickNext = (e) => {
      setClickedPrev(false);
      setClickedNext(true);
      setAnimationNumber('Increase');
      if (countProgress === allItems) {
        setCountProgress(1);
        setCount(0);
        return;
      }
      setCount(count + 1);
      setCountProgress(countProgress+1);


    
    }

    const handleClickPrev = (e) => {
      setClickedNext(false);
      setAnimationNumber('Decrease');
      setClickedPrev(true);
      if (countProgress === 1) {
        setCountProgress(allItems);
        setCount(allItems - 1);
        return;
      }
      setCountProgress(countProgress-1);
      setCount(count - 1);
      console.log(count)
    }
 
    /*
    const countChecker = id => {
      switch(id) {
        case 1:
          setTitle('Humo webshop');
          setTag('Web experience');
          break;
        case 2:
          setTitle('test');
          setTag('test');
          break;
        case 3:
          setTitle('Humo');
          setTag('Web experience');
          break;
        case 4:
          setTitle('Webshop');
          setTag('Web experience');
          break;
        case 5:
          setTitle('Testing 123');
          setTag('Web experience');
          break;
        case 6:
          setTitle('project');
          setTag('Web experience');
          break;
        case 7:
          setTitle('yeah bttv');
          setTag('Web experience');
          break;
        case 8:
          setTitle('hire me');
          setTag('Web experience');
          break;
        default: 
        return;
      }
    }*/


    //<img className={styles.pictureLatest}  src='../assets/pictures/Neuromancer.png' />
    //<img className={styles.pictureNewest}  alt="pi" src='../assets/pictures/Neuromancer.png' />
    return useObserver(() => (
        <>
        <div className={styles.homeWrapper}>
          <Title count={count} text={portfolioStore.portfolioItems[count].title} tag={portfolioStore.portfolioItems[count].tagline} />
          <div>
          <motion.img
            initial={{translateX:'101px',opacity:0}}
            variants={imageVariants}
            animate={clickedNext ? "next" : clickedPrev ? "back" : "start"}
            transition={transition}
            className={styles.picture}
            width={portfolioStore.portfolioItems[0].header.width}
            height={portfolioStore.portfolioItems[0].header.height}
            alt={portfolioStore.portfolioItems[0].header.title}  src={portfolioStore.portfolioItems[0].header.url} />
          <div className={styles.spinner}>
          <motion.img
            initial={{translateX:'101px',opacity:0}}
            variants={imageTwoVariants}
            animate={clickedNext ? "next" : clickedPrev ? "back" : "start"}
            transition={transition}
            width={portfolioStore.portfolioItems[1].header.width}
            height={portfolioStore.portfolioItems[1].header.height}
            style={{rotate: '-10deg', translateY:'100px'}}
            className={styles.picture}
            alt={portfolioStore.portfolioItems[1].header.title} src={portfolioStore.portfolioItems[1].header.url} />
        </div>
          </div>
        </div>

        <motion.div initial={{translateY:'101px',opacity:0}}
        style={{translateY:'101px',opacity:0}} animate={{translateY:'0px',opacity:1}} 
        transition={ transitionOne} className={styles.footerWrapper}>
            <button onClick={(e) => handleClickPrev(e)} className={styles.buttonLeft}><svg width="18" height="30" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1216 28.189L3.02814 15.0955L16.1216 2.00208" stroke="white" stroke-width="3" stroke-linecap="round"/>
              </svg>
            </button>

        <Proggress animation={animationNumber}  number={countProgress} maxItems={allItems}/>
            <button onClick={(e) => handleClickNext(e)} className={styles.buttonRight}><svg width="18" height="30" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.91406 25.535L13.6341 13.815L1.91406 2.09497" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
        </motion.div>

        </>
    ))
}

export default Home;