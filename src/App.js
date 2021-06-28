import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import GlobalState from "./context/github/GlobalState";
import Alert from "./components/Alert";
import About from "./components/About";
import User from "./components/User";
import ErrorPage from "./components/ErrorPage";
import AlertState from "./context/alert/AlertState";
const App = () => {
  return (
    <GlobalState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title="GitLens" icon="fa fa-github" />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />

                <Route path="/about">
                  <About />
                </Route>
                <Route path="/user/:login" component={User} />
                <Route component={ErrorPage} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GlobalState>
  );
};

export default App;
