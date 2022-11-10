import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import './style/main.css';
import Welcome from './pages/Welcome';
import Home from './pages/Home';

function App() {
  const location = useLocation();
  return (
    <div className="app" id="light">
      {location.pathname !== "/welcome" ?
        <header>chi</header>
        : null}
      <main className='main'>
        <Routes>
          <Route path='/' element={<Navigate to="/welcome"></Navigate>}></Route>
          <Route path='/welcome' element={<Welcome></Welcome>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
        </Routes>
      </main>
      {location.pathname !== "/welcome" ?
        <footer>ne</footer>
        : null}
    </div>
  );
}

export default App;
