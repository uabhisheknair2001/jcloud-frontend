import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CertificateForm.css";

const CertificateForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    studentCode: "",
    domain: "",
    specializedIn: [],
    certificateTitle: "",
    creditScore: "",
    year: 2023,
    month: 1,
  });

  const [isActive, setIsActive] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    const updatedSpecializedIn = [...formData.specializedIn];

    if (updatedSpecializedIn.includes(value)) {
      updatedSpecializedIn.splice(updatedSpecializedIn.indexOf(value), 1);
    } else {
      updatedSpecializedIn.push(value);
    }

    setFormData({ ...formData, specializedIn: updatedSpecializedIn });
  };

  const handleDropdownToggle = () => {
    setIsActive(!isActive);
  };

  const handleDropdownSelect = (value) => {
    setFormData({ ...formData, domain: value });
    setIsActive(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    for (const key in formData) {
      if (!formData[key]) {
        toast.error(`Please fill in all fields`);
        return;
      }
    }

    try {
      const response = await fetch(
        "https://api.jcloudwork.com/api/submit-certificate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      console.log("Response Status:", response.status);

      if (response.status === 200) {
        const result = await response.json();
        console.log("Server Response:", result);

        if (result.success) {
          console.log("Form submitted successfully");
          toast.success("Form submitted successfully");
        } else {
          console.error("Error submitting form:", result.error);
          toast.error(`Error: ${result.error}`);
        }
      } else {
        console.error("Unexpected response status:", response.status);
        toast.error("An unexpected error occurred");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An unexpected error occurred");
    }
  };

  const renderYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const yearOptions = [];
    for (let year = 2000; year <= 2035; year++) {
      yearOptions.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }
    return yearOptions;
  };

  return (
    <div>
      <ToastContainer />
      <form className="form-container" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Student Code:
          <input
            type="text"
            name="studentCode"
            value={formData.studentCode}
            onChange={handleInputChange}
          />
        </label>

        <div className="form-field">
          <label>
            Domain:
            <div className="select-container">
              <div className="select-button" onClick={handleDropdownToggle}>
                {formData.domain}
                <div className={`select-options ${isActive ? "active" : ""}`}>
                  {[
                    "Civil/Architecture/Interior",
                    "Mechanical",
                    "Electrical",
                    "IT",
                  ].map((domain) => (
                    <div
                      key={domain}
                      className="select-option"
                      onClick={() => handleDropdownSelect(domain)}
                    >
                      {domain}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </label>
        </div>

        <label>
          Specialized In:
          <select
            name="specializedIn"
            multiple
            value={formData.specializedIn}
            onChange={handleCheckboxChange}
          >
            {[
              "2D Drafting - Autocad",
              "3D Modeling - Sketchup",
              "Rendering - Lumion",
              "Virtual Reality - ShapeSpark",
              "BIM - Revit",
              "MEP - Revit",
              "Structure Design - Revit",
              "Product Design - Solidworks",
              "Furniture Design - Rhino",
              "Visualization - Photoshop",
            ].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label>
          Title of Certificate:
          <input
            type="text"
            name="certificateTitle"
            value={formData.certificateTitle}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Credit Score:
          <input
            type="number"
            name="creditScore"
            value={formData.creditScore}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Year:
          <select
            name="year"
            value={formData.year}
            onChange={handleInputChange}
          >
            {renderYearOptions()}
          </select>
        </label>

        <label>
          Month:
          <select
            name="month"
            value={formData.month}
            onChange={handleInputChange}
          >
            {[...Array(12).keys()].map((month) => (
              <option key={month + 1} value={month + 1}>
                {new Date(2000, month, 1).toLocaleString("en-US", {
                  month: "long",
                })}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CertificateForm;
