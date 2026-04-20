import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NickCouryPortfolioHomepage from './NickCouryPortfolioHomepage'
import About from '../About'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NickCouryPortfolioHomepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
