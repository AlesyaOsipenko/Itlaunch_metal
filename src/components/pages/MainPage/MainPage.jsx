import Header from "../../Header/Header";
import MainTop from "./MainTop/MainTop";
import AboutUs from "./AboutUs/AboutUs";
import Services from "./Services/Services";
import Feedback from "./Feedback/Feedback";
import Contacts from "./Contacts/Contacts";
import Footer from "../../Footer/Footer";
import s from './MainPage.module.css'

const MainPage = () => {
    return (
        <>
        
            <MainTop/>
            <div className={s.container}>
            <AboutUs/>
            <Services/>
            <Feedback/>
            <Contacts/>
            <Footer/>
            </div>
        
        </>
    );
}

export default MainPage