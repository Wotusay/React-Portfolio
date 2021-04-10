import { Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Nav from "./components/UI/Nav";
import { ROUTES } from "./consts";
import { AnimatePresence } from "framer-motion";
import { motion, useAnimation } from "framer-motion";
import React,{ useEffect, useState } from "react";
import Empty from "./components/UI/Empty";


const App = ()  => {
  const [loaded, setLoaded] = useState(false);
  const animation = useAnimation();
  const textAnimation = useAnimation();
 // const store = new PortfolioStore(); 


  const sequence = async () => {
    await animation.start({opacity:1,  translateY:'0px'  ,transition: {duration: 1.2}});
    await textAnimation.start({opacity:1,  translateX:'0px'  ,transition: {duration: 0.3}});
    //await store.loadAllItems();
    await animation.start({opacity:1,  translateY:'0px'  ,transition: {duration: 0.4}});
    await animation.start({opacity:0, translateY:'-101px', transition: {duration: 1}});
    setLoaded(true);
  }

  // const graphQLService = new GraphQLService(); 

  useEffect(() => {
    sequence();
  })

  return (
    <>

    {loaded ===  false ?   <motion.div  style={{opacity:0, translateY:'101px'}} initial={false} animate={animation} className='begin'>
                  <motion.span animate>
                  Wout
                  </motion.span>
                  <motion.span style={{opacity:0, translateX:'101px'}} animate={textAnimation}>
                   .   
                  </motion.span>
        </motion.div> :  
        <>   
        <Nav></Nav>
    <Route render={({location}) => (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path={ROUTES.home} render={() => <Home></Home>}/>
        <Route exact strict path={ROUTES.about} render={() => <Home></Home>}/>
      </Switch>
      </AnimatePresence>
      )} /> 
      </>
      }

      <Empty></Empty>
    </>
  );
}

export default App;
