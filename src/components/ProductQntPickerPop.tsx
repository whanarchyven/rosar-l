"use client"
import React, {useEffect, useState} from 'react';

import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import {classList} from "@/helpers/classList";

const products = [
    {
        id: 1,
        name: 'Кабель ВВГ-Пнг(А)-LS 660 В 3Х1,50 ок(N,PE) ТРТС Технокабель НПП',
        sk: 'R910X023',
        image: '/images/temp/product.png',
        price: 569,
        category: 'Розетки',
        material: ['Пластик', 'Медь'],
        delivery: 'Самовывоз',
        description: 'Эта розетка SFG134-RD представляет собой качественное электрическое устройство, которое обеспечивает надежное соединение с электрической сетью. Изготовлена из прочного пластика и меди, что обеспечивает долгий срок службы и надежную работу. Она прекрасно подойдет для использования в доме, офисе или других помещениях. У нас вы можете приобрести эту розетку по выгодной цене и выбрать удобный способ доставки, включая самовывоз. Покупая эту розетку, вы получаете отличное соотношение цены и качества, а также гарантию безопасного использования в вашей электрической системе.',
        discount:18,
        attributes: [
            [{
                name: 'Страна',
                value: 'Россия'
            },
                {
                    name: 'Производитель',
                    value: '100 м, 10000 м'
                },
                {
                    name: 'Ед.измерения',
                    value: 'м'
                },
                {
                    name: 'Упаковки',
                    value: '100 м, 10000 м'
                },
                {
                    name: 'Тип изделия',
                    value: 'Кабель'
                },
                {
                    name: 'Марка',
                    value: 'ВВГ-Пнг(A)-LS'
                },
                {
                    name: 'Количество жил',
                    value: '3'
                },
                {
                    name: 'Сечение жилы, мм2',
                    value: '1.5'
                },
                {
                    name: 'Напряжение, В',
                    value: '660'
                },
                {
                    name: 'Тип исполнения кабельного изделия',
                    value: 'нг(A)-LS'
                },
                {
                    name: 'Материал оболочки',
                    value: 'ПВХ пластикат'
                },],
            [
                {
                    name: 'Материал изоляции',
                    value: 'ПВХ пластикат'
                },
                {
                    name: 'Диапазон рабочих температур',
                    value: 'от -50 до +50'
                },
                {
                    name: 'Наличие защитного покрова',
                    value: 'Нет'
                },
                {
                    name: 'Наличие экрана',
                    value: 'Нет'
                },
                {
                    name: 'Конструкция жилы',
                    value: 'Однопроволочная'
                },
                {
                    name: 'Диаметр, мм',
                    value: '5.37х10.51'
                },
                {
                    name: 'Материал жилы',
                    value: 'Медь'
                },
                {
                    name: 'Форма жилы',
                    value: 'Круглая'
                },
                {
                    name: 'Гарантийный срок, мес',
                    value: '60'
                },
                {
                    name: 'Форма жилы',
                    value: 'Круглая'
                },
                {
                    name: 'Минимальный радиус изгиба',
                    value: 'Не более 7.5 наружных диаметров'
                },
                {
                    name: 'Температура монтажа',
                    value: 'Не ниже -15'
                },
                {
                    name: 'Температура эксплуатации',
                    value: 'от -50 до +50'
                },
            ]
        ],
        usage: 'Для передачи и распространения электрической энергии, в стационарных установках на номинальное переменное напряжение 0.66 кВ номинальной частотой 50 Гц',
    }
]


interface productQntPicker {
    callback?: (arg1: any, arg2: any) => any,
    product: typeof products[0],
    initialValue?: number,
    className?:string,
}

const ProductQntPicker = ({callback, product, initialValue, className}: productQntPicker) => {

    const [qnt, setQnt] = useState(initialValue ? initialValue : 1)

    useEffect(() => {
        if (initialValue) {
            setQnt(initialValue)
        }
    }, [initialValue])

    return (
        <div className={classList('w-full h-full grid', callback ? 'grid-cols-4' : 'grid-cols-2',className?className:'')}>
            <div className={'flex gap-3 border-r-2 border-[#F1F1F1] justify-between col-span-3 items-center'}>
                <p className={'font-manrope text-blue text-lg font-bold'}>Количество</p>
                <div className={'flex items-center gap-3'}>
                    <div
                        className={'flex cursor-pointer font-bold items-center justify-center p-2 w-7 border-2 border-[#E6E6E6] rounded-full aspect-square'}
                        onClick={() => {
                            if (qnt > 1) {
                                setQnt(Number(qnt) - 1)
                            }
                        }}>
                        <img className={'w-full h-full'} src={'/images/icons/minus.svg'}/>
                    </div>
                    <div className={'w-20'}>
                        <input value={qnt} onChange={(e) => {
                            if (!isNaN(Number(e.target.value))) {
                                setQnt(Number(e.target.value))
                            }
                        }} type={'text'}
                               className={'w-full h-8 text-center placeholder:text-blue placeholder:text-opacity-50 p-3 font-semibold text-blue border-[#E6E6E6] rounded-lg border-2 focus:border-orange focus:outline-0'}/>
                    </div>
                    <div
                        className={'flex cursor-pointer font-bold items-center justify-center p-2 w-7 border-2 border-[#E6E6E6] rounded-full aspect-square'}
                        onClick={() => {
                            if (qnt > 0) {
                                setQnt(Number(qnt) + 1)
                            }
                        }}>
                        <img className={'w-full h-full'} src={'/images/icons/plus.svg'}/>
                    </div>
                </div>
            </div>

            <div className={'w-full mt-2 col-span-2'}>
                <div className={'w-full p-3 cursor-pointer rounded-xl flex items-center justify-between bg-blue'}>
                    <p className={'font-bold text-white font-manrope text-sm'}>Добавить в корзину</p>
                    <p className={'font-bold text-white font-manrope text-xl'}>{product.price*(1+(product.discount/100))} ₽</p>
                </div>
            </div>

        </div>
    );
};

export default ProductQntPicker;