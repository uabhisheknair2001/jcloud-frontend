import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './DocumentDetail.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import './Testmonial.css'
import {
  Navigation,
  Pagination,
  EffectFade,
  Mousewheel,
  Keyboard,
  Autoplay,
} from 'swiper/modules'

// import Slider from 'react-slick'

// arrow

const DocumentDetails = () => {
  const { id } = useParams()
  const [document, setDocument] = useState()
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchDocumentDetails = async () => {
      try {
        const response = await fetch(`/api/documents/${id}`)
        const data = await response.json()

        if (response.ok) {
          setDocument(data)
        } else {
          console.error('Error fetching document details:', data)
          setError('Document not found')
        }
      } catch (error) {
        console.error('Error fetching document details:', error)
        setError('Internal Server Error')
      }
    }

    fetchDocumentDetails()
  }, [id])

  if (!document) {
    return <div>Loading...</div>
  }

  return (
    <div className="document-details-modal">
      <div className="container-fluid">
        <h2>
          {document.name} : {document.num_floors}
        </h2>

        <div className=" row">
          <div className=" col-lg-8 col-md-8 col-sm-12 col-12">
            <div className=" document_slider">
              <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[
                  Mousewheel,
                  Keyboard,
                  EffectFade,
                  Navigation,
                  Pagination,
                  Autoplay,
                ]}
                className="mySwiper"
              >
                <SwiperSlide>
                  {document.file_floor1 && (
                    <>
                      <img
                        src={`/${document.file_floor1}`}
                        alt="Floor 1 Plan"
                      />
                      {/* <div className="text-center">
                        <p>Floor 1 Plan:</p>
                      </div> */}
                    </>
                  )}
                </SwiperSlide>
                <SwiperSlide>
                  {document.file_floor2 && (
                    <>
                      <img
                        src={`/${document.file_floor2}`}
                        alt="Floor 2 Plan"
                      />
                      {/* <div className="text-center">
                        <p>Floor 1 Plan:</p>
                      </div> */}
                    </>
                  )}
                </SwiperSlide>

                <SwiperSlide>
                  {document.file_floor3 && (
                    <>
                      <img
                        src={`/${document.file_floor3}`}
                        alt="Floor 3 Plan"
                      />
                      {/* <div className="text-center">
                        <p>Floor 3 Plan:</p>
                      </div> */}
                    </>
                  )}
                </SwiperSlide>
                <SwiperSlide>
                  {document.file_floor4 && (
                    <>
                      <img
                        src={`/${document.file_floor4}`}
                        alt="Floor 4 Plan"
                      />
                      {/* <div className="text-center">
                        <p>Floor 4 Plan:</p>
                      </div> */}
                    </>
                  )}
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="document_table col-lg-3 col-md-3 col-sm-12 col-12">
            <table className="table table-bordered  p-3">
              <tbody>
                <tr className="text-center">
                  <th colSpan={2}>Project Details</th>
                </tr>
                <tr>
                  <td>Project ID:</td>
                  <td>{document.name}</td>
                </tr>
                <tr>
                  <td>Plot Area:</td>
                  <td>{document.description}</td>
                </tr>
                <tr>
                  <td>Facing:</td>
                  <td>{document.facing}</td>
                </tr>
                <tr>
                  <td>Number of Floors:</td>
                  <td>{document.num_floors}</td>
                </tr>
                <tr>
                  <td>Number of Master Bedrooms:</td>
                  <td>{document.num_master_bedrooms}</td>
                </tr>
                <tr>
                  <td>Kitchen:</td>
                  <td>{document.kitchen}</td>
                </tr>
                <tr>
                  <td>Store:</td>
                  <td>{document.store}</td>
                </tr>
                <tr>
                  <td>Living Room:</td>
                  <td>{document.living_room}</td>
                </tr>
                <tr>
                  <td>Dining:</td>
                  <td>{document.dining}</td>
                </tr>
                <tr>
                  <td>Guest Room:</td>
                  <td>{document.guest_room}</td>
                </tr>
                <tr>
                  <td>Staircase:</td>
                  <td>{document.staircase}</td>
                </tr>
                <tr>
                  <td>Parking:</td>
                  <td>{document.parking}</td>
                </tr>
                <tr>
                  <td>Garden Size:</td>
                  <td>{document.garden_size}</td>
                </tr>
                <tr>
                  <td>Shops:</td>
                  <td>{document.shops}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentDetails
