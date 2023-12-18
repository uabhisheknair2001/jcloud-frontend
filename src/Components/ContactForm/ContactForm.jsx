import React, { useState } from 'react'
import Select from 'react-select'
import './ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    country: null,
    message: '',
    inquiryType: 'Designing',
  })

  const countries = [
    { value: 'us', label: 'United States (+1)' },
    { value: 'uk', label: 'United Kingdom (+44)' },
    { value: 'in', label: 'India (+91)' },
    // Add more countries as needed
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleCountryChange = (selectedOption) => {
    setFormData({ ...formData, country: selectedOption })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // You can add code here to handle form submission
    // For this example, we'll just log the data
    console.log(formData)
  }

  return (
    <div>
      <div className="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 d-block m-auto">
              <div className="card rounded-4 my-5">
                <div className="card-header">
                  <h3 className="text-center">Contact Us</h3>
                  <p className="contact-text">
                    Have a question or feedback? Reach out to us!
                  </p>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group phone-number">
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <div className="phone-input">
                        <div className="phone-select-box">
                          <Select
                            value={formData.country}
                            onChange={handleCountryChange}
                            options={countries}
                            placeholder="Select Country"
                            className="phone-select"
                          />
                        </div>

                        <div className="phone-input-box">
                          <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group inquiry">
                      <label htmlFor="inquiryType">Inquiry Type</label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                      >
                        <option value="Designing">Designing</option>
                        <option value="Training">Training</option>
                        <option value="IT">IT</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        required
                      ></textarea>
                    </div>
                    {/* <!-- Submit Button --> */}
                    <button type="submit" className="submit-button">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
