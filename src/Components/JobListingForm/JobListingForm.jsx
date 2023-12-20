// JobListingForm.js
import React, { useState } from "react";
import "./JobListingForm.css";

const JobListingForm = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [location, setLocation] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [domain, setDomain] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const [applicationDeadline, setApplicationDeadline] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [applicationInstructions, setApplicationInstructions] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://api.jcloudwork.com/api/submit-job-listing",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            jobTitle,
            companyName,
            jobDescription,
            requirements,
            location,
            employmentType,
            domain,
            position,
            salary,
            applicationDeadline,
            contactEmail,
            contactPhone,
            applicationInstructions,
          }),
        }
      );

      if (response.ok) {
        console.log("Job Listing Form Submitted successfully");
        // Reset form fields or perform any other actions on successful submission
      } else {
        console.error(
          "Error submitting job listing form:",
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error submitting job listing form:", error.message);
    }
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <label>
    //     Job Title:
    //     <input
    //       type="text"
    //       value={jobTitle}
    //       onChange={(e) => setJobTitle(e.target.value)}
    //       required
    //     />
    //   </label>

    //   <label>
    //     Company Name:
    //     <input
    //       type="text"
    //       value={companyName}
    //       onChange={(e) => setCompanyName(e.target.value)}
    //       required
    //     />
    //   </label>

    //   <label>
    //     Job Description:
    //     <textarea
    //       value={jobDescription}
    //       onChange={(e) => setJobDescription(e.target.value)}
    //       required
    //     />
    //   </label>

    //   <label>
    //     Requirements:
    //     <textarea
    //       value={requirements}
    //       onChange={(e) => setRequirements(e.target.value)}
    //       required
    //     />
    //   </label>

    //   <label>
    //     Location:
    //     <input
    //       type="text"
    //       value={location}
    //       onChange={(e) => setLocation(e.target.value)}
    //       required
    //     />
    //   </label>

    //   <label>
    //     Employment Type:
    //     <input
    //       type="text"
    //       value={employmentType}
    //       onChange={(e) => setEmploymentType(e.target.value)}
    //       required
    //     />
    //   </label>

    //   <label>
    //     Domain:
    //     <input
    //       type="text"
    //       value={domain}
    //       onChange={(e) => setDomain(e.target.value)}
    //       required
    //     />
    //   </label>

    //   <label>
    //     Position:
    //     <input
    //       type="text"
    //       value={position}
    //       onChange={(e) => setPosition(e.target.value)}
    //       required
    //     />
    //   </label>

    //   <label>
    //     Salary:
    //     <input
    //       type="text"
    //       value={salary}
    //       onChange={(e) => setSalary(e.target.value)}
    //       required
    //     />
    //   </label>

    //   <label>
    //     Application Deadline:
    //     <input
    //       type="date"
    //       value={applicationDeadline}
    //       onChange={(e) => setApplicationDeadline(e.target.value)}
    //       required
    //     />
    //   </label>

    //   <label>
    //     Contact Email:
    //     <input
    //       type="email"
    //       value={contactEmail}
    //       onChange={(e) => setContactEmail(e.target.value)}
    //       required
    //     />
    //   </label>

    //   <label>
    //     Contact Phone:
    //     <input
    //       type="tel"
    //       value={contactPhone}
    //       onChange={(e) => setContactPhone(e.target.value)}
    //       required
    //     />
    //   </label>

    //   <label>
    //     Application Instructions:
    //     <textarea
    //       value={applicationInstructions}
    //       onChange={(e) => setApplicationInstructions(e.target.value)}
    //       required
    //     />
    //   </label>

    //   <button type="submit">Submit</button>
    // </form>
    <div className="jobListing-form">
      <h2 className="text-center">JobListing Form</h2>
      <div className="jobListing-con">
        <form onSubmit={handleSubmit}>
          <label>
            Job Title:
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
          </label>

          <label>
            Company Name:
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </label>

          <label>
            Job Description:
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              required
            />
          </label>

          <label>
            Requirements:
            <textarea
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              required
            />
          </label>

          <label>
            Location:
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </label>

          <label>
            Employment Type:
            <input
              type="text"
              value={employmentType}
              onChange={(e) => setEmploymentType(e.target.value)}
              required
            />
          </label>

          <label>
            Domain:
            <input
              type="text"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              required
            />
          </label>

          <label>
            Position:
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            />
          </label>

          <label>
            Salary:
            <input
              type="text"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              required
            />
          </label>

          <label>
            Application Deadline:
            <input
              type="date"
              value={applicationDeadline}
              onChange={(e) => setApplicationDeadline(e.target.value)}
              required
            />
          </label>

          <label>
            Contact Email:
            <input
              type="email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              required
            />
          </label>

          <label>
            Contact Phone:
            <input
              type="tel"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
              required
            />
          </label>

          <label>
            Application Instructions:
            <textarea
              value={applicationInstructions}
              onChange={(e) => setApplicationInstructions(e.target.value)}
              required
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default JobListingForm;
