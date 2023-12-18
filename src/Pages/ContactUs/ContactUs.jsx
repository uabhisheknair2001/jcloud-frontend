import React from 'react'
import './ContactUs.css'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaMailBulk } from 'react-icons/fa'
import { FaAddressBook } from 'react-icons/fa'
import ContactForm from '../../Components/ContactForm/ContactForm'

function ContactUs() {
  return (
    <>
      <div className="contactUs-page">
        <div className="container-md px-md-4">
          <h2 className=" text-center">Contact Us</h2>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="card">
                <div className="contacticon-card">
                  <div className="contact-icon">
                    <FaPhoneAlt size={40} color="#00727A" />
                  </div>
                  <div className="contact-content">
                    <h3>Phone</h3>
                    <p>+91-9829952130</p>
                    <p>+91-9571812130</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="card">
                <div className="contacticon-card">
                  <div className="contact-icon">
                    <FaMailBulk size={40} color="#00727A" />
                  </div>
                  <div className="contact-content">
                    <h3>E Mail</h3>
                    <p>admin@jcloudwork.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="card">
                <div className="contacticon-card">
                  <div className="contact-icon">
                    <FaAddressBook size={40} color="#00727A" />
                  </div>
                  <div className="contact-content">
                    <h3>Address</h3>
                    <p>
                      Rishi nagar 182, First floor Hiran magri Sector 3,
                      Udaipur, Rajasthan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  )
}

export default ContactUs
