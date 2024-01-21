import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import axios from 'axios';
import { useUser } from '../newContext';

const Subjects = () => {

  const { deptid, year } = useParams();


  const [subject, setSubject] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/programs/${deptid}/${year}/`); // Replace 'your_api_endpoint' with your actual API endpoint
        setSubject(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [deptid, year]);

  const [topage, setToPage] = useState('');
  const { userType, userID } = useUser();

  useEffect(
    () => {
      if (userType=="teacher"){
        setToPage(`teacherdashboard`);
      }else{
        setToPage(`studentdashboard`);
      }
    },[]
  );


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
          {
            subject.map(
              (sub) => (
                <CourseCard key={sub.id} title={sub.subject} linkTo={`/${topage}/${deptid}/${year}/${sub.id}`} />
              )
            )
          }
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

export default Subjects;
