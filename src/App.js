import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import jikanMainPage from "./Components/JikanApi/jikanMainPage";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  //fetchdata("search/anime?q=pokemon");
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/Database" exact component={jikanMainPage}></Route>
          <Route path="/About" exact component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

const Home = () => (
  <React.Fragment>
    <TransitionGroup
      className="example"
      transitionName="example"
      transitionEnterTimeout={5000}
      transitionLeaveTimeout={3000}
    >
      <header className="App-header">
        <CSSTransition in={true} appear={true} timeout={5000} classNames="fade">
          <img src={logo} className="App-logo" alt="logo" />
        </CSSTransition>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </TransitionGroup>
  </React.Fragment>
);

export default App;
