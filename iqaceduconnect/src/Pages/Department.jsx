import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useUser } from "../newContext";

const Card = ({ name }) => {
  const {fid} = useParams();
  const navigate = useNavigate();
  const [did, setDID] = useState();

  useEffect(() => {
    setDID(name.id);
  }, []);

  return (
    <div
      className="max-w-md my-5 flex bg-white shadow-md mx-auto p-6 rounded-md items-center"
      onClick={() => navigate(`/program/${fid}/${did}`)}
    >
      <div>
        <h2 className="text-2xl text-left font-semibold text-gray-800 mb-2">
          {name.departmentName}
        </h2>
      </div>
      <div className="ml-auto">
        <FontAwesomeIcon icon={faChevronRight} style={{ color: "#000" }} />
      </div>
    </div>
  );
};

const Fieldofstudy = () => {
  const { fid } = useParams();
  const [facultyNames, setFacultyName] = useState([]);
  const [loading, setLoading] = useState(true);
  const { BASE_URL } = useUser();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/getdepartment/${fid}/`)
      .then((response) => {
        setFacultyName(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [BASE_URL]);

  return (
    <>
      <Navbar />
      <div className="h-screen bg-slate-500 flex flex-col justify-center items-center">
        <div className="text-white text-center">
          <h2 className="text-4xl text-green-800 font-extrabold mb-6 tracking-wide">
            Choose Department
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

export default Fieldofstudy;
