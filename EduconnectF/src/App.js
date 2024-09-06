import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import VideoPlayer from "./Pages/VideoPlayer";
import "./index.css";
import Dashboard from "./Pages/Dummy";

function App() {
  return (
    <Router>
      <div className="App"> 
        <Routes>
          <Route exact path="" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/video" element={<VideoPlayer />} />
          <Route path="/dum" element={<Dashboard/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
