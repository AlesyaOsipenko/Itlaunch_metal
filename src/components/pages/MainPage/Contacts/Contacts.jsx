import MyGoogleMap from '../../../common/GoogleMap/MyGoogleMap';
import s from './../MainPage.module.css';
import vk from './../../../../images/MainPage/vk.png';
import inst from './../../../../images/MainPage/instagram.png';

const Contacts = () => {
    return (
        <div className={s.contacts}>

            <div className={s.container}>
                <div className={s.contactsWrapper}>
                    <div className={s.socials}>
                        <h3 className={s.socialsTitle}>Наши контакты</h3>
                        <div className={s.socialsContent}>
                            <div className={s.phone}>
                                <div className={s.phoneTitle}>
                                    телефон: 
                                </div>
                                <div className={s.phoneValue}>
                                    +7 905 203-81-34
                                </div>      
                            </div>
                            <div className={s.mail}>
                                <div className={s.mailTitle}>
                                    почта: 
                                </div>
                                <div className={s.mailValue}>
                                    veterok-spb@ya.ru
                                </div>      
                            </div>
                            <div className={s.networks}>
                                <div className={s.networksTitle}>
                                    Мы в социальных сетях
                                </div>
                                <div className={s.networksLogos}>
                                    <a href="/"><img className={s.socialLogo} src={vk} alt="vk" /></a>
                                    <a href="/"><img className={s.socialLogo} src={inst} alt="inst" /></a>
                                </div>  
                            </div>
                        </div>
                    </div>


                    <div className={s.placeBox}>
                        <h3 className={s.placeBoxTitle}>пункты приема лома на карте</h3>
                        <div>
                            <MyGoogleMap></MyGoogleMap>
                        </div>
                    </div>
                </div>




            </div>

        </div>
    );
}

export default Contacts


