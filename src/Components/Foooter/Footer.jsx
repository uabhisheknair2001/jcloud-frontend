import React from 'react'
import Logo2 from '../../Assets/logo.png'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      {/* <div className="footer-sec py-4">
        <div className="container-lg px-md-5">
          <div className="footer-top">
            <div className="row align-items-start">
              <div className=" py-sm-5 col-lg-3 col-md-3 col-sm-6 col-6 d-block m-auto img-footer">
                <div className="footer-column d-flex ">
                  <img src={Logo2} alt="logo" className="logo-img " />
                  <h2 className="footer-text mx-2 mt-3">Jcloudwork</h2>
                </div>
                <p className="tagline pt-2 pr-5  ">Learning Redefined</p>
              </div>
              <div className=" pb-sm-3 col-lg-3 col-md-3 col-sm-3 col-6 d-block m-auto">
                <div className="footer-column">
                  <h2 className="pb-2">Quick Links</h2>
                  <p>
                    <Link to="/about" className="FooterLink">
                      About Us
                    </Link>
                    <br />
                    <Link to="/projects" className="FooterLink">
                      Our Projects
                    </Link>
                    <br />
                    <Link to="/team" className="FooterLink">
                      Our Team
                    </Link>
                    <br />
                    <Link to="/contact" className="FooterLink">
                      Contact Us
                    </Link>
                    <br />
                    <Link to="/services" className="FooterLink">
                      Services
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-6 d-block m-auto ">
                <div className="footer-column">
                  <h2 className="pb-2">Services</h2>
                  <p>
                    <Link to="/services" className="FooterLink">
                      Services
                    </Link>
                    <br />
                    <Link to="about" className="FooterLink">
                      About Us
                    </Link>
                    <br />
                    <Link to="/contact" className="FooterLink">
                      Contact Us
                    </Link>
                    <br />
                    <Link to="/login" className="FooterLink">
                      Login
                    </Link>
                    <br />
                    <Link to="/signup" className="FooterLink">
                      Signup
                    </Link>
                  </p>
                </div>
              </div>
              <div className=" col-lg-3 col-md-3 col-sm-2 col-6 d-block m-auto">
                <div className="footer-column">
                  <h2 className="pb-2">Contact</h2>
                  <p>
                    <a
                      className="FooterLink"
                      href="https://www.google.com/maps/dir//jcloudwork/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3967efb1803cf5ab:0x57b91177b87846fa?sa=X&ved=2ahUKEwj6iu7bo9eCAxUvlFYBHf5WCQQQ9Rd6BAgzEAA"
                    >
                      182, Sector-3, Udaipur, Rajasthan, 313001
                    </a>
                    <br />
                    <span className="contact-info">
                      <a
                        className="FooterLink"
                        href="mailto:jcloudwork153@gmail.com"
                      >
                        jcloudwork153@gmail.com
                      </a>
                      <br />
                      <a className="FooterLink" href="tel:+919664165622">
                        +91-9664165622
                      </a>
                    </span>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 mt-4">
                  <div className="copyright">
                    <p>Copyright © Jcloudwork | Designed by Jcloudwork</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="footer">
        <div className="footer-line"></div>

        <div className="footer-line"></div>
        <div className="footer-sec">
          <div className="container-lg">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12 col-sx-12 footer-learning ">
                <div className="footer-column d-flex ">
                  <img src={Logo2} alt="logo" className="logo-img " />
                  <h2 className="footer-text mx-2 mt-3">Jcloudwork</h2>
                </div>
                <p className="tagline">Learning Redefined</p>
              </div>
              <div className="col-lg-9 col-md-9 col-sm-4 col-xs-4 mx-sm-auto text-center">
                <div className="row">
                  <div className="col-lg-4 col-md-3 col-sm-6 col-6 ">
                    <div className="footer-link">
                      <h2>Quick Links</h2>
                      <p>
                        <Link to="/about" className="FooterLink">
                          About Us
                        </Link>
                      </p>
                      <p>
                        <Link to="/documentlist" className="FooterLink">
                          Plans
                        </Link>
                      </p>
                      <p>
                        {' '}
                        <Link to="/library" className="FooterLink">
                          Library
                        </Link>
                      </p>
                      <p>
                        <Link to="/job-listing" className="FooterLink">
                          jobs
                        </Link>
                      </p>
                      <p>
                        <Link to="/blogs" className="FooterLink">
                          Blogs
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-3 col-sm-6 col-6">
                    <div className="footer-link">
                      <h2 className="">Services</h2>
                      <p>
                        <Link to="/services" className="FooterLink">
                          Services
                        </Link>
                      </p>
                      <p>
                        <Link to="/contact" className="FooterLink">
                          Contact Us
                        </Link>
                      </p>
                      <p>
                        <Link to="/admin-console" className="FooterLink">
                          Login
                        </Link>
                      </p>
                      <p>
                        <Link to="/signup" className="FooterLink">
                          Signup
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-3 col-sm-6 col-12">
                    <div className="footer-link">
                      <h2 className="">Contact</h2>

                      <p>
                        {' '}
                        <a
                          className="FooterLink"
                          href="https://www.google.com/maps/dir//jcloudwork/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3967efb1803cf5ab:0x57b91177b87846fa?sa=X&ved=2ahUKEwj6iu7bo9eCAxUvlFYBHf5WCQQQ9Rd6BAgzEAA"
                        >
                          182, Sector-3, Udaipur, Rajasthan, 313001
                        </a>
                      </p>
                      <p>
                        <a
                          className="FooterLink"
                          href="mailto:jcloudwork153@gmail.com"
                        >
                          jcloudwork153@gmail.com
                        </a>
                      </p>
                      <p>
                        <a className="FooterLink" href="tel:+919829952130">
                          +91-9829952130
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 mt-4">
                  <div className="copyright">
                    <p>Copyright © Jcloudwork | Designed by Jcloudwork</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
