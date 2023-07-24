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
        window?.localStorage.getItem('products')!=null?JSON.parse(String(window?.localStorage.getItem('products'))):[]
    },[])

    const [warehouses,setWarehouses]=useState(['Реутов, пр. Ленина 5 к2','Москва, ул. Минина д.123','Балашиха, ул. Карла Маркса д.64'])
    const [currentWarehouse,setCurrentWarehouse]=useState(warehouses[0])
    const [orderName,setOrderName]=useState('')
    const deliveryVariants=[{value:'Самовывоз со склада на Бауманской'},{value:'Доставка на склад покупателя'}]

    const [deliveryVariant,setDeliveryVariant]=useState(null)

    return (
        <main className="mt-5">
            <div className={''}>
                <p className={'font-bold font-travels text-blue text-3xl'}>Корзина</p>
                <p className={'mt-4 font-bold text-2xl text-blue'}>Выбрано {productsQnt} товаров на сумму <span className={'text-orange'}>{productsTotalPrice} рублей</span></p>
            </div>
            <div className={'grid mt-6 gap-8 grid-cols-3'}>
                <div className={'flex flex-col gap-3 items-start'}>
                    <div className={'flex flex-col w-full'}>
                        <p className={'text-lg text-blue font-medium'}>Имя заказа</p>
                        <Input type={'text'} mutateValue={orderName} mutateFunction={setOrderName} placeholder={'Заказ от 24.07'}></Input>
                    </div>
                    <div className={'flex flex-col w-full'}>
                        <FilterCategory variants={deliveryVariants} currentValue={deliveryVariant} setCurrentValue={setDeliveryVariant} type={'radio'} title={'Выберите способ доставки'}></FilterCategory>
                    </div>
                </div>
                <div className={'flex flex-col gap-3 items-start'}>
                    <div className={'flex flex-col w-full'}>
                        <p className={'text-lg text-blue font-medium'}>Выберите склад для доставки</p>
                        <Select current={currentWarehouse} mutateVariants={setWarehouses} variants={[...warehouses]} mutateFunction={setCurrentWarehouse}></Select>
                    </div>
                </div>
                <div className={'flex flex-col gap-3 items-start'}>
                    <div className={'flex flex-col w-full'}>
                        <p className={'text-lg text-blue font-medium'}>Стоимость доставки: <strong>12599 ₽</strong></p>
                        <Button className={'h-full'} type={'orange'}>Выставить счёт на оплату</Button>
                    </div>
                </div>
            </div>

            <div className={'relative mt-6 scrollbar border-2 border-blue'}>
                <div className={'grid grid-cols-12'}>
                    <div
                        className={'col-span-4 font-bold text-white border-r-2 border-white flex items-center justify-start bg-blue p-2'}>
                        Наименование
                    </div>
                    <div
                        className={'col-span-2 font-bold text-white border-r-2 border-white flex items-center justify-center bg-blue p-2'}>
                        Цена
                    </div>
                    <div
                        className={'col-span-2 font-bold text-white border-r-2 border-white flex items-center justify-center bg-blue p-2'}>
                        Количество
                    </div>
                    <div
                        className={'col-span-2 font-bold text-white border-r-2 border-white flex items-center justify-center bg-blue p-2'}>
                        Итого
                    </div><div
                    className={'col-span-2 font-bold text-white border-white flex items-center justify-center bg-blue p-2'}>

                </div>


                </div>
                {cartProducts.map((product:any, counter:number) => {
                    if (counter < 10) {
                        return (
                            <div key={counter} className={'grid grid-cols-12 border-b-2 border-blue'}>
                                <div
                                    className={'col-span-4 text-blue border-r-2 border-blue flex items-center justify-start bg-white p-2'}>
                                    <div className={'flex gap-2 items-center'}>
                                        <img className={'w-10 aspect-square object-cover'} src={product.product.image}/>
                                        <div className={'flex flex-col'}>
                                            <p className={'text-xs text-orange font-regular'}>Артикул: {product.product.sk}</p>
                                            <div className={'flex gap-2 items-center'}>
                                                <Link href={{
                                                    pathname: "/catalog/product/",
                                                    query: {id: product.product.id},
                                                }}>
                                                    <p className={'text-lg underline text-sm text-blue font-semibold'}>{product.product.name}</p>
                                                </Link>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={'col-span-2 font-normal text-blue border-r-2 border-blue flex items-center justify-center bg-white p-2'}>
                                    {product.product.price} ₽/шт.
                                </div>
                                <div
                                    className={'col-span-2 font-normal text-blue border-r-2 border-blue flex items-center justify-center bg-white p-2'}>
                                    <ProductQntPicker initialValue={product.qnt} product={product.product}></ProductQntPicker>
                                </div>
                                <div
                                    className={'col-span-2 font-bold text-blue border-r-2 border-blue flex items-center justify-center bg-white p-2'}>
                                    {product.product.price*product.qnt} ₽
                                </div>
                                <div
                                    className={'col-span-2 font-normal text-blue border-r-2 border-blue flex items-center justify-center bg-white p-2'}>
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

        </main>
    )
}
