import Image from 'next/image'
import Tab from "@/components/UI/Tab";
import Notification from "@/components/Notification";
import Button from "@/components/UI/Button";
import PostTab from "@/components/PostTab";
import ActionTab from "@/components/ActionTab";
import ReadMoreButton from "@/components/UI/ReadMoreButton";

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

    const news=[
        {
            id:'1',
            caption:'РОСАР-Л выиграла тендер на поставку электро и нано комплектующих в КНР',
            date:'20.06.2023 в 20:43',
            buttonCallback:()=>{},
            image:'/images/temp/post_image.jpg'
        },
        {
            id:'2',
            caption:'РОСАР-Л выиграла тендер на поставку электро и нано комплектующих в КНР',
            date:'20.06.2023 в 20:43',
            buttonCallback:()=>{},
            image:'/images/temp/post_image.jpg'
        },
        {
            id:'3',
            caption:'РОСАР-Л выиграла тендер на поставку электро и нано комплектующих в КНР',
            date:'20.06.2023 в 20:43',
            buttonCallback:()=>{},
            image:'/images/temp/post_image.jpg'
        },
        {
            id:'4',
            caption:'РОСАР-Л выиграла тендер на поставку электро и нано комплектующих в КНР',
            date:'20.06.2023 в 20:43',
            buttonCallback:()=>{},
            image:'/images/temp/post_image.jpg'
        },
    ]

    const actions=[
        {
            id:'1',
            discount:'-5%',
            caption:'На обслуживание сервера'
        },
        {
            id:'2',
            discount:'-21%',
            caption:'На консультации юриста'
        },
        {
            id:'3',
            discount:'-40%',
            caption:'При покупке нового тарифа'
        },
    ]


    return (
        <main className="mt-5">
            <div className={'grid gap-6 grid-cols-2'}>
                <div className={'flex flex-col gap-4'}>
                    <Tab title={'Объявления и оповещения'} icon={'/images/icons/notification.svg'}>
                        <div className={'w-full h-48 scrollbar overflow-y-scroll flex flex-col gap-3'}>
                            {notifications.map((notification) => {
                                return (
                                    <div key={notification.id} id={notification.id}>
                                        <Notification id={notification.id} title={notification.title} caption={notification.caption}/>
                                    </div>)
                            })}
                        </div>
                    </Tab>
                    <Tab title={'Задолженность'} icon={'/images/icons/wallet_white.svg'}>
                        <p className={'text-center font-travels text-lg text-blue font-medium'}>Размер задолженности на 22.06.2023:</p>
                        <div className={'flex mt-3 items-center justify-between'}>
                            <p className={'font-travels font-bold text-orange text-3xl'}>25623.34 ₽</p>
                            <Button type={'orange'}>Оплатить</Button>
                        </div>
                    </Tab>
                    <Tab title={'Доступный кредит'} icon={'/images/icons/bank_white.svg'}>
                        <p className={'text-left font-travels text-lg text-blue font-medium'}>Кредитное плечо: <strong>234539784.00 ₽</strong></p>
                        <div className={'flex mt-3 items-center justify-between'}>
                            <p className={'text-left font-travels text-lg text-blue font-medium'}>Cрок отсрочки: <strong>73 дня</strong></p>
                            <Button type={'orange'}>Составить заявку</Button>
                        </div>
                    </Tab>
                </div>
                <div className={'h-full'}>
                    <Tab isRelative={true} title={'Новости'} icon={'/images/icons/news_white.svg'}>
                        <div className={'overflow-y-scroll scrollbar p-2 max-h-[530px]'}>
                            {news.map((post)=>{
                                return(
                                    <div key={post.id} className={'mb-3'}>
                                        <PostTab key={post.id} id={post.id} caption={post.caption} date={post.date} image={post.image}></PostTab>
                                    </div>
                                )
                            })}
                        </div>
                    </Tab>
                </div>
            </div>
            <div className={'w-full mt-4'}>
                <Tab title={'Акции и скидки'} icon={'/images/icons/check.svg'}>
                    <div className={'grid grid-cols-4 gap-8'}>
                        {actions.map((action,counter)=>{
                            if(counter<3){
                                return(
                                    <ActionTab key={action.id} discount={action.discount} caption={action.caption}></ActionTab>
                                )
                            }
                        })}
                        <ReadMoreButton title={'Смотреть все'}></ReadMoreButton>
                    </div>
                </Tab>
            </div>
        </main>
    )
}
