import React from "react";
import ReactDOM from "react-dom";
import "./NavBar.css";
import Menu from "../icons/menu.svg";

const NavBar = (props) => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div>
      <nav className="Container">
        <div className="Web-name"> Catbook</div>
        <ul className="navbar-nav">{props.children}</ul>

      </nav>
    </div>
  );
};

export default NavBar;
