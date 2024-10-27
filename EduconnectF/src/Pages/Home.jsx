import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import ProfileCard from "../Components/ProfileCard";
import NewsSection from "../Components/NewsSection";
import LearnMoreSection from "../Components/LearnMoreSection";
import "@fontsource/roboto";
import axios from "axios";
import CourseCard from "../Components/CourseCard";

const Home = () => {
  const [courses, setCourses] = useState([{ subject: "DBMS", year: "1st-Year", program: 4, department: 1, faculty: 1, topics: [{ topic: "Memory Management", videos: [{ url: "https://youtu.be/0N-D5HmWdSs?si=tR28ReDlDyzlUxfQ", description: "NA", like_count: 0 }] }] }]
  );
  const [topics, setTopics] = useState([])
  const [expandedCourseIndex, setExpandedCourseIndex] = useState(null);
  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    const getCourses = async () => {
      const userdata = localStorage.getItem("userdata");
      if (userdata) {
        try {
          const userDataObj = JSON.parse(userdata);
          const response = await axios.post(`http://127.0.0.1:8000/api/newReq/`, {
            pro: userDataObj.program.id,
            year: userDataObj.year,
          });
          console.log(JSON.stringify(response.data));

          setCourses(response.data);
        } catch (error) {
          console.log("Error fetching courses:", error);
        }
      } else {
        console.log("No user data found in localStorage.");
      }
    };
    getCourses();
  }, []);

  useEffect(() => {
    console.log(topics.length)
  }, [topics])




  const handleCourseClick = (index) => {
    setExpandedCourseIndex(index === expandedCourseIndex ? null : index);
  };

  const handleViewVideo = (url) => {
    navigate(`/video?url=${encodeURIComponent(url)}`); // Navigate to video page with URL as query param
  };

  return (
    <div className="bg-gray-100 p-6 font-sans">
      <div className="bg-white rounded-xl p-6 shadow-lg max-w-7xl mx-auto">
        <div className="flex">
          <div className="w-1/5 pr-6">
            <Sidebar />
          </div>
          <div className="w-3/5 px-6">

            {/* Top Course List */}
            <div className="p-4 hover:shadow-md transition-all rounded-xl bg-yellow-100 flex">
              {
                courses.length > 0 ?
                  <>
                    {
                      courses.map((course, index) => (
                        <div key={index} onClick={() => (setTopics(course.topics),handleCourseClick(null))} className="p-4 hover:shadow-md transition-all rounded-xl bg-yellow-100">
                          <img
                            src={course.img?`http://127.0.0.1:8000/${course.img}`:`https://via.placeholder.com/190?text=Course+Image`}
                            alt="Course"
                            className="mb-2 hover:scale-105 hover:cursor-pointer transition-all rounded-lg h-60"
                          />
                          <h3 className="font-bold text-center mb-2">{course.subject}</h3>
                        </div>
                      ))
                    }
                  </>
                  :
                  <>No Course Available</>
              }

            </div>

            <h2 className="text-xl font-bold mb-4">Topics</h2>
            <div className="space-y-4">
              {topics && topics.length && topics.length > 0 ? (
                topics.map((topic, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-lg border border-gray-200"
                  >
                    <div
                      onClick={() => handleCourseClick(index)}
                      className="flex items-center justify-between bg-yellow-100 p-4 rounded-lg cursor-pointer"
                    >
                      <div className="flex items-center">
                        <img
                          src={topic.img?`http://127.0.0.1:8000${topic.img}`:`https://via.placeholder.com/50?text=Course+${index + 1}`}
                          alt="Course"
                          className="rounded-full mr-2 w-16 h-16"
                        />
                        <span className="text-lg font-semibold">
                          {topic.topic}
                        </span>
                      </div>
                      <span className="text-sm">{topic.videos.length} Videos</span>
                    </div>
                    {expandedCourseIndex === index && (

                      // <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                      //   {topic && topic.videos && topic.videos.map((video, idx) => (
                      //     <div key={idx}>
                      //       <h3 className="text-lg font-bold mb-2">{video.url}</h3>

                      //     </div>
                      //   ))}
                      // </div>


                      <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                        {topic.videos.map((video, vidIdx) => (
                          <div
                            key={vidIdx}
                            className="flex items-center justify-between bg-white p-3 rounded-lg shadow my-2"
                          >
                            <span className="text-sm font-semibold w-3/4">
                              {video.url ? `Video Description: ${video.description}` : "No video URL available"}
                            </span>
                            <button
                              onClick={() => handleViewVideo(video.url)}
                              className="bg-yellow-100 border-2 hover:border-yellow-200 border-yellow-200 px-3 py-1 rounded-lg text-sm"
                            >
                              View Video
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p>No courses available.</p>
              )}
            </div>
          </div>
          <div className="w-1/5 pl-6">
            {/* <NewsSection /> */}
            <div className="mt-6">
              <ProfileCard />
            </div>
            <div className="mt-6">
              {/* <h2 className="text-xl font-bold mb-4">Learn more</h2> */}
              {/* <LearnMoreSection /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
