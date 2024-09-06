import React from "react";
import kahelogo from "../Assets/karpagam.png";
import educonnect from "../Assets/educonnect.png";
import metaverse from "../Assets/metaverse.png";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-center space-x-10 border-dashed">
        <img src={kahelogo} alt="" className=" w-52 h-24" />
        <img src={educonnect} alt="" className="w-52 h-24" />
        <img src={metaverse} alt="" className=" w-24 h-24" />
      </div>
      <hr />
    </>
  );
};

export default Navbar;
