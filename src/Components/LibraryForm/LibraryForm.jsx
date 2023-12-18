import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './LibraryForm.css'

function FeatureForm() {
  const [title, setTitle] = useState('')
  const [link, setLink] = useState('')
  const [image1, setImage1] = useState(null)
  const [image2, setImage2] = useState(null)
  const [image3, setImage3] = useState(null)
  const [image4, setImage4] = useState(null)

  const handleImage1Change = (e) => {
    // Update image1 with the first selected file
    setImage1(e.target.files[0])
  }

  const handleImage2Change = (e) => {
    setImage2(e.target.files[0])
  }

  const handleImage3Change = (e) => {
    setImage3(e.target.files[0])
  }

  const handleImage4Change = (e) => {
    setImage4(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Check if required fields are filled
    if (!title || !link || !image1) {
      toast.error('Title, Link, and Image 1 are required fields', {
        autoClose: 3000,
      })
      return
    }

    const formData = new FormData()
    formData.append('title', title)
    formData.append('link', link)
    formData.append('image1', image1)
    formData.append('image2', image2)
    formData.append('image3', image3)
    formData.append('image4', image4)

    try {
      const response = await fetch('/api/upload-feature', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        toast.success('Feature added successfully', { autoClose: 3000 })
        // Resetting form fields
        setTitle('')
        setLink('')
        setImage1(null)
        setImage2(null)
        setImage3(null)
        setImage4(null)
      } else {
        console.error('Feature upload failed with status:', response.status)
        toast.error('Feature upload failed', { autoClose: 3000 })
      }
    } catch (error) {
      console.error('Error uploading feature:', error)
      toast.error('Error uploading feature', { autoClose: 3000 })
    }
  }

  return (
    // <div className="feature-form">
    //   <div className="form-title">Feature Form</div>
    //   <form onSubmit={handleSubmit}>
    //     <div className="form-field">
    //       <label>Title:</label>
    //       <input
    //         type="text"
    //         value={title}
    //         onChange={(e) => setTitle(e.target.value)}
    //       />
    //     </div>
    //     <div className="form-field">
    //       <label>Link:</label>
    //       <input
    //         type="url"
    //         value={link}
    //         onChange={(e) => setLink(e.target.value)}
    //       />
    //     </div>
    //     <div className="form-field">
    //       <label>Image 1:</label>
    //       <input type="file" onChange={handleImage1Change} />
    //     </div>
    //     <div className="form-field">
    //       <label>Image 2:</label>
    //       <input type="file" onChange={handleImage2Change} />
    //     </div>
    //     <div className="form-field">
    //       <label>Image 3:</label>
    //       <input type="file" onChange={handleImage3Change} />
    //     </div>
    //     <div className="form-field">
    //       <label>Image 4:</label>
    //       <input type="file" onChange={handleImage4Change} />
    //     </div>
    //     <div className="form-button">
    //       <button type="submit">Submit</button>
    //     </div>
    //   </form>
    //   <ToastContainer />
    // </div>

    <div className="feature-form my-3">
      <h2 className="text-center">Feature Form </h2>
      <div className="feature-form-con">
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label>Link:</label>
            <input
              type="url"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label>Image 1:</label>
            <input type="file" onChange={handleImage1Change} />
          </div>
          <div className="form-field">
            <label>Image 2:</label>
            <input type="file" onChange={handleImage2Change} />
          </div>
          <div className="form-field">
            <label>Image 3:</label>
            <input type="file" onChange={handleImage3Change} />
          </div>
          <div className="form-field">
            <label>Image 4:</label>
            <input type="file" onChange={handleImage4Change} />
          </div>
          <div className="form-button">
            <button type="submit">Submit</button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  )
}

export default FeatureForm
