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
            caption:'-20% На весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
        {
            name:'Летняя акция от “ООО Интел-КО”',
            caption:'-30% На весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
        {
            name:'Летняя акция от “ООО Интел-КО”',
            caption:'-40% На весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
        {
            name:'Летняя акция от “ООО Интел-КО”',
            caption:'-50% На весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
        {
            name:'Летняя акция от “ООО Интел-КО”',
            caption:'-10% На весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
        {
            name:'Летняя акция от “ООО Интел-КО”',
            caption:'-13% На весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
        {
            name:'Летняя акция от “ООО Интел-КО”',
            caption:'-15% На весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
        {
            name:'Летняя акция от “ООО Интел-КО”',
            caption:'-24% На весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
        {
            name:'Летняя акция от “ООО Интел-КО”',
            caption:'-28% На весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
    ]


    return (
        <main className="mt-5">
            <div className={'grid gap-6 grid-rows-3 grid-cols-3'}>
                <div className={'h-60'}>
                    <Tab subtitle={'Выберите комплектующие'} title={'Товары'} icon={'/images/tab/cart.svg'}>
                        <div className={'w-full flex justify-between items-start'}>
                            <div className={'flex flex-col'}>
                                <p className={'text-[#676767] font-medium text-sm'}>Вы выбрали товаров на:</p>
                                <p className={'text-black font-bold text-3xl'}>463000,34 ₽</p>
                            </div>
                            <div className={'flex flex-col gap-2'}>
                                <Link href={'/catalog'} className={'flex w-36 items-center justify-center p-3 text-xs bg-orange border-2 border-orange rounded-lg text-white font-manrope font-bold'}>
                                    Перейти в каталог
                                </Link>
                                <Link href={'/cart'} className={'flex w-36 items-center justify-center p-3 text-xs border-2 border-orange rounded-lg text-orange font-manrope font-bold'}>
                                    Перейти в корзину
                                </Link>
                            </div>


                        </div>
                    </Tab>
                </div>
                <div className={'h-60'}>
                    <Tab subtitle={'Задолженности на 22.06.2023:'} title={'Задолженность'} icon={'/images/tab/debpt.svg'}>
                        <div className={'flex mt-3 items-center justify-between'}>
                            <p className={'font-travels font-bold text-black text-3xl'}>25623.34 ₽</p>
                            <div className={'flex w-36 items-center justify-center p-3 text-xs bg-orange border-2 border-orange rounded-lg text-white font-manrope font-bold'}>
                                Оплатить
                            </div>
                        </div>
                    </Tab>
                </div>
                <div className={'h-60'}>
                    <Tab subtitle={'Срок отсрочки: 73 дня'} title={'Доступный кредит'} icon={'/images/tab/credit.svg'}>
                        <div className={'flex mt-3 items-center justify-between'}>
                            <p className={'font-travels font-bold text-black text-3xl'}>51837423,34 ₽</p>
                            <div className={'flex w-36 items-center justify-center p-3 text-xs bg-orange border-2 border-orange rounded-lg text-white font-manrope font-bold'}>
                                Оставить заявку
                            </div>
                        </div>
                    </Tab>
                </div>
                <div className={'row-span-2 col-span-2'}>
                    <Tab title={'Новости'} icon={'/images/tab/news.svg'}>
                        <div className={'overflow-y-scroll scrollbar p-2 h-96'}>
                            {news.map((post) => {
                                return (
                                    <div key={post.id} className={'mb-3'}>
                                        <PostTab key={post.id} title={post.title} id={post.id} caption={post.description} date={post.date}
                                                 image={post.image}></PostTab>
                                    </div>
                                )
                            })}
                        </div>
                    </Tab>
                </div>


                <div className={'row-span-2 col-span-1'}>
                    <Tab title={'Акции и скидки'} icon={'/images/tab/actions.svg'}>
                        <div className={'grid grid-cols-1 gap-8'}>
                            {actions.map((action, counter) => {
                                if (counter < 3) {
                                    return (
                                        <Link key={counter} href={`/actions/${counter}`}>
                                            <ActionTab discount={action.caption.split(' ')[0]}
                                                       caption={action.caption}></ActionTab>
                                        </Link>
                                    )
                                }
                            })}
                        </div>
                    </Tab>
                </div>
            </div>
        </main>
    )
}
