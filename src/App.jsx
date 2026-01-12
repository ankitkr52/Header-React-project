import React, { useEffect } from 'react'
import Hero from './components/Hero/Hero'
import AOS from 'aos'
import "aos/dist/aos.css"
import Navbar from './components/Navbar/Navbar'


const App = () => {
  useEffect(()=>{
      AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
      
    });
    AOS.refresh();
  })
  return (
    <div>
  
      <Hero/>
    
    
    </div>
  )
}

export default App
