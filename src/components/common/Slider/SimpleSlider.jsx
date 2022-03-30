import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import s from './SimpleSlider.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import slider1 from './../../../images/OneServicePage/slider1.png'

export default () => {
  return ( <>
  
    <Swiper
    //   modules={[Navigation, Pagination, Scrollbar, A11y]}
    //   spaceBetween={50}
    //   slidesPerView={3}
    //   navigation
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log('slide change')}
        slidesPerView={2}
        initialSlide={1}
        centeredSlides={true}
        watchOverflow={true}
        autoHeight={false}
        spaceBetween={150}
        slidesPerGroup={1}
        freeMode={true}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        

        
    >
      <SwiperSlide><img className={s.sliderImg} src={slider1} alt="" /></SwiperSlide>
      <SwiperSlide><img className={s.sliderImg} src={slider1} alt="" /></SwiperSlide>
      <SwiperSlide><img className={s.sliderImg} src={slider1} alt="" /></SwiperSlide>

    </Swiper>
    </>
  );
};