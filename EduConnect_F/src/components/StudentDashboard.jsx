import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const StudentDashboard = () => {
  const {proid,year,deptid}=useParams();


  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/getvideo/${deptid}/${year}/${proid}/`);
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);


  const video = [
    {
      id: 1,
      description: 'Naan Pizhaippeno',
      videoUrl: 'WzO6VynQ7UM?si=n7dYx16sGzk-iHxM',
    },
    {
      id: 2,
      description: 'Naan Pizhaippeno',
      videoUrl: 'pYBIpM5mBm4?si=A4TyruI2SLpmcgYt',
    },
  ];

  const openVideoInNewTab = (url) => {
    window.open(`https://www.youtube.com/embed/${url}`, '_blank');
  };

  return (
    <div className="bg-teal-500 min-h-screen p-8">
      <h2 className="text-4xl font-bold text-white  text-center mb-8">Student Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-8">
        {videos.map((video) => (
          <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-md">
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
              <p className="text-gray-800 font-semibold mb-2">{video.description}</p>
              <button
                className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none"
                onClick={() => openVideoInNewTab(video.url)}
              >
                Watch Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;