// CourseDetailsPage.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar"; // Import the Navbar component
import Footer from "../../Components/Foooter/Footer"; // Import the Footer component
import "./CourseDetailsPage.css";

const CourseDetailsPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Fetch the individual course details based on the id parameter
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/courses/${id}`
        );
        setCourse(response.data);
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };

    fetchCourseDetails();
  }, [id]);

  if (!course) {
    // Loading state or handle error
    return <div>Loading...</div>;
  }

  const getVideoLink = (youtubeLink) => {
    // Extract YouTube video ID from the link
    const videoId = getYoutubeVideoId(youtubeLink);

    // Return the formatted video link
    return `https://drive.google.com/uc?id=${videoId}`;
  };

  const getYoutubeVideoId = (url) => {
    try {
      const match = url.match(/[A-Za-z0-9_-]{11}/);
      return match ? match[0] : "";
    } catch (error) {
      console.error("Error extracting YouTube video ID:", error);
      return "";
    }
  };

  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <div className="course-details-page">
        <h2>{course.title}</h2>

        {/* Display video */}
        <video
          src={getVideoLink(course.youtube_link)}
          controls
          className="course-video"
          poster={getVideoLink(course.youtube_link)} // Use the video itself as the poster
        />

        <p>{course.description}</p>
        <p>Tags: {course.tags}</p>
        {/* Add more details as needed */}
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default CourseDetailsPage;
