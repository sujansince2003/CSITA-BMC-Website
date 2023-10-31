import React, { useState, useEffect } from "react";
import IMG from "../../Assets/partners/logohero.png";
import "./navigation.css";
import { Link } from "react-router-dom";
import { Links } from "../../data";
const Navigation = () => {

//solid
  const pathname = window.location.href
  const url = window.location.protocol + '//' + window.location.host+'/'
  const Url = window.location.protocol + '//' + window.location.host+'/#/'

  const toggleSolidNavBar = () =>{
    let navbar = document.querySelector(".nav-area");
    if (window.scrollY < 600 && (pathname === url || pathname === Url )) {
      navbar.classList.remove("toggle");
    } else {
      navbar.classList.add("toggle");
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  //toggel solid nav bar based onevent 
  window.onscroll = toggleSolidNavBar
  // eslint-disable-next-line
  useEffect( toggleSolidNavBar,[])
  
  

  //add or remove ham menu with css class
  const handleHam = () => {
    document.getElementById("nav").classList.toggle("expendedNav");
    setIsNavExpanded(!isNavExpanded);
  };

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav id="nav" className="nav-area">
      <div className="logo">
      <Link to='/'>
        <img src={IMG} alt="" />
      </Link>
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
                // spy={true}
                onClick={handleHam}
                // activeClass="active"
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
