import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../Assets/logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolling, setScrolling] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    // <div className="navbar">
    //   <div className="container">
    //     <div className="top-nav">
    //       <div className="img-logo">
    //         <h5>img logo</h5>
    //       </div>
    //       <div className="nav-contact">
    //         <h5>phone:907776666</h5>
    //       </div>
    //     </div>
    //     <nav className="nav">
    //       <div className="navbar-box">
    //         <div className="navbar-logo">
    //           <Link to="/" className="whatsapp-link">
    //             <img alt="Whatsapp" src={logo} className="whatsapp-image" />
    //           </Link>
    //         </div>
    //         <div className="navbar-icon" onClick={toggleMenu}>
    //           {isMenuOpen ? <FaTimes /> : <FaBars />}
    //         </div>
    //         <ul className={isMenuOpen ? 'navbar-menu active' : 'navbar-menu'}>
    //           <li className="navbar-items">
    //             <Link to="/" className="nav-link">
    //               Home
    //             </Link>
    //           </li>
    //           <li className="navbar-items">
    //             <Link to="/services" className="nav-link">
    //               Services
    //             </Link>
    //           </li>
    //           <li className="navbar-items">
    //             <Link to="/courses" className="nav-link">
    //               Courses
    //             </Link>
    //           </li>
    //           <li className="navbar-items">
    //             <Link to="/documentlist" className="nav-link">
    //               Document
    //             </Link>
    //           </li>
    //           <li className="navbar-items">
    //             <Link to="/contact" className="nav-link">
    //               Contact Us
    //             </Link>
    //           </li>
    //           <li className="navbar-items">
    //             <Link to="/login" className="nav-link">
    //               Login
    //             </Link>
    //           </li>
    //           <li className="navbar-items">
    //             <Link to="/signup" className="nav-link">
    //               Sign-Up
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </nav>
    //   </div>
    // </div>
    <div className={`navbar-con ${scrolling ? 'scrolling' : ''}`}>
      <div className="top-nav">
        <div className="navbar-logo">
          <Link to="/" className="whatsapp-link">
            <img alt="Whatsapp" src={logo} className="whatsapp-image" />
          </Link>
        </div>
        <div className="nav-contact">
          <a href="mailto:admin@jcloudwork.com">
            <button className="btn text-white contact-btn ">Contact us</button>
          </a>
        </div>
      </div>
      <div className="hrline"></div>
      <nav className="nav">
        <div className="navbar-box">
          <div className="navbar-icon" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
          </div>
          <ul className={isMenuOpen ? ' navbar-menuactive' : 'navbar-menu'}>
            <li className="navbar-items">
              <Link
                to="/"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="navbar-items">
              <Link
                to="/services"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li className="navbar-items">
              <Link
                to="/blogs"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>
            </li>
            <li className="navbar-items">
              <Link
                to="/documentlist"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Plans
              </Link>
            </li>
            <li className="navbar-items">
              <Link
                to="/library"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Library
              </Link>
            </li>
            <li className="navbar-items">
              <Link
                to="/job-listing"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Jobs
              </Link>
            </li>
            <li className="navbar-items">
              <Link
                to="/contact"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
            <li className="navbar-items">
              <Link
                to="/login"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </li>
            <li className="navbar-items">
              <Link
                to="/signup"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign-Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="hrline"></div>
    </div>
  )
}

export default Navbar
