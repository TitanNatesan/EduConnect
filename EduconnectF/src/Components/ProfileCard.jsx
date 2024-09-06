// src/Components/ProfileCard.jsx
import React from "react";
import md5 from "md5"; // Import md5 here

const ProfileCard = () => {
  // Get user data from localStorage
  const userData = JSON.parse(localStorage.getItem("userdata"));

  if (!userData) {
    return <div>Loading...</div>; // Handle case when user data is not available
  }

  // Extract department, program, and faculty details
  const { name, regno, year, department, program, faculty } = userData;

  // Prepare detailed info
  const departmentName = department?.departmentName || "N/A";
  const facultyName = faculty?.facultyname || "N/A";
  const programName = program?.programname || "N/A";

  // Generate a random email for Gravatar
  const randomEmail = `user${Math.floor(Math.random() * 10000)}@example.com`;
  const gravatarUrl = `https://www.gravatar.com/avatar/${md5(
    randomEmail
  )}?d=retro`;

  return (
    <div className="bg-white rounded-xl p-4 shadow-lg px-2">
      <div className="flex items-center mb-4">
        <img src={gravatarUrl} alt="Profile" className="rounded-full mr-4" />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-600">
            {departmentName} | {year}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-center">
        <div>
          <div className="font-bold">{regno}</div>
          <div className="text-sm text-gray-600">Registration Number</div>
        </div>
        <div>
          <div className="font-bold">{programName}</div>
          <div className="text-sm text-gray-600">Program</div>
        </div>
        <div>
          <div className="font-bold text-sm">{facultyName}</div>
          <div className="text-sm text-gray-600">Faculty</div>
        </div>
        <div>
          <div className="text-sm font-bold">{departmentName}</div>
          <div className="text-sm text-gray-600">Department</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
