import s from './Footer.module.css';
import logo from './../../images/MainPage/logo.svg';
import { Routes, Route, Link } from 'react-router-dom'

const Footer = () => {
    return (
       <footer className={s.footer}>
           <div className={s.container}>
            <ul className={s.list}>
                    <li className={s.item}><a className={s.link} href="/">Главная</a></li>
                    <li className={s.item}><a className={s.link} href="/">Акции</a></li>
                    <li className={s.item}><a className={s.link} href="/">Галерея</a></li>
                    <li className={s.item}><a className={s.link} href="/">Новости</a></li>
                    <li className={s.item}><a className={s.link} href="/">Цены</a></li>
                    <li className={s.item}><a className={s.link} href="/">Контакты</a></li>
                    <li className={s.item}><a className={s.link} href="/">Полезная информация</a></li>
            </ul>
            <div className={s.footerBottom}>
                <Link to="/"><img src={logo} alt="" /></Link>
                <span className={s.span}>© 2022 METALLOLOM812</span>
            </div>
           </div>
       </footer>
    );
}

export default Footer