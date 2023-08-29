"use client"
import Image from 'next/image'
import Tab from "@/components/UI/Tab";
import Notification from "@/components/Notification";
import Button from "@/components/UI/Button";
import PostTab from "@/components/PostTab";
import ActionTab from "@/components/ActionTab";
import ReadMoreButton from "@/components/UI/ReadMoreButton";
import Link from "next/link";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
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
import {Swiper as SwiperType} from 'swiper';
import ReviewsSlider from "@/components/ReviewsSlider";
import FeaturesSlider from "@/components/FeaturesSlider";
import Marquee from "react-fast-marquee";
import Input from "@/components/UI/Input";
import FormCall from "@/components/FormCall";


export default function Home() {

    const news = [

        {
            id: 1,
            title: 'РОСАР-Л запускает новую линейку инверторных преобразователей',
            date: '10.07.2023',
            time: '09:30',
            image: '/images/temp/news_image.jpg',
            description: 'РОСАР-Л представляет свою новую линейку высокоэффективных инверторных преобразователей, предназначенных для использования в различных промышленных и энергетических секторах. Эти преобразователи обеспечивают стабильное и энергоэффективное функционирование оборудования, что позволяет снизить энергопотребление и операционные расходы. Приглашаем всех заинтересованных клиентов на презентацию новой продукции по адресу: [адрес].'
        },
        {
            id: 2,
            title: 'РОСАР-Л примет участие в международной выставке электротехники',
            date: '18.08.2023',
            time: '11:00',
            image: '/images/temp/news_image.jpg',
            description: 'Приглашаем посетить наш стенд на международной выставке электротехники, которая пройдет с 18 по 22 августа 2023 года. На выставке будут представлены последние инновационные разработки и технологии в области электротехники и оборудования. Наши специалисты будут рады обсудить возможные сотрудничества и ответить на все вопросы о нашей продукции и услугах.'
        },
        {
            id: 3,
            title: 'Вебинар от РОСАР-Л: Интеллектуальные системы управления энергопотреблением',
            date: '25.09.2023',
            time: '15:00',
            image: '/images/temp/news_image.jpg',
            description: 'Приглашаем всех заинтересованных лиц принять участие в нашем вебинаре, посвященном интеллектуальным системам управления энергопотреблением. Узнайте о последних технологиях и решениях, которые помогут оптимизировать энергопотребление и снизить затраты на электроэнергию. Регистрация на вебинар доступна на нашем сайте.'
        },
    ]


    return (
        <main className="">
            <div id={'main'}>
                <Swiper slidesPerView={1} speed={1000} autoplay={{delay: 3500}} effect={'fade'} pagination={true}
                        navigation={true}
                        modules={[EffectFade, Pagination, Autoplay]}
                        className={'mainswiper w-full h-screen absolute top-0 left-0 bg-blue'}>
                    <SwiperSlide className={'w-full h-full'}>
                        <img className={'w-full absolute left-0 top-0 h-full object-cover'}
                             src={'/images/slides/1.jpg'}/>
                        <div
                            className={'w-full absolute grid grid-cols-12 items-center px-[70px] gap-7 left-0 top-0 h-full bg-black bg-opacity-50'}>
                            <div className={'col-span-7 flex flex-col gap-6 items-start'}>
                                <img src={'/images/logo.svg'} className={'w-4/5'}/>
                                <p className={'font-manrope text-white font-medium text-xl'}>Электротехническая компания
                                    «РОСАР-Л» основана в 2002 году и осуществляет комплексные поставки
                                    электрооборудования для жилищного, производственного строительства и промышленности,
                                    а также осуществляет обеспечение товарами индивидуальных предпринимателей и
                                    производит прямые продажи частным лицам.</p>
                                <div className={'flex gap-6 items-center'}>
                                    <Button type={'orange'} className={'h-14 text'}>Оставить заявку</Button>
                                    <Button type={'transparent white'} className={'h-14 text'}>Регистрация</Button>
                                    <Button type={'transparent white'} className={'h-14'}>
                                        <div className={'flex items-center gap-3'}><p>Скачать прайс-лист</p><img
                                            src={'/images/landing/download.svg'}/></div>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={'w-full h-full'}>
                        <img className={'w-full absolute left-0 top-0 h-full object-cover'}
                             src={'/images/slides/2.jpg'}/>
                        <div
                            className={'w-full absolute grid grid-cols-12 items-center px-[70px] gap-7 left-0 top-0 h-full bg-black bg-opacity-50'}>
                            <div className={'col-span-7 flex flex-col gap-6 items-start'}>
                                <img src={'/images/logo.svg'} className={'w-4/5'}/>
                                <p className={'font-manrope text-white font-medium text-xl'}>Электротехническая компания
                                    «РОСАР-Л» основана в 2002 году и осуществляет комплексные поставки
                                    электрооборудования для жилищного, производственного строительства и промышленности,
                                    а также осуществляет обеспечение товарами индивидуальных предпринимателей и
                                    производит прямые продажи частным лицам.</p>
                                <div className={'flex gap-6 items-center'}>
                                    <Button type={'orange'} className={'h-14 text'}>Оставить заявку</Button>
                                    <Button type={'transparent white'} className={'h-14 text'}>Регистрация</Button>
                                    <Button type={'transparent white'} className={'h-14'}>
                                        <div className={'flex items-center gap-3'}><p>Скачать прайс-лист</p><img
                                            src={'/images/landing/download.svg'}/></div>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div id={'company'} className={'px-[70px] py-12 bg-white'}>
                <p className={'text-blue font-travels font-bold text-6xl text-center w-full'}>О компании</p>
                <div className={'flex flex-col mt-14 gap-12'}>
                    <div className={'flex gap-5 items-center'}>
                        <div className={'flex gap-6  items-center'}>
                            <img className={'w-14 aspect-square'} src={'/images/landing/company/1.svg'}/>
                            <p className={'font-manrope text-blue font-medium text-xl'}>Поставляем более 5 млн единиц
                                электрооборудования ежегодно</p>
                        </div>
                        <div className={'flex gap-6  items-center'}>
                            <img className={'w-14 aspect-square'} src={'/images/landing/company/2.svg'}/>
                            <p className={'font-manrope text-blue font-medium text-xl'}>Мы обеспечиваем
                                электрооборудованием более 100 производственных предприятий</p>
                        </div>
                    </div>
                    <div className={'flex gap-12 items-center'}>
                        <div className={'flex gap-6 w-1/3 items-center'}>
                            <img className={'w-14 aspect-square'} src={'/images/landing/company/3.svg'}/>
                            <p className={'font-manrope text-blue font-medium text-xl'}>500 клиентов по всему миру</p>
                        </div>
                        <div className={'flex gap-6 w-1/3 items-center'}>
                            <img className={'w-14 aspect-square'} src={'/images/landing/company/4.svg'}/>
                            <p className={'font-manrope text-blue font-medium text-xl'}>Ассортимент включает свыше 50
                                мировых брендов электротехники</p>
                        </div>
                        <div className={'flex gap-6 w-1/3 items-center'}>
                            <img className={'w-14 aspect-square'} src={'/images/landing/company/5.svg'}/>
                            <p className={'font-manrope text-blue font-medium text-xl'}>Более 100 проектов за 5
                                последних лет</p>
                        </div>
                    </div>
                    <div className={'flex gap-8 items-center'}>
                        <div className={'flex gap-6 items-center'}>
                            <img className={'w-14 aspect-square'} src={'/images/landing/company/6.svg'}/>
                            <p className={'font-manrope text-blue font-medium text-xl'}>Более 10 тыс. наименований
                                продукции в наличии</p>
                        </div>
                        <div className={'flex gap-6 items-center'}>
                            <img className={'w-14 aspect-square'} src={'/images/landing/company/7.svg'}/>
                            <p className={'font-manrope text-blue font-medium text-xl'}>Доставка по всей России и
                                странам СНГ</p>
                        </div>
                        <div className={'flex gap-6 items-center'}>
                            <img className={'w-14 aspect-square'} src={'/images/landing/company/8.svg'}/>
                            <p className={'font-manrope text-blue font-medium text-xl'}>20 постоянных партнеров-лидеров
                                рынка электротехники</p>
                        </div>
                    </div>

                </div>

                <div className={'mt-14'}>
                    <ReviewsSlider></ReviewsSlider>
                </div>

            </div>
            <div id={'production'} className={'px-[70px] py-12 bg-blue'}>
                <div className={'flex items-center gap-16'}>
                    <p className={'font-travels font-extrabold text-6xl text-white'}>Продукция</p>
                    <p className={'font-manrope font-normal text-xl text-white'}>ООО «РОСАР-Л» предлагает Вам
                        электротехническую продукцию различного назначения от ведущих российских и зарубежных
                        производителей, а так же нестандартное оборудование по проектам заказчика.</p>
                </div>
                <div className={'grid grid-cols-4 mt-16 gap-6'}>
                    <div className={'flex flex-col gap-4'}>
                        <div className={'bg-white rounded-lg p-5 relative flex flex-col items-start gap-3'}>
                            <p className={'font-travels font-bold text-xl'}>Автоматические выключатели серий</p>
                            <p className={'font-travels font-normal text-sm'}>OptiDin ВМ63, ВМ125
                                OptiMat A, E, D
                                серии ВА55(53)-41,43
                                Электрон Про, АВ2М, ВА57-35(39), ВА04, ВА51-35(39), АЕ20, АП50 от 0,1А до 4000А</p>
                            <div className={'rounded-full h-full w-2 bg-[#FFDA86] absolute left-0 top-0'}>

                            </div>
                        </div>
                        <div className={'bg-white rounded-lg p-5 relative flex flex-col items-start gap-3'}>
                            <p className={'font-travels font-bold text-xl'}>Рубильники и переключатели серии</p>
                            <p className={'font-travels font-normal text-sm'}>ВР, РЕ, ПРБ, ПБ, РПС, РВР</p>
                            <div className={'rounded-full h-full w-2 bg-[#FFDA86] absolute left-0 top-0'}>

                            </div>
                        </div>
                        <div className={'bg-white rounded-lg p-5 relative flex flex-col items-start gap-3'}>
                            <p className={'font-travels font-bold text-xl'}>Высоковольтное оборудование</p>
                            <ul className={'font-travels pl-4 font-normal text-sm'}>
                                <li className={'list-disc'}>разъединители</li>
                                <li className={'list-disc'}>разрядник-изолятор</li>
                                <li className={'list-disc'}>высоковольтные предохранители</li>
                                <li className={'list-disc'}>ограничители перенапряжений ОПНп</li>
                                <li className={'list-disc'}>выключатели нагрузки</li>
                                <li className={'list-disc'}>кабельные муфты</li>
                            </ul>
                            <div className={'rounded-full h-full w-2 bg-[#FFDA86] absolute left-0 top-0'}>

                            </div>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-4'}>
                        <div className={'bg-white rounded-lg p-5 relative flex flex-col items-start gap-3'}>
                            <p className={'font-travels font-bold text-xl'}>Пускатели</p>
                            <p className={'font-travels font-normal text-sm'}>ПМЛ, ПМА, ПМ12 от 10 до 250А</p>
                            <div className={'rounded-full h-full w-2 bg-[#FFDA86] absolute left-0 top-0'}>

                            </div>
                        </div>
                        <div className={'bg-white rounded-lg p-5 relative flex flex-col items-start gap-3'}>
                            <p className={'font-travels font-bold text-xl'}>Плавкие вставки</p>
                            <p className={'font-travels font-normal text-sm'}>ПН-2 и ППН33(35,37,39 и т.д.)</p>
                            <div className={'rounded-full h-full w-2 bg-[#FFDA86] absolute left-0 top-0'}>

                            </div>
                        </div>
                        <div className={'bg-white rounded-lg p-5 relative flex flex-col items-start gap-3'}>
                            <p className={'font-travels font-bold text-xl'}> Контакторы</p>
                            <ul className={'font-travels font-normal text-sm'}>КВ, КТПВ-623(624), КТ(КТП6000), МК</ul>
                            <div className={'rounded-full h-full w-2 bg-[#FFDA86] absolute left-0 top-0'}>

                            </div>
                        </div>
                        <div className={'bg-white rounded-lg p-5 relative flex flex-col items-start gap-3'}>
                            <p className={'font-travels font-bold text-xl'}>Устройство защитного отключения УЗО</p>
                            <div className={'rounded-full h-full w-2 bg-[#FFDA86] absolute left-0 top-0'}>

                            </div>
                        </div>
                        <div className={'bg-white rounded-lg p-5 relative flex flex-col items-start gap-3'}>
                            <p className={'font-travels font-bold text-xl'}>Выключатели</p>
                            <p className={'font-travels font-normal text-sm'}>ВНПР-10, ВН-32 (63, 125), ВМ63Р, ВНК,
                                ВНА</p>
                            <div className={'rounded-full h-full w-2 bg-[#FFDA86] absolute left-0 top-0'}>

                            </div>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-4'}>
                        <div className={'bg-white rounded-lg p-5 relative flex flex-col items-start gap-3'}>
                            <p className={'font-travels font-bold text-xl'}>Трансформаторы тока</p>
                            <p className={'font-travels font-normal text-sm'}>Т 0,66, ТПОЛ, ТНШЛ, ТОП, ТШП</p>
                            <div className={'rounded-full h-full w-2 bg-[#FFDA86] absolute left-0 top-0'}>

                            </div>
                        </div>
                        <div className={'bg-white rounded-lg p-5 relative flex flex-col items-start gap-3'}>
                            <p className={'font-travels font-bold text-xl'}>Вакуумные контакторы</p>
                            <p className={'font-travels font-normal text-sm'}>КВТ1.14, КПВ-604(605)и другие</p>
                            <div className={'rounded-full h-full w-2 bg-[#FFDA86] absolute left-0 top-0'}>

                            </div>
                        </div>
                        <div className={'bg-white rounded-lg p-5 relative flex flex-col items-start gap-3'}>
                            <p className={'font-travels font-bold text-xl'}>Кнопки и посты кнопочные</p>
                            <p className={'font-travels font-normal text-sm'}>КЕ, ПКЕ, ПКТ, ПКУ и другие</p>
                            <div className={'rounded-full h-full w-2 bg-[#FFDA86] absolute left-0 top-0'}>

                            </div>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-4'}>
                        <div className={'bg-white rounded-lg p-5 relative flex flex-col items-start gap-3'}>
                            <p className={'font-travels font-bold text-xl'}>Кабель </p>
                            <p className={'font-travels font-normal text-sm'}>КГ, ВВГ, ВВГнг, ВВГнг-LS, NYM, ВББШв</p>
                            <div className={'rounded-full h-full w-2 bg-[#FFDA86] absolute left-0 top-0'}>

                            </div>
                        </div>
                        <div className={'bg-white rounded-lg p-5 relative flex flex-col items-start gap-3'}>
                            <p className={'font-travels font-bold text-xl'}>Реле</p>
                            <p className={'font-travels font-normal text-sm'}>токовые, времени, промежуточные, контроля
                                фаз, тепловые реле РТТ и РТЛ, и другие</p>
                            <div className={'rounded-full h-full w-2 bg-[#FFDA86] absolute left-0 top-0'}>

                            </div>
                        </div>
                        <div className={'bg-white rounded-lg p-5 relative flex flex-col items-start gap-3'}>
                            <p className={'font-travels font-bold text-xl'}>Провод</p>
                            <p className={'font-travels font-normal text-sm'}>ПВС, ПВ-1, ПВ-3, ПУНП;</p>
                            <div className={'rounded-full h-full w-2 bg-[#FFDA86] absolute left-0 top-0'}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id={'complect'} className={'px-[70px] py-12 bg-blue'}>
                <div className={'flex items-center gap-16'}>
                    <p className={'font-travels font-extrabold text-6xl text-white'}>Комплектные устройства</p>
                </div>
                <div className={'grid grid-cols-3 mt-16 gap-6'}>
                    <div className={'flex flex-col gap-4'}>
                        <div className={'bg-white rounded-lg p-5 relative flex flex-col items-start gap-3'}>
                            <p className={'font-travels font-bold text-xl'}>Блочные бетонные комплектные
                                трансформаторные подстанции</p>
                            <p className={'font-travels font-normal text-sm'}>2БКТП, КТП киосковые на российском и
                                импортном оборудовании</p>
                            <div className={'rounded-full h-full w-2 bg-[#FFDA86] absolute left-0 top-0'}>

                            </div>
                        </div>
                        <div className={'bg-white rounded-lg p-5 relative flex flex-col items-start gap-3'}>
                            <p className={'font-travels font-bold text-xl'}>Панели распределительные типа</p>
                            <p className={'font-travels font-normal text-sm'}>ЩО70, ЩО91, ЩО93, ЩО95</p>
                            <div className={'rounded-full h-full w-2 bg-[#FFDA86] absolute left-0 top-0'}>

                            </div>
                        </div>
                        <div className={'bg-white rounded-lg p-5 relative flex flex-col items-start gap-3'}>
                            <p className={'font-travels font-bold text-xl'}>Камеры сборные</p>
                            <p className={'font-travels font-normal text-sm'}>КСО366, КСО386, КСО393, КСО395, 2УМЗ,
                                КСО298М и другие;</p>
                            <div className={'rounded-full h-full w-2 bg-[#FFDA86] absolute left-0 top-0'}>

                            </div>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-4'}>
                        <div className={'bg-white rounded-lg p-5 relative flex flex-col items-start gap-3'}>
                            <p className={'font-travels font-bold text-xl'}>Шкафы и ящики управления буровыми
                                установками</p>
                            <p className={'font-travels font-normal text-sm'}>ШГЕ, ШДГ, СОГ, ШО Б.</p>
                            <div className={'rounded-full h-full w-2 bg-[#FFDA86] absolute left-0 top-0'}>

                            </div>
                        </div>
                        <div className={'bg-white rounded-lg p-5 relative flex flex-col items-start gap-3'}>
                            <p className={'font-travels font-bold text-xl'}>Щиты автоматики и сигнализации</p>
                            <p className={'font-travels font-normal text-sm'}>Я 5000, РУСМ 5000, ОЩВ, ЩУС;</p>
                            <div className={'rounded-full h-full w-2 bg-[#FFDA86] absolute left-0 top-0'}>

                            </div>
                        </div>
                        <div className={'bg-white rounded-lg p-5 relative flex flex-col items-start gap-3'}>
                            <p className={'font-travels font-bold text-xl'}>Крановые панели</p>
                            <ul className={'font-travels font-normal text-sm'}>ДТА, ТСД, КС, ДК, К, КСДБ, ПЗКБ и
                                другие;
                            </ul>
                            <div className={'rounded-full h-full w-2 bg-[#FFDA86] absolute left-0 top-0'}>

                            </div>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-4'}>
                        <div className={'bg-white rounded-lg p-5 relative flex flex-col items-start gap-3'}>
                            <p className={'font-travels font-bold text-xl'}>Щиты распределительные</p>
                            <p className={'font-travels font-normal text-sm'}>ЩР, ШР, ПР11, ПР24, ПР8500;</p>
                            <div className={'rounded-full h-full w-2 bg-[#FFDA86] absolute left-0 top-0'}>

                            </div>
                        </div>
                        <div className={'bg-white rounded-lg p-5 relative flex flex-col items-start gap-3'}>
                            <p className={'font-travels font-bold text-xl'}>Щиты этажные</p>
                            <p className={'font-travels font-normal text-sm'}>УЭРМ, ШЛС, ШЭ от 2-6 квартир,
                                индивидуальных ШК;</p>
                            <div className={'rounded-full h-full w-2 bg-[#FFDA86] absolute left-0 top-0'}>

                            </div>
                        </div>
                        <div className={'bg-white rounded-lg p-5 relative flex flex-col items-start gap-3'}>
                            <p className={'font-travels font-bold text-xl'}>Вводно-распределительные щиты</p>
                            <p className={'font-travels font-normal text-sm'}>ВРУ, УВР;</p>
                            <div className={'rounded-full h-full w-2 bg-[#FFDA86] absolute left-0 top-0'}>

                            </div>
                        </div>
                        <div className={'bg-white rounded-lg p-5 relative flex flex-col items-start gap-3'}>
                            <p className={'font-travels font-bold text-xl'}>Ящики</p>
                            <p className={'font-travels font-normal text-sm'}>ЯВЗ, ЯРВ, ЯТП и другие</p>
                            <div className={'rounded-full h-full w-2 bg-[#FFDA86] absolute left-0 top-0'}>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div id={'features'} className={'px-[70px] py-12 bg-blue bg-[url("/images/features_bg.jpg")]'}>
                <div className={'flex items-center gap-16'}>
                    <p className={'font-travels font-extrabold text-6xl text-blue'}>Преимущества</p>
                </div>
                <div className={'flex gap-6 items-center'}>
                    <div className={'grid mt-12 w-2/3 grid-cols-2 grid-rows-2 gap-5'}>
                        <div className={'bg-white flex items-start gap-4 p-5 rounded-lg'}>
                            <img src={'/images/feature1.svg'}/>
                            <div className={'flex flex-col gap-3'}>
                                <p className={'font-manrope font-bold text-blue text-2xl'}>Персональные условия</p>
                                <p className={'font-manrope font-medium text-blue text-xl'}>В каждом случае
                                    рассматриваются отдельные условия работы</p>
                            </div>
                        </div>
                        <div className={'bg-white flex items-start gap-4 p-5 rounded-lg'}>
                            <img src={'/images/feature2.svg'}/>
                            <div className={'flex flex-col gap-3'}>
                                <p className={'font-manrope font-bold text-blue text-2xl'}>Скорость обслуживания</p>
                                <p className={'font-manrope font-medium text-blue text-xl'}>Скорость обслуживания
                                    В каждом случае рассматриваются отдельные условия работы</p>
                            </div>
                        </div>
                        <div className={'bg-white flex items-start gap-4 p-5 rounded-lg'}>
                            <img src={'/images/feature3.svg'}/>
                            <div className={'flex flex-col gap-3'}>
                                <p className={'font-manrope font-bold text-blue text-2xl'}>Бесплатные консультации</p>
                                <p className={'font-manrope font-medium text-blue text-xl'}>Бесплатные технические
                                    консультации и выезд инженера</p>
                            </div>
                        </div>
                        <div className={'bg-white flex items-start gap-4 p-5 rounded-lg'}>
                            <img src={'/images/feature4.svg'}/>
                            <div className={'flex flex-col gap-3'}>
                                <p className={'font-manrope font-bold text-blue text-2xl'}>Признанное качество</p>
                                <p className={'font-manrope font-medium text-blue text-xl'}>ООО «РОСАР-Л» победитель
                                    конкурса - «Лучший поставщик» 2013 на торговой площадке ООО «Тендерпро»</p>
                            </div>
                        </div>
                    </div>
                    <div className={'w-1/3 h-full'}>
                        <FeaturesSlider></FeaturesSlider>
                    </div>
                </div>
            </div>
            <div id={'opt'} className={'px-[70px] py-12 bg-blue'}>
                <div className={'flex items-center gap-16'}>
                    <p className={'font-travels font-extrabold text-6xl text-white'}>Оптовое партнёрство</p>

                </div>
                <div className={'flex mt-12 h-[450px] items-center relative'}>
                    <div
                        className={'bg-white absolute z-50 left-0 w-1/2 gap-4 flex flex-col items-start rounded-lg p-8'}>
                        <p className={'text-blue font-bold text-3xl'}>Дарим шанс стать нашим <br/> <span
                            className={'text-orange'}>партнёром!</span></p>
                        <ul className={'list-disc pl-4 text-xl'}>
                            <li>Конкурентные цены.</li>
                            <li>Большой выбор товаров.</li>
                            <li>Улучшенные условия доставки.</li>
                            <li>Предоставление дополнительных услуг.</li>
                            <li>Долгосрочное партнёрство.</li>
                            <li>Эксклюзивные предложения.</li>
                            <li>Взаимный рост.</li>
                        </ul>
                        <div className={'flex items-center w-full gap-4'}>
                            <Button className={'w-1/2'} type={'orange'}>Оставить заявку</Button>
                            <Button className={'w-1/2'} type={'transparent orange'}>Подробнее</Button>
                        </div>
                    </div>
                    <div
                        className={'bg-[url("/images/partnership.png")] h-96 bg-cover absolute right-[70px] w-1/2 gap-4 flex flex-col items-start rounded-lg p-8'}>

                    </div>
                </div>
            </div>
            <div id={'partners'} className={'px-[70px] py-12 bg-white'}>
                <p className={'text-blue font-travels font-bold text-6xl text-center w-full'}>Наши партнёры</p>

                <Marquee direction={'left'} gradient={false} className={'overflow-hidden my-20'}>
                    <div
                        className={'w-96 h-24 mx-5 flex gap-4 items-center bg-white p-7 rounded-lg'}>
                        <img src={'/images/landing/partners/alrosa.png'}/>
                        <div className={'flex flex-col gap-0'}>
                            <p className={'text-orange font-manrope font-extrabold text-xl'}>Алроса</p>
                            <p className={'text-blue font-manrope font-medium text-md'}>6 лет сотрудничества</p>
                            <p className={'text-blue font-manrope font-light underline text-sm'}>читать отзыв</p>
                        </div>
                    </div>
                    <div
                        className={'w-96 h-24 mx-5 flex gap-4 items-center bg-white p-7 rounded-lg'}>
                        <img src={'/images/landing/partners/kontaktor.png'}/>
                        <div className={'flex flex-col gap-0'}>
                            <p className={'text-orange font-manrope font-extrabold text-xl'}>ОАО “Контактор”</p>
                            <p className={'text-blue font-manrope font-medium text-md'}>6 лет сотрудничества</p>
                            <p className={'text-blue font-manrope font-light underline text-sm'}>читать отзыв</p>
                        </div>
                    </div>
                    <div
                        className={'w-96 h-24 mx-5 flex gap-4 items-center bg-white p-7 rounded-lg'}>
                        <img src={'/images/landing/partners/ekf.png'}/>
                        <div className={'flex flex-col gap-0'}>
                            <p className={'text-orange font-manrope font-extrabold text-xl'}>EKF</p>
                            <p className={'text-blue font-manrope font-medium text-md'}>6 лет сотрудничества</p>
                            <p className={'text-blue font-manrope font-light underline text-sm'}>читать отзыв</p>
                        </div>
                    </div>
                    <div
                        className={'w-96 h-24 mx-5 flex gap-4 items-center bg-white p-7 rounded-lg'}>
                        <img src={'/images/landing/partners/itk.png'}/>
                        <div className={'flex flex-col gap-0'}>
                            <p className={'text-orange font-manrope font-extrabold text-xl'}>IEK</p>
                            <p className={'text-blue font-manrope font-medium text-md'}>6 лет сотрудничества</p>
                            <p className={'text-blue font-manrope font-light underline text-sm'}>читать отзыв</p>
                        </div>
                    </div>
                    <div
                        className={'w-96 h-24 mx-5 flex gap-4 items-center bg-white p-7 rounded-lg'}>
                        <img src={'/images/landing/partners/keaz.png'}/>
                        <div className={'flex flex-col gap-0'}>
                            <p className={'text-orange font-manrope font-extrabold text-xl'}>КЭАЗ</p>
                            <p className={'text-blue font-manrope font-medium text-md'}>6 лет сотрудничества</p>
                            <p className={'text-blue font-manrope font-light underline text-sm'}>читать отзыв</p>
                        </div>
                    </div>
                </Marquee>

                <Marquee direction={'right'} gradient={false} className={'overflow-hidden my-20'}>
                    <div
                        className={'w-96 h-24 mx-5 flex gap-4 items-center bg-white p-7 rounded-lg'}>
                        <img src={'/images/landing/partners/sib.png'}/>
                        <div className={'flex flex-col gap-0'}>
                            <p className={'text-orange font-manrope font-extrabold text-xl'}>Алроса</p>
                            <p className={'text-blue font-manrope font-medium text-md'}>6 лет сотрудничества</p>
                            <p className={'text-blue font-manrope font-light underline text-sm'}>читать отзыв</p>
                        </div>
                    </div>
                    <div
                        className={'w-96 h-24 mx-5 flex gap-4 items-center bg-white p-7 rounded-lg'}>
                        <img src={'/images/landing/partners/tdm.png'}/>
                        <div className={'flex flex-col gap-0'}>
                            <p className={'text-orange font-manrope font-extrabold text-xl'}>ОАО “Контактор”</p>
                            <p className={'text-blue font-manrope font-medium text-md'}>6 лет сотрудничества</p>
                            <p className={'text-blue font-manrope font-light underline text-sm'}>читать отзыв</p>
                        </div>
                    </div>
                    <div
                        className={'w-96 h-24 mx-5 flex gap-4 items-center bg-white p-7 rounded-lg'}>
                        <img src={'/images/landing/partners/techic.png'}/>
                        <div className={'flex flex-col gap-0'}>
                            <p className={'text-orange font-manrope font-extrabold text-xl'}>EKF</p>
                            <p className={'text-blue font-manrope font-medium text-md'}>6 лет сотрудничества</p>
                            <p className={'text-blue font-manrope font-light underline text-sm'}>читать отзыв</p>
                        </div>
                    </div>
                    <div
                        className={'w-96 h-24 mx-5 flex gap-4 items-center bg-white p-7 rounded-lg'}>
                        <img src={'/images/landing/partners/itk.png'}/>
                        <div className={'flex flex-col gap-0'}>
                            <p className={'text-orange font-manrope font-extrabold text-xl'}>IEK</p>
                            <p className={'text-blue font-manrope font-medium text-md'}>6 лет сотрудничества</p>
                            <p className={'text-blue font-manrope font-light underline text-sm'}>читать отзыв</p>
                        </div>
                    </div>
                    <div
                        className={'w-96 h-24 mx-5 flex gap-4 items-center bg-white p-7 rounded-lg'}>
                        <img src={'/images/landing/partners/keaz.png'}/>
                        <div className={'flex flex-col gap-0'}>
                            <p className={'text-orange font-manrope font-extrabold text-xl'}>КЭАЗ</p>
                            <p className={'text-blue font-manrope font-medium text-md'}>6 лет сотрудничества</p>
                            <p className={'text-blue font-manrope font-light underline text-sm'}>читать отзыв</p>
                        </div>
                    </div>
                </Marquee>

            </div>
            <div id={'news'} className={'px-[70px] py-12 bg-blue bg-white'}>
                <div className={'flex items-center gap-16'}>
                    <p className={'font-travels font-extrabold text-6xl text-blue'}>Новости</p>
                </div>
                <div className={'flex flex-col gap-4 mt-12 items-center'}>
                    {news.map((post) => {
                        return (
                            <div key={post.id} className={'mb-3 h-60'}>
                                <PostTab key={post.id} title={post.title} id={post.id} caption={post.description}
                                         date={post.date}
                                         image={post.image}></PostTab>
                            </div>
                        )
                    })}

                </div>
            </div>

            <div id={'form'} className={'px-[70px] py-12 bg-blue bg-white'}>
                <div className={'grid grid-cols-2 items-center'}>
                    <div className={''}>
                        <img src={'/images/landing/map.png'}/>
                    </div>
                    <div className={'p-8 flex gap-4 flex-col'}>
                        <p className={'font-travels text-blue font-bold text-4xl'}>Заказать звонок</p>
                        <FormCall></FormCall>
                    </div>
                </div>
            </div>

            <div id={'contacts'} className={'px-[70px] py-12 bg-blue'}>
                <div className={'w-full grid grid-cols-4 items-start'}>
                    <div className={'h-[400px] flex flex-col justify-between'}>
                        <div className={'flex flex-col gap-8'}>
                            <p className={'font-manrope text-white text-3xl font-bold'}>Контакты</p>
                            <div className={'flex flex-col gap-4'}>
                                <p className={'font-manrope text-normal text-white pl-3 border-[#FFDA86] border-l-4'}>8-499-248-09-09</p>
                                <p className={'font-manrope text-normal text-white pl-3 border-[#FFDA86] border-l-4'}>info@rosar-L.ru</p>
                            </div>
                        </div>
                        <p className={'text-white'}>© ООО «РОСАР-Л» 2023<br/>Все права защищены
                        </p>
                    </div>
                    <div className={'h-[400px] flex flex-col justify-between'}>
                        <div className={'flex flex-col gap-8'}>
                            <p className={'font-manrope text-white text-3xl font-bold'}>Юр. информация</p>
                            <div className={'flex flex-col gap-4'}>
                                <p className={'font-manrope text-normal text-white pl-3 border-[#FFDA86] border-l-4'}>ЗАО
                                    «ЮниКредитБанк» <br/> 044525545
                                </p>
                                <p className={'font-manrope text-normal text-white pl-3 border-[#FFDA86] border-l-4'}>ИНН
                                    7704245881 </p>
                                <p className={'font-manrope text-normal text-white pl-3 border-[#FFDA86] border-l-4'}>КПП
                                    772301001
                                </p>
                                <p className={'font-manrope text-normal text-white pl-3 border-[#FFDA86] border-l-4'}>р/с
                                    40702810800010313457 </p>
                            </div>
                        </div>

                    </div>
                    <div className={'h-[400px] flex flex-col justify-between'}>
                        <div className={'flex flex-col gap-8'}>
                            <p className={'font-manrope text-white text-3xl font-bold'}>Адрес</p>
                            <div className={'flex flex-col gap-4'}>
                                <p className={'font-manrope text-normal text-white w-1/2 '}>109383,
                                    г. Москва, Батюнинский проезд, дом 11, строение 1, 3 этаж, помещение 10</p>
                            </div>
                        </div>

                    </div>
                    <div className={'h-[400px] flex flex-col justify-between'}>
                        <div className={'flex flex-col gap-8'}>

                        </div>
                        <img src={'/images/logo.svg'}/>
                    </div>
                </div>
            </div>
        </main>
    )
}
