import React, {useCallback} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {
    Mousewheel,
    EffectCoverflow,
    Pagination,
    Autoplay,
    EffectCards,
    EffectCreative,
    EffectCube,
    EffectFade,
    EffectFlip
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import {useRef} from "react";

const ReviewsSlider = () => {

    const sliderRef = useRef() as any;

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current?.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current?.swiper.slideNext();
    }, []);



    return (
        <div className={'flex justify-center items-center'}>
            <div className={'flex items-center justify-center w-full h-fit'}>
                <Swiper ref={sliderRef} speed={1000} loop={true} autoplay={{delay: 3500}} slidesPerView={1} centeredSlides={true}
                        pagination={true}
                        modules={[EffectFade, Pagination, Autoplay, EffectCoverflow]}
                        className={'reviews-swiper w-full h-full'}>
                    <SwiperSlide className={'w-full h-full rounded-lg overflow-hidden'}>
                        <div className={'flex justify-center'}>
                            <img src={'/images/certificate.png'}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={'w-full h-full rounded-lg overflow-hidden'}>
                        <div className={'flex justify-center'}>
                            <img src={'/images/certificate.png'}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={'w-full h-full rounded-lg overflow-hidden'}>
                        <div className={'flex justify-center'}>
                            <img src={'/images/certificate.png'}/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default ReviewsSlider;