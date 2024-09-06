import React from "react";

const LearnMoreSection = () => {
  return (
    <div className="space-y-2">
      {[1, 2, 3, 4].map((item) => (
        <div key={item} className="flex items-center">
          <img
            src={`https://via.placeholder.com/60?text=${item}`}
            alt="Project"
            className="rounded mr-2"
          />
          <div>
            <h4 className="font-bold text-sm">
              Shift project kick from Part v2
            </h4>
            <p className="text-xs text-gray-600">Product Design</p>
          </div>
        </div>
      ))}
      <button className="text-blue-500 text-sm mt-2">VIEW MORE</button>
    </div>
  );
};

export default LearnMoreSection;
