
import './App.css';
import Header from './components/Header/Header';
import MainPage from './components/pages/MainPage/MainPage';
import ServicesPage from './components/pages/ServicesPage/ServicesPage';
import logo from './images/MainPage/logo.svg';


const App = () => {
  return (
    <>
    <div className="app_wrapper">
        <img className="logoImg" src={logo} alt="logo" />
          {/* <MainPage></MainPage> */}
          <ServicesPage></ServicesPage>
    </div>
    </>
  )
}

export default App;
