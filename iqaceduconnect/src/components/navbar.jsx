import React from "react";
import logo from "../assets/logo.png";
import "../App.css";
import kahe from "../assets/kahe.png";
import metaverse from "../assets/metaverse.jpeg";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <nav className=" flex py-3 border-b-2 border-black shadow-sm shadow-slate-200 scroll-smooth w-fit">
        <img src={logo} alt="" className="h-14 mr-20 lg:h-20" />
        <img src={metaverse} alt="hel" className="h-14 mr-20 lg:h-20" />
        <img src={kahe} alt="helllo" className="h-14 lg:h-20" />
      </nav>
    </div>
  );
};

export default Navbar;
