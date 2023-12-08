// import React from 'react'
// import "./memories.css"

// const Memories = () => {
//     return (
//         <section id='memories'>
//             <h2 className='memories-heading'>Travel Memories</h2>
//             <div className="container">
//                 <div className="row mt-5 gap-5 ">
//                     <div className="col-lg-2 d-flex justify-content-center align-items-center">
//                         <img className='custom-border rounded-4' src="/assets/images/memory-image1.svg" alt="" />
//                     </div>
//                     <div className="col-lg">
//                         <div className="row">
//                             <div className="col">
//                                 <img className='custom-border rounded-4' src="/assets/images/memory-image2.svg" alt="" />
//                             </div>
//                         </div>
//                         <div className="row mt-4 gap-0">
//                             <div className="col p-0 ">
//                                 <img className='custom-border rounded-4' src="/assets/images/memory-image3.svg" alt="" />
//                             </div>
//                             <div className="col p-0 ">
//                                 <img className='custom-border rounded-4' src="/assets/images/memory-image4.svg" alt="" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Memories

import React from 'react';
import "./memories.css";

const Memories = () => {
  return (
    <section id='memories'>

      <div className="container col-11 p-0 ">
        <h2 className='memories-main-heading'>Travel Memories</h2>
        <div id='' className="row mt-5 g-3">
          <div className="col-12 col-lg-4 position-relative ">
            <div className='custom-border h-100 rounded-4'>
              <img className='object-fit-cover rounded-4 h-100 w-100 d-none d-lg-block' src="/assets/images/memory-image1.svg" alt="" />
              <img className='object-fit-cover rounded-4 h-100 w-100 d-block d-lg-none' src="/assets/images/paris.png" alt="" />
            </div>
            <div className="memories- info position-absolute bottom-0 text-white d-flex flex-column justify-content-start align-items-start mx-3 mb-5">
              <h3 className='memories-heading'>Paris</h3>
              <ul className='memories-subtitle d-flex flex-column justify-content-start align-items-start'>
                <li>3 trips</li>
                <li>60 travelers</li>
              </ul>
            </div>
          </div>


          <div className="col">
            <div className="row row-cols-1 h-100 mt-4 ">
              <div className="col">
                <div className="row ">
                  <div className="col position-relative ">
                    <div className='custom-border rounded-4'>
                      <img className='object-fit-cover rounded-4 h-100 w-100 d-none d-lg-block' src="/assets/images/memory-image2.svg" alt="" />
                      <img className='object-fit-cover rounded-4 h-100 w-100 d-block d-lg-none' src="/assets/images/usa.png" alt="" />
                    </div>
                    <div className="memories- info memoryimage-text d-none d-lg-block text-white d-flex flex-column justify-content-start align-items-start text-start">
                      <h3 className='memories-heading'>USA</h3>
                      <ul className='memories-subtitle d-flex flex-column justify-content-start align-items-start'>
                        <li>2 trips</li>
                        <li>45 travelers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="row h-100 g-2">
                  <div className="col-12 col-lg-6 position-relative">
                    <div className='custom-border rounded-4'>
                      <img className='object-fit-cover rounded-4 h-100 w-100 d-none d-lg-block' src="/assets/images/japan.jpg" alt="" />
                      <img className='object-fit-cover rounded-4 h-100 w-100 d-block d-lg-none' src="/assets/images/japan.png" alt="" />
                    </div>
                    <div className="memoryimage-text d-none d-lg-block text-white d-flex flex-column justify-content-start align-items-start text-start">
                      <h3 className='memories-heading'>Japan</h3>
                      <ul>
                        <li>6 trips</li>
                        <li>100 travelers</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 position-relative">
                    <div className='custom-border rounded-4'>
                      <img className='object-fit-cover rounded-4 h-100 w-100 d-none d-lg-block' src="/assets/images/belarus.jpg" alt="" />
                      <img className='object-fit-cover rounded-4 h-100 w-100 d-block d-lg-none img-fluid' src="/assets/images/belarus.png" alt="" />
                    </div>
                    <div className="memoryimage-text text-white d-flex flex-column justify-content-start align-items-start text-start">
                      <h3 className='memories-heading'>Belarus</h3>
                      <ul>
                        <li>2 trips</li>
                        <li>70 travelers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Memories;
