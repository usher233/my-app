import "./App.css";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Transition, CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom";
import NarBar from "./modules/NavBar";
import NavItem from "./modules/NavItem";
import Card from "./modules/Card";
import { motion } from "framer-motion";
import DropdownMenu from "./modules/DropdownMenu";
import { ReactComponent as Menu } from "./icons/menu.svg";
import { ReactComponent as Add } from "./icons/add.svg";
import { ReactComponent as Settings } from "./icons/settings.svg";

function App() {
  const [position, setPosition] = useState("left");

  const togglePosition = () => {
    setPosition((prevPosition) => (prevPosition === "left" ? "right" : "left"));
  };
  useEffect(() => {
    const interval = setInterval(() => {
      togglePosition();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <NarBar className="navitem">
        <NavItem icon={<Add />} />
        <NavItem icon={<Settings />} />
        <NavItem icon={<Menu />}>
          <DropdownMenu />
        </NavItem>
      </NarBar>
      <header className="App-header">
        <CSSTransition
          in={position === "left"}
          timeout={300}
          classNames={{
            enter: 'move-enter',
            enterActive: 'move-enter-active',
            exit: 'move-exit',
            exitActive: 'move-exit-active',
            appear: 'move-appear',
            appearActive: 'move-appear-active'
          }}
          onExited={togglePosition}
        >
          <img
            src="https://cataas.com/cat/cute"
            alt="Moving Image"
            className="moving-image"
          />
        </CSSTransition>
      </header>
    </div>
  );
}

export default App;
