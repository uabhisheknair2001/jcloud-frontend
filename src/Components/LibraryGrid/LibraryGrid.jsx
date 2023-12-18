// FeaturesGrid.js
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './LibraryGrid.css'

function FeaturesGrid() {
  const [features, setFeatures] = useState([])

  useEffect(() => {
    // Fetch features from the server when the component mounts
    fetch('/api/get-features')
      .then((response) => response.json())
      .then((data) => setFeatures(data))
      .catch((error) => console.error('Error fetching features:', error))
  }, [])

  return (
    // <div className="features-grid">
    //   {features.map((feature) => (
    //     <Link key={feature.id} to={`/library/${feature.id}`} className="feature-card-link">
    //       <div className="feature-card">
    //         <img src={feature.image1} alt={feature.title} />
    //         <h3>{feature.title}</h3>
    //       </div>
    //     </Link>
    //   ))}
    // </div>
    <div className="features-grids">
      <div className="container">
        <h2 className="text-center">Library </h2>
        <div className="row">
          {features.map((feature) => {
            return (
              <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                <Link
                  key={feature.id}
                  to={`/library/${feature.id}`}
                  className="feature-card-link"
                >
                  <div className=" featurescard card my-4 rounded-3">
                    <div className="card-body">
                      <img src={feature.image1} alt={feature.title} />
                      <h3 className="">{feature.title}</h3>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FeaturesGrid
