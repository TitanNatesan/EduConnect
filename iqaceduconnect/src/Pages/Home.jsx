import React from "react";
import Navbar from "../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import boy from "../assets/boy.jpg";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div style={{ background: "#FEE9CA" }} className="h-screen">
        <Navbar />
        <main className="md:flex">
          <div className="mx-4 md:mx-20 my-20 md:my-10">
            <h1 className="font-extrabold font-protest sm:text-4xl md:text-4xl lg:text-5xl">
              Catchup the Classes
            </h1>
            <p className="w-full md:w-1/2 my-7 lg:text-xl md:text-sm font-semibold text-slate-400">
              You can easily learn the classes you missed or understand the
              topics you may not have grasped.{" "}
            </p>
            <Link to="/signin">
              <button className="getstart px-4 md:px-7 py-3 md:py-3 lg:my-5 rounded-3xl hover:shadow-lg">
                Lets Get Connected
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
