// App.js
import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Services from './Pages/Services/Services'
import Courses from './Pages/Courses/Courses'
import ContactForm from './Components/ContactForm/ContactForm'
import AboutUs from './Pages/AboutUs/AboutUs'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Pages/Login/Login'
import Registration from './Pages/Registration/Registration'
import BlogDetailModal from './Components/BlogDetailModal/BlogDetailModal'
import AdminConsole from './Pages/AdminConsole/AdminConsole'
import CourseDetailsPage from './Pages/CourseDetailsPage/CourseDetailsPage'
import DocumentPage from './Pages/DocumentPage/DocumentPage'
import DocumentDetail from './Components/DocumentDetail/DocumentDetail'
import Footer from './Components/Foooter/Footer'
import Navbar from './Components/Navbar/Navbar'
import BlogsPage from './Pages/BlogsPage/BlogsPage'
import LibraryPage from './Pages/LibraryPage/LibraryPage'
import LibraryDetails from './Pages/LibraryDetails/LibraryDetails'
import ContactUs from './Pages/ContactUs/ContactUs'
import JobListingsPage from './Pages/JobListingsPage/JobListingsPage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/documentlist" element={<DocumentPage />} />
        <Route path="/blog/:id" element={<BlogDetailModal />} />
        <Route path="/admin-console" element={<AdminConsole />} />
        <Route path="/courses/:id" element={<CourseDetailsPage />} />
        <Route path="/documents/:id" element={<DocumentDetail />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/library/:id" element={<LibraryDetails />} />
        <Route path="/job-listing" element={<JobListingsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
