import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../newContext";

const Card = ({ name }) => {
  const { fid, did,pid, year } = useParams();
  const navigate = useNavigate();
  const [sid,setSID] = useState();

  useEffect(() => {
    setSID(name.id);
  }, []);

  return (
    <div
      className="max-w-md my-5 flex bg-white shadow-md mx-auto p-6 rounded-md items-center"
      onClick={() => navigate(`/topics/${fid}/${did}/${pid}/${year}/${sid}`)} 
    >
      <div>
        <h2 className="text-2xl text-left font-semibold text-gray-800 mb-2">
          {name.subject}
        </h2>
      </div>
      <div className="ml-auto">
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
  }, [fid, did,BASE_URL]); // Include fid and did in the dependency array

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
            <div style={{ overflowY: "auto", maxHeight: "400px" }}>
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
