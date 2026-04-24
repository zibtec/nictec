import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import NickCouryPortfolioHomepage from './NickCouryPortfolioHomepage';
import About from "./pages/About";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<NickCouryPortfolioHomepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
