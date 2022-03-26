
import './App.css';
import Header from './components/Header/Header';
import MainPage from './components/pages/MainPage/MainPage';
import logo from './images/logo.svg';


const App = () => {
  return (
    <>
    <div className="app_wrapper">
      <div className= "logo" >
        <img className="logoImg" src={logo} alt="logo" />
      </div>
          <MainPage></MainPage>
    </div>
    </>
  )
}

export default App;
