import React, { useEffect } from 'react';
import { useObserver } from 'mobx-react-lite';
import { useHistory, useParams } from 'react-router';
import { ROUTES } from '../../../consts';
import { useStores } from '../../../hooks';
import styles from './detail.module.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import Footer from '../../UI/Footer';

const transition = { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] };
const transitionOne = { duration: 1.6, ease: [0.43, 0.13, 0.23, 0.96] };
const transitionTwo = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

const Detail = () => {
  const { id } = useParams();
  const history = useHistory();
  const { portfolioStore } = useStores();
  const item = portfolioStore.findArrayWithSlug(id);

  const itemsAnimation = useAnimation();
  const descriptionAnimation = useAnimation();
  const videoAnimation = useAnimation();
  const picturesAnimation = useAnimation();

  const [description, inDescriptionView] = useInView({ triggerOnce:true ,delay: 100 });
  const [items, inItemsView] = useInView({ triggerOnce:true ,delay: 100 });
  const [video, inVideoAView] = useInView({ triggerOnce:true ,delay: 100 });
  const [pictures, inPicturesView] = useInView({ triggerOnce:true ,delay: 100 });

  console.log(item);
  const setOverflow = () => {
    document.body.style.overflowY = 'auto';
    document.body.style.overflowX = 'hidden';
    document.body.style.height = 'auto';
  };

  useEffect(() => {
    if (inItemsView) {
      itemsAnimation.start({ opacity: 1 });
    }
    if (inDescriptionView) {
      descriptionAnimation.start({ opacity: 1 });
    }

    if (inVideoAView) {
      videoAnimation.start({ opacity: 1 });
    }

    if (inPicturesView) {
      picturesAnimation.start({ opacity: 1 });
    }
  }, [
    inItemsView,
    inPicturesView,
    picturesAnimation,
    inVideoAView,
    videoAnimation,
    inDescriptionView,
    descriptionAnimation,
    itemsAnimation,
  ]);

  const clickAble = (e) => {
    window.open(item.website);
  };

  return useObserver(() => {
    if (item === undefined) {
      history.push(ROUTES.home);
      return null;
    } else {
      return (
        <>
          <div style={{overflowY: 'hidden'}} onLoad={setOverflow()}>
            <motion.div
              initial={{ translateY: '-901px', opacity: 0, rotate: '15deg' }}
              animate={{ translateY: '0px', rotate: '0deg', opacity: 1 }}
              exit={{ translateY: '-1001px', opacity: 0, rotate: '-25deg' }}
              transition={transitionTwo}
              className={styles.picture}>
              <motion.img
                onClick={item.website === null ? null : (e) => clickAble(e)}
                whileHover={
                  item.website === null
                    ? null
                    : {
                        scale: 1.05,
                        transition: {
                          duration: 0.8,
                          ease: [0.43, 0.13, 0.23, 0.96],
                        },
                      }
                }
                transition={transitionTwo}
                style={item.website === null ? null : { cursor: 'pointer' }}
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

                <motion.p
                  initial={{ translateX: '-101px', opacity: 0 }}
                  animate={{ translateX: '0px', opacity: 1 }}
                  exit={{ translateX: '-101px', opacity: 0 }}
                  transition={transition}
                  className={styles.tagline}>
                  {item.tagline}
                </motion.p>
              </div>
            </div>
            <motion.div
              ref={items}
              initial={{ opacity: 0 }}
              animate={itemsAnimation}
              transition={transitionOne}
              exit={{ opacity: 0 }}

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
                  <a
                    href={item.website}
                    target="_blank"
                    className={styles.item} rel="noreferrer">
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

          {item.video === null ? null : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={videoAnimation}
              transition={transitionOne}
              exit={{ opacity: 0 }}
              ref={video}
              className={styles.center}>
              <video
                className={styles.video}
                width="1150"
                height="650"
                preload="none"
                autoPlay
                muted
                loop
                controls>
                <source src={item.video.url}></source>
              </video>
            </motion.div>
          )}

          {item.imagesCollection.items.length === 0 ? null : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={picturesAnimation}
              transition={transitionOne}
              exit={{ opacity: 0 }}
              ref={pictures}
              className={styles.images}>
              {item.imagesCollection.items.map((i) => (
                <img
                  src={i.url}
                  alt={i.title}
                  className={styles.image}
                  width="944"
                  height="522"></img>
              ))}
            </motion.div>
          )}

          <Footer />
        </>
      );
    }
  });
};

export default Detail;
