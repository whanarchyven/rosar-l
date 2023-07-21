"use client"
import Image from 'next/image'
import ActionBanner from "@/components/ActionBanner";
import {useEffect, useState} from "react";
import Pagination from "@/components/UI/Pagination";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import ReactDatePicker,{ registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru"; // the locale you want
registerLocale("ru", ru); // register it with the name you want
import "react-datepicker/dist/react-datepicker.css";
import formatDate from "@/helpers/formatDate";
import {classList} from "@/helpers/classList";

export default function Home() {

    const [currentPage,setCurrentPage]=useState(1)

    const [filteredName,setFilteredName]=useState<string>('')


    const [startDate, setStartDate] = useState(new Date(2023,2,14));

    const [endDate, setEndDate] = useState(new Date(2023,2,25));

    const orders:Array<{
        date:Date
        id:number,
        name:string,
        address:string,
        products:Array<{name:string,qnt:number}>,
        order:number,
        orderStatus:'pending'|'canceled'|'payed'|'delivered',
    }>=[
        {
            date:new Date(2023,2,14),
            id:432675775689,
            name:'Контрольная закупка',
            address:'Москва, ул. Минина д.123',
            products:[{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63}],
            order:123125,
            orderStatus:'pending',
        },
        {
            date:new Date(2023,2,15),
            id:432675775681,
            name:'Контрольная закупка',
            address:'Москва, ул. Минина д.123',
            products:[{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63}],
            order:123125,
            orderStatus:'canceled',
        },
        {
            date:new Date(2023,2,16),
            id:432675775682,
            name:'Контрольная закупка',
            address:'Москва, ул. Минина д.123',
            products:[{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63}],
            order:123125,
            orderStatus:'payed',
        },
        {
            date:new Date(2023,2,17),
            id:432675775683,
            name:'Контрольная закупка',
            address:'Москва, ул. Минина д.123',
            products:[{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63}],
            order:123125,
            orderStatus:'delivered',
        },
        {
            date:new Date(2023,2,18),
            id:412675775689,
            name:'Контрольная закупка',
            address:'Москва, ул. Минина д.123',
            products:[{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63}],
            order:123125,
            orderStatus:'pending',
        },
        {
            date:new Date(2023,2,19),
            id:422675775681,
            name:'Контрольная закупка',
            address:'Москва, ул. Минина д.123',
            products:[{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63}],
            order:123125,
            orderStatus:'canceled',
        },
        {
            date:new Date(2023,2,20),
            id:433675775682,
            name:'Контрольная закупка',
            address:'Москва, ул. Минина д.123',
            products:[{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63}],
            order:123125,
            orderStatus:'payed',
        },
        {
            date:new Date(2023,2,21),
            id:442675775683,
            name:'Контрольная закупка',
            address:'Москва, ул. Минина д.123',
            products:[{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63}],
            order:123125,
            orderStatus:'delivered',
        },
        {
            date:new Date(2023,2,22),
            id:132675775689,
            name:'Контрольная закупка',
            address:'Москва, ул. Минина д.123',
            products:[{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63}],
            order:123125,
            orderStatus:'pending',
        },
        {
            date:new Date(2023,2,23),
            id:232675775681,
            name:'Контрольная закупка',
            address:'Москва, ул. Минина д.123',
            products:[{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63}],
            order:123125,
            orderStatus:'canceled',
        },
        {
            date:new Date(2023,2,24),
            id:332675775682,
            name:'Основная закупка',
            address:'Москва, ул. Минина д.123',
            products:[{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63}],
            order:123125,
            orderStatus:'payed',
        },
        {
            date:new Date(2023,2,25),
            id:532675775683,
            name:'Контрольная закупка',
            address:'Москва, ул. Минина д.123',
            products:[{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63}],
            order:123125,
            orderStatus:'delivered',
        }
    ]

    const filterByName=(arr:typeof orders, query:string)=> {
        if(query==''){
            return orders
        }
        return arr.filter((el:typeof orders[0]) => el.name.toLowerCase().includes(query.toLowerCase()));
    }


    const [filteredOrders,setFilteredOrders]=useState(orders)

    useEffect(()=>{
        if(filteredName!=''){
            setFilteredOrders([...filterByName(orders,filteredName)])
        }
    },[filteredName])

    const translateOrderStatus=(status:'pending'|'canceled'|'payed'|'delivered')=>{
        switch (status){
            case "pending":return 'Ожидает оплаты'
            case "canceled": return 'Отменён'
            case "payed": return 'Оплачен'
            case 'delivered':return 'Доставлен'
            default: return ''
        }
    }

    const translateOrderButton=(status:'pending'|'canceled'|'payed'|'delivered')=>{
        switch (status){
            case "pending":return 'Оплатить'
            case "canceled": return 'Повторить'
            case "payed": return 'Отследить'
            case 'delivered':return 'Накладная'
            default: return ''
        }
    }

    return (
        <main className="mt-5">
            <p className={'font-bold font-travels text-blue text-3xl'}>История заказов</p>
            <div className={'w-full grid mt-4 gap-8 grid-cols-9'}>
                <div className={'flex flex-col gap-2 col-span-6'}>
                    <p className={'text-2xl text-blue font-medium'}>Поиск заказа по названию</p>
                    <div className={'grid grid-cols-9 gap-2'}>
                        <div className={'col-span-6 relative flex items-center'}>
                            <Input mutateValue={filteredName} type={'text'} placeholder={'Введите название или артикул'} mutateFunction={setFilteredName}/>
                            {filteredName!=''?<img onClick={()=>{setFilteredName('')}} className={'cursor-pointer right-2 absolute w-4 aspect-square'} src={'/images/icons/close_orange.svg'}/>:null}
                        </div>
                        <Button callback={()=>{}} className={'h-full col-span-3'} type={'orange'}>Найти</Button>
                    </div>
                </div>
                <div className={'flex flex-col gap-2 col-span-3'}>
                    <p className={'text-2xl text-blue font-medium'}>Отобразить заказы</p>
                    <div className={'grid grid-cols-2 gap-4'}>
                        <div className={'flex gap-2 items-center'}>
                            <p className={'font-bold text-blue'}>с</p>
                            <ReactDatePicker locale="ru" calendarClassName={'font-travels'} selectsStart startDate={startDate} endDate={endDate} className={'focus:outline-0 text-center border-2 w-32 border-blue p-3 font-bold text-blue'} dateFormat={'dd.MM.yyyy'} onChange={(date) =>{if(date){setStartDate(date)}} } selected={startDate}></ReactDatePicker>
                        </div>
                        <div className={'flex gap-2 items-center'}>
                            <p className={'font-bold text-blue'}>по</p>
                            <ReactDatePicker locale="ru" calendarClassName={'font-travels'} selectsEnd startDate={startDate} endDate={endDate} className={'focus:outline-0 text-center border-2 w-32 border-blue p-3 font-bold text-blue'} dateFormat={'dd.MM.yyyy'} onChange={(date) =>{if(date){setEndDate(date)}} } selected={endDate}></ReactDatePicker>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'grid mt-5 grid-cols-12'}>
                <div
                    className={'col-span-1 font-bold text-white border-r-2 border-white flex items-center justify-start bg-blue p-2'}>
                    Дата
                </div>
                <div
                    className={'col-span-2 font-bold text-white border-r-2 border-white flex items-center justify-start bg-blue p-2'}>
                    Имя заказа
                </div>
                <div
                    className={'col-span-2 font-bold text-white border-r-2 border-white flex items-center justify-start bg-blue p-2'}>
                    Адрес доставки
                </div>
                <div
                    className={'col-span-4 font-bold text-white border-r-2 border-white flex items-center justify-start bg-blue p-2'}>
                    Товары
                </div>
                <div
                    className={'col-span-1 font-bold text-white border-r-2 border-white flex items-center justify-center bg-blue p-2'}>
                    Счёт
                </div>
                <div
                    className={'col-span-2 font-bold text-white border-r-2 border-blue flex items-center justify-center bg-blue p-2'}>

                </div>
            </div>
            {filteredOrders.map((order)=>{
                if(order.date>=startDate&&order.date<=endDate){
                    return(
                        <div key={order.id} className={'grid border-b-2 border-blue grid-cols-12'}>
                            <div
                                className={'col-span-1 font-bold text-blue border-x-2 border-blue text-xs flex items-center justify-start bg-white p-2'}>
                                {formatDate(order.date)}
                            </div>
                            <div
                                className={'col-span-2 font-bold text-blue border-r-2 border-blue flex items-center justify-start bg-white p-2'}>
                                <div className={'flex flex-col'}>
                                    <p className={'font-medium text-xs text-orange'}>{order.id}</p>
                                    <p className={'text-blue text-xs'}>{order.name}</p>
                                </div>
                            </div>
                            <div
                                className={'col-span-2 font-medium text-xs text-blue border-r-2 border-blue flex items-center justify-start bg-white p-2'}>
                                {order.address}
                            </div>
                            <div
                                className={'col-span-4 font-medium text-xs text-blue border-r-2 border-blue flex flex-col items-start justify-start bg-white p-2'}>
                                {order.products.map((product,counter)=>{
                                    if(counter<5){
                                        return `${product.name}-${product.qnt} шт. ,`
                                    }
                                })}
                                {order.products.length>5?<span className={'font-bold cursor-pointer underline text-orange'}>смотреть все</span>:null}
                            </div>
                            <div
                                className={'col-span-1 font-medium text-xs text-blue border-r-2 border-blue flex items-center justify-center bg-white p-2'}>
                                <div className={'flex flex-col font-bold'}>
                                    <p className={'text-center'}>№{order.order}</p>
                                    <p className={classList('text-center leading-[100%]',order.orderStatus=='pending'?'text-orange':'',order.orderStatus=='canceled'?'text-red-500':'',order.orderStatus=='payed'?'text-green-500':'',order.orderStatus=='delivered'?'text-blue':'')}>{translateOrderStatus(order.orderStatus)}</p>
                                </div>
                            </div>
                            <div
                                className={'col-span-2 font-medium text-xs text-blue border-r-2 border-blue flex items-center justify-center bg-white p-2'}>
                                <Button className={'w-full'} type={'white'}>{translateOrderButton(order.orderStatus)}</Button>
                            </div>
                        </div>
                    )

                }
            })}
        </main>
    )
}
