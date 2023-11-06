import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "./Home";
import Destination from "./Destination";
import Crew from "./Crew";
import Technology from "./Technology";
import logo from "./assets/shared/logo.svg";
import menu from "./assets/shared/icon-hamburger.svg";
import closeMenu from "./assets/shared/icon-close.svg";

function App() {
  return (
    <div className="app">
      <Router>
        <header>
          <div className="logoGrp ">
            <img src={logo} alt="logo" className="lg:h-10 h-8 w-8" />

            <img src={menu} alt="" className="md:hidden" />
          </div>

          <nav>
            <ul className="navList">
              <li className="navText">
                <Link to="/">
                  <span className="font-semibold hidden lg:visible">00 </span>
                  Home
                </Link>
              </li>

              <li className="navText">
                <Link to="/Destination">
                  <span className="font-semibold hidden lg:visible">01 </span>{" "}
                  Destination
                </Link>
              </li>

              <li className="navText">
                <Link to="/Crew">
                  <span className="font-semibold hidden lg:visible">02 </span>{" "}
                  Crew
                </Link>
              </li>

              <li className="navText">
                <Link to="/Technology">
                  <span className="font-semibold hidden lg:visible">03 </span>{" "}
                  Technology
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <div className="pages">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/Destination">
              <Destination></Destination>
            </Route>

            <Route path="/Crew">
              <Crew></Crew>
            </Route>

            <Route path="/Technology">
              <Technology></Technology>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
