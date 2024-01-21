import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useUser } from '../newContext';

const StudentLogin = () => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {userType,setUser}=useUser();

  const navigate = useNavigate();

  const defaultStudents = [
    { id: 'student1', password: 'password1' },
    { id: 'student2', password: 'password2' },
  ];

  const handleLogin = async () => {
    try{
    const response = await axios.post(`http://localhost:8000/api/studLogin/`, {
      username: studentId,
      password: password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    if (response.data=="1"){
      setUser('student', studentId);
      navigate("/fields")
    }
    else{
      setError(response.data);
    }
  
  }catch(error){
      setError(error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-teal-500 to-teal-600 h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        <h2 className="text-3xl font-bold text-green-500 mb-6">Student Login</h2>
        {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
        <div className="mb-4">
          <label className="text-green-500 block">
            Student ID:
            <input
              type="text"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="mt-1 p-2 block w-full border border-green-300 rounded-md focus:outline-none focus:border-green-500"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="text-green-500 block">
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 block w-full border border-green-300 rounded-md focus:outline-none focus:border-green-500"
            />
          </label>
        </div>
        <button
          onClick={handleLogin}
          className="bg-green-500 text-white py-2 px-4 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300"
        >
          Login
        </button>

      </div>
    </div>
  );
};

export default StudentLogin;
