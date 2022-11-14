import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import './style/main.css';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Main from './layout/Main';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { ThemeProvider } from './utils/themeContext';

function App() {
  const location = useLocation();
  return (
    <ThemeProvider>
      {location.pathname !== "/welcome" ?
        <Header />
        : null}
      <Main>
        <Routes>
          <Route path='/' element={<Navigate to="/welcome"></Navigate>}></Route>
          <Route path='/welcome' element={<Welcome></Welcome>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
        </Routes>
      </Main>
      {location.pathname !== "/welcome" ?
        <Footer />
        : null}
    </ThemeProvider>
  );
}

export default App;
