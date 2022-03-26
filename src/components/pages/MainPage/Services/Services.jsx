import s from './../MainPage.module.css';
import ServicesItem from './ServicesItem/ServicesItem';
import pic1 from './../../../../images/MainPage/caleb-ruiter-EmEQ6kK_5P0-unsplash 1.png';
import pic2 from './../../../../images/MainPage/pic2.png';
import pic3 from './../../../../images/MainPage/pic3.png';
import pic4 from './../../../../images/MainPage/pic4.png';
import pic5 from './../../../../images/MainPage/pic5.png';
import pic6 from './../../../../images/MainPage/pic6.png';
const Services = () => {
    return (
        <div className={s.services}>
            <div className={s.container}>
            <h2 className={s.servicesTitle} > <span> Наши </span>
                <span className={s.servicesTitleWrap}> услуги </span> 
            </h2>
                
                <div className={s.wrapper}>
                    <ServicesItem text='Вывоз металолома' image={pic1}/>
                    <ServicesItem text='Скупка лома цветных металлов' image={pic2}/>
                    <ServicesItem text='Покупка ПНД труб' image={pic3}/>
                    <ServicesItem text='Демонтаж металлоконструкций' image={pic4}/>
                    <ServicesItem text='Аренда спецтехники' image={pic5}/>
                    <ServicesItem text='Скупка лома черных металлов' image={pic6}/>
                </div>
            </div>
        </div>
    )
  }
  
  export default Services;