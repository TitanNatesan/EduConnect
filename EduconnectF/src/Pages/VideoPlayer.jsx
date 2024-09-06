import React from 'react';
import { useLocation } from 'react-router-dom';
import Nav from "../Assets/educonnect.png"
import Navbar from '../Components/Navbar';
const VideoPlayer = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const videoUrl = query.get('url');

  // Function to extract video ID and return embed URL with parameters
  const getEmbedUrl = (url) => {
    if (url) {
      let videoId;
      try {
        const urlObj = new URL(url);
        videoId = urlObj.searchParams.get('v');
      } catch (error) {
        console.error("Invalid URL:", url);
      }
      
      if (!videoId) {
        const path = new URL(url).pathname.split('/');
        videoId = path[path.length - 1];
      }

      return videoId
        ? `https://www.youtube.com/embed/${videoId}?controls=1&autoplay=1&modestbranding=0&rel=0&showinfo=0`
        : '';
    }
    return '';
  };

  return (
    <div className=" justify-center items-center h-screen bg-gray-100 p-6">
      <Navbar />
      {videoUrl ? (
        <div className="w-full flex absolute left-96 top-36 justify-center items-center max-w-4xl bg-white rounded-xl shadow-lg p-6">
          <iframe
            width="100%"
            height="600"
            src={getEmbedUrl(videoUrl)}
            title="Video Player"
            className="rounded-lg flex justify-center items-center"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <p className="text-lg font-semibold">No video URL provided.</p>
      )}
    </div>
  );
};

export default VideoPlayer;
