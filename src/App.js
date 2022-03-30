
import './App.css';
import Header from './components/Header/Header';
import MainPage from './components/pages/MainPage/MainPage';
import OneServicePage from './components/pages/OneServicePage/OneServicePage';
import ServicesPage from './components/pages/ServicesPage/ServicesPage';
import logo from './images/MainPage/logo.svg';
import { Routes, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <>
    <div className="app_wrapper">
        <Link to="/"><img className="logoImg" src={logo} alt="logo" /></Link>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/services" element={<ServicesPage/>} />
          <Route path="/oneservice" element={<OneServicePage/>} />
        </Routes>
    </div>
    </>
  )
}

export default App;
