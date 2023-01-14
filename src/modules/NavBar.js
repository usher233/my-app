import React from "react";
import ReactDOM from "react-dom";
import "./NavBar.css";
import Menu from "../icons/menu.svg";

const NavBar = (props) => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div>
    <div className="Container">
      <h1 className="Web-name">CatBook</h1>
      <img className="Menu" src={Menu} alt="Menu" onClick={toggleMenu} />
    </div>
    <div className="Dropdown-menu">
        <ul>
<DropdownItem />
        </ul>
    </div>
    </div>
  );
};

export default NavBar;
