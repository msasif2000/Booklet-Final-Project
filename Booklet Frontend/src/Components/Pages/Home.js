import React from 'react'
import Banner from '../Banner/Banner'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Books from '../Books/Books'
import Reviews from '../Reviews/Reviews'
import "./Home.css"

export default function Home() {
  return (
    <div className='Home'>
        <Banner />
        <Books />
        <Reviews />
        <Contact />
        <Footer />
    </div>
  )
}

