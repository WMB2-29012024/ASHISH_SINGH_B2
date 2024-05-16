
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import {Navigate, Route, Routes} from "react-router-dom";
import Navbar from './pages/Navbar';
import Course from './pages/Course';
import NotFound from './pages/NotFound';

import React from 'react'


const App = () => {
  return (
    <div>
    <h1>Header</h1>
<Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Navigate to="/" />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/project" element={<Project />}/>
        <Route path="/course/:coursename" element={<Course />}/>
        <Route path="/*" element={<NotFound />}/>
        <Route path="" element={<CourseList />}/>
      </Routes>
      <h1>footer</h1>
    </div>
  )
}

export default App

