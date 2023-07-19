"use client"
import Image from 'next/image'
import {useState} from "react";
import FilterCategory from "@/components/FilterCategory";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import {classList} from "@/helpers/classList";

export default function Home() {

    const categoryVariants = [
        {
            value: 'Розетки',
            icon: '/images/catalog/power.svg'
        },
        {
            value: 'Дисплеи',
            icon: '/images/catalog/ambient_screen.svg'
        },
        {
            value: 'Кабели',
            icon: '/images/catalog/cable.svg'
        },
        {
            value: 'Wi-Fi споты',
            icon: '/images/catalog/settings_remote.svg'
        },
        {
            value: 'Манипуляторы',
            icon: '/images/catalog/joystick.svg'
        }
    ]

    const materialVariants = [
        {
            value: 'Пластик'
        },
        {
            value: 'Металл'
        },
        {
            value: 'Медь'
        },
        {
            value: 'Резина'
        }, {
            value: 'Ещё что то'
        }
    ]

    const deliveryVariants = [
        {
            value: 'Самовывоз'
        },
        {
            value: 'Доставка до склада'
        }
    ]

    const [resetFilters, setResetFilters] = useState(false)

    const [productsQnt, setProductsQnt] = useState(7)
    const [productsPrice, setProductsPrice] = useState(56345647)

    return (
        <main className="mt-5">
            <div className={'flex items-center justify-between'}>
                <p className={'font-bold font-travels text-blue text-3xl'}>Новый заказ</p>
                <div className={'flex gap-2 items-center'}>
                    <p className={'text-2xl text-orange underline cursor-pointer'}>
                        История заказов
                    </p>
                    <img src={'/images/icons/history_orange.svg'}/>
                </div>
            </div>
            <div className={'mt-5 flex flex-col gap-2'}>
                <p className={'text-blue text-xl font-medium'}>
                    Поиск товара по названию
                </p>
                <div className={'grid grid-cols-9 gap-2 items-center'}>
                    <div className={'col-span-6'}>
                        <Input type={'text'} placeholder={'Введите название или артикул'} mutateFunction={() => {
                        }}/>
                    </div>
                    <Button className={'h-full col-span-3'} type={'orange'}>Найти</Button>
                </div>
            </div>
            <div className={'mt-5 grid grid-cols-9 items-start'}>
                <div className={'col-span-2'}>
                    <div className={'border-2 border-blue'}>
                        <div className={'h-96 p-2 scrollbar-mini overflow-y-scroll'}>
                            <div className={'flex flex-col gap-4'}>
                                <FilterCategory resetTrigger={resetFilters} variants={categoryVariants} unfilteredArray={[]}
                                                filterFunction={() => {
                                                }} type={'variants'} title={'Категория'}/>
                                <FilterCategory resetTrigger={resetFilters} variants={materialVariants} unfilteredArray={[]}
                                                filterFunction={() => {
                                                }} type={'multi'} title={'Материал'}/>
                                <FilterCategory resetTrigger={resetFilters} variants={deliveryVariants} unfilteredArray={[]}
                                                filterFunction={() => {
                                                }} type={'radio'} title={'Доставка'}/>
                            </div>
                        </div>
                        <div className={'p-2'}>
                            <Button type={'transparent blue'} callback={() => {
                                setResetFilters(!resetFilters)
                            }}>Сбросить фильтр</Button>
                        </div>
                    </div>
                    <div className={'bg-blue flex flex-col gap-3 mt-4 p-2'}>
                        <div className={'flex gap-2 items-center'}>
                            <div className={'relative w-12 flex items-center justify-center aspect-square'}>
                                <img src={'/images/icons/cart.svg'} className={'w-full z-0 h-full absolute'}/>
                                <p className={classList('absolute bottom-0.5 z-[1] text-white font-bold', productsQnt < 10 ? 'text-lg' : '', productsQnt >= 10 && productsQnt < 100 ? 'text-sm' : '', productsQnt >= 100? 'text-xs' : '')}>{productsQnt>1000?(productsQnt/1000).toFixed(1)+' k':productsQnt}</p>
                            </div>
                            <div className={'flex flex-col'}>
                                <p className={'text-sm font-medium text-white'}>В корзине {productsQnt} товаров</p>
                                <p className={'text-sm font-medium text-white'}>на сумму <span className={'text-orange font-bold'}>{productsPrice} ₽</span></p>
                            </div>
                        </div>
                        <Button type={'white'}>Оформить заказ</Button>
                    </div>
                    <div className={'mt-4 bg-orange cursor-pointer flex items-center justify-between p-2'}>
                        <p className={'font-bold text-white leading-[100%]'}>Импорт списка покупок из Excel</p>
                        <img src={'/images/icons/import.svg'} className={'w-7 aspect-square'}/>
                    </div>
                </div>

            </div>
        </main>
    )
}
