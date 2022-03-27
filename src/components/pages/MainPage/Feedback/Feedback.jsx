import s from './../MainPage.module.css';
import FeedbackItem from './FeedbackItem/FeedbackItem';
import SuperInputText from './../../../common/SuperInputText/SuperInputText';
import SuperButton from '../../../common/SuperButton/SuperButton';

const Feedback = () => {
    return (
        <div className={s.feedback}>
            <div className={s.container}>
                <h2 className={s.feedbackTitle} > <span> Работа с нами </span>
                    <span className={s.feedbackTitleWrap}> это простые три этапа: </span> 
                </h2>
                <div className={s.wrapper}>
                    <FeedbackItem text='После Вашего звонка незамедлительно
                     отправим спецтехнику к Вам за металлоломом'/>
                    <FeedbackItem text='Взвешивание происходит при Вас на месте.
                     Деньги Вы получаете тут же!'/>
                    <FeedbackItem text='Мы грузим металлолом
                     и если есть необходимость осуществляем демонтаж'/>
                </div>

              

                        <div className={s.feedbackForm}>
                                <div className={s.formShape}>
                                    <h3 className={s.formTitle}>ЗАКАЖИТЕ СРОЧНЫЙ ДЕМОНТАЖ МЕТАЛЛОКОНСТРУКЦИЙ</h3>
                                    
                                    <div className={s.formLabel}>
                                        <span>Заполните форму, мы свяжемся с вами в течение 10 минут!</span>
                                    </div>
                                
                                    <form className={s.formBox}>
                                            <div className={s.inputBox}>
                                                <SuperInputText placeholder ="имя"  
                                                />
                                                <SuperInputText placeholder = "номер"  
                                                />
                                                <SuperInputText placeholder = "укажите адрес, время или все, что считаете нужным"  
                                                />
                                            </div>
                                    </form>
                                
                                    <div className={s.btnWrapper}>
                                        <SuperButton/>
                                    </div>
                                    
                                </div>
                        </div>
                
            </div>
        </div>
    )
}

export default Feedback;