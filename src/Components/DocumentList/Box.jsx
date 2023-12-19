// Box.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import defaultImage from "../../Assets/image.jpg";
import { BsFillPrinterFill } from "react-icons/bs";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import "./Box.css";

const Box = ({ projectDetails }) => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState(null);

  // Initialize the navigate hook
  const navigate = useNavigate();

  const openImageModal = (imagePath) => {
    console.log("Image Path: ", imagePath);
    setEnlargedImage(imagePath);
    setShowImageModal(true);
  };

  const closeImageModal = () => {
    setEnlargedImage(null);
    setShowImageModal(false);
  };

  const handlePrint = () => {
    window.print();
  };

  const openDocumentDetails = () => {
    const documentDetailsLink = `/documents/${projectDetails.id}`;
    // Use the navigate hook to programmatically navigate
    navigate(documentDetailsLink);
  };

  console.log(projectDetails.file_2d);

  return (
    <div className="Project_card">
      <div className="card rounded-4">
        <img
          className="object-cover object-center w-full h-60  cursor-pointer"
          alt={projectDetails.file_2d || defaultImage}
          src={
            `https://api.jcloudwork.com/${projectDetails.file_2d}` ||
            defaultImage
          }
          onClick={() => openImageModal(projectDetails.file_2d || defaultImage)}
        />
        <div className="card-body">
          <h2 className="projectdetail_h2">Design Details</h2>
          <div className="projectdetails_card">
            <h6> Project Id: {projectDetails.name}</h6>
            <h6> Plot Areasgit : {projectDetails.description}</h6>
            <h6> Facing: {projectDetails.facing}</h6>
            <h6> No of Floors: {projectDetails.num_floors}</h6>
          </div>

          <div className="projectdetails_icon ">
            <HiOutlineMagnifyingGlass
              className="icon-search-normal"
              color=" #05757d"
              onClick={() => openImageModal(projectDetails.file_path)}
            />

            <BsFillPrinterFill
              className="icon-printer"
              color=" #05757d"
              onClick={handlePrint}
            />
            <IoEyeOutline
              color=" #05757d"
              className="icon-eye"
              onClick={openDocumentDetails}
            />
          </div>
        </div>

        {/* image show model */}
        {showImageModal && (
          <div
            className=" image-modal fixed inset-0 z-50 overflow-auto bg-opacity-50 flex items-center justify-center "
            onClick={closeImageModal}
          >
            <div className=" image-modal-box relative p-6 bg-white w-full max-w-screen-md mx-auto rounded-lg">
              <span
                className="absolute top-1 right-2 text-xl text-black cursor-pointer"
                onClick={closeImageModal}
              >
                ✖
              </span>
              <img
                src={enlargedImage}
                alt="Enlarged"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Box;
