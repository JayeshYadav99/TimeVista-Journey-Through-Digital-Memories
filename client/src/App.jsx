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



// Create a WebGLRenderer and add it to the DOM


function App() {
  
  return (
    <>
    <Navbar/>
      <Routes>
      <Route path='/Test'element={<Test/>}/>
      <Route path='/'element={<HomePage/>}/>
      <Route path='/Upload'element={<><CreateCapsuleForm/></>}/>
      </Routes>
    </>
  )
}

export default App
