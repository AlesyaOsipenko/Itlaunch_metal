import s from "./ServicesItem.module.css";


const ServicesItem = (props) => {
    return (
        <div className={s.servicesItem}>
            <div className={s.container}>
                <div className={s.imgBox}>
                    {/* <img className={s.img} src={props.image} alt="" /> */}
                    <div className={s.img}></div>`
                </div>


                <div className={s.textBox}>
                    <h3 className={s.textBoxTitle}>{props.title}</h3>
                    <p className={s.text}><ServicesItemDesc flag={props.flag}/></p>
                    
                    <a className={s.servicesLink} href="/">Подробнее
                        <svg className={s.linkIcon} xmlns="http://www.w3.org/2000/svg"  width="66" height="23" viewBox="0 0 66 23">
                            <g fill="none" >
                                <path d="M65.12 12.5607C65.7058 11.9749 65.7058 11.0251 65.12 10.4393L55.5741 0.893398C54.9883 0.307611 54.0386 0.307611 53.4528 0.893398C52.867 1.47919 52.867 2.42893 53.4528 3.01472L61.9381 11.5L53.4528 19.9853C52.867 20.5711 52.867 21.5208 53.4528 22.1066C54.0386 22.6924 54.9883 22.6924 55.5741 22.1066L65.12 12.5607ZM0.996094 13H64.0594V10H0.996094V13Z" fill="white"/>
                            </g>
                        </svg>
                </a>


                </div>

                

            </div>

          

        </div>
    );
}

const ServicesItemDesc = (props) => {
    if(props.flag === '1') {
        return (
            <div className={s.textBoxDescOne}>
                <p className={s.textBoxDescOneItem}>Хотите привезти лом самостоятельно? Мы предоставим:</p> 
                <p className={s.textBoxDescOneItem}>Металлоловоз 10-15т., 27 метров кубических в аренду от 8500р </p>
                <p className={s.textBoxDescOneItem}>Металловоз 20-25т., 35 метров кубических, длина 8,5 м - аренда от 11000р</p>
            </div>
        );
    }
    if(props.flag === '2') {
        return (
            <div className={s.textBoxDescTwo}>
                <p className={s.textBoxDescTwoItem}>лом меди</p>
                <p className={s.textBoxDescTwoItem}>лом алюминия</p>
                <p className={s.textBoxDescTwoItem}>лом латуни</p>
                <p className={s.textBoxDescTwoItem}>лом бронзы</p>
                <p className={s.textBoxDescTwoItem}>лом нержавейки</p>
                <p className={s.textBoxDescTwoItem}>лом свинца</p>
                <p className={s.textBoxDescTwoItem}>лом аккумуляторов</p> 
                <p className={s.textBoxDescTwoItem}>б/у кабели и электродвигатели</p>
            </div>
        );
    }
    if(props.flag === '3') {
        return (
            <div className={s.textBoxDescThree}>
                <p className={s.textBoxDescThreeItem}>Демонтаж зданий, снос сооружений, резка металлоконструкций, разделка судов, любые работы, связанные с демонтажем</p>
            </div>
        );
    }
    if(props.flag === '4') {
        return (
            <div className={s.textBoxDescFour}>
                <p className={s.textBoxDescFourItem}>Мы предлагаем Вам сдать отходы ПНД для их вторичной переработки по самой выгодной цене.</p>
                <p className={s.textBoxDescFourItem}>Мы освободим ваши складские помещения.</p>
                <p className={s.textBoxDescFourItem}>Мы позаботимся об экологии.</p>
            </div>
        );
    }
    if(props.flag === '5') {
        return (
            <div className={s.textBoxDescFive}>
                <p className={s.textBoxDescFiveItem}>☑ Газель объем кузова - 12 м.куб. </p>
                <p className={s.textBoxDescFiveItem}>☑ Ломовоз с хапом объем кузова - 24 м.куб.</p>
                <p className={s.textBoxDescFiveItem}>☑ Ломовоз с пухтой объем кузова - 28 м.куб.</p>
            </div>
        );
    }
    if(props.flag === '6') {
        return (
            <div className={s.textBoxDescSix}>
                <p className={s.textBoxDescSixItem}>Стальной конструкционный лом</p>
                <p className={s.textBoxDescSixItem}>Стальной кусковой лом</p>
                <p className={s.textBoxDescSixItem}>Стальной негабаритный конструкционный лом</p>
                <p className={s.textBoxDescSixItem}>Стальные канаты и проволока</p>
                <p className={s.textBoxDescSixItem}>Лом чугуна</p>
            </div>
        );
    }
};

export default ServicesItem

