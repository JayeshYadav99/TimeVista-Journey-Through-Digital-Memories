import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './Test'
import Navbar from './Components/Navbar'
import {Routes,Route} from 'react-router-dom';
import HomePage from './Pages/HomePage'
import UploadPage from './Pages/UploadPage'
import CreateCapsuleForm from './Pages/CreateCapsuleForm'
import SuccessPage from './Pages/SucessPage'

import GalleryPage from './Pages/GalleryPage'
import Signup from './Pages/Auth/Signup'
import Login from './Pages/Auth/Login'
import UpcomingDatesPage from './Pages/Upcoming'
import CapsuleDetailPage from './Pages/CapsuleDetailPage'
// Create a WebGLRenderer and add it to the DOM


function App() {
  
  return (
    <>
    <Navbar/>
      <Routes>
      <Route path='/Test'element={<Test/>}/>
      <Route path='/'element={<HomePage/>}/>
      <Route path='/Upload'element={<><CreateCapsuleForm/></>}/>
      <Route path='/Success'element={<SuccessPage/>}/>
      <Route path='/Signup'element={<Signup/>}/>
      <Route path='/Login'element={<Login/>}/>
      <Route path='/Gallery'element={<GalleryPage/>}/>
      <Route path='/Upcoming'element={<UpcomingDatesPage/>}/>
      <Route path="/Gallery/:capsuleId" element={<CapsuleDetailPage />} />

      </Routes>
    </>
  )
}

export default App
