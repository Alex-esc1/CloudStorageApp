import React from 'react';
import Navbar from "./navbar/Navbar";
import './app.less';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Registration from './registration/Registration';

function App() {
  return (
    <BrowserRouter>
    <div className='app'>
      <Navbar/>
        <Routes>
          <Route path="/registration" component={Registration}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
