import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { faEye, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
const YouTubeEmbed = () => {
    const { uid } = useParams();
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [views, setViews] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [url, setUrl] = useState("");
    const [likes, setLikes] = useState();
    const savedUsername = localStorage.getItem("savedUsername");
    function formatTimestamp(timestamp) {
        const date = new Date(timestamp);

        // Extracting components
        const day = date.getDate();
        const month = date.getMonth() + 1; // Months are zero-indexed
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const period = hours >= 12 ? 'PM' : 'AM';

        // Convert hours to 12-hour format
        const formattedHours = hours % 12 || 12;

        // Creating a human-readable date string
        const formattedDate = `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year} | ${formattedHours < 10 ? '0' : ''}${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${period}`;

        return formattedDate;
    }

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/comment/${savedUsername}/${uid}/`)
            .then(response => {
                setComments(response.data['commment']);
                setViews(response.data['views']);
                setUrl(response.data['urls']);
                setIsLiked(response.data['liked']);
                setLikes(response.data['likes'])
            })
            .catch(error => {
                console.error("Error fetching video details:", error);
            });
    }, [uid, savedUsername]);

    const handleAddComment = async () => {
        const response = await axios.post(`http://127.0.0.1:8000/api/comment/${savedUsername}/${uid}/`, {
            username: savedUsername,
            video_id: uid,
            comment: newComment,
        });
        setComments(response.data['commment']);
    };

    const handleLike = async () => {
        const response = await axios.post(`http://127.0.0.1:8000/api/like/`, {
            username: savedUsername,
            video_id: uid,
        });
        if (response.data == 'Disliked') {
            setLikes(likes - 1);
        } else if (response.data == 'Liked') {
            setLikes(likes + 1);
        }
        setIsLiked(!isLiked);
    };

    const getGravatarUrl = (email) => {
        return `https://www.gravatar.com/avatar/${email}?s=32&d=identicon`;
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
            <h1 className="m-10 font-bold text-black text-2xl">Comment Section</h1>
            <div className="mt-4 w-full max-w-4xl">
                <input
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                    className="w-full p-2 border-b-2 border-gray-300 outline-none rounded focus:border-b-green-600 transition-all "
                />
                <button
                    onClick={() => handleAddComment()}
                    className="mt-5  bg-blue-500 text-white py-2 px-4 hover:rounded-lg transition-all hover:bg-blue-600 focus:outline-none"
                >
                    Add Comment
                </button>
            </div>

            <div className="comment-section mt-4 w-full max-w-4xl">
                <h3 className="text-lg font-semibold mb-2">Comments</h3>
                {comments.length === 0 ? (
                    <p>No comments yet.</p>
                ) : (
                    <ul className="space-y-4">
                        {comments.map(comment => (
                            <li key={comment.id} className="bg-gray-100 p-4 rounded-md flex items-center space-x-2  hover:shadow-lg hover:inset-3 shadow-slate-600 transition-all">
                                <img
                                    src={getGravatarUrl(comment.student)}
                                    alt="Gravatar"
                                    className="rounded-full h-10 mr-2 w-10 underline"
                                />
                                <div className="w-full ">
                                    <p className="font-semibold pt-5 ">{comment.student}</p>
                                    <p className="">{comment.comment}</p>
                                    <p className="text-gray-500 opacity-85 text-xs justify-end flex">{formatTimestamp(comment.time)}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
        <Footer />
        </>
    );
};

export default YouTubeEmbed;
