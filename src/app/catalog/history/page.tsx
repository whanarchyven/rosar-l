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
        <main className="">
            <p className={'font-bold font-manrope text-white mb-8 text-4xl'}>История заказов</p>
            <div className={'bg-white p-4 drop-shadow-lg rounded-xl'}>
                <div className={'w-full grid mt-4 gap-8 grid-cols-9'}>
                    <div className={'flex flex-col gap-2 col-span-6 px-4'}>
                        <div className={'grid grid-cols-9 gap-2'}>
                            <div className={'col-span-6 px-4 relative flex items-center'}>
                                <Input icon={'/images/icons/search.svg'} mutateValue={filteredName} type={'text'} placeholder={'Введите название или артикул'} mutateFunction={setFilteredName}/>
                            </div>
                            <Button callback={()=>{}} className={'h-full col-span-3 px-4'} type={'orange'}>Найти</Button>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-2 col-span-3 px-4'}>
                        <div className={'flex items-center gap-4'}>
                            <p className={'font-manrope font-bold text-black whitespace-nowrap'}>Заказы c</p>
                            <div className={'flex gap-4 items-center'}>
                                <ReactDatePicker locale="ru" calendarClassName={'font-travels'} selectsStart startDate={startDate} endDate={endDate} className={'bg-[#F8F8FA] text-center font-manrope w-full placeholder:text-black  placeholder:text-opacity-50 p-3 bg-transparent font-semibold text-black focus:border-orange focus:outline-0 p-3 w-full rounded-xl drop-shadow-md flex items-center gap-2'} dateFormat={'dd.MM.yyyy'} onChange={(date) =>{if(date){setStartDate(date)}} } selected={startDate}></ReactDatePicker>
                            </div>
                            <div className={'flex gap-4 items-center'}>
                                <p className={'font-manrope font-bold text-black'}>по</p>
                                <ReactDatePicker locale="ru" calendarClassName={'font-travels'} selectsEnd startDate={startDate} endDate={endDate} className={'bg-[#F8F8FA] text-center font-manrope w-full placeholder:text-black  placeholder:text-opacity-50 p-3 bg-transparent font-semibold text-black focus:border-orange focus:outline-0 p-3 w-full rounded-xl drop-shadow-md flex items-center gap-2'} dateFormat={'dd.MM.yyyy'} onChange={(date) =>{if(date){setEndDate(date)}} } selected={endDate}></ReactDatePicker>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'grid mt-5 drop-shadow-sm mb-4 bg-[#F8F8FA] rounded-xl font-manrope grid-cols-12'}>
                    <div
                        className={'col-span-1 px-4 font-bold text-[#004169]  flex items-center justify-center p-2'}>

                    </div>
                    <div
                        className={'col-span-2 px-4 font-bold text-[#004169]  flex items-center justify-start p-2'}>
                        Имя заказа
                    </div>
                    <div
                        className={'col-span-2 px-4 font-bold text-[#004169]  flex items-center justify-start p-2'}>
                        Адрес доставки
                    </div>
                    <div
                        className={'col-span-4 px-4 font-bold text-[#004169]  flex items-center justify-center p-2'}>
                        Товары
                    </div>
                    <div
                        className={'col-span-1 px-4 font-bold text-[#004169]  flex items-center justify-center p-2'}>
                        Дата
                    </div>

                    <div
                        className={'col-span-2 px-4 font-bold text-[#004169]  flex items-center justify-center p-2'}>
                        Счёт
                    </div>

                </div>
                {filteredOrders.map((order)=>{
                    if(order.date>=startDate&&order.date<=endDate){
                        return(
                            <div key={order.id} className={'font-manrope grid border-b-2 border-[#F1F1F1] grid-cols-12'}>
                                <div
                                    className={'col-span-1 px-4 font-medium text-xs text-blue  border-[#F1F1F1] flex items-center justify-center bg-white p-2'}>
                                    <div className={classList('text-center p-2 rounded-lg w-full font-bold leading-[100%]',order.orderStatus=='pending'?'text-orange bg-orange bg-opacity-10':'',order.orderStatus=='canceled'?'text-red-500 bg-red-500 bg-opacity-10':'',order.orderStatus=='payed'?'text-green-500 bg-opacity-10 bg-green-500':'',order.orderStatus=='delivered'?'text-blue bg-blue bg-opacity-10':'')}>
                                        {translateOrderStatus(order.orderStatus)}
                                    </div>
                                </div>
                                <div
                                    className={'col-span-2 px-4 font-bold text-blue border-r-2 border-[#F1F1F1] flex items-center justify-start bg-white p-2'}>
                                    <div className={'flex flex-col'}>
                                        <p className={'font-bold text-xs text-[#1D4770]'}>№{order.id}</p>
                                        <p className={'font-bold text-black text-sm'}>{order.name}</p>
                                    </div>
                                </div>
                                <div
                                    className={'col-span-2 px-4 font-bold text-black text-sm border-r-2 border-[#F1F1F1] flex items-center justify-start bg-white p-2'}>
                                    {order.address}
                                </div>
                                <div
                                    className={'col-span-4 px-4 font-bold text-black text-xs  border-[#F1F1F1] flex flex-col items-start justify-start bg-white p-2'}>
                                    {order.products.map((product,counter)=>{
                                        if(counter<5){
                                            return `${product.name}-${product.qnt} шт. ,`
                                        }
                                    })}
                                    {order.products.length>5?<span className={'font-bold cursor-pointer underline text-[#004169] underline'}>смотреть все</span>:null}
                                </div>
                                <div
                                    className={'col-span-1 px-4 font-bold text-black border-x-2 border-[#F1F1F1] text-sm flex items-center justify-center bg-white p-2'}>
                                    {formatDate(order.date)}
                                </div>
                                <div
                                    className={'col-span-2 px-4 font-medium text-xs text-blue border-[#F1F1F1] flex items-center justify-center bg-white p-2'}>
                                    <Button className={'w-full'} type={'orange'}>{translateOrderButton(order.orderStatus)}</Button>
                                </div>
                            </div>
                        )

                    }
                })}
            </div>
        </main>
    )
}
