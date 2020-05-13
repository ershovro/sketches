import {NavLink} from "react-router-dom";
import React from "react";
import '../stylesheets/menus.scss';
import {FaHome} from 'react-icons/fa';

const selectedStyle = {
   backgroundColor: "white",
   color: "slategray"
}

export const MainMenu = ({className}) => (
   <section className={`mainMenu ${className}`}>
      <NavLink to = "/" className="mainMenu__navLink">
         <FaHome/>
      </NavLink>
      <NavLink to = "/about" className="mainMenu__navLink" activeStyle={selectedStyle}>
         [About]
      </NavLink>
      <NavLink to = "/events" className="mainMenu__navLink" activeStyle={selectedStyle}>
         [Events]
      </NavLink>
      <NavLink to = "/products" className="mainMenu__navLink" activeStyle={selectedStyle}>
         [Products]
      </NavLink>
      <NavLink to = "/contact" className="mainMenu__navLink" activeStyle={selectedStyle}>
         [Contact us]
      </NavLink>
   </section>
);


export const AboutMenu = ({match}) => (
   <div className="aboutMenu">
      <NavLink to="/about" className="aboutMenu__navLink" style={match.isExact && selectedStyle}>
         [Company]
      </NavLink>
      <NavLink to="/about/history" className="aboutMenu__navLink" activeStyle={selectedStyle}>
         [History]
      </NavLink>
      <NavLink to="/about/services" className="aboutMenu__navLink" activeStyle={selectedStyle}>
         [Services]
      </NavLink>
      <NavLink to="/about/location" className="aboutMenu__navLink" activeStyle={selectedStyle}>
         [Location]
      </NavLink>
   </div>
)

export const HomeMenu = ({className}) => (
   <div className={`homeMenu ${className}`}>
      <NavLink to = "/about" className="homeMenu__navLink">
         [About]
      </NavLink>
      <NavLink to = "/events" className="homeMenu__navLink">
         [Events]
      </NavLink>
      <NavLink to = "/products" className="homeMenu__navLink">
         [Products]
      </NavLink>
      <NavLink to = "/contact" className="homeMenu__navLink">
         [Contact us]
      </NavLink>
   </div>
)