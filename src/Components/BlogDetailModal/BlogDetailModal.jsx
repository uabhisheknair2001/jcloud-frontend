// BlogDetailModal.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./BlogDetailModal.css";

const BlogDetailModal = () => {
  const [readmore, setReadmore] = useState(false);
  const [blogUrl, setBlogUrl] = useState("");
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.jcloudwork.com/api/blogs/${id}`)
      .then((response) => {
        setBlog(response.data);

        const regex = /uploads\\([a-fA-F0-9]+)$/;
        const match = response.data.image_url.match(regex);

        setBlogUrl(match[1]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="blog-detail">
      <div className="container">
        <div className="blog-modal">
          <div className="row ">
            {loading && <div className="loading-message">Loading...</div>}
            {!blog && <div className="not-found-message">Blog not found</div>}
            <div className="col-12 ">
              <div className="card rounded-4">
                <div className="card-body">
                  {blog && (
                    <div className="blog-detail-img">
                      <h1 className="blog-title">{blog.title}</h1>
                      <img
                        src={`https://api.jcloudwork.com//uploads\\${blogUrl}`}
                        alt={blog.title}
                        className="blog-image"
                      />
                      <p className="blog-content-text">
                        {readmore
                          ? blog.content
                          : `${blog.content.slice(0, 500)}`}
                        <span
                          className="read-content"
                          onClick={() => setReadmore(!readmore)}
                        >
                          {" "}
                          {readmore ? "Read less" : "Read more..."}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailModal;
