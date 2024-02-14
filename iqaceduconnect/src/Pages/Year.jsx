import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import { useNavigate, useParams } from "react-router-dom";

const Card = ({ programName, fid, did, year,pid }) => {
  const navigate = useNavigate();

  return(
    <div
      className="max-w-md my-5 flex bg-white shadow-md mx-auto p-5 rounded-md items-center"
      onClick={() => navigate(`/subject/${fid}/${did}/${pid}/${year}`)}
    >
      <div>
        <h2 className="text-2xl text-left font-semibold text-gray-800 mb-2">
          {programName}
        </h2>
      </div>
      <div className="ml-auto">
        <FontAwesomeIcon icon={faChevronRight} style={{ color: "#000" }} />
      </div>
    </div>
  );
};

const Year = () => {
  const { fid, did,year,pid } = useParams();
  const staticPrograms = [
    { id: 1, programName: "1st-Year" },
    { id: 2, programName: "2nd-Year" },
    { id: 3, programName: "3rd-Year" },
    { id: 4, programName: "4th-Year" },
    { id: 5, programName: "5th-Year" },
  ];

  return (
    <>
      <Navbar />
      <div className="h-screen bg-slate-500 flex flex-col justify-center items-center">
        <div className="text-white text-center">
          <h2 className="text-4xl text-green-800 font-extrabold mb-6 tracking-wide">
            Choose Year
          </h2>
          <div style={{ overflowY: "auto", maxHeight: "400px" }}>
            {staticPrograms.slice(0,year).map((program) => (
              <Card
                key={program.id}
                programName={program.programName}
                fid={fid}
                did={did}
                pid={pid}
                year={program.id}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Year;
