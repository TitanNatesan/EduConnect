import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useUser } from '../newContext';
import kahe from "../assets/kahe.png";
import Footer from '../Footer';
import meta from '../assets/metaverse.jpeg'
const Yearofstudy = () => {

  const [branches, setBranches] = useState([]);
  const { deptid } = useParams();
  const [duration, setDuration] = useState(1);

  const { brannch } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/getbranches/`);
        setBranches(response.data);
        console.log(branches);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(brannch);
  }
  )


  const years = [
    { id: "1", year: "1st-Year" },
    { id: "2", year: "2nd-Year" },
    { id: "3", year: "3rd-Year" },
    { id: "4", year: "4th-Year" },
    { id: "5", year: "5th-Year" },
  ]


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
          <div className="flex items-center justify-center">
            <img
              src={logo}
              alt="Logo"
              className="w-70 h-35 object-contain mb-8 rounded-full"
            /> 
          </div>
          <h2 className="text-4xl text-green-800 font-extrabold mb-6 tracking-wide">
            Choose a Field of Study
          </h2>
          <div className="grid gap-4">

            {/* <CourseCard title="1st Year" linkTo={`/subjects/${deptid}/1`} />
          <CourseCard title="2nd Year" linkTo={`/subjects/${deptid}/2`} />
          <CourseCard title="3rd Year" linkTo={`/subjects/${deptid}/3`} />
          <CourseCard title="4th Year" linkTo={`/subjects/${deptid}/4`} /> */}

            {years.slice(0, 5).map((year) => (
              <CourseCard key={year.id} title={year.year} linkTo={`/subjects/${deptid}/${year.id}`} />
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

export default Yearofstudy;
