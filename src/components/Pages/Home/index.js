import Title from '../../UI/Title';
import styles from './home.module.css';
import { motion } from 'framer-motion';
import Proggress from '../../UI/Progress';
import React, { useEffect, useState } from 'react';
import { useStores } from '../../../hooks';
import { useObserver } from 'mobx-react-lite';
import { useHistory } from 'react-router';
import { ROUTES } from '../../../consts';

const transition = { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] };
const transitionOne = { duration: 1.4, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = () => {
  const [count, setCount] = useState(0);
  const [up, setUp] = useState(true);
  const [down, setDown] = useState(false);
  const [animationNumber, setAnimationNumber] = useState('');
  const { portfolioStore } = useStores();
  const allItems = portfolioStore.portfolioItems.length;
  const [countProgress, setCountProgress] = useState(1);
  const history = useHistory();

  const imageVariants = {
    start: {
      opacity: 1,
      translateX: 0,
      translateY: 0,
      rotate: '0deg',
      transition: {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    disapearDown: {
      opacity: 0,
      translateX: 200,
      translateY: 900,
      rotate: '-20deg',
      transition: {
        duration: 1.1,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },

    disapearUp: {
      opacity: 0,
      translateX: 200,
      translateY: -900,
      rotate: '20deg',
      transition: {
        duration: 1.2,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },

    hover: {
      opacity: 1,
      translateX: 0,
      translateY: 0,
      scale: 1.5,
      rotate: '0deg',
      transition: {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const handleClickNext = async (e) => {
    setDown(false);
    await setAnimationNumber('Increase');
    setUp(true);
    if (countProgress === allItems) {
      await setCountProgress(1);
      await setCount(0);
      return;
    }
    await setCount(count + 1);
    setCountProgress(countProgress + 1);
  };

  const handleClickPrev = async (e) => {
    setUp(false);
    await setAnimationNumber('Decrease');
    setDown(true);
    if (countProgress === 1) {
      await setCountProgress(allItems);
      await setCount(allItems - 1);

      return;
    }
    await setCountProgress(countProgress - 1);
    await setCount(count - 1);
  };

  const setOverflow = () => {
    document.body.style.overflow = 'hidden';
  };

  useEffect(() => {
    let timeoutCycle = null;
    const updateMousePosition = (e) => {
      if (e.type === 'click') {
        clearInterval(timeoutCycle);
      }
      clearInterval(timeoutCycle);
      window.removeEventListener('mousemove', updateMousePosition);
    };

    const cycleViews = () => {
      setDown(false);
      setAnimationNumber('Increase');
      setUp(true);

      if (countProgress === allItems) {
        setCountProgress(1);
        setCount(0);
        return;
      }

      setCount(count + 1);
      setCountProgress(countProgress + 1);
    };

    clearInterval(timeoutCycle);
    timeoutCycle = setInterval(() => {
      cycleViews();
    }, 10000);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('click', updateMousePosition);
  }, [allItems, count, countProgress]);

  return useObserver(() => (
    <>
      <div onLoad={setOverflow()} className={styles.homeWrapper}>
        <Title
          count={count}
          text={portfolioStore.portfolioItems[count].title}
          tag={portfolioStore.portfolioItems[count].tagline}
        />
        <div className={styles.spinner}>
          {portfolioStore.portfolioItems.map((item) => (
            <motion.img
              key={item.title}
              onClick={() => history.push(ROUTES.detail.to + count) }
              initial={up ? 'disapearDown' : 'disapearUp'}
              variants={imageVariants}
              exit={up ? 'disapearUp' : 'disapearDown'}
              animate={
                portfolioStore.portfolioItems[count].id === item.id
                  ? 'start'
                  : portfolioStore.portfolioItems[count].id !== item.id
                  ? up
                    ? 'disapearUp'
                    : 'disapearDown'
                  : down
                  ? 'disapearDown'
                  : 'disapearUp'
              }
              transition={transition}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
              }}
              height={item.header.height}
              width={item.header.width}
              className={styles.picture}
              alt={item.header.title}
              src={item.header.url}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ translateY: '101px', opacity: 0 }}
        exit={{ translateY: '101px', opacity: 0 }}
        style={{ translateY: '101px', opacity: 0 }}
        animate={{ translateY: '40px', opacity: 1 }}
        transition={transitionOne}
        className={styles.footerWrapper}>
        <button
          onClick={(e) => handleClickPrev(e)}
          className={styles.buttonLeft}>
          <svg
            width="18"
            height="30"
            viewBox="0 0 18 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.1216 28.189L3.02814 15.0955L16.1216 2.00208"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <Proggress
          animation={animationNumber}
          number={countProgress}
          maxItems={allItems}
        />
        <button
          onClick={(e) => handleClickNext(e)}
          className={styles.buttonRight}>
          <svg
            width="18"
            height="30"
            viewBox="0 0 16 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.91406 25.535L13.6341 13.815L1.91406 2.09497"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </motion.div>
    </>
  ));
};

export default Home;
