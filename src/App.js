import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Pages/Home";
import Nav from "./components/UI/Nav";
import { ROUTES } from "./consts";
import { AnimatePresence } from "framer-motion";


const App = ()  => {
  return (
    <>
    <Nav></Nav>
    <Route render={({location}) => (
    <AnimatePresence initial={true} exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path={ROUTES.home} render={() => <Home></Home>}/>
        <Route exact strict path={ROUTES.about} render={() => <Home></Home>}/>
      </Switch>
      </AnimatePresence>
      )} />
    </>
  );
}

export default App;
