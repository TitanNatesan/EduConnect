import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../newContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const TeacherDashboard = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [thumbnails, setThumbnails] = useState('');
  const [description, setDescription] = useState('');
  const { deptid, year, proid } = useParams();
  const { userType, userID, setUser } = useUser();
  const navigate = useNavigate();
  const [Dept, setDept] = useState([]);
  const [status,setStatus]=useState(false);
  const [message,setMessage]=useState("")

  const handleVideoUpload = async () => {
    try {
      const y = year == 1 ? '1st-Year' : year == 2 ? '2nd-Year' : year == 3 ? '3rd-Year' : year == 4 ? '4th-Year' : year == 5 ? '5th-Year' : 'Year-Invalid';
      const response = await axios.post(`http://localhost:8000/api/uploadVideo/`, {
        url: videoUrl,
        bid: 1,
        department_id: deptid,
        uploaded_by: userID,
        year: y,
        program_id: proid,
        description:description,
      });
      if (response.data=="Uploaded"){
        navigate(`/teacherdashboard/${deptid}/${year}/${proid}/`);
        setVideoUrl("")
        setThumbnails("")
        setDescription("")
        setStatus(true)
        setMessage(response.data)
      }else{
        setStatus(true)
        setMessage(response.data)
      }
    } catch (error) {
      console.log('Error: ', error);
      setStatus(false)
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="bg-teal-500 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Teacher Dashboard</h2>
        {status && <p className="text-red-500 mb-4">{message}</p>}
        <div className="mb-4">
          <label className="text-green-700 block mb-2">Video URL:</label>
          <input
            type="text"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="w-full p-2 border border-purple-300 rounded-md focus:outline-none focus:border-purple-500"
          />
        </div>
        <div className="mb-4">
          <label className="text-green-700 block mb-2">Thumbnails:</label>
          <input
            type="text"
            value={thumbnails}
            onChange={(e) => setThumbnails(e.target.value)}
            className="w-full p-2 border border-purple-300 rounded-md focus:outline-none focus:border-purple-500"
          />
        </div>
        <div className="mb-4">
          <label className="text-green-700 block mb-2">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-purple-300 rounded-md focus:outline-none focus:border-purple-500"
          ></textarea>
        </div>
        <button
          onClick={handleVideoUpload}
          className="bg-green-500 text-white py-2 px-4 rounded-full text-lg font-semibold hover:bg-green-800 transition duration-300 mr-2"
        >
          Upload Video
        </button>
        <button
          onClick={handleLogout}
          className="bg-green-500 text-white py-2 px-4 rounded-full text-lg font-semibold hover:bg-green-800 transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default TeacherDashboard;
