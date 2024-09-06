import React from "react";
import CourseCard from "./CourseCard";

const CourseList = ({ courses }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          course={course.name}
          color={course.color}
          bookedPercentage={course.bookedPercentage}
        />
      ))}
    </div>
  );
};

export default CourseList;
