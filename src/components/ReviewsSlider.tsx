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
                <div onClick={handlePrev} className={'w-14 cursor-pointer mr-12 flex items-center justify-center p-4 aspect-square rounded-full border-2 border-orange'}>
                    <img src={'/images/slide_prev.svg'} className={'w-full pr-1 h-full'}/>
                </div>

                <Swiper ref={sliderRef} speed={1000} loop={true} autoplay={{delay: 3500}} slidesPerView={2} centeredSlides={true}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: -10,
                            depth: 300,
                            modifier: 3,
                            slideShadows: true,

                        }}
                        effect={'coverflow'} navigation={true}
                        modules={[EffectFade, Pagination, Autoplay, EffectCoverflow]}
                        className={'reviews-swiper w-full h-full'}>
                    <SwiperSlide className={'w-full h-full rounded-lg overflow-hidden'}>
                        <div className={'w-full gap-5 grid grid-cols-3 items-center bg-[#F6F6F6] p-4'}>
                            <div className={'col-span-1'}>
                                <img className={'w-full'} src={'/images/landing/partners/oboron.png'}/>
                            </div>
                            <div className={'col-span-2 flex flex-col gap-2'}>
                                <p className={'font-travels font-bold text-blue border-l-8 border-orange pl-2 text-2xl'}>ООО
                                    &quot;РОСАТОМ&quot;</p>
                                <p className={'text-blue text-sm'}>Мы хотели бы выразить нашу искреннюю благодарность компании &quot;РОСАР-Л&quot; за
                                    их надежное партнерство и комплексные поставки электрооборудования. С
                                    момента нашего первого сотрудничества в 2002 году, &quot;РОСАР-Л&quot; стала
                                    надёжным и проверенным поставщиком электротехнической продукции для
                                    наших проектов.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={'w-full h-full rounded-lg overflow-hidden'}>
                        <div className={'w-full gap-5 grid grid-cols-3 items-center bg-[#F6F6F6] p-4'}>
                            <div className={'col-span-1'}>
                                <img className={'w-full'} src={'/images/landing/partners/rosatom.png'}/>
                            </div>
                            <div className={'col-span-2 flex flex-col gap-2'}>
                                <p className={'font-travels font-bold text-blue border-l-8 border-orange pl-2 text-2xl'}>ООО
                                    &quot;РОСАТОМ&quot;</p>
                                <p className={'text-blue text-sm'}>Мы хотели бы выразить нашу искреннюю благодарность компании &quot;РОСАР-Л&quot; за
                                    их надежное партнерство и комплексные поставки электрооборудования. С
                                    момента нашего первого сотрудничества в 2002 году, &quot;РОСАР-Л&quot; стала
                                    надёжным и проверенным поставщиком электротехнической продукции для
                                    наших проектов.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={'w-full h-full rounded-lg overflow-hidden'}>
                        <div className={'w-full gap-5 grid grid-cols-3 items-center bg-[#F6F6F6] p-4'}>
                            <div className={'col-span-1'}>
                                <img className={'w-full'} src={'/images/landing/partners/oboron.png'}/>
                            </div>
                            <div className={'col-span-2 flex flex-col gap-2'}>
                                <p className={'font-travels font-bold text-blue border-l-8 border-orange pl-2 text-2xl'}>ООО
                                    &quot;РОСАТОМ&quot;</p>
                                <p className={'text-blue text-sm'}>Мы хотели бы выразить нашу искреннюю благодарность компании &quot;РОСАР-Л&quot; за
                                    их надежное партнерство и комплексные поставки электрооборудования. С
                                    момента нашего первого сотрудничества в 2002 году, &quot;РОСАР-Л&quot; стала
                                    надёжным и проверенным поставщиком электротехнической продукции для
                                    наших проектов.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={'w-full h-full rounded-lg overflow-hidden'}>
                        <div className={'w-full gap-5 grid grid-cols-3 items-center bg-[#F6F6F6] p-4'}>
                            <div className={'col-span-1'}>
                                <img className={'w-full'} src={'/images/landing/partners/rosatom.png'}/>
                            </div>
                            <div className={'col-span-2 flex flex-col gap-2'}>
                                <p className={'font-travels font-bold text-blue border-l-8 border-orange pl-2 text-2xl'}>ООО
                                    &quot;РОСАТОМ&quot;</p>
                                <p className={'text-blue text-sm'}>Мы хотели бы выразить нашу искреннюю благодарность компании &quot;РОСАР-Л&quot; за
                                    их надежное партнерство и комплексные поставки электрооборудования. С
                                    момента нашего первого сотрудничества в 2002 году, &quot;РОСАР-Л&quot; стала
                                    надёжным и проверенным поставщиком электротехнической продукции для
                                    наших проектов.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={'w-full h-full rounded-lg overflow-hidden'}>
                        <div className={'w-full gap-5 grid grid-cols-3 items-center bg-[#F6F6F6] p-4'}>
                            <div className={'col-span-1'}>
                                <img className={'w-full'} src={'/images/landing/partners/oboron.png'}/>
                            </div>
                            <div className={'col-span-2 flex flex-col gap-2'}>
                                <p className={'font-travels font-bold text-blue border-l-8 border-orange pl-2 text-2xl'}>ООО
                                    &quot;РОСАТОМ&quot;</p>
                                <p className={'text-blue text-sm'}>Мы хотели бы выразить нашу искреннюю благодарность компании &quot;РОСАР-Л&quot; за
                                    их надежное партнерство и комплексные поставки электрооборудования. С
                                    момента нашего первого сотрудничества в 2002 году, &quot;РОСАР-Л&quot; стала
                                    надёжным и проверенным поставщиком электротехнической продукции для
                                    наших проектов.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={'w-full h-full rounded-lg overflow-hidden'}>
                        <div className={'w-full gap-5 grid grid-cols-3 items-center bg-[#F6F6F6] p-4'}>
                            <div className={'col-span-1'}>
                                <img className={'w-full'} src={'/images/landing/partners/rosatom.png'}/>
                            </div>
                            <div className={'col-span-2 flex flex-col gap-2'}>
                                <p className={'font-travels font-bold text-blue border-l-8 border-orange pl-2 text-2xl'}>ООО
                                    &quot;РОСАТОМ&quot;</p>
                                <p className={'text-blue text-sm'}>Мы хотели бы выразить нашу искреннюю благодарность компании &quot;РОСАР-Л&quot; за
                                    их надежное партнерство и комплексные поставки электрооборудования. С
                                    момента нашего первого сотрудничества в 2002 году, &quot;РОСАР-Л&quot; стала
                                    надёжным и проверенным поставщиком электротехнической продукции для
                                    наших проектов.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={'w-full h-full rounded-lg overflow-hidden'}>
                        <div className={'w-full gap-5 grid grid-cols-3 items-center bg-[#F6F6F6] p-4'}>
                            <div className={'col-span-1'}>
                                <img className={'w-full'} src={'/images/landing/partners/oboron.png'}/>
                            </div>
                            <div className={'col-span-2 flex flex-col gap-2'}>
                                <p className={'font-travels font-bold text-blue border-l-8 border-orange pl-2 text-2xl'}>ООО
                                    &quot;РОСАТОМ&quot;</p>
                                <p className={'text-blue text-sm'}>Мы хотели бы выразить нашу искреннюю благодарность компании &quot;РОСАР-Л&quot; за
                                    их надежное партнерство и комплексные поставки электрооборудования. С
                                    момента нашего первого сотрудничества в 2002 году, &quot;РОСАР-Л&quot; стала
                                    надёжным и проверенным поставщиком электротехнической продукции для
                                    наших проектов.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div onClick={handleNext} className={'cursor-pointer w-14 ml-12 flex items-center justify-center p-4 aspect-square rounded-full border-2 border-orange'}>
                    <img src={'/images/slide_next.svg'} className={'w-full pl-1 h-full'}/>
                </div>
            </div>
        </div>
    );
};

export default ReviewsSlider;