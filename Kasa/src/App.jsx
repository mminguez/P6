import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Fiche from './routes/Fiche';
import NotFound from './routes/NotFound';
import Header from './components/Header';
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fiche" element={<Fiche />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
