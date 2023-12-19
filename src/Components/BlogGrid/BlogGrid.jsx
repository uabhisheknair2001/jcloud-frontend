import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./BlogGrid.css";

const BlogGrid = () => {
  const [blogs, setBlogs] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState(4);
  const [isViewMoreVisible, setViewMoreVisible] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.jcloudwork.com/api/blogs`)
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []);

  const handleViewMoreClick = () => {
    setVisibleBlogs(visibleBlogs + 4);
    if (visibleBlogs + 4 >= blogs.length) {
      setViewMoreVisible(false);
    }
  };

  return (
    <div className="container-fluid  blog">
      <h2 className="text-center">Recent Blogs</h2>
      <div className="container con-card">
        <div className="row  ">
          {blogs.slice(0, visibleBlogs).map((blog) => (
            <div
              className="con-card g-2 col-lg-3 col-md-6 col-sm-6 col-12 "
              key={blog.id}
            >
              <div className="card blog-card">
                <div className="card-body">
                  <img
                    src={`https://api.jcloudwork.com/${blog.image}`}
                    alt={blog.title}
                  />
                  <h5>{blog.title}</h5>
                  <Link to={`/blog/${blog.id}`} className="read-more-button">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <div className="row">
            <div className="view-more">
              <div className="view-more-btn col-lg-12 col-md-12 col-sm-12 col-12 ">
                {isViewMoreVisible && (
                  <button className="btn " onClick={handleViewMoreClick}>
                    View More
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;
