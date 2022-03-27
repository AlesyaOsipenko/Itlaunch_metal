import Header from "../../Header/Header";
import ServicesItem from "./ServicesItem/ServicesItem";
import s from "./ServicesPage.module.css";
import pic2 from "./../../../images/ServicesPage/pic2.png"
import Footer from "../../Footer/Footer";


const ServicesPage = () => {
    return (
        <>
        <Header/>
        <div className={s.container}>
            <h1 className={s.title}>Услуги</h1>
        </div>
        <div className={s.container}>
            <ServicesItem flag="1" image={pic2} title="Вызов металолома"></ServicesItem>
            <ServicesItem flag="2" image={pic2} title="Скупка лома цветных металлов"></ServicesItem>
            <ServicesItem flag="3" image={pic2} title="Демонтаж металлоконструкций"></ServicesItem>
            <ServicesItem flag="4" image={pic2} title="Покупка ПНД труб"></ServicesItem>
            <ServicesItem flag="5" image={pic2} title="Аренда спецтехники"></ServicesItem>
            <ServicesItem flag="6" image={pic2} title="Скупка лома черных металлов"></ServicesItem>
        </div>
        <Footer/>
        </>
    );
}

export default ServicesPage