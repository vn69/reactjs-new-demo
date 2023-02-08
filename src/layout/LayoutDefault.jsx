import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from '../page/Home';
import About from "../page/About"
import TodoList from "../page/Todo";
import HeaderMenu from "./HeaderMenu"


const App = () => {
  return <Router>
    <HeaderMenu></HeaderMenu>
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/todo">
          <TodoList />
        </Route>
      </Switch>
    </div>
  </Router>;
};
export default App;