import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import './style/main.css';
import Welcome from './pages/Welcome';
import Portfolio from './pages/Portfolio';
import Project from './pages/Project';
import Error404 from './pages/Error404';
import Main from './layout/Main';
import Header from './layout/Header';
import Footer from './layout/Footer';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './utils/themeContext';

function App() {
  const { pathname } = useLocation();
  return (
    <ThemeProvider>
      <ScrollToTop />
      {pathname !== "/welcome" ?
        pathname !== "/*" ?
          <Header />
          : null
        : null}
      <Main>
        <Routes>
          <Route path='/' element={<Navigate to="/welcome" />}></Route>
          <Route path='/welcome' element={<Welcome />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/portfolio/project/:id' element={<Project />}></Route>
          <Route path='*' element={<Error404 />}></Route>
        </Routes>
      </Main>
      {pathname !== "/welcome" ?
        pathname !== "/*" ?
          <Footer />
          : null
        : null}
    </ThemeProvider>
  );
}

export default App;
