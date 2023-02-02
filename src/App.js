import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Find from './components/find/Find'
import Driver from './components/driver/Driver'
import Luxury from './components/luxury/Luxury'
import Footer from './components/footer/Footer'
import Price from './components/pages/Price'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Find />
   
      <Price />
      <Luxury />
      <Footer />
    </div>
  );
}

export default App;
