import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Lounge from "./lounge/Lounge.js";
import Elixer from "./lounge/beverages/Elixer.js";
import Directions from "./lounge/about/Directions.js";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/lounge.html">
          <Lounge />
        </Route>

        <Route exact path="/about/directions.html">
          <Directions /> (additional HTML/JSX can be added here)
        </Route>

        <Route exact path="/beverages/elixir.html">
          <Elixer /> (additional HTML/JSX can be added here)
        </Route>

        <Route path="/">
          <h1>Error 404: File Not Found :-(</h1>
        </Route>
      </Switch>
    </Router>
  );
}
