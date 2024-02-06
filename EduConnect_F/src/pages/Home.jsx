import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import boy from "../assets/boy.jpg";
import Footer from "../Footer.jsx"

const Home = () => {
  const imageContainerStyle = {
    height: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const imageStyle = {
    height: "40%",
    width: "auto",
  };

  return (
    <>
      <div style={{ background: "#FEE9CB" }} className="h-screen">
        <Navbar />
        <main className="md:flex">
          <div className="mx-4 md:mx-20 my-20 md:my-10">
            <h1 className="font-extrabold sm:text-4xl md:text-4xl lg:text-5xl">
              Tomorrow is for
              <br /> the Taking
            </h1>
            <p className="w-full md:w-1/2 my-7 lg:text-xl md:text-sm font-semibold text-slate-400">
              Embark on a journey of rediscovery, deepening your understanding
              through a self-driven quest for knowledge.
            </p>
            <Link to="/loginstudent">
              <button className="getstart px-4 md:px-7 py-3 md:py-3 lg:my-5 rounded-3xl">
                Get Started
                <span>
                  <FontAwesomeIcon icon={faAnglesRight} />
                </span>
              </button>
            </Link>
          </div>
          <div className="my-10 ">
            <img src={boy} alt="boy" className="rounded-xl w-2/3 lg:w-9/12" />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;
