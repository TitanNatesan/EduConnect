import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { faEye, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
const YouTubeEmbed = () => {
    const { uid } = useParams();
    const [views, setViews] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [url, setUrl] = useState("");
    const [likes, setLikes] = useState();
    const savedUsername = localStorage.getItem("savedUsername");

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/comment/${savedUsername}/${uid}/`)
            .then(response => {
                setViews(response.data['views']);
                setUrl(response.data['urls']);
                setIsLiked(response.data['liked']);
                setLikes(response.data['likes'])
            })
            .catch(error => {
                console.error("Error fetching video details:", error);
            });
    }, [uid, savedUsername]);

    const handleLike = async () => {
        const response = await axios.post(`http://127.0.0.1:8000/api/like/`, {
            username: savedUsername,
            video_id: uid,
        });
        if (response.data === 'Disliked') {
            setLikes(likes - 1);
        } else if (response.data === 'Liked') {
            setLikes(likes + 1);
        }
        setIsLiked(!isLiked);
    };

    return (
        <>
        <Navbar />
        <div className="video-container mb-10 flex flex-col items-center justify-center">
            <iframe
                className="w-full max-w-4xl h-96"
                src={`https://www.youtube.com/embed/${url}?controls=0&showinfo=0&rel=0&autoplay=0&loop=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <div className="mt-4 flex items-center space-x-4">
                <button
                    onClick={() => handleLike()}
                    className={`like-button ${isLiked ? 'bg-green-500' : 'bg-white'} text-black flex items-center py-2 px-4 rounded-md focus:outline-none`}
                >
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <span className="ml-2">{likes} Likes</span>
                </button>
                <span className="text-gray-600 ">
                    <FontAwesomeIcon icon={faEye} className="mr-2" />
                    {views}
                </span>
            </div>
            
        </div>
        <Footer />
        </>
    );
};

export default YouTubeEmbed;
