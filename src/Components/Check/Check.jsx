import React from 'react'
import { Link } from 'react-router-dom'
import './Check.css'

const Check = () => {
  return (
    <>
      <div className="check-con my-4">
        <div className="container-md ">
          <h2 className="text-center">Home Building Services For You</h2>
          <div className="check-box">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6  col-12  check-mobile ">
                <div className="check-carder">
                  <Link to="/category/2d-layout">
                    <p>2D Layout</p>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 check-mobile">
                <div className="check-carder">
                  <Link to="/category/3d-elevation">
                    <p>3D Elevation</p>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6  col-sm-6 col-12  check-mobile ">
                <div className="check-carder">
                  <Link to="/category/virtual-reality">
                    <p>Virtual Reality</p>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12 check-mobile ">
                <div className="check-carder">
                  <Link to="/category/vastu-services">
                    <p>Vastu Services</p>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12  check-mobile ">
                <div className="check-carder">
                  <Link to="/category/readymade-2d-layout">
                    <p>Readymade 2D Layout</p>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12  check-mobile ">
                <div className="check-carder">
                  <Link to="/category/construction-advisory">
                    <p>Construction Advisory</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Check
