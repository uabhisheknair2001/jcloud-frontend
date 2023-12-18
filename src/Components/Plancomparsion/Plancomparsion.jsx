import React from 'react'
import ReactCompareImage from 'react-compare-image'
import LeftSideImg from '../../Assets/LeftSideImg.jpeg'
import RightSideImg from '../../Assets/RightSideImg.jpeg'
import './PlanComparsion.css'

function Plancomparison() {
  return (
    <div className="container-lg">
      <h2 className="text-center py-3">Plan Comparison </h2>
      <div className="plancom">
        <div style={{ width: 600, height: 400 }}>
          <ReactCompareImage
            leftImage={LeftSideImg}
            rightImage={RightSideImg}
            leftImageLabel="before"
            leftImageAlt="leftsideimg"
            rightImageAlt="rightsideimg"
            rightImageLabel="after"
          />
        </div>
      </div>
      ;
    </div>
  )
}

export default Plancomparison
