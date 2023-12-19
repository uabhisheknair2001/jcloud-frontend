// JobListingsPage.js
import React, { useState, useEffect } from "react";
import "./JobListingsPage.css";

const JobListingsPage = () => {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    // Fetch job listings from the server
    const fetchJobListings = async () => {
      try {
        const response = await fetch(
          "https://api.jcloudwork.com/get-job-listings"
        );
        if (response.ok) {
          const data = await response.json();
          setJobListings(data);
        } else {
          console.error("Error fetching job listings:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching job listings:", error.message);
      }
    };

    fetchJobListings();
  }, []);

  return (
    // <div className="job-listings-container">
    //   <h2 className="text-center">joblist</h2>
    //   {jobListings.map((job) => (
    //     <div key={job.id} className="job-listing-card">
    //       <h2>{job.jobTitle}</h2>
    //       <p>Company: {job.companyName}</p>
    //       <p>Location: {job.location}</p>
    //       <p>Employment Type: {job.employmentType}</p>
    //       <p>Salary Expected: {job.salary}</p>
    //       <p>Deadline: {formatDate(job.applicationDeadline)}</p>
    //       <p>Domain: {job.domain}</p>
    //       <p>Employer Email: {job.contactEmail}</p>
    //       <button>
    //         <a
    //           href={`mailto:admin@jcloudwork.com?subject=Application for ${job.jobTitle}`}
    //         >
    //           Apply Now
    //         </a>
    //       </button>
    //     </div>
    //   ))}
    // </div>
    <div className="job-listing">
      <div className="container">
        <h2 className="text-center">Joblist</h2>
        <div className="row">
          {jobListings.map((job) => {
            return (
              <div className="  col-lg-4 col-md-6 col-sm-6 col-12" key={job.id}>
                <div className="card  mb-4 ">
                  <div className="card-body">
                    <h3>{job.jobTitle}</h3>
                    <p>Company: {job.companyName}</p>
                    <p>Location: {job.location}</p>
                    <p>Employment Type: {job.employmentType}</p>
                    <p>Salary Expected: {job.salary}</p>
                    <p>Deadline: {formatDate(job.applicationDeadline)}</p>
                    <p>Domain: {job.domain}</p>
                    <p>Employer Email: {job.contactEmail}</p>
                    <button className="btn">
                      <a
                        href={`mailto:admin@jcloudwork.com?subject=Application for ${job.jobTitle}`}
                      >
                        Apply Now
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Helper function to format the date
const formatDate = (dateString) => {
  const options = { day: "numeric", month: "numeric", year: "2-digit" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", options);
};

export default JobListingsPage;
