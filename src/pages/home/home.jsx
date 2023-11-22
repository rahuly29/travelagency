import React from 'react'
import Hero from './hero/hero'
import Way from './way/way'
import Experience from './experience/experience'
import Memories from './memories/memories'
import Testimonial from './testimonial/testimonial'
import Contact from './contact/contact'
import Footer from './footer/footer'

// add all the section here
const Home = () => {
  return (
    <>
        <Hero/>
        <Way/>
        <Experience/>
        <Memories/>
        <Testimonial/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Home