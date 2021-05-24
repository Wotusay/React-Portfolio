import React, { useEffect } from 'react';
import { useObserver } from 'mobx-react-lite';
import { useHistory, useParams } from 'react-router';
import { ROUTES } from '../../../consts';
import { useStores } from '../../../hooks';
import styles from './detail.module.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-hook-inview';

const transition = { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] };
const transitionOne = { duration: 1.6, ease: [0.43, 0.13, 0.23, 0.96] };
const transitionTwo = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

const Detail = () => {
  const { id } = useParams();
  const history = useHistory();
  const { portfolioStore } = useStores();
  const item = portfolioStore.portfolioItems[id];

  const itemsAnimation = useAnimation();
  const descriptionAnimation = useAnimation();

  const [description, inDescriptionView] = useInView({ delay: 100 });
  const [items, inItemsView] = useInView({ delay: 100 });

  console.log(item);
  const setOverflow = () => {
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';
  };

  useEffect(() => {
    if (inItemsView) {
      itemsAnimation.start({ opacity: 1 });
    }
    if (inDescriptionView) {
      descriptionAnimation.start({ opacity: 1 });
    }
  }, [inItemsView, inDescriptionView, descriptionAnimation, itemsAnimation]);

  return useObserver(() => {
    if (item === undefined) {
      history.push(ROUTES.home);
      return null;
    } else {
      return (
        <>
          <div onLoad={setOverflow()}>
            <motion.div
              initial={{ translateY: '-901px', opacity: 0, rotate: '15deg' }}
              animate={{ translateY: '0px', rotate: '0deg', opacity: 1 }}
              exit={{ translateY: '-1001px', opacity: 0, rotate: '-25deg' }}
              transition={transitionTwo}
              className={styles.picture}>
              <img
                width={item.detail.width}
                height={item.detail.height}
                alt={item.detail.title}
                src={item.detail.url}
              />
            </motion.div>

            <div className={styles.wrapper}>
              <motion.div
                initial={{ translateX: '-101px', opacity: 0 }}
                animate={{ translateX: '0px', opacity: 1 }}
                exit={{ translateX: '-101px', opacity: 0 }}
                transition={transitionOne}
                className={styles.line}>
                <svg
                  width="101"
                  height="7"
                  viewBox="0 0 101 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 3.34401H100.728" stroke="white" strokeWidth="6" />
                </svg>
              </motion.div>

              <div className={styles.text}>
                <motion.h2
                  key={item.title}
                  initial={{ translateX: '-101px', opacity: 0 }}
                  animate={{ translateX: '0px', opacity: 1 }}
                  exit={{ translateX: '-101px', opacity: 0 }}
                  transition={transition}
                  className={styles.title}>
                  {item.title}
                </motion.h2>
              </div>
            </div>
            <motion.div
              ref={items}
              initial={{ opacity: 0 }}
              animate={itemsAnimation}
              transition={transitionOne}
              exit={{ opacity: 0 }}
              style={{
                gridTemplateColumns:
                  item.website === null
                    ? '20rem 15rem 16rem 15rem'
                    : '20rem 15rem 16rem 15rem 15rem',
              }}
              className={styles.itemsWrapper}>
              <div className={styles.itemWrapper}>
                <p className={styles.titleSection}>🤵🏼</p>
                <p className={styles.item}>{item.client}</p>
              </div>
              <div className={styles.itemWrapper}>
                <p className={styles.titleSection}>🗓️</p>
                <p className={styles.item}>{item.project}</p>
              </div>
              <div className={styles.itemWrapper}>
                <p className={styles.titleSection}>👨‍💻</p>
                <p className={styles.item}>{item.role}</p>
              </div>
              <div className={styles.itemWrapper}>
                <p className={styles.titleSection}>⚒️</p>
                <p className={styles.item}>
                  {item.utitlies.map((i) => {
                    return `${i}, `;
                  })}
                </p>
              </div>
              {item.website === null ? null : (
                <div className={styles.itemWrapper}>
                  <p className={styles.titleSection}>🔗</p>
                  <a href={item.website} className={styles.item}>
                    Visit the site
                  </a>
                </div>
              )}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={descriptionAnimation}
            transition={transitionOne}
            exit={{ opacity: 0 }}
            ref={description}>
            <p className={styles.titleDescription}> Description </p>
            <div className={styles.descriptionWrapper}>
              <p className={styles.description}>{item.description}</p>
            </div>
          </motion.div>
        </>
      );
    }
  });
};

export default Detail;
