import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ReactComponent as Add } from "../icons/add.svg";
import { ReactComponent as Settings } from "../icons/settings.svg";
import { CSSTransition } from "react-transition-group";

import "./DropdownMenu.css";
import "./NavBar.css";
import "./NavItem.css";

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState("main");

  const DropdownItem = (props) => {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu()}>
        <span className="icon-left">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  };
  return (
    <div className="dropdown">
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames={{
            enter: 'menu-primary-enter',
            enterActive: 'menu-primary-active',
            exit: 'menu-primary-exit',
            exitActive: 'menu-primary-active',
            appear: 'menu-primary-appear',
            appearActive: 'menu-primary-active'
          }}
      >
        <div className="menu">
          <DropdownItem leftIcon="🐯" goToMenu = "settings"> Tigers</DropdownItem>
          <DropdownItem leftIcon="🐶" goToMenu= "settings"> Dogs</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
      >
        <div className="menu">
          <DropdownItem leftIcon={<Settings />}> Settings</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;
