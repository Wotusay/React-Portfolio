import { Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Nav from './components/UI/Nav';
import { ROUTES } from './consts';
import { AnimatePresence } from 'framer-motion';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Empty from './components/UI/Empty';
import About from './components/Pages/About';
import Detail from './components/Pages/Detail';

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const animation = useAnimation();
  const textAnimation = useAnimation();

  const sequence = async () => {
    await animation.start({
      opacity: 1,
      translateY: '0px',
      transition: { duration: 1.2 },
    });
    await textAnimation.start({
      opacity: 1,
      translateX: '0px',
      transition: { duration: 0.3 },
    });
    //await store.loadAllItems();
    await animation.start({
      opacity: 1,
      translateY: '0px',
      transition: { duration: 0.4 },
    });
    await animation.start({
      opacity: 0,
      translateY: '-101px',
      transition: { duration: 1 },
    });
    await setLoaded(true);
  };

  useEffect(() => {
    sequence();
  });

  return (
    <>
      {loaded === false ? (
        <motion.div
          style={{ opacity: 0, translateY: '101px',overflow: 'hidden' }}
          initial={true}
          animate={animation}
          className="begin">
          <motion.span  animate  style={{ overflowY: 'hidden',
            overflowX: 'hidden', }} >Wout</motion.span>
          <motion.span
            style={{ opacity: 0, translateX: '101px',   overflowY: 'hidden',
            overflowX: 'hidden', }}
            animate={textAnimation}>
            .
          </motion.span>
        </motion.div>
      ) : (
        <>
          <Nav></Nav>
          <Route
            render={({ location }) => (
              <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                  <Route
                    exact
                    strict
                    path={ROUTES.about}
                    render={() => <About></About>}
                  />

                  <Route
                    exact
                    strict
                    path={ROUTES.detail.path}
                    render={() => <Detail></Detail>}></Route>

                  <Route
                    path={ROUTES.home}
                    render={() => (
                      <div style={{ overflow: 'hidden', height: '100vh' }}>
                        {' '}
                        <Home></Home>
                      </div>
                    )}
                  />
                </Switch>
              </AnimatePresence>
            )}
          />
        </>
      )}

      <Empty></Empty>
    </>
  );
};

export default App;
