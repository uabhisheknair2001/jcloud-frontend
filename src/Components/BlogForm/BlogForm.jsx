import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./BlogForm.css";

function BlogForm() {
  const [title, setTitle] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [content, setContent] = useState("");

  const handleBlogSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("image", imageFile);
      formData.append("content", content);

      const response = await axios.post(
        `/api/create-blog`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        toast.success("Blog created successfully");
      } else {
        console.error("Blog creation failed");
        toast.error("Blog creation failed");
      }
    } catch (error) {
      console.error("Blog creation error:", error);
      toast.error("Blog creation error");
    }
  };

  return (
    <div className="blog-form">
      <h2>Create a New Blog</h2>
      <div className="form-container">
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Featured Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </div>
      <button onClick={handleBlogSubmit}>Submit</button>
      <ToastContainer />
    </div>
  );
}

export default BlogForm;
