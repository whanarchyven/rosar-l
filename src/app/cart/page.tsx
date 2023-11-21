"use client"
import Image from 'next/image'
import {useEffect, useState} from "react";
import FilterCategory from "@/components/FilterCategory";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import {classList} from "@/helpers/classList";
import ProductQntPicker from "@/components/ProductQntPicker";
import Pagination from "@/components/UI/Pagination";
import Link from "next/link";
import Select from "@/components/UI/Select";
import {useNotification} from "react-hook-notification";

export default function Home() {
    const [cartProducts, setCartProducts] = useState<any>([])

    const [productsQnt,setProductsQnt]=useState(0)
    const [productsTotalPrice,setProductsTotalPrice]=useState(0)

    useEffect(()=>{
        let tempQnt=0;
        let tempTotalPrice=0
        cartProducts.map((product:any)=>{
            tempQnt+=product?.qnt
            tempTotalPrice+=product?.product?.price*product?.qnt
        })
        setProductsQnt(tempQnt)
        setProductsTotalPrice(tempTotalPrice)
    },[cartProducts])

    useEffect(()=>{
        window?.localStorage.getItem('products')!=null?setCartProducts(JSON.parse(String(window?.localStorage.getItem('products')))):[]
    },[])

    const [warehouses,setWarehouses]=useState(['Реутов, пр. Ленина 5 к2','Москва, ул. Минина д.123','Балашиха, ул. Карла Маркса д.64'])
    const [currentWarehouse,setCurrentWarehouse]=useState(warehouses[0])
    const [orderName,setOrderName]=useState('')
    const deliveryVariants=[{value:'Самовывоз со склада на Бауманской'},{value:'Доставка на склад покупателя'}]

    const [deliveryVariant,setDeliveryVariant]=useState(deliveryVariants[0])

    const deliveryCompanyVariants=[{value:'Доставка МО и Москва - 3000 руб. (от 50 тыс. бесплатно)'},{value:'Доставка до ТК - 300 руб. (от 50 тыс. бесплатно)'}]
    const [deliveryCompanyVariant,setDeliveryCompanyVariant]=useState(deliveryCompanyVariants[0]);


    const notification = useNotification();

    return (
        <main className="mt-5">
            <p className={'font-bold font-manrope text-white mb-8 text-4xl'}>Корзина</p>

            <div className={'grid grid-cols-6 gap-6 p-4 items-start rounded-xl p-6 drop-shadow-lg bg-white'}>
                <div className={'relative col-span-4 scrollbar '}>
                    <div className={'grid grid-cols-12 px-2 bg-[#F8F8FA] rounded-xl font-manrope'}>
                        <div
                            className={'col-span-3 font-bold text-[#004169] flex items-center justify-start p-2'}>
                            Наименование
                        </div>
                        <div
                            className={'col-span-2 font-bold text-[#004169] flex items-center justify-center p-2'}>
                            Цена
                        </div>
                        <div
                            className={'col-span-2 font-bold text-[#004169] flex items-center justify-center p-2'}>
                            О товаре
                        </div>
                        <div
                            className={'col-span-3 font-bold text-[#004169] flex items-center justify-center p-2'}>
                            Количество
                        </div><div
                        className={'col-span-2 font-bold text-[#004169] flex items-center justify-center p-2'}>

                    </div>


                    </div>
                    {cartProducts.map((product:any, counter:number) => {
                        if (counter < 10) {
                            return (
                                <div key={counter} className={'grid grid-cols-12 border-b-2 border-[#F1F1F1]'}>
                                    <div
                                        className={'col-span-3 text-blue border-r-2 border-[#F1F1F1] flex items-center justify-start bg-white p-2'}>
                                        <div className={'flex gap-2 items-center'}>
                                            <img className={'w-12 aspect-square object-cover'} src={product.product.image}/>
                                            <div className={'flex flex-col'}>

                                                <div className={'flex gap-2 items-center'}>
                                                    <p className={'text-md font-manrope text-black font-semibold'}>{product.product.name}</p>

                                                </div>
                                                <p className={'text-sm font-manrope text-[#004169] font-regular'}>Артикул: {product.product.sk}</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={'font-manrope col-span-2 font-bold text-black border-r-2 border-[#F1F1F1] flex items-center justify-center bg-white p-2'}>
                                        {product.product.price} ₽/шт.
                                    </div>
                                    <div
                                        className={'col-span-2 font-bold text-blue border-r-2 border-[#F1F1F1] flex items-center justify-center bg-white p-2'}>
                                        <Link href={`/catalog/${product.id}`}>
                                            <p className={'text-md font-manrope underline text-[#004169] font-semibold'}>Подробнее</p>
                                        </Link>
                                    </div>
                                    <div
                                        className={'col-span-3 font-bold text-blue border-[#F1F1F1] flex items-center justify-center bg-white'}>
                                        <ProductQntPicker initialValue={product.qnt} product={product.product}></ProductQntPicker>
                                    </div>
                                    <div
                                        className={'col-span-2 font-normal text-blue border-r-2 border-[#F1F1F1] flex items-center justify-center bg-white p-2'}>
                                        <Button callback={()=>{
                                            let temp=[...cartProducts]
                                            temp.splice(counter,1)
                                            setCartProducts([...temp])
                                            window?.localStorage.setItem('products',JSON.stringify(temp))
                                        }} type={'orange'}>Удалить</Button>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>

                <div className={'grid col-span-2 gap-8 grid-cols-1'}>
                    <div className={'flex flex-col gap-6 items-start'}>
                        <p className={'uppercase font-extrabold text-3xl font-manrope '}>Итого:</p>
                        <p className={'font-bold text-xl font-manrope '}>Выбрано {productsQnt} товаров на сумму {productsTotalPrice} рублей 00 коп.</p>
                        <div className={'flex flex-col w-full'}>
                            <p className={'text-lg text-black font-bold font-manrope'}>Имя заказа</p>
                            <Input type={'text'} mutateValue={orderName} mutateFunction={setOrderName} placeholder={'Заказ от 24.07'}></Input>
                        </div>
                        <div className={'flex flex-col w-full'}>
                            <FilterCategory isDefaultOpen={true} isMutatable={true} variants={deliveryVariants} currentValue={deliveryVariant} setCurrentValue={setDeliveryVariant} type={'radio'} title={'Выберите способ доставки'}></FilterCategory>
                        </div>
                    </div>
                    {deliveryVariant?.value=='Доставка на склад покупателя'?<div className={'flex flex-col gap-3 items-start'}>
                        <div className={'flex flex-col w-full'}>
                            <p className={'text-lg text-blue font-medium'}>Выберите склад для доставки</p>
                            <Select current={currentWarehouse} mutateVariants={setWarehouses} variants={[...warehouses]} mutateFunction={setCurrentWarehouse}></Select>
                        </div>
                    </div>:null}
                    {deliveryVariant?.value=='Доставка на склад покупателя'?<div className={'flex flex-col w-full'}>
                        <FilterCategory isDefaultOpen={true} isMutatable={true} variants={deliveryCompanyVariants} currentValue={deliveryCompanyVariant} setCurrentValue={setDeliveryCompanyVariant} type={'radio'} title={'Выберите способ доставки на склад'}></FilterCategory>
                    </div>:null}
                    <div className={'flex flex-col gap-3 items-start'}>
                        <div className={'flex flex-col w-full'}>
                            <p className={'text-lg text-blue font-medium'}>Стоимость доставки: <strong>12599 ₽</strong></p>
                            <Button callback={()=>{notification.warning({
                                title:'Уведомление',
                                text:'У вас выходит срок оплаты заказа #123567',
                                position:'bottom-right'
                            })}} className={'h-full'} type={'orange'}>Выставить счёт на оплату</Button>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}
