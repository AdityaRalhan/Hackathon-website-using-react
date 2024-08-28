import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Intro from './components/Intro/Intro.jsx'
import InfoBar from './components/InfoBar/InfoBar.jsx'
import { createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import CompInfo from './components/CompInfo/CompInfo.jsx'
import Register from './components/Register/Register.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import ThankYou from './components/ThankYou/ThankYou'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Intro />,
    },
    {
      path: "/AboutUs",
      element: <AboutUs />
    },
    {
      path: "/CompInfo",
      element: <CompInfo />
    },
    {
      path: "/Register",
      element: <Register />
    },
    {
      path: "/ContactUs",
      element: <ContactUs />
    },
    {
      path: "/ThankYou",
      element: <ThankYou />
    }
  ])

  return ( 
  <>
      <RouterProvider router={router} />
  </>
  )
}

export default App
