import Image from 'next/image'
import Tab from "@/components/UI/Tab";
import Notification from "@/components/Notification";
import Button from "@/components/UI/Button";
import PostTab from "@/components/PostTab";
import ActionTab from "@/components/ActionTab";
import ReadMoreButton from "@/components/UI/ReadMoreButton";
import Link from "next/link";

export default function Home() {

    const notifications = [
        {
            id: '1',
            title: 'Обновление 20.06.23',
            caption: 'На нашей платформе произошли существенные изменения, добавлено: ЭЦП, статистика и... На нашей платформе произошли существенные изменения, добавлено: ЭЦП, статистика и...'
        },
        {
            id: '2',
            title: 'Обновление 20.06.23',
            caption: 'На нашей платформе произошли существенные изменения, добавлено: ЭЦП, статистика и... На нашей платформе произошли существенные изменения, добавлено: ЭЦП, статистика и...'
        },
        {
            id: '3',
            title: 'Обновление 20.06.23',
            caption: 'На нашей платформе произошли существенные изменения, добавлено: ЭЦП, статистика и... На нашей платформе произошли существенные изменения, добавлено: ЭЦП, статистика и...'
        }
    ]

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
    const actions = [
        {
            name:'Летняя акция от “ООО Интел-КО”',
            caption:'-20% на весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
        {
            name:'Летняя акция от “ООО Интел-КО”',
            caption:'-30% на весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
        {
            name:'Летняя акция от “ООО Интел-КО”',
            caption:'-40% на весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
        {
            name:'Летняя акция от “ООО Интел-КО”',
            caption:'-50% на весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
        {
            name:'Летняя акция от “ООО Интел-КО”',
            caption:'-10% на весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
        {
            name:'Летняя акция от “ООО Интел-КО”',
            caption:'-13% на весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
        {
            name:'Летняя акция от “ООО Интел-КО”',
            caption:'-15% на весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
        {
            name:'Летняя акция от “ООО Интел-КО”',
            caption:'-24% на весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
        {
            name:'Летняя акция от “ООО Интел-КО”',
            caption:'-28% на весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
    ]


    return (
        <main className="mt-5">
            <div className={'grid gap-6 grid-cols-2 grid-rows-8'}>
                <div className={'row-span-3'}>
                    <Tab title={'Объявления и оповещения'} icon={'/images/icons/notification.svg'}>
                        <div className={'w-full h-48 scrollbar overflow-y-scroll flex flex-col gap-3'}>
                            {notifications.map((notification) => {
                                return (
                                    <div key={notification.id} id={notification.id}>
                                        <Notification id={notification.id} title={notification.title}
                                                      caption={notification.caption}/>
                                    </div>)
                            })}
                        </div>
                    </Tab>
                </div>
                <div className={'row-span-3'}>
                    <Tab title={'Новости'} icon={'/images/icons/news_white.svg'}>
                        <div className={'overflow-y-scroll scrollbar p-2 h-48'}>
                            {news.map((post) => {
                                return (
                                    <div key={post.id} className={'mb-3'}>
                                        <PostTab key={post.id} id={post.id} caption={post.description} date={post.date}
                                                 image={post.image}></PostTab>
                                    </div>
                                )
                            })}
                        </div>
                    </Tab>
                </div>
                <div className={'row-span-2'}>
                    <Tab title={'Задолженность'} icon={'/images/icons/wallet_white.svg'}>
                        <p className={'text-center font-travels text-lg text-blue font-medium'}>Размер задолженности на
                            22.06.2023:</p>
                        <div className={'flex mt-3 items-center justify-between'}>
                            <p className={'font-travels font-bold text-orange text-3xl'}>25623.34 ₽</p>
                            <Button type={'orange'}>Оплатить</Button>
                        </div>
                    </Tab>
                </div>
                <div className={'row-span-2'}>
                    <Tab title={'Доступный кредит'} icon={'/images/icons/bank_white.svg'}>
                        <p className={'text-left font-travels text-lg text-blue font-medium'}>Кредитное плечо: <strong>234539784.00
                            ₽</strong></p>
                        <div className={'flex mt-3 items-center justify-between'}>
                            <p className={'text-left font-travels text-lg text-blue font-medium'}>Cрок
                                отсрочки: <strong>73 дня</strong></p>
                            <Button type={'orange'}>Составить заявку</Button>
                        </div>
                    </Tab>
                </div>
                <div className={'col-span-2'}>
                    <Tab title={'Акции и скидки'} icon={'/images/icons/check.svg'}>
                        <div className={'grid grid-cols-4 gap-8'}>
                            {actions.map((action, counter) => {
                                if (counter < 3) {
                                    return (
                                        <Link key={counter} href={{pathname:'/actions/action',query:{id:counter}}}>
                                            <ActionTab discount={action.caption.split(' ')[0]}
                                                       caption={action.caption}></ActionTab>
                                        </Link>
                                    )
                                }
                            })}
                            <Link href={{pathname:'/actions'}}>
                                <ReadMoreButton title={'Смотреть все'}></ReadMoreButton>
                            </Link>
                        </div>
                    </Tab>
                </div>
            </div>
        </main>
    )
}
