import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Line from './components/Line'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Line />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App