import s from './../MainPage.module.css';
// import pic1 from './../../../../images/MainPage/Group 45.svg';
import pic2 from './../../../../images/MainPage/f95224c0fa60e92d13ce07df0224e23d.jpg';

const AboutUs = () => {
    return (
        <div className={s.aboutUs}>
            <div className={s.container}>
                <h2 className={s.aboutTitle}>О нашей компании</h2>

                <div className={s.wrapper}>
                    <div className={s.wrapperLeft}>
                        <h3 className={s.aboutUsSubtitle}>Metallolom812</h3>
                        <div className={s.aboutInner}>
                            <p className={s.aboutTextFirst}>Сегодня мы представляем собой полноценное конкурентоспособное предприятие. Прием цветного металлолома и лома -черного металлов осуществляется в строгом соответствии с установленными нормами, правилами и ГОСТами. 
                            </p>
                            <p className={s.aboutTextSecond}>Это всегда индивидуальный подход к 
                            клиенту и приятные цены на все типы демонтажных работ и покупку 
                            металлического лома. Успешно демонтировали объекты разного уровня 
                            сложности. C 2003 года ни одного демонтажа не вышло из под контроля. 
                            Отточенные процессы гарантируют низкую стоимость демонтажа.</p>
                        </div>
                    </div>
                    
                    <div className={s.wrapperRight}>
                        <img className={s.wrapperRightImg} src={pic2} alt="" />
                    </div>
                        
                    
                </div>
            </div>
            
        </div>
    );
}

export default AboutUs