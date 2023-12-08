import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <section id='contact'>
      <div className="contact-bg">
        <div className='container pt-5'>
          <h2 className='contact-heading mb-4'>Let Us Show You the World</h2>
          <p className='subtitle mb-5 text-center'>We'll work with you to create a customized travel plan that fits your needs and budget.
            We'll also help you book your flights, hotels, and activities. And best of all, we'll give
            you a 10% discount on your first trip with us!
          </p>
          <div className="text-center pb-5">
            <button className='btn border text-white rounded-5 px-4 py-2 '>
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact