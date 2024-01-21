import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './components/LoginPage';
import LoginPage2 from './components/Loginpage2';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';
import Fieldofstudy from './components/fields';
import EngineeringCourses from './components/course';
import Yearofstudy from './components/year';
import Subjects from './components/subjects';
import { UserProvider } from './newContext';

const App = () => {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginstudent" element={<LoginPage />} />
          <Route path="/loginteacher" element={<LoginPage2 />} />
          <Route path="/fields" element={<Fieldofstudy />} />
          <Route path="/course/:bid" element={<EngineeringCourses />} />
          <Route path="/year/:deptid" element={<Yearofstudy />} />
          <Route path="/subjects/:deptid/:year" element={<Subjects />} />
          <Route path="/teacherdashboard/:deptid/:year/:proid" element={<TeacherDashboard />} />
          <Route path="/studentdashboard/:deptid/:year/:proid" element={<StudentDashboard />} />
        </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;
