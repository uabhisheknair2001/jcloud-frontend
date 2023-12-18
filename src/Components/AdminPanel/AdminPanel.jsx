// AdminPanel.jsx

import React, { useState } from "react";
import "./AdminPanel.css";
import { LuLogOut } from "react-icons/lu";
import { FaBlogger } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { MdReviews } from "react-icons/md";
import { SiCoursera } from "react-icons/si";
import JobListingForm from "../JobListingForm/JobListingForm";
import CertificateForm from "../CeritifcateForm/CertificateForm";
import BlogForm from "../BlogForm/BlogForm";
import DocumentForm from "../DocumentForm/DocumentForm";
import CourseForm from "../CourseForm/CourseForm";
import LibraryForm from "../LibraryForm/LibraryForm";

const AdminPanel = ({ handleLogout }) => {
  const [activeComponent, setActiveComponent] = useState(null);

  const openComponent = (component) => {
    console.log(`Opening component: ${component}`);
    setActiveComponent(component);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="admin-left-con">
          <div className="col-auto col-md-2 min-vh-100">
            <ul className="nav nav-pills flex-column pt-3">
              <li className="nav-item">
                <a onClick={() => openComponent("blog")} className="nav-link">
                  <FaBlogger size={28} /> <span className="ms-2">Blog</span>
                </a>
              </li>
              <li className="nav-item">
                <a onClick={() => openComponent("plan")} className="nav-link">
                  <IoIosDocument size={28} />
                  <span className="ms-2"> Document</span>
                </a>
              </li>
              <li className="nav-item">
                <a onClick={() => openComponent("course")} className="nav-link">
                  <SiCoursera size={28} /> <span className="ms-2"> Course</span>
                </a>
              </li>
              <li className="nav-item">
                <a onClick={() => openComponent("library")} className="nav-link">
                  <MdReviews size={28} />
                  <span className="ms-2"> Library</span>
                </a>
              </li>
              <li className="nav-item">
                <a onClick={() => openComponent("jobListing")} className="nav-link">
                  <FaBlogger size={28} /> <span className="ms-2">Job Listing</span>
                </a>
              </li>
              <li className="nav-item">
                <a onClick={() => openComponent("certificate")} className="nav-link">
                  <FaBlogger size={28} /> <span className="ms-2">Certificate</span>
                </a>
              </li>
            </ul>
            <div className="logout">
              <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                  <a onClick={handleLogout} className="nav-link">
                    <LuLogOut /> <span className="ms-2">Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-lg-8 col-sm-auto col-auto">
          <div className="admin-right-box">
            {activeComponent ? (
              activeComponent === "blog" ? (
                <BlogForm />
              ) : activeComponent === "plan" ? (
                <DocumentForm />
              ) : activeComponent === "course" ? (
                <CourseForm />
              ) : activeComponent === "library" ? (
                <LibraryForm />
              ) : activeComponent === "jobListing" ? (
                <JobListingForm />
              ) : activeComponent === "certificate" ? (
                <CertificateForm />
              ) : null
            ) : (
              <div className="welcome-message">
                Welcome to the Admin Console of JCloudWork!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
