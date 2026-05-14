import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import NickCouryPortfolioHomepage from './NickCouryPortfolioHomepage';
import About from "./pages/About";
import ExperiencePage from "./pages/Experience";
import CaseStudiesPage from "./pages/CaseStudies";
import Credentials from "./pages/Credentials";
import Contact from "./pages/Contact";

function CloudflareAnalytics() {
  React.useEffect(() => {
    const token = import.meta.env.VITE_CF_WEB_ANALYTICS_TOKEN;

    if (!token) {
      return undefined;
    }

    const existingScript = document.querySelector(
      'script[data-cf-beacon]'
    );

    if (existingScript) {
      return undefined;
    }

    const script = document.createElement("script");
    script.defer = true;
    script.src = "https://static.cloudflareinsights.com/beacon.min.js";
    script.setAttribute(
      "data-cf-beacon",
      JSON.stringify({ token })
    );
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}

function ScrollToTop() {
  const { hash, pathname, key } = useLocation();

  React.useEffect(() => {
    if (hash) {
      window.setTimeout(() => {
        const target = document.getElementById(hash.slice(1));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0);
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [hash, pathname, key]);

  return null;
}

function App() {
  return (
    <Router>
      <CloudflareAnalytics />
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<NickCouryPortfolioHomepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/credentials" element={<Credentials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
