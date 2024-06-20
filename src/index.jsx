import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/'
import About from './pages/About/'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Training from './pages/Training'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<About />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/formations" element={<Training />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
