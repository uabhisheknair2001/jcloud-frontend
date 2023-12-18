import React from "react";
import "./ServiceGrid.css";

export const ServiceGrid = () => {
  return (
    <div className="box">
      <div className="services-grid">
        <div className="overlap">
          <p className="text-wrapper">HOME BUILDING SERVICES FOR YOU</p>
          <div className="group">
            <div className="overlap-group">
              <div className="div">2D Layout</div>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-group">
              <div className="construction">
                Construction
                <br />
                Advisory
              </div>
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="text-wrapper-2">Styles</div>
            </div>
          </div>
          <div className="group-2">
            <div className="ready-made-layout-wrapper">
              <div className="ready-made-layout">
                Ready made
                <br />
                2D Layout
              </div>
            </div>
          </div>
          <div className="group-3">
            <div className="overlap-group">
              <div className="vastu-services">
                Vastu
                <br />
                Services
              </div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="overlap-group">
              <div className="text-wrapper-3">Virtual Reality</div>
            </div>
          </div>
          <div className="group-4">
            <div className="overlap-group">
              <div className="text-wrapper-4">3D Elevation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ServiceGrid;