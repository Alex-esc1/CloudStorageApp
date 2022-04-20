import React from 'react';
import Navbar from "./navbar/Navbar";
import './app.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Registration from './authorization/Registration';
import Login from "./authorization/Login";

function App() {
  return (
    <BrowserRouter>
    <div className='app'>
      <Navbar/>
        <Routes>
          <Route path="/registration" element={<Registration/>}></Route>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
