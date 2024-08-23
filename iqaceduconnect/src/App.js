import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { UserProvider } from "./newContext";
import Signin from "./Pages/Signin";
import Department from "./Pages/Department";
import Program from "./Pages/Program";
import Subject from "./Pages/Subject";
import Topics from "./Pages/Topics";
import Year from "./Pages/Year";
import Faculty from "./Pages/Faculty";
import VideoPage from "./Pages/Videopage";
import YouTubeEmbed from "./Pages/youtubeEmbed";

const App = () => {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/department/:fid" element={<Department />} />
          <Route path="/program/:fid/:did" element={<Program />} />
          <Route path="/year/:fid/:did/:pid/:year" element={<Year />} />
          <Route path="/subject/:fid/:did/:pid/:year" element={<Subject />} />
          <Route
            path="/topics/:fid/:did/:pid/:year/:sid"
            element={<Topics />}
          />
          <Route
            path="/video/:fid/:did/:pid/:year/:sid/:tid"
            element={<VideoPage />}
          />
          <Route path="/embedyou/:uid" element={<YouTubeEmbed />} />
        </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;
