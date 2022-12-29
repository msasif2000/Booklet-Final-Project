import React from 'react'
import Banner from '../Banner/Banner'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Services from '../Services/Services'
import Reviews from '../Reviews/Reviews'
export default function Home() {
  return (
    <div>
        <Banner />
        <Services />
        <Reviews />
        <Contact />
        <Footer />
    </div>
  )
}

