// src/Components/Sidebar.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBook,
  faEnvelope,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import educonnect from "../Assets/educonnect.png";
const Sidebar = () => {
  return (
    <div>
      <img src={educonnect} alt="" />
      <div className="w-1/5 pr-6">
        <div className="flex w-full items-center mb-8"></div>
        <nav>
          <a href="/" className="flex items-center py-2 px-4 rounded-lg mb-2">
            <FontAwesomeIcon icon={faHome} className="mr-2" /> Dashboard
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-lg mb-2"
          >
            <FontAwesomeIcon icon={faBook} className="mr-2" /> Courses
          </a>
          <a
            href="/"
            className="flex items-center py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-lg mb-2"
          >
            <FontAwesomeIcon icon={faUser} className="mr-2" /> Profile
          </a>

          <a
            href="#"
            className="flex items-center py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-lg mb-2"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Message
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-lg mb-2"
          >
            <FontAwesomeIcon icon={faCog} className="mr-2" /> Settings
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
