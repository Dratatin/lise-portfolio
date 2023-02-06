import React, { useEffect } from 'react';
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
import useDeviceType from './utils/useDeviceType';
import useWindowHeightSize from './utils/useWindowHeightSize';

function App() {
  const { pathname } = useLocation();
  const deviceType = useDeviceType()
  const windowHeightSize = useWindowHeightSize()

  return (
    <ThemeProvider>
      <div className="app" style={deviceType === "ios" || "android" ? { minHeight: windowHeightSize } : {minHeight: "100vh"}}>
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
      </div>
    </ThemeProvider>
  );
}

export default App;
