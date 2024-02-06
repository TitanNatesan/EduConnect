import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import logo from "./assets/logo.png";
import "./App.css";
import { Link } from "react-router-dom";
import kahe from "./assets/kahe.png"
import metaverse from "./metaverse.jpg"
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 md:px-20">
      <img src={logo} alt="" className="md:navImage lg:h-20 h-12 w-auto md:w-auto md:h-12" />
      <img src={metaverse} className="md:navImage lg:h-20 h-12 w-auto md:w-auto md:h-12" />
      <Link to="/loginstudent">
        <img src={kahe} className="md:navImage lg:h-20 h-12 w-auto md:w-auto md:h-12" />
      </Link>
    </nav>
  );
};

export default Navbar;
