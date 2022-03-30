import MyGoogleMap from '../../../common/GoogleMap/MyGoogleMap';
import s from './../MainPage.module.css';
import vk from './../../../../images/MainPage/vk.png';
import inst from './../../../../images/MainPage/instagram.png';
import { Map, YMaps, GeoObject, Placemark } from 'react-yandex-maps';

const Contacts = () => {
    return (
        <div className={s.contacts}>

            <div className={s.container}>
                <div className={s.contactsWrapper}>
                    <div className={s.socials}>
                        <h3 className={s.socialsTitle}>Наши контакты</h3>
                        <div className={s.socialsContent}>
                            <div className={s.phone}>
                                <span className={s.phoneTitle}>
                                    телефон:
                                </span>
                                <div className={s.phoneValue}>
                                    +7 905 203-81-34
                                </div>
                            </div>
                            <div className={s.mail}>
                                <span className={s.mailTitle}>
                                    почта:
                                </span>
                                <div className={s.mailValue}>
                                    veterok-spb@ya.ru
                                </div>
                            </div>
                            <div className={s.networks}>
                                <span className={s.networksTitle}>
                                    Мы в социальных сетях
                                </span>
                                <div className={s.networksLogos}>
                                    <a href="/"><img className={s.socialLogo} src={vk} alt="vk" /></a>
                                    <a href="/"><img className={s.socialLogo} src={inst} alt="inst" /></a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={s.placeBox}>
                        <h3 className={s.placeBoxTitle}>пункты приема лома на карте</h3>

                        <div className={s.mapBox}>

                            <YMaps>
                                <Map
                                    defaultState={{ center: [55.75, 37.57], zoom: 10 }}
                                    onLoad={ymaps => ymaps.load()}
                                    mapContainerStyle={{ width: '100%', height: '100%' }}
                                    width="100%"
                                    height="100%"
                                >
                                    <Placemark geometry={[55.75, 37.57]} />
                                    <GeoObject />
                                </Map>

                            </YMaps>
                        </div>
                    </div>
                </div>




            </div>

        </div>
    );
}

export default Contacts


