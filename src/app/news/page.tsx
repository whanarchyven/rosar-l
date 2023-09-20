import Image from 'next/image'
import NewsBanner from "@/components/NewsBanner";
import Pagination from "@/components/UI/Pagination";

export default function Home() {

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


    return (
        <main className="">
            <p className={'font-bold font-manrope text-white mb-10 text-4xl'}>Новости</p>
            <div className={'flex flex-col mt-6 gap-6'}>
                {news.map((news)=>{
                    return(
                        <NewsBanner key={news.id} {...news}></NewsBanner>
                    )
                })}
                <Pagination currentPage={1} setCurrentPage={()=>{}} pages={6}></Pagination>
            </div>
        </main>
    )
}
