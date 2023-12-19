import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "./DocumentList.css"; // Updated CSS file name
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Foooter/Footer";
import FilterComponent from "../ProductFilter/ProductFilter";
import Box from "./Box";

const ModifiedDocumentList = () => {
  const [documents, setDocuments] = useState([]);
  const [filteredDocuments, setFilteredDocuments] = useState([]);
  // const [showFilter, setShowFilter] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [advanceFilter, setAdvanceFilter] = useState({});
  // const [applyFilter, setApplyFilter] = useState(false);

  useEffect(() => {
    // Fetch documents initially
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredDocuments(documents);
  }, [documents]);

  useEffect(() => {
    const check =
      filteredData.length === 0
        ? Object.keys(advanceFilter).length === 0
          ? false
          : false
        : true;

    const tempDocument = check
      ? documents.filter((document) => {
          let propertyCheck = false;
          let plotAreaMatches = false;

          filteredData[0] &&
            (propertyCheck = Object.values(document).some((property) => {
              const value = property + "";

              if (Array.isArray(value)) {
                return value.some((item) => filteredData.includes(item));
              } else {
                return filteredData.includes(value.toLowerCase());
              }
            }));

          const plotArea = document.description;

          filteredData[0] &&
            (plotAreaMatches =
              (plotArea >= 0 &&
                plotArea <= 500 &&
                filteredData.includes("<500 sq.ft")) ||
              (plotArea >= 500 &&
                plotArea <= 749 &&
                filteredData.includes("500-749 sq.ft")) ||
              (plotArea >= 750 &&
                plotArea <= 999 &&
                filteredData.includes("750-999 sq.ft")) ||
              (plotArea >= 1000 &&
                plotArea <= 1249 &&
                filteredData.includes("1000-1249 sq.ft")) ||
              (plotArea >= 1250 &&
                plotArea <= 1499 &&
                filteredData.includes("1250-1499 sq.ft")) ||
              (plotArea >= 1500 &&
                plotArea <= 1999 &&
                filteredData.includes("1500-1999 sq.ft")) ||
              (plotArea >= 2000 &&
                plotArea <= 2499 &&
                filteredData.includes("2000-2499 sq.ft")) ||
              (plotArea >= 2500 &&
                plotArea <= 2999 &&
                filteredData.includes("2500-2999 sq.ft")) ||
              (plotArea >= 3000 &&
                plotArea <= 3999 &&
                filteredData.includes("3000-3999 sq.ft")) ||
              (plotArea >= 4000 &&
                plotArea <= 4999 &&
                filteredData.includes("4000-4999 sq.ft")) ||
              (plotArea >= 5000 &&
                plotArea <= 5999 &&
                filteredData.includes("5000-5999 sq.ft")) ||
              (plotArea > 5999 && filteredData.includes(">6000 sq.ft")) ||
              false);

          plotAreaMatches && console.log("Matched: ", document.plot_area);

          let advanceCheck = false;

          for (const filterKey in advanceFilter) {
            if (!advanceFilter[filterKey]) continue;

            const documentValue = String(document[filterKey]).toLowerCase();
            const filterValue = String(advanceFilter[filterKey]).toLowerCase();

            if (documentValue === filterValue) {
              advanceCheck = true;
              break;
            }
          }

          return propertyCheck || plotAreaMatches || advanceCheck;
        })
      : documents;

    console.log("Filter Data", filteredData);

    setFilteredDocuments(check ? tempDocument : documents);
  }, [filteredData, documents, advanceFilter]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.jcloudwork.com/api/documents");
      if (response.ok) {
        const data = await response.json();
        console.table(data);
        setDocuments(data);
      } else {
        console.error("Failed to fetch documents");
      }
    } catch (error) {
      console.error("Error fetching documents:", error);
    }
  };

  return (
    <div className="container-fluid py-5">
      <div className="row document_list  align-item-start">
        <div className="col-lg-3 col-md-3 col-sm-12 col-12 ">
          <div className="filter-com">
            <FilterComponent
              setData={setFilteredData}
              setAdvanceFilter={setAdvanceFilter}
            />
          </div>
        </div>
        <div className="col-lg-9 col-md-9 col-sm-12 col-12 ">
          {document.file_floor1 && (
            <div>
              <p>Floor 1 Plan:</p>
              <img src={`/${document.file_floor1}`} alt="Floor 1 Plan" />
            </div>
          )}
          <div className="documet-card">
            <div className="row ">
              {filteredDocuments.map((document, index) => (
                <div
                  key={index}
                  className=" col-lg-4 col-md-12 col-sm-12 col-12  "
                >
                  <Box projectDetails={document} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModifiedDocumentList;
