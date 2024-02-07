import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import axios from 'axios';
import kahe from '../assets/kahe.png';
import Footer from '../Footer';
import '../App.css'
import meta from '../assets/metaverse.jpeg'
const EngineeringCourses = () => {
  const { fid } = useParams();
  const [Dept, setDept] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/getdept/${fid}/`);
        setDept(response.data['departments']);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [fid]);

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
      <div
        className="bg-gradient-to-r from-teal-500 to-teal-600 flex flex-col justify-center items-center"
        style={{ overflow: 'hidden' }}
      >
        <div className="text-white text-center">
          <div className="flex items-center justify-center">
            <img
              src={logo}
              alt="Logo"
              className="w-70 h-35 object-contain mb-8 rounded-full"
            />
          </div>
          <h2 className="text-4xl text-green-800 font-extrabold mb-6 tracking-wide">
            Choose Course
          </h2>
          <div className="max-h-screen overflow-y-auto grid gap-4 custom-scrollbar">
            {Dept.map((dep) => (
              <CourseCard key={dep.id} title={dep.departmentName} linkTo={`/year/${dep.id}`} />
            ))}
          </div>
        </div>
        <br />
        <br />

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

export default EngineeringCourses;
