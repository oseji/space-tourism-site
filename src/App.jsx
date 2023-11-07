import { useRef, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { motion } from "framer-motion";

import Home from "./Home";
import Destination from "./Destination";
import Crew from "./Crew";
import Technology from "./Technology";
import logo from "./assets/shared/logo.svg";
import menu from "./assets/shared/icon-hamburger.svg";
import closeMenu from "./assets/shared/icon-close.svg";

function App() {
  const [menuImg, setMenuImg] = useState(menu);
  const [isToggled, setIsToggled] = useState(false);
  const menuRef = useRef(null);
  const navRef = useRef(null);

  const toggleMenu = () => {
    const menuBtn = menuRef.current;
    const nav = navRef.current;
    console.log(menuBtn);

    if (!isToggled) {
      setMenuImg(closeMenu);
      setIsToggled(true);
    } else {
      setMenuImg(menu);
      setIsToggled(false);
    }

    nav.classList.toggle("showNav");
    nav.classList.toggle("hideNav");
  };

  return (
    <div className="app">
      <Router>
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="logoGrp ">
            <img src={logo} alt="logo" className="lg:h-10 h-8 w-8" />

            <img
              src={menuImg}
              alt="hamburger menu"
              className="md:hidden"
              ref={menuRef}
              onClick={toggleMenu}
            />
          </div>

          <nav className="hideNav" ref={navRef}>
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
        </motion.header>

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
