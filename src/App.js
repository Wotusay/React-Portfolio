import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Pages/Home";
import Nav from "./components/UI/Nav";
import { ROUTES } from "./consts";


const App = ()  => {
  return (
    <>
    <Nav></Nav>
      <Switch>
        <Route path={ROUTES.home}>
          <Home></Home>
        </Route>
        <Route exact strict path={ROUTES.about}>
          
          </Route>
      </Switch>
    </>
  );
}

export default App;
