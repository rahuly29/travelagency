import React from 'react';
import Navbar from '../../../components/navbar/navbar';
import './hero.css'

const Hero = () => {
  return (
    <section id='hero' className='hero'>
      <Navbar />
      <div className="container p-0 h-75 d-flex flex-column justify-content-center align-items-center text-center mt-3">
        <h1 className='hero-heading m-0'>
          Explore Our Delightful World
        </h1>

        {/* <div className='col-sm-12 mt-2 border d-flex justify-content-center align-items-center '>
          <div className="rounded-5 p-1 bg-white border border-primary d-flex flex-column flex-sm-row justify-content-center align-items-center gap-4">
            <div className="col-10 d-flex flex-column flex-sm-row justify-content-center align-items-center gap-4">
              <button className="btn dropdown-toggle" type="button" id="dropdown1" data-bs-toggle="dropdown" aria-expanded="false">
                Location
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>

              <span className="d-sm-none">|</span>
              <button className="btn dropdown-toggle" type="button" id="dropdown2" data-bs-toggle="dropdown" aria-expanded="false">
                Date
              </button>
              <span className="d-sm-none">|</span>
              <button className="btn dropdown-toggle" type="button" id="dropdown3" data-bs-toggle="dropdown" aria-expanded="false">
                Guest
              </button>
            </div>
            <div className="btn mt-2 mt-sm-0 w-100" type="button" id="search-btn">
              <img src="/assets/icons/iconamoon_search.svg" alt="" />
            </div>
          </div>
        </div> */}

        {/* <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 mb-3">
              <div className="btn-group d-flex">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Location
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="btn-group d-flex">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Date
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="btn-group d-flex">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Guest
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>  */}
        {/* <div className="container">
  <div className="row flex-sm-row justify-content-center">
    <div className="col-md-4 mb-3">
      <div className="btn-group d-flex mb-3">
        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Location
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Date
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Guest
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </div>
  </div>
</div> */}
        <div className="container mt-5">
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
                <div className="dropdown w-100 ">
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
