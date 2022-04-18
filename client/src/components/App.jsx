import React from 'react';
import Navbar from "./navbar/Navbar";
import './app.less';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className='app'>
      <Navbar/>
      </div>
    </BrowserRouter>
  );
}

export default App;
