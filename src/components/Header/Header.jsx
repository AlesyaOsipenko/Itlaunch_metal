import s from './Header.module.css';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className={s.header}>
            <ul className={s.list}>
                <li className={s.item}><Link to="/services" className={s.link}> Услуги</Link></li>
                <li className={s.item}><Link to="/" className={s.link}> ПНД</Link></li>
                <li className={s.item}><Link to="/" className={s.link}> Демонтаж</Link></li>
                <li className={s.item}><Link to="/" className={s.link}> Вывоз мусора</Link></li>
                <li className={s.item}><Link to="/" className={s.link}> Аренда</Link></li>
                <li className={s.item}><Link to="/" className={s.link}> Контакты</Link></li>
                <li className={s.item}><Link to="/oneservice" className={s.link}> Цены</Link></li>
                <li className={s.item}><Link to="/" className={s.link}> Акции</Link></li>
                <li className={s.item}><Link to="/" className={s.link}> Новости</Link></li>
            </ul>
        </header>
    );
}

export default Header