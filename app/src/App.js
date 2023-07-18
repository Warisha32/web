import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header"

// import About from "./Components/About"
import Projects from "./Components/Project";
import Contact from "./Components/Contact"
import Experience from './Components/Experience';
import Home from "./Components/Home"
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
