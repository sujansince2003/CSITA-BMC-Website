import React, { useState } from "react";
import IMG from "../../Assets/partners/logohero.png";
import "./navigation.css";
import { Link } from "react-scroll";
import { Links } from "../../data";
const Navigation = () => {
  window.onscroll = () => {
    let navbar = document.querySelector(".nav-area");
    if (window.scrollY > 600) {
      navbar.classList.add("toggle");
    } else {
      navbar.classList.remove("toggle");
    }
  };

  //add or remove ham menu with css class
  const handleHam = () => {
    document.getElementById("nav").classList.toggle("expendedNav");
    setIsNavExpanded(!isNavExpanded);
  };

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav id="nav" className="nav-area">
      <div className="logo">
        <img src={IMG} alt="" />
      </div>
      <div className="TheLists">
        <div id="ham-menu" className="hamburger ham-menu" onClick={handleHam}>
          <div className="ham-bar ham-bar-1"></div>
          <div className="ham-bar ham-bar-2"></div>
          <div className="ham-bar ham-bar-3"></div>
        </div>
        <div>
          <ul className={isNavExpanded ? "navlinks expanded" : "navlinks"}>
            {Links.map((link, id) => (
              <Link
                className="link"
                key={`${link.title}-${id}`}
                to={link.path}
                spy={true}
                onClick={handleHam}
                activeClass="active"
              >
                {link.title}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
