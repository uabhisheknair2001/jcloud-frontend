import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./DocumentForm.css";

function DocumentForm() {
  const [projectNumber, setProjectNumber] = useState("");
  const [plotArea, setPlotArea] = useState("");
  const [facing, setFacing] = useState("North");
  const [numFloors, setNumFloors] = useState("G");
  const [numMasterBedrooms, setNumMasterBedrooms] = useState("");
  const [kitchen, setKitchen] = useState("");
  const [store, setStore] = useState("");
  const [livingRoom, setLivingRoom] = useState("");
  const [dining, setDining] = useState("");
  const [guestRoom, setGuestRoom] = useState("");
  const [staircase, setStaircase] = useState("Internal");
  const [parking, setParking] = useState("Yes");
  const [garden, setGarden] = useState("Yes");
  const [shops, setShops] = useState("");
  const [file2D, setFile2D] = useState(null);
  const [numAdditionalBedrooms, setNumAdditionalBedrooms] = useState("");
  const [numCommonToilets, setNumCommonToilets] = useState("");
  const [numSeparateToiletBathroom, setNumSeparateToiletBathroom] =
    useState("");
  const [numWashAreas, setNumWashAreas] = useState("");
  const [numPoojaRooms, setNumPoojaRooms] = useState("");
  const [numUtilityRooms, setNumUtilityRooms] = useState("");
  const [gardenSize, setGardenSize] = useState("");
  const [numShops, setNumShops] = useState("");
  const [parkingSpaces, setParkingSpaces] = useState("");
  const [carParking, setCarParking] = useState("");
  const [bikeParking, setBikeParking] = useState("");
  const [basement, setBasement] = useState("");

  // Add state variables for Floor 1, Floor 2, Floor 3, and Floor 4 files
  const [fileFloor1, setFileFloor1] = useState(null);
  const [fileFloor2, setFileFloor2] = useState(null);
  const [fileFloor3, setFileFloor3] = useState(null);
  const [fileFloor4, setFileFloor4] = useState(null);

  const handleFile2DChange = (e) => {
    setFile2D(e.target.files);
  };

  // Add functions for handling Floor 1, Floor 2, Floor 3, and Floor 4 File Uploads
  const handleFileFloor1Change = (e) => {
    setFileFloor1(e.target.files);
  };

  const handleFileFloor2Change = (e) => {
    setFileFloor2(e.target.files);
  };

  const handleFileFloor3Change = (e) => {
    setFileFloor3(e.target.files);
  };

  const handleFileFloor4Change = (e) => {
    setFileFloor4(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", projectNumber);
    formData.append("description", plotArea);
    formData.append("facing", facing);
    formData.append("num_floors", numFloors);
    formData.append("num_master_bedrooms", numMasterBedrooms);
    formData.append("kitchen", kitchen);
    formData.append("store", store);
    formData.append("living_room", livingRoom);
    formData.append("dining", dining);
    formData.append("guest_room", guestRoom);
    formData.append("staircase", staircase);
    formData.append("parking", parking);
    formData.append("garden", garden);
    formData.append("shops", shops);
    formData.append("num_additional_bedrooms", numAdditionalBedrooms);
    formData.append("num_common_toilets", numCommonToilets);
    formData.append("num_separate_toilet_bathroom", numSeparateToiletBathroom);
    formData.append("num_wash_areas", numWashAreas);
    formData.append("num_pooja_rooms", numPoojaRooms);
    formData.append("num_utility_rooms", numUtilityRooms);
    formData.append("garden_size", gardenSize);
    formData.append("num_shops", numShops);
    formData.append("parking_spaces", parkingSpaces);
    formData.append("num_car_parking_spaces", carParking);
    formData.append("num_bike_parking_spaces", bikeParking);
    formData.append("basement", basement); // Include basement in formData

    if (file2D && file2D.length > 0) {
      for (let i = 0; i < file2D.length; i++) {
        formData.append("file_2d", file2D[i], file2D[i].name);
      }
    }

    // Append Floor 1 File to formData if files are selected
    if (fileFloor1 && fileFloor1.length > 0) {
      for (let i = 0; i < fileFloor1.length; i++) {
        formData.append("file_floor1", fileFloor1[i], fileFloor1[i].name);
      }
    }

    // Append Floor 2 File to formData if files are selected
    if (fileFloor2 && fileFloor2.length > 0) {
      for (let i = 0; i < fileFloor2.length; i++) {
        formData.append("file_floor2", fileFloor2[i], fileFloor2[i].name);
      }
    }

    // Append Floor 3 File to formData if files are selected
    if (fileFloor3 && fileFloor3.length > 0) {
      for (let i = 0; i < fileFloor3.length; i++) {
        formData.append("file_floor3", fileFloor3[i], fileFloor3[i].name);
      }
    }

    // Append Floor 4 File to formData if files are selected
    if (fileFloor4 && fileFloor4.length > 0) {
      for (let i = 0; i < fileFloor4.length; i++) {
        formData.append("file_floor4", fileFloor4[i], fileFloor4[i].name);
      }
    }

    try {
      const response = await fetch(
        `https://api.jcloudwork.com/api/upload-document`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        toast.success("Document uploaded successfully", { autoClose: 3000 });
        // Resetting form fields
        setProjectNumber("");
        setPlotArea("");
        setFacing("North");
        setNumFloors("G");
        setNumMasterBedrooms("");
        setKitchen("");
        setStore("");
        setLivingRoom("");
        setDining("");
        setGuestRoom("");
        setStaircase("Internal");
        setParking("Yes");
        setGarden("Yes");
        setShops("");
        setFile2D(null);
        setNumAdditionalBedrooms("");
        setNumCommonToilets("");
        setNumSeparateToiletBathroom("");
        setNumWashAreas("");
        setNumPoojaRooms("");
        setNumUtilityRooms("");
        setGardenSize("");
        setNumShops("");
        setParkingSpaces("");
        setCarParking("");
        setBikeParking("");
        setBasement("");
        setFileFloor1(null);
        setFileFloor2(null);
        setFileFloor3(null);
        setFileFloor4(null);
      } else {
        console.error("Document upload failed with status:", response.status);
        toast.error("Document upload failed", { autoClose: 3000 });
      }
    } catch (error) {
      console.error("Error uploading document:", error);
      toast.error("Error uploading document", { autoClose: 3000 });
    }
  };

  return (
    <div className="document-form ">
      <div className="form-title">Document Upload</div>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Project Number:</label>
          <input
            type="number"
            value={projectNumber}
            onChange={(e) => setProjectNumber(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Plot Area:</label>
          <input
            type="number"
            value={plotArea}
            onChange={(e) => setPlotArea(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Facing:</label>
          <div className="custom-select">
            <select value={facing} onChange={(e) => setFacing(e.target.value)}>
              <option value="North">North</option>
              <option value="South">South</option>
              <option value="East">East</option>
              <option value="West">West</option>
              <option value="North East">North East</option>
              <option value="South East">South East</option>
              <option value="North West">North West</option>
              <option value="South West">South West</option>
            </select>
          </div>
        </div>
        <div className="form-field">
          <label>Number of Floors:</label>
          <select
            value={numFloors}
            onChange={(e) => setNumFloors(e.target.value)}
          >
            <option value="G">G</option>
            <option value="G+1">G+1</option>
            <option value="G+2">G+2</option>
            <option value="G+3">G+3</option>
            <option value="G+4">G+4</option>
          </select>
        </div>
        <div className="form-field">
          <label>Master Bedrooms:</label>
          <input
            type="number"
            value={numMasterBedrooms}
            onChange={(e) => setNumMasterBedrooms(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Additional Bedrooms:</label>
          <input
            type="number"
            value={numAdditionalBedrooms}
            onChange={(e) => setNumAdditionalBedrooms(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Common Toilets:</label>
          <input
            type="number"
            value={numCommonToilets}
            onChange={(e) => setNumCommonToilets(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Separate Toilet & Bathroom:</label>
          <input
            type="number"
            value={numSeparateToiletBathroom}
            onChange={(e) => setNumSeparateToiletBathroom(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Kitchen:</label>
          <input
            type="number"
            value={kitchen}
            onChange={(e) => setKitchen(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Wash Areas:</label>
          <input
            type="number"
            value={numWashAreas}
            onChange={(e) => setNumWashAreas(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Store:</label>
          <input
            type="number"
            value={store}
            onChange={(e) => setStore(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Living Room:</label>
          <input
            type="number"
            value={livingRoom}
            onChange={(e) => setLivingRoom(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Dining:</label>
          <input
            type="number"
            value={dining}
            onChange={(e) => setDining(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Guest Room:</label>
          <input
            type="number"
            value={guestRoom}
            onChange={(e) => setGuestRoom(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Pooja Rooms:</label>
          <input
            type="number"
            value={numPoojaRooms}
            onChange={(e) => setNumPoojaRooms(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Utility Rooms:</label>
          <input
            type="number"
            value={numUtilityRooms}
            onChange={(e) => setNumUtilityRooms(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Staircase:</label>
          <div className="custom-select">
            <select
              value={staircase}
              onChange={(e) => setStaircase(e.target.value)}
            >
              <option value="Internal">Internal</option>
              <option value="External">External</option>
            </select>
          </div>
        </div>
        <div className="form-field">
          <label>Parking:</label>
          <select value={parking} onChange={(e) => setParking(e.target.value)}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        {/* Basement field */}
        <div className="form-field">
          <label>Basement:</label>
          <select
            value={basement}
            onChange={(e) => setBasement(e.target.value)}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        {parking === "Yes" && (
          <>
            <div className="form-field">
              <label>Car Parking Spaces:</label>
              <input
                type="text"
                value={carParking}
                onChange={(e) => setCarParking(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label>Bike Parking Spaces:</label>
              <input
                type="text"
                value={bikeParking}
                onChange={(e) => setBikeParking(e.target.value)}
              />
            </div>
          </>
        )}
        <div className="form-field">
          <label>Garden Size:</label>
          <select
            value={gardenSize}
            onChange={(e) => setGardenSize(e.target.value)}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        {/* Updated Shops field to text input */}
        <div className="form-field">
          <label>Shops:</label>
          <input
            type="number"
            value={shops}
            onChange={(e) => setShops(e.target.value)}
          />
        </div>
        {/* Updated File Upload (2D) field to allow multiple files */}
        {(numFloors === "G" ||
          numFloors === "G+1" ||
          numFloors === "G+2" ||
          numFloors === "G+3" ||
          numFloors === "G+4") && (
          <div className="form-field">
            <label>File Upload (2D):</label>
            <input type="file" multiple onChange={handleFile2DChange} />
          </div>
        )}
        {/* File Upload (Floor 1) field */}
        {(numFloors === "G+1" ||
          numFloors === "G+2" ||
          numFloors === "G+3" ||
          numFloors === "G+4") && (
          <div className="form-field">
            <label>Floor 1 File Upload:</label>
            <input type="file" multiple onChange={handleFileFloor1Change} />
          </div>
        )}
        {/* File Upload (Floor 2) field */}
        {(numFloors === "G+2" ||
          numFloors === "G+3" ||
          numFloors === "G+4") && (
          <div className="form-field">
            <label>Floor 2 File Upload:</label>
            <input type="file" multiple onChange={handleFileFloor2Change} />
          </div>
        )}
        {/* File Upload (Floor 3) field */}
        {(numFloors === "G+3" || numFloors === "G+4") && (
          <div className="form-field">
            <label>Floor 3 File Upload:</label>
            <input type="file" multiple onChange={handleFileFloor3Change} />
          </div>
        )}
        {/* File Upload (Floor 4) field */}
        {numFloors === "G+4" && (
          <div className="form-field">
            <label>Floor 4 File Upload:</label>
            <input type="file" multiple onChange={handleFileFloor4Change} />
          </div>
        )}
        <div className="form-button">
          <button type="submit">Submit</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default DocumentForm;
