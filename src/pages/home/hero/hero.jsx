import React from 'react';
import Navbar from '../../../components/navbar/navbar';
import './hero.css'

const Hero = () => {
  return (
    <section id='hero' className='hero'>
      <Navbar />
      <div className="container p-0 h-75 d-flex flex-column justify-content-center align-items-center text-center mt-3">
        <h1 className='hero-heading mb-5 mt-5'>
          Explore Our Delightful World
        </h1>
        <div className="container px-3 mt-1">
          <div className="row justify-content-center">
            <div className="col-md-4 custom-radius" >
              <div className="btn-group rounded-4 d-md-block d-xl-flex bg-white d-flex flex-column flex-sm-row align-items-center justify-content-center">
                <div className="dropdown w-100 ">
                  <div type="button " className="btn border-0 d-flex justify-content-between" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="">Location</span>
                  <img src="/assets/icons/arrowDown.svg" alt="" className='dropdown-toggle' />
                  </div>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
                <hr className='border-1 w-100 m-1'/>
                <div className="dropdown w-100 ">
                  <div type="button" className="btn border-0 d-flex justify-content-between" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className=''>Date</span>
                    <img src="/assets/icons/arrowDown.svg" alt="" className='dropdown-toggle'/>
                  </div>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
                <hr className='border-1 w-100 m-1'/>
                <div className="dropdown w-100">
                  <div type="button" className="btn border-0 d-flex justify-content-between " data-bs-toggle="dropdown" aria-expanded="false">
                    <span className=''>Guest</span>
                    <img src="/assets/icons/arrowDown.svg" alt="" className='dropdown-toggle'/>
                  </div>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
                <hr className='border-1 w-100 m-1'/>
                <div className='w-100 mb-1 px-3 py-3 '>
                  <div className='btn w-100 text-white rounded-5 d-sm-block' id="search-btn">
                    <img className='d-none d-sm-inline' src="/assets/icons/iconamoon_search.svg" alt="" />
                    <span className='d-lg-none'>Search</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




      </div>
    </section>
  );
};

export default Hero;
