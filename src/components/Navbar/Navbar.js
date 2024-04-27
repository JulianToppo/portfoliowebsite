import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { getImageUrl } from "../../utils";
import NavSidebar from "./NavSidebar";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openDropDown,setOpenDropDown]= useState(false)

  const handleResize = () => {
    if (window.innerWidth < 830) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const ondropDownClickHandler=(e)=>{
    e.preventDefault();
    setOpenDropDown(true)
  }

  return (
    <div className="navbar">
      <a href="#" className="heading">
        Portfolio
      </a>

      {isMobile ? (
        openDropDown===true?
        <NavSidebar toggleShow={setOpenDropDown} openDropDown={openDropDown} isMobileVersion={isMobile}/>
          :<img
          className="navbar-dropdown"
          src={getImageUrl("dropdownsettings.png")}

          onClick={ondropDownClickHandler}
        ></img>
      ) : (
        <NavSidebar isMobileVersion={isMobile}/>
      )}
    </div>
  );
};

export default Navbar;
