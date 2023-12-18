// CourseForm.js
import React, { useState } from "react";
import axios from "axios";
import "./CourseForm.css";

const CourseForm = () => {
  const [courseName, setCourseName] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [videoText, setVideoText] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [error, setError] = useState("");

  const handleTagInput = (e) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleTagDelete = (tagToDelete) => {
    const updatedTags = tags.filter((tag) => tag !== tagToDelete);
    setTags(updatedTags);
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (
      !courseName ||
      tags.length === 0 ||
      !videoText ||
      !description ||
      !thumbnail
    ) {
      setError("All fields are required");
      return;
    }

    const formData = new FormData();
    formData.append("thumbnail", thumbnail);
    formData.append("title", courseName);
    formData.append("tags", JSON.stringify(tags));
    formData.append(
      "youtube_link",
      `https://drive.google.com/uc?id=${videoText}`
    );
    formData.append("description", description);

    console.log("FormData:", formData); // Debugging line

    try {
      // Make a POST request to your server to add the course with the thumbnail
      const response = await axios.post(
        `/api/add-course`,
        formData
      );

      // Reset form fields after successful submission
      if (response.data.success) {
        setCourseName("");
        setTags([]);
        setTagInput("");
        setVideoText("");
        setDescription("");
        setThumbnail(null);
        setError("");
      } else {
        setError("Error submitting course");
      }
    } catch (error) {
      console.error("Error submitting course:", error);
      setError("Error submitting course");
    }
  };

  return (
    <div className="course-form">
      <h2>Submit Course</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {error && <div style={{ color: "red" }}>{error}</div>}

        <label>
          Course Name:
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </label>

        <label>
          Tags:
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagInput}
          />
          <div>
            {tags.map((tag) => (
              <span key={tag}>
                {tag}
                <button type="button" onClick={() => handleTagDelete(tag)}>
                  X
                </button>
              </span>
            ))}
          </div>
        </label>

        <label>
          Video Text:
          <input
            type="text"
            value={videoText}
            onChange={(e) => setVideoText(e.target.value)}
          />
        </label>

        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <label>
          Thumbnail Image:
          <input
            type="file"
            accept="image/*"
            onChange={handleThumbnailChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CourseForm;
