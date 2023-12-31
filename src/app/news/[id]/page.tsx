"use client"


import {useRouter, useSearchParams} from "next/navigation";
import datediff from "@/helpers/dateDiff";
import parseDate from "@/helpers/parseDate";
import Button from "@/components/UI/Button";
import Link from "next/link";
import React from "react";
import ActionBanner from "@/components/ActionBanner";
import NewsBanner from "@/components/NewsBanner";

export default function Page({params}: any) {
    const router = useRouter()
    const news = [
        {
            id: 0,
            title: 'Компания РОСАР-Л открывает представительство в Баку',
            date: '2.06.2023',
            time: '16:00',
            image: '/images/temp/news_image.jpg',
            description: 'Компания РОСАР-Л открывает представительство в Баку Компания РОСАР-Л открывает представительство в Баку Компания РОСАР-Л открывает представительство в Баку Компания РОСАР-Л открывает представительство в Баку Компания РОСАР-Л открывает представительство в Баку Компания РОСАР-Л открывает представительство в Баку Компания РОСАР-Л открывает представительство в Баку '
        },
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
        {
            id: 4,
            title: 'РОСАР-Л представляет новую серию высоковольтных выключателей',
            date: '14.10.2023',
            time: '13:30',
            image: '/images/temp/news_image.jpg',
            description: 'Мы рады представить нашу новую серию высоковольтных выключателей, которые сочетают в себе надежность, безопасность и высокую производительность. Эти выключатели предназначены для использования в энергетических сетях и электростанциях, где требуется надежное отключение и переключение высокого напряжения. Приглашаем всех заинтересованных клиентов посетить наш стенд на специализированной выставке и ознакомиться с нашей продукцией.'
        },
        {
            id: 5,
            title: 'Партнерство РОСАР-Л с ведущим производителем электротехники',
            date: '6.11.2023',
            time: '10:00',
            image: '/images/temp/news_image.jpg',
            description: 'Мы рады объявить о заключении партнерства с одним из ведущих производителей электротехники. Это сотрудничество позволит нам расширить ассортимент продукции и предоставить клиентам еще больше высококачественных решений для различных отраслей промышленности и энергетики. Мы уверены, что это партнерство принесет взаимные выгоды и поможет нам укрепить нашу позицию на рынке электротехники.'
        },
        {
            id: 6,
            title: 'РОСАР-Л запускает онлайн-магазин для заказа электротехники',
            date: '20.12.2023',
            time: '09:00',
            image: '/images/temp/news_image.jpg',
            description: 'Мы рады объявить о запуске нашего нового онлайн-магазина, где вы можете удобно и быстро заказать необходимую электротехнику и оборудование. Теперь наши клиенты смогут получить доступ к нашему ассортименту и сделать заказы с любого устройства с доступом в Интернет. Мы стремимся обеспечить максимально удобный опыт покупок для наших клиентов.'
        }
    ]


    const id = params.id;
    const post = id&&id<news.length-1 ? news[Number(id)] : news[0]

    return <div className={'w-full'}>
        <div className={'flex items-center mb-14 gap-6 relative'}>
            <Link href={'/news'}>
                <img className={'cursor-pointer w-10'} src={'/images/icons/arrow_left.svg'}/>
            </Link>
            <p className={'font-manrope text-4xl font-bold text-white'}>Новости</p>
        </div>
        <div className={'grid grid-cols-12 drop-shadow-lg bg-white rounded-xl overflow-hidden mt-5 gap-2'}>
            <div className={'col-span-6 w-full aspect-video'}>
                <img className={'w-full h-full object-cover'} src={post.image}/>
            </div>
            <div className={'col-span-6 p-5 px-7 flex flex-col gap-4'}>
                <div className={'flex items-start justify-between'}>
                    <p className={'font-bold font-manrope w-2/3 text-3xl'}>{post.title}</p>
                    <p className={'font-regular font-travels text-right text-xl'}>{post.date}</p>
                </div>
                <p className={'font-manrope text-lg text-[#676767]'}>{post.description}</p>
            </div>
        </div>
        <div className={'flex mt-8 flex-col gap-4'}>
            {news.map((news,counter)=>{
                if(counter!=id&&counter<4){
                    return(
                        <NewsBanner key={news.id} {...news}></NewsBanner>
                    )
                }
            })}

        </div>


    </div>
}