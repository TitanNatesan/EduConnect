import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import homeImage from '../assets/home.png'; // Replace with the path to your home image

const Home = () => {

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-teal-500">
      <div className="absolute left-40 top-1/2 transform -translate-y-1/2 w-1/2 overflow-hidden">
        <img
          src={homeImage}
          alt="Left Image"
          className="w-120 h-120 object-cover rounded-r-full"
        />
      </div>

      <div className="absolute top-0 right-0 bottom-0 w-1/2 overflow-hidden">
        <div className="absolute inset-0 bg-green-800 rounded-l-full flex flex-col items-center justify-center text-center p-8">
          <h1 className="text-2xl font-bold text-teal-300 mb-4 z-10">Welcome to EduConnect</h1>
          <h1 className="text-4xl font-bold text-white mb-3 z-10">Learning without limits,</h1>
          <h1 className="text-4xl font-bold text-white mb-8 z-10">anytime, anywhere.</h1>

          <div className="flex flex-col items-center md:flex-row">
            <Link
              to="/loginstudent"
              className="bg-teal-500 text-white py-2 px-4 rounded-full text-lg font-semibold mb-2 md:mr-2 md:mb-0 hover:bg-teal-900 transition duration-300"
            >
              Student Login
            </Link>
            <Link
              to="/loginteacher"
              className="bg-teal-500 text-white py-2 px-4 rounded-full text-lg font-semibold hover:bg-teal-900 transition duration-300"
            >
              Teacher Login
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 p-4">
        <img src={logo} alt="EduConnect Logo" className="w-full md:w-1/2" />
      </div>
    </div>
  );
};

export default Home;
