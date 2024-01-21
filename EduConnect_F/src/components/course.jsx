import React from 'react';
import { Link,useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import axios from 'axios';

const EngineeringCourses = () => {

  const {bid}=useParams();

  const [Dept, setDept] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/getdept/${bid}/`);
        setDept(response.data['departments']);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [bid]);
  console.log(Dept)

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
          {Dept.map(
            (dep)=>(
              <CourseCard key={dep.id} title={dep.departmentName} linkTo={`/year/${dep.id}`} />
            )
          )}
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

export default EngineeringCourses;
