import React, { useState } from 'react'
import './way.css'

const Way = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handlePlayClick = () => {
    setIsVideoVisible(true);
  };
  return (
    <section id='way'>
      <div className="container">
        <div className="row justify-content-evenly">
          <div className="col-md-5 col-sm-12 col-lg-5 text-center">
            <h2 className='way-heading'>Best Way To Travel</h2>
            <p className='way-subtitle mt-5'>
              We are a travel agency that specializes in creating customized travel experiences for our clients. We believe that travel is a journey, not just a destination. We want to help our clients create memories that will <br />last a lifetime.
              <br /><br />
              We have a team of experienced travel professionals who are passionate about helping our clients explore the world. We have a deep understanding of different cultures and destinations, and we can help you plan the perfect trip for your needs and interests.
            </p>
            <div className="col-12 way-clients row mt-4 text-center">
              <h4 className='col-6 col-lg-3 text-center'>
                1000+ <br />Clients
              </h4>
              <h4 className='col-6 col--lg-2 text-center'>
                500+ <br /> Trip
              </h4>
            </div>
            <button className='btn px-4 py-2 m-5' id='contactus-btn'>
              Contact us
            </button>
          </div>
          {/* <div className="col-md-5 col-sm-12 col-lg-5 position-relative text-center mt-4 mt-md-0">
            <img src="/assets/images/Component 2.svg" alt="" className='img-fluid'/>
            <span className='position-absolute top-50'><img src="/assets/icons/play.svg" alt="" /></span>
          </div> */}
          <div className="col-md-5 col-sm-12 col-lg-5 position-relative text-center mt-4 mt-md-0">
            <div className="video-container rounded">
              {!isVideoVisible && (
                <div className="position-relative">
                  <img
                    src="/assets/images/Component 2.svg"
                    alt=""
                    className=" img-fluid rounded"
                    
                  />
                  <span className="position-absolute play-icon visible"
                    onClick={handlePlayClick}
                  >
                    <img src="/assets/icons/play.svg" alt="" className="text-light" />
                  </span>
                </div>
              )}
              {isVideoVisible && (
                <video controls className="video-wrapper img-fluid rounded h-100 w-100">
                  <source src="/assets/video/one-piece.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Way