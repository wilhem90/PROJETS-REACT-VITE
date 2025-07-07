import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import About from './pages/about/About';
import Footer from './components/footer/Footer';
import Login from './components/auth/login';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </BrowserRouter>
    <Footer />
    </>

  )
}

export default App
