// FeatureDetail.js
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './LibraryDetails.css'

function FeatureDetail() {
  const { id } = useParams()
  const [feature, setFeature] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch the specific feature by ID from the server
    fetch(`/api/get-feature/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFeature(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching feature details:', error)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <div className="feature-detail-loading">Loading...</div>
  }

  if (!feature) {
    return <div className="feature-detail-not-found">Feature not found</div>
  }

  return (
    // <div className="feature-detail-container">
    //   <h2 className="feature-detail-title">{feature.title}</h2>
    //   <div className="feature-detail-images">
    //     {feature.images.map((image, index) => (
    //       <img
    //         key={index}
    //         src={image}
    //         alt={`${feature.title} Image ${index + 1}`}
    //         className="feature-detail-image"
    //       />
    //     ))}
    //   </div>
    //   <a
    //     href={feature.link}
    //     target="_blank"
    //     rel="noopener noreferrer"
    //     className="feature-detail-link"
    //   >
    //     Visit Website
    //   </a>
    // </div>
    <div className="feature-detail-con">
      <div className="container">
        <h2>Feature details </h2>
        <div className="row">
          <div className="col-12 feature-con">
            {feature.images.map((image, index) => {
              return (
                <div className="card">
                  <div className="card-header w-100">{feature.title}</div>
                  <img
                    key={index}
                    src={image}
                    alt={`${feature.title} Image ${index + 1}`}
                    className="feature-detail-image"
                  />
                  <div className="card-body">
                    <a
                      href={feature.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="feature-detail-link"
                    >
                      <button className="btn feature-btn">Download</button>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureDetail
