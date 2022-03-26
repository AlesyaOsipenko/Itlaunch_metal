import s from './../MainPage.module.css';
import pic from './../../../../images/MainPage/greysquare.png';
import FeedbackItem from './FeedbackItem/FeedbackItem';

const Feedback = () => {
    return (
        <div className={s.feedback}>
            <div className={s.container}>
                <h2 className={s.feedbackTitle} > <span> Работа с нами </span>
                    <span className={s.feedbackTitleWrap}> это простые три этапа: </span> 
                </h2>
                <div className={s.wrapper}>
                    <FeedbackItem text='После Вашего звонка незамедлительно
                     отправим спецтехнику к Вам за металлоломом' image={pic}/>
                    <FeedbackItem text='Взвешивание происходит при Вас на месте.
                     Деньги Вы получаете тут же!' image={pic}/>
                    <FeedbackItem text='Мы грузим металлолом
                     и если есть необходимость осуществляем демонтаж' image={pic}/>
                </div>
            </div>
        </div>
    )
}

export default Feedback;