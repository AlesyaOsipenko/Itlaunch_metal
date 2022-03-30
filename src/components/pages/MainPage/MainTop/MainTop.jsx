import Header from '../../../Header/Header';
import s from './../MainPage.module.css';

const MainTop = () => {
    return (
        <div className={s.mainTop}>
            <Header></Header>

            <div className={s.mainTopContent}>
                <div className={s.container}>
                    <div className={s.titleWrap}>
                        <h1 className={s.title}>Покупаем лом черных и цветных металлов по высоким ценам</h1>
                    </div>
                    <button className={s.btn}>
                            Цены
                    </button>
                </div>
            </div>

        </div>
    );
}

export default MainTop