import Interactions from "./container/Interactions/Interactions";
import Home from "./container/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import {
  HOME,
  DEFAULT,
  INTERACTIONS,
} from './constants/routes';


function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path={DEFAULT} exact component={HOME} />
          <Route path={HOME} component={HOME} />
          <Route path={INTERACTIONS} component={Interactions} />
        </Switch>
      </Router>
      {/* <Interactions /> */}
    </div>
  );
}

export default App;
