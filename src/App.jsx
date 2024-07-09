import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar'
import Header from './assets/components/Header'
import Popular from './assets/components/Popularplace/Popular'
import Imagetext from './assets/components/Imagetext'
import Explore from './assets/components/Exploreplace/Explore'
import FourBoxes from './assets/components/FourBoxes'
import ImageGallery from './assets/components/ImageGallery'
import Footer from './assets/components/Footer'


function App() {


  return (
    <>
      <div>
        <Navbar />
        <Header />
        <Popular />
        <Imagetext />
        <Explore />
        <FourBoxes />
        <ImageGallery />
        <Footer />
      </div>

    </>
  )
}

export default App;
