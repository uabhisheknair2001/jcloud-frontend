// BlogsPage.js
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom' // Import Link from react-router-dom
import './BlogsPage.css'

function BlogsPage() {
  const [blogs, setBlogs] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // Fetch blogs from the server
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`/api/blogs`)
        setBlogs(response.data)
      } catch (error) {
        console.error('Error fetching blogs:', error)
      }
    }

    fetchBlogs()
  }, [])

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/blogs/search?search=${searchTerm}`)
      console.log('Blogs searched:', response.data)
      setBlogs(response.data)
    } catch (error) {
      console.error('Error searching blogs:', error)
    }
  }

  const handleReset = async () => {
    // Fetch all blogs again
    try {
      const response = await axios.get(`/api/blogs`)
      setBlogs(response.data)
      // Clear the search term
      setSearchTerm('')
    } catch (error) {
      console.error('Error fetching blogs:', error)
    }
  }

  console.log(blogs)

  return (
    // <div>
    //   <h2>Blogs</h2>
    //   <div>
    //     <input
    //       type="text"
    //       placeholder="Search Blogs"
    //       value={searchTerm}
    //       onChange={(e) => setSearchTerm(e.target.value)}
    //     />
    //     <button onClick={handleSearch}>Search</button>
    //     <button onClick={handleReset}>Reset</button>
    //   </div>
    //   <div>
    //     {/* Use Link to create links to individual blog pages */}
    //     {blogs.map((blog) => (
    //       <Link key={blog.id} to={`/blog/${blog.id}`}>
    //         <div>
    //           <h3>{blog.title}</h3>
    //           {blog.image && <img src={blog.image} alt={blog.title} />}
    //         </div>
    //       </Link>
    //     ))}
    //   </div>
    // </div>
    <div className="blog-page">
      <div className="container-md">
        <div className="row">
          <div className="col-12 ">
            <h2>Blogs</h2>
            <div className="blog-serch">
              <input
                type="text"
                placeholder="Search Blogs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className=" btn" onClick={handleSearch}>
                Search
              </button>
              <button className=" btn" onClick={handleReset}>
                Reset
              </button>
            </div>
          </div>
        </div>
        <div className="blog-page-card">
          <div className="row">
            {blogs.map((blog, id) => (
              <div key={id} className="col-lg-3 col-md-6 col-sm-6 col-12">
                <Link key={blog.id} to={`/blog/${blog.id}`}>
                  <div className="card">
                    <div className="card-header">
                      <h3>{blog.title}</h3>
                    </div>

                    {blog.image && (
                      <img src={`/${blog.image}`} alt={blog.title} />
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogsPage
