import SimpleSlider from "../../common/Slider/SimpleSlider";
import Header from "../../Header/Header";
import s from './../OneServicePage/OneServicePage.module.css'

// import Footer from "../../Footer/Footer";

const OneServicePage = () => {
    return (
        <>
            <div className={s.oneServicePageTop}>
                <Header />
                <div className={s.container}>
                    <div className={s.oneServicePageContent}>
                        <div className={s.wrapper}>
                            <h1 className={s.mainTitle}>Скупка металлолома с вывозом. Дорого</h1>
                            <h2 className={s.title}>Без посредников. Деньги сразу!</h2>
                        </div>
                    </div>

                    <button className={s.oneServicePagebtn}>
                        Смотреть полный прайс
                    </button>
                </div>
            </div>

            <div className={s.pricePage}>
                <div className={s.container}>
                    <div className={s.price}>
                        <div className={s.blackLom}>
                            <h3 className={s.itemTitle}>Черный лом</h3>
                            <table className={s.blackLomTable}>
                                <tr>
                                    <td>Чермет габарит - 3А</td>
                                    <td>18200₽</td>
                                </tr>
                                <tr>
                                    <td>Чермет негабарит - 5А</td>
                                    <td>18200₽</td>
                                </tr>
                                <tr>
                                    <td>Жесть/Оцинковка - 12А</td>
                                    <td> 18200₽</td>
                                </tr>
                            </table>
                        </div>
                        <div className={s.cuprum}>
                            <h3 className={s.itemTitle}>Медь</h3>
                            <table className={s.cuprumTable}>
                                <tr>
                                    <td>Медь Блестящая </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>(кабель от 4 мм, прокат)</td>
                                    <td>486₽</td>
                                </tr>
                                <tr>
                                    <td>Медь Кусковая </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>(кабель от 4 мм, прокат) </td>
                                    <td>456₽</td>
                                </tr>
                                <tr>
                                    <td>Медь Несортовая (Микс)</td>
                                    <td>451₽</td>
                                </tr>
                            </table>
                        </div>
                        <div className={s.alum}>
                            <h3 className={s.itemTitle}>Алюминий</h3>
                            <table className={s.alumTable}>
                                <tr>
                                    <td>Алюминий Электротех </td>
                                    <td>121₽</td>
                                </tr>
                                <tr>
                                    <td>Алюминий Пищевой</td>
                                    <td>106₽</td>
                                </tr>
                                <tr>
                                    <td>Алюминий Профиль </td>
                                    <td>104₽</td>
                                </tr>
                                <tr>
                                    <td>Алюминий Микс</td>
                                    <td>89₽</td>
                                </tr>
                                <tr>
                                    <td>Алюминий Картерный</td>
                                    <td>89₽</td>
                                </tr>
                                <tr>
                                    <td>Алюминиевая стружка</td>
                                    <td>34₽</td>
                                </tr>
                                <tr>
                                    <td>Алюминиевые радиаторы </td>
                                    <td>34₽</td>
                                </tr>
                            </table>
                        </div>
                        <div className={s.plumbum}>
                            <h3 className={s.itemTitle}>Свинец</h3>
                            <table className={s.plumbumTable}>
                                <tr>
                                    <td>Свинец </td>
                                    <td>107₽</td>
                                </tr>
                                <tr>
                                    <td>Свинец Самосплав</td>
                                    <td>68₽</td>
                                </tr>
                                <tr>
                                    <td>Свинец кабельный</td>
                                    <td>92₽</td>
                                </tr>
                            </table>
                        </div>
                        <div className={s.stainlessSteel}>
                            <h3 className={s.itemTitle}>Нержавеющая сталь</h3>
                            <table className={s.stainlessSteelTable}>
                                <tr>
                                    <td>Нержавеющая сталь</td>
                                    <td>83₽</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className={s.materials}>
                <div className={s.container}>

                    <div className={s.materialsHeadlines}>
                        <h2 className={s.materialsTitle}>Типы принимаемого сырья</h2>
                        <h3 className={s.materialsSubTitle}>Вес лома определяем на выезде</h3>
                    </div>

                    <div className={s.materialsTypes}>

                        <div className={s.materialsTypesGroupOne}>
                            <div className={s.materialsTypesSubtitle}><span className={s.subtitleFirst}>Черный лом</span></div>
                            <div className={s.materialsTypesItem}><span className={s.materialsTypesTitle}>МИКС (металлоконструкции, металлическая стружка, станки)	</span></div>
                            <div className={s.materialsTypesItem}><span className={s.materialsTypesTitle}>Стальной металл кусковой</span></div>
                            <div className={s.materialsTypesItem}><span className={s.materialsTypesTitle}>Негабаритный металлолом</span></div>
                            <div className={s.materialsTypesItem}><span className={s.materialsTypesTitle}>Стружка чёрных металлов</span></div>
                            <div className={s.materialsTypesItem}><span className={s.materialsTypesTitle}>Лом промышленного чугуна, сантехнические элементы</span></div>
                            <div className={s.materialsTypesItem}><span className={s.materialsTypesTitle}>Оцинковка и оцинкованные листы</span></div>
                        </div>


                        <div className={s.materialsTypesGroupTwo}>
                            <div className={s.materialsTypesSubtitle}><span className={s.subtitleSecond}>лом цветных <br /> металлов</span></div>
                            <div className={s.materialsTypesItem}><span className={s.materialsTypesTitle}>Медь</span></div>
                            <div className={s.materialsTypesItem}><span className={s.materialsTypesTitle}>Алюминий</span></div>
                            <div className={s.materialsTypesItem}><span className={s.materialsTypesTitle}>Свинец</span></div>
                            <div className={s.materialsTypesItem}><span className={s.materialsTypesTitle}>Латунь</span></div>
                            <div className={s.materialsTypesItem}><span className={s.materialsTypesTitle}>Нержавейка</span></div>
                            <div className={s.materialsTypesItem}><span className={s.materialsTypesTitle}>Блеск (очищенный кабель), электротехнический кабель</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={s.reception}>
                <div className={s.container}>

                    <div className={s.receptionWrapper}>
                        <h2 className={s.receptionTitle}>
                            как осуществляется прием
                        </h2>

                        <div className={s.receptionInner}>
                            <div className={s.GoodTerms}>
                                <h4 className={s.GoodTermsTitle}>Как мы работаем:</h4>
                                <ol className={s.GoodTermsList}>
                                    <li>Мы приезжаем и демонтируем</li>
                                    <li>Взвешиваем и осуществляем полный расчет.Деньги сразу!</li>
                                    <li>Вывозим металлолом</li>
                                </ol>
                                <p className={s.GoodTermsText}>Приём цветного металла осуществляется по более выгодным расценкам! Уточнить актуальную цену на лом можно напрямую у оценщика на день сдачи лома.</p>
                                <button className={s.receptionBtn}>
                                    Получить консультацию
                                </button>
                            </div>

                            <div className={s.BadTerms}>
                                <div className={s.card}>
                                    <h4 className={s.BadTermsTitle}>Так,к приему не допускается:</h4>
                                    <ol className={s.BadTermsList}>
                                        <li>автотехника без справки ГИБДД о снятии авто с учета</li>
                                        <li>предметы ритуального назначения - кресты, оградки, монументы</li>
                                        <li>железнодорожный дом - рельсы, крепёжные элементы</li>
                                        <li>изделия, отвечающие за благоустройство города - люки, заборы или дорожные знаки</li>
                                    </ol>
                                </div>

                            </div>
                        </div>







                    </div>
                </div>

            </div>

            <div className={s.sliderBox}>
                <SimpleSlider></SimpleSlider>
            </div>

        </>
    );
}

export default OneServicePage