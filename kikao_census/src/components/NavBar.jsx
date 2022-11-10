import React, { useState } from "react";
import {NavLink} from "react-router-dom"
import {FaTh,FaBars,FaShoppingBag,FaUserAlt} from "react-icons/fa"

const NavBar = ({children}) => {
  const[isOpen,setIsOpen]=useState(false)
  const toggle=()=>setIsOpen(!isOpen)

  const menuItem = [
    {
      path: "/home",
      name: "Home",
      icon: <FaUserAlt />,
    },
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },

    {
      path: "/employee",
      name: "Employee",
      icon: <FaUserAlt />,
    },
    {
      path: "/employer",
      name: "Employer",
      icon: <FaShoppingBag />,
    },

  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            xContact
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default NavBar;
