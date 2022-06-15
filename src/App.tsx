import React from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import Login from './pages/login'
import Cockpit from "./pages/cockpit";
import Swiper from "./components/swiper";


function App() {
  return (
  <div className="App">
    <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="cockpit" element={<Cockpit />}></Route>
        <Route path="slider" element={<Swiper />}></Route>
    </Routes>
  </div>
  );
}
export default App;
