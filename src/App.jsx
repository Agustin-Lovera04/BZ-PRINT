import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Router from './router/router'
import Aos from 'aos'

function App() {
  useEffect(() => {
    Aos.init()  
  }, []);
  

  return (
    <>
        <Router/>
    </>
  )
}

export default App
