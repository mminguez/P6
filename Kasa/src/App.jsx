import { Route, Routes } from 'react-router-dom';
import Home from './routes/Hero';
import About from './routes/About';
import Fiche from './routes/Fiche';
import NotFound from './routes/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'

function App() {

  return (
    <>
      <Header />
      <div className="app-container">
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/fiche/:id" element={<Fiche />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/404" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
