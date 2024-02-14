import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { UserProvider } from "../newContext";

const VideoPage = () => {
  const { fid, did, pid, year, sid, tid } = useParams();

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const {BASE_URL}= UserProvider();

  useEffect(() => {
    // Assuming your API response contains an array of video objects
    axios
      .get(`${BASE_URL}/api/getvideo/${fid}/${did}/${pid}/${year}/${sid}/${tid}/`)
      .then((response) => {
        setVideos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [fid, did, pid, year, sid, tid,BASE_URL]);

  const openVideoInNewTab = (url) => {
    url = url.split("/").pop();
    window.open(`https://www.youtube.com/embed/${url}`, "_blank");
  };

  return (
    <div className=" bg-slate-500 min-h-screen p-8">
      <h2 className="text-4xl font-bold text-white text-center mb-8">
        Student Dashboard
      </h2>
      {loading ? (
        <p className="text-white text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${video.url}`}
                title={`Embedded YouTube Video ${video.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-t-md"
              ></iframe>
              <div className="p-4">
                <p className="text-gray-800 font-semibold mb-2">
                  {video.description}
                </p>
                <button
                  className=" bg-slate-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none"
                  onClick={() => openVideoInNewTab(video.url)}
                >
                  Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoPage;
