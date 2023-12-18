// CoursesPage.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Courses.css";

// Function to format tags for display
const formatTags = (tagsString) => {
  try {
    const tagsArray = JSON.parse(tagsString);
    return tagsArray.map((tag) => tag.trim()).join(", "); // Join tags with a comma and space
  } catch (error) {
    console.error("Error formatting tags:", error);
    return tagsString; // Return original string if there's an error
  }
};

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [filter, setFilter] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from the server when the component mounts

    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/courses`
        );
        setCourses(response.data);
        setFilteredCourses(response.data); // Initialize filteredCourses with all courses
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    // Filter courses based on the filter value
    const filtered = courses.filter((course) =>
      course.title.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredCourses(filtered);
  }, [filter, courses]);

  return (
    <div>
      <div className="courses-page">
        <h2>All Courses</h2>

        {/* Filter input */}
        <input
          type="text"
          placeholder="Filter courses"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-input"
        />

        <div className="course-list">
          {filteredCourses.map((course) => (
            <Link
              key={course.id}
              to={`/courses/${course.id}`}
              className="course-link"
            >
              <div className="course-card">
                {/* Display thumbnail image */}
                <img
                  src={`${process.env.REACT_APP_API_ROUTE_URL}/${course.thumbnail}`}
                  alt={course.title}
                  className="course-thumbnail"
                />

                <div className="course-details">
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-tags">{formatTags(course.tags)}</p>
                  <p className="course-description">{course.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
