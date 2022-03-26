import s from './Header.module.css';


const Header = () => {
    return (
        <header className={s.header}>
            <ul className={s.list}>
                <li className={s.item}><a className={s.link} href="/">Услуги</a></li>
                <li className={s.item}><a className={s.link} href="/">ПНД</a></li>
                <li className={s.item}><a className={s.link} href="/">Демонтаж</a></li>
                <li className={s.item}><a className={s.link} href="/">Вывоз мусора</a></li>
                <li className={s.item}><a className={s.link} href="/">Аренда</a></li>
                <li className={s.item}><a className={s.link} href="/">Контакты</a></li>
                <li className={s.item}><a className={s.link} href="/">Цены</a></li>
                <li className={s.item}><a className={s.link} href="/">Акции</a></li>
                <li className={s.item}><a className={s.link} href="/">Новости</a></li>
            </ul>
        </header>
    );
}

export default Header