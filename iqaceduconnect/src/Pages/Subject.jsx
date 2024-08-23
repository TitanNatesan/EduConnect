import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../newContext";
import "../App.css";
const Card = ({ name }) => {
  const { fid, did, pid, year } = useParams();
  const navigate = useNavigate();
  const [sid, setSID] = useState();

  useEffect(() => {
    setSID(name.id);
  }, [name.id]);

  return (
    <div
      className="flex-none w-64 m-2 bg-white shadow-md p-6 rounded-md items-center"
      onClick={() => navigate(`/topics/${fid}/${did}/${pid}/${year}/${sid}`)}
      style={{ cursor: "pointer" }}
    >
      <h2 className="text-xl text-left font-semibold text-gray-800 mb-2">
        {name.subject}
      </h2>
      <div className="flex justify-end">
        <FontAwesomeIcon icon={faChevronRight} style={{ color: "#000" }} />
      </div>
    </div>
  );
};

const Subject = () => {
  const { fid, did, pid, year } = useParams();
  const [facultyNames, setFacultyName] = useState([]);
  const [loading, setLoading] = useState(true);
  const { BASE_URL } = useUser();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/getsubject/${fid}/${did}/${pid}/${year}/`)
      .then((response) => {
        setFacultyName(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [fid, did, pid, year, BASE_URL]);

  return (
    <>
      <Navbar />
      <div className="h-screen bg-slate-500 flex flex-col justify-center items-center">
        <div className="text-white text-center">
          <h2 className="text-4xl text-green-800 font-extrabold mb-6 tracking-wide">
            Choose Course
          </h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div
              className="flex flex-wrap justify-evenly overflow-x-auto space-x-4 px-4"
              style={{ maxHeight: "400px" }}
            >
              {facultyNames.map((facultyName) => (
                <Card key={facultyName.id} name={facultyName} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Subject;
