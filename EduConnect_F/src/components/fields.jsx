import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useUser } from '../newContext';

const Fieldofstudy = () => {

  const [branches, setBranches] = useState([]);

  const {userType}=useUser();


  useEffect(() => {
    console.log(userType);
    // Fetch the data from the backend when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/getbranches/`);
        setBranches(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
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
          {branches.map((branch) => (
            <CourseCard key={branch.id} title={branch.branchName} linkTo={`/course/${branch.id}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CourseCard = ({ title, linkTo }) => {
  return (
    <Link to={linkTo} className="block">
      <div className="bg-green-800 p-4 rounded-3xl shadow-md hover:bg-green-900 transition duration-300">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-white">{title}</p>
      </div>
    </Link>
  );
};

export default Fieldofstudy;
