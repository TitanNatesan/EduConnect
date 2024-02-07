import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { useUser } from "../newContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import kahe from "../assets/kahe.png";
import Footer from "../Footer";
import meta from '../assets/metaverse.jpeg'
const Fieldofstudy = () => {
  const [branches, setBranches] = useState([]);

  const { userType, setBrannch } = useUser();

  useEffect(() => {
    console.log(userType);
    const fetchData = async () => { 
      try {
        const response = await axios.get(
          `http://localhost:8000/api/getfaculty/`
        );
        setBranches(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <nav className="flex justify-between items-center px-4 md:px-20">
        <img
          src={logo}
          alt=""
          className="md:navImage lg:h-20 h-12 w-auto md:w-auto md:h-12"
        />
        <img src={meta}
          alt="kahe"
          className="md:navImage lg:h-20 h-12 w-auto md:w-auto md:h-12"
        />
        <img
          src={kahe}
          alt="kahe"
          className="md:navImage lg:h-20 h-12 w-auto md:w-auto md:h-12"
        />
      </nav>
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 h-screen flex flex-col justify-center items-center">
        <div className="text-white text-center">
          <h2 className="text-4xl text-green-800 font-extrabold mb-6 tracking-wide">
            Choose Faculty 
          </h2>
          <div className="grid gap-4">
            {branches.map((branch) => (
              <CourseCard
                key={branch.id}
                title={branch.facultyname}
                linkTo={`/course/${branch.id}`}
                onSelect={() => setBrannch(branch.id)}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const CourseCard = ({ title, linkTo }) => {
  return (
    <Link to={linkTo} className="block">
      <div className="bg-green-800 p-4 rounded-3xl shadow-md hover:bg-green-900 transition duration-300">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
      </div>
    </Link>
  );
};

export default Fieldofstudy;
