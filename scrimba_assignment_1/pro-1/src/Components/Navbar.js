import React  from "react";
import "./Nav.css"
export const Navbar=()=>{
    const logoImage = "Logo.ico"
return(
    <nav className="navbar">
    <img src={logoImage} className="logoImg"/>
    <h1 className="nav-logo-text">ReactFacts</h1>
   <h3 className="nav-title">React Course - Project 1</h3>
    </nav>
)
}