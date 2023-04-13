import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './App.css';

function App() {
  return (
   <BrowserRouter>
    <div style={{display:"flex",justifyContent:"space-evenly",margin:"5rem 24vw"}}>  
      <a href='./'>Home</a>
      <a href='./contact'>Contact</a>
      <a href='./about'>About</a>
    </div>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
