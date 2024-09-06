// src/Components/CourseCard.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const CourseCard = ({ course }) => {
  return (
    <div className="p-4 hover:shadow-md transition-all rounded-xl bg-yellow-100">
      <img
        src={`https://via.placeholder.com/190?text=Course+Image`}
        alt="Course"
        className="mb-2 hover:scale-105 hover:cursor-pointer transition-all rounded-lg"
      />
      <h3 className="font-bold text-center mb-2">{course}</h3>
    </div>
  );
};

export default CourseCard;
