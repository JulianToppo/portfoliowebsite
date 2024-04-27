import React from "react";
import "./Navbar.css";

const NavSidebar = (props) => {
  const { isMobileVersion } = props;

  const toggle = (e) => {
   
    if (isMobileVersion == true) {
      const { toggleShow, openDropDown } = props;
      toggleShow(!openDropDown)
    }
  };

  return (
    <ul className="navitems" onClick={toggle}>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#experience">Experience</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};

export default NavSidebar;
