import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./About";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Router>
    <div>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/About" component={About} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
