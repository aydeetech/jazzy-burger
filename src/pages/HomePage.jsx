import React from 'react'
import Hero from '../components/Hero'
import '../styles/homepage.css'
import Listing from '../components/Listing'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
        <Hero />
        <Listing />

        <Footer />
    </div>
  )
}

export default HomePage