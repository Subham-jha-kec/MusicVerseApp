import {   BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from './Signup';
import { useState } from 'react'
import Login from './Login';
import Home from './Home';
import MusicApp from './MusicApp';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      {/* <Route path='/register' element={<Signup />}></Route> */}
      <Route path='/login' element={<Login />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/MusicApp' element ={<MusicApp />}></Route>
      <Route path ='/Signup' element={<Signup />}></Route>
     </Routes>
      </BrowserRouter>
  );
}

export default App;
