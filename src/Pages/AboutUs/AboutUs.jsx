import React from 'react'
import { Link } from 'react-router-dom'
import './AboutUs.css'

import Aboutusimg from '../../Assets/AboutusImg.jpeg'

const AboutUs = () => {
  return (
    <div>
      {/* <div className="about-us-container">
        <header>
          <br></br>
          <br></br>
          <h1>Jcloudwork</h1>
          <p className="tagline">Learning Redefined</p>
        </header>

        <section className="about">
          <div className="about-content">
            <h2>About Us</h2>
            <p>
              Jcloudwork is a design agency committed to redefining the learning
              experience through innovative and visually stunning designs. Since
              our inception, we have been dedicated to providing top-notch 2D
              drafting, 3D modeling, and a variety of architectural and
              design-related services.
            </p>
          </div>
          <img
            src={require('../../Assets/slider.png').default}
            alt="About Us"
            className="about-image"
          />
        </section>

        <section className="what-we-do">
          <img
            src={require('../../Assets/slider.png').default}
            alt="What We Do"
            className="what-we-do-image"
          />
          <div className="what-we-do-content">
            <h2>What We Do</h2>
            <p>
              Our expertise lies in transforming ideas into reality. We
              specialize in 2D drafting, 3D modeling, and a comprehensive range
              of architectural and design services. Our creative team is
              dedicated to bringing your visions to life with precision and
              flair.
            </p>
          </div>
        </section>

        <section className="why-choose-us">
          <div className="why-choose-us-content">
            <h2>Why Choose Us</h2>
            <p>
              At Jcloudwork, we go beyond conventional design. Our commitment to
              excellence, attention to detail, and passion for creativity set us
              apart. When you choose us, you choose a partner who is as invested
              in your project as you are.
            </p>
          </div>
          <img
            src={require('../../Assets/slider.png').default}
            alt="Why Choose Us"
            className="why-choose-us-image"
          />
        </section>

        <section className="cta">
          <h2>Contact Us for Your Design Needs</h2>
          <p>
            Let's bring your ideas to life. Contact us for personalized design
            solutions.
          </p>
          <Link to="/contact" className="cta-button">
            Contact Us
          </Link>
        </section>
      </div> */}
      <div className="aboutus-con container-lg">
        <div className="text-center py-10">
          <h2 className="jcloudwork"> Jcloudwork</h2>
          <p className="tagline">Learning Redefined</p>
        </div>
        <div className="about-card">
          <div className="row my-5 ">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="card">
                <div className="card-body">
                  <h2>About Us</h2>
                  <p>
                    Jcloudwork is a design agency committed to redefining the
                    learning experience through innovative and visually stunning
                    designs. Since our inception, we have been dedicated to
                    providing top-notch 2D drafting, 3D modeling, and a variety
                    of architectural and design-related services.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="card">
                <img src={Aboutusimg} alt="About Us" className="about-image" />
              </div>
            </div>
          </div>
          <div className="row my-5 ">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="card">
                <img src={Aboutusimg} alt="About Us" className="about-image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="card">
                <div className="card-body">
                  <h2>What We Do</h2>
                  <p>
                    Our expertise lies in transforming ideas into reality. We
                    specialize in 2D drafting, 3D modeling, and a comprehensive
                    range of architectural and design services. Our creative
                    team is dedicated to bringing your visions to life with
                    precision and flair.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row my-5 ">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="card">
                <div className="card-body">
                  <h2>Why Choose Us</h2>
                  <p>
                    At Jcloudwork, we go beyond conventional design. Our
                    commitment to excellence, attention to detail, and passion
                    for creativity set us apart. When you choose us, you choose
                    a partner who is as invested in your project as you are.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="card">
                <img src={Aboutusimg} alt="About Us" className="about-image" />
              </div>
            </div>
          </div>
        </div>
        <div className="about-contact">
          <div className="row">
            <div className="col-12 ">
              <h2>Contact Us for Your Design Needs</h2>
              <p>
                Let's bring your ideas to life. Contact us for personalized
                design solutions.
              </p>
              <Link to="/contact" className=" btn cta-button">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
