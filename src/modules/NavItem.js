import React, { useState } from "react";
import { ReactDOM } from "react";
import DropdownMenu from "./DropdownMenu";

import "./NavItem.css";
import "../index.css";
const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a
        href="#"
        className="icon-button"
        onClick={() => {setOpen(!open);}}
        >
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
};

export default NavItem;
