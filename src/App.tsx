import React from "react";
import logo from "./logo.svg";
import "./App.css";
import mattchoo from "./assets/mattchoo.jpg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./landing/LandingPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
