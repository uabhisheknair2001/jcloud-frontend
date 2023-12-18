import React from 'react'
import { IoMdCheckmark } from 'react-icons/io'
import './Services.css'

const Services = () => {
  return (
    <div className="services">
      <div className="container-lg  services-con">
        <h2>Services</h2>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className=" card ">
              <div className="card-header">
                <h3>Design</h3>
              </div>
              <div className="card-body services-content">
                <p>
                  <IoMdCheckmark size={25} color="#05757d" />
                  <span>2d planning</span>
                </p>
                <p>
                  <IoMdCheckmark size={25} color="#05757d" />
                  <span>2d Detailed Measurement Drawing</span>
                </p>
                <p>
                  <IoMdCheckmark size={25} color="#05757d" />
                  <span>Elevation Drawings</span>
                </p>
                <p>
                  <IoMdCheckmark size={25} color="#05757d" />
                  <span>Section Drawings</span>
                </p>
                <p>
                  <IoMdCheckmark size={25} color="#05757d" />
                  <span>3d Modeling</span>
                </p>
                <p>
                  <IoMdCheckmark size={25} color="#05757d" />
                  <span>3d Color Option</span>
                </p>
                <p>
                  <IoMdCheckmark size={25} color="#05757d" />
                  <span>3d Night View </span>
                </p>
                <p>
                  <IoMdCheckmark size={25} color="#05757d" />
                  <span>Walkthroughts</span>
                </p>
                <p>
                  <IoMdCheckmark size={25} color="#05757d" />
                  <span>Virtual Reality</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className=" card">
              <div className="card-header">
                <h3>Training</h3>
              </div>
              <div className="card-body services-content">
                <p>
                  <IoMdCheckmark size={25} color="#05757d" />
                  <span>Autocad</span>
                </p>
                <p>
                  <IoMdCheckmark size={25} color="#05757d" />
                  <span>Sketthup</span>
                </p>
                <p>
                  <IoMdCheckmark size={25} color="#05757d" />
                  <span>3ds Max</span>
                </p>
                <p>
                  <IoMdCheckmark size={25} color="#05757d" />
                  <span>Revit Architecture</span>
                </p>
                <p>
                  <IoMdCheckmark size={25} color="#05757d" />
                  <span>Revit MEP</span>
                </p>
                <p>
                  <IoMdCheckmark size={25} color="#05757d" />
                  <span>Revit Structure</span>
                </p>
                <p>
                  <IoMdCheckmark size={25} color="#05757d" />
                  <span>Rhino</span>
                </p>
                <p>
                  <IoMdCheckmark size={25} color="#05757d" />
                  <span>Lumion</span>
                </p>
                <p>
                  <IoMdCheckmark size={25} color="#05757d" />
                  <span>ShaprSpark</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className=" card">
              <div className="card-header">
                <h3>IT</h3>
              </div>
              <div className="card-body services-content">
                <p>
                  <IoMdCheckmark size={25} color="#05757d" />
                  <span>Web App development</span>
                </p>
                <p>
                  <IoMdCheckmark size={25} color="#05757d" />
                  <span>AI Chatbot Development</span>
                </p>
                <p>
                  <IoMdCheckmark size={25} color="#05757d" />
                  <span>Application development</span>
                </p>
                <p>
                  <IoMdCheckmark size={25} color="#05757d" />
                  <span>API Development </span>
                </p>
                <p>
                  <IoMdCheckmark size={25} color="#05757d" />
                  <span>Product Development</span>
                </p>
                <p>
                  <IoMdCheckmark size={25} color="#05757d" />
                  <span>Product Management</span>
                </p>
                <p>
                  <IoMdCheckmark size={25} color="#05757d" />
                  <span>Database Management</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
