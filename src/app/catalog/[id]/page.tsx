"use client"


import {useRouter, useSearchParams} from "next/navigation";
import datediff from "@/helpers/dateDiff";
import parseDate from "@/helpers/parseDate";
import Button from "@/components/UI/Button";
import ProductQntPicker from "@/components/ProductQntPicker";
import Link from "next/link";
import React from "react";
import ProductQntPickerPop from "@/components/ProductQntPickerPop";
import {nanoid} from "nanoid";

export default function Page({params}: any) {
    const router = useRouter()


    const actions = [
        {
            id: 1,
            name: 'Кабель ВВГ-Пнг(А)-LS 660 В 3Х1,50 ок(N,PE) ТРТС Технокабель НПП',
            sk: 'R910X023',
            image: '/images/temp/product.png',
            price: 569,
            category: 'Розетки',
            material: ['Пластик', 'Медь'],
            delivery: 'Самовывоз',
            description: 'Не распространяющие горение, с низким дымо- и газовыделением предназначены для передачи и распределения электроэнергии в стационарных установках на номинальное переменное напряжение 0,66 кВ и 1 кВ частоты 50 Гц. Кабели изготавливаются для общепромышленного применения и атомных станций при поставках на внутренний рынок и на экспорт. Кабели предназначены для эксплуатации в кабельных сооружениях и помещениях, в том числе для использования в системах атомных станций классов 2, 3 и 4 по классификации ОПБ-88/97 (ПНАЭ Г-01-011-97).',
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
    const id = params.id
    const product = id && id < actions.length - 1 ? actions[Number(id) - 1] : actions[0]

    const reviews = [
        {
            company: 'TechPros',
            review: 'Мы приобрели розетки SFG134-RD для нашего нового офиса. Они отлично справляются с подключением наших устройств и обеспечивают стабильное соединение. Качество и надежность этих розеток впечатлили нас. Отличный выбор для любых помещений!'
        },
        {
            company: 'ElectroWorld',
            review: 'Удлинитель электрический PowerX 500 оказался настоящим спасением для нашего офиса. Он обеспечивает надежное подключение всех наших устройств и позволяет управлять ими с помощью выключателя. Качество изготовления удлинителя и его долгий срок службы приятно удивили нашу компанию. Отличный продукт!'
        },
        {
            company: 'HomeComfort',
            review: 'Лампа настольная Lumina-LX202 стала отличным дополнением для нашего интерьера. Она создает приятную атмосферу и обеспечивает комфортное освещение. Мы ценим ее функциональность и стильный дизайн. Отличное качество материалов, из которых она изготовлена, гарантирует долгий срок службы. Благодарим за отличный продукт!'
        },
        {
            company: 'GadgetMasters',
            review: 'Кабель USB-A to USB-C DataLink 2m отлично выполняет свою задачу. Он обеспечивает быструю и стабильную передачу данных и зарядку наших устройств. Качество материалов и изготовления не вызывает нареканий. У нас в компании есть много устройств с разъемами USB-C, и этот кабель стал незаменимым аксессуаром для нашей работы. Очень довольны покупкой!'
        },
        {
            company: 'CafeTech',
            review: 'Кофеварка автоматическая BaristaMaster-5000 превзошла все наши ожидания. Она готовит восхитительный кофе, и мы уже не представляем наше кафе без нее. Ее простота использования и многофункциональность - это то, что делает ее настоящим отличием от других кофеварок. Качество изготовления и использованных материалов на высоком уровне. Отличный продукт для профессиональных бариста и любителей кофе!'
        }
    ];


    return <div className={'w-full '}>
        <div className={'flex items-center gap-3 justify-start'}>
            <div onClick={() => {
                router.back()
            }}>
                <img className={'cursor-pointer w-10'} src={'/images/icons/arrow_left.svg'}/>
            </div>
            <p className={'font-manrope text-4xl font-bold text-white'}>Каталог</p>
        </div>
        <div className={'grid grid-cols-3 bg-white p-8 gap-8 rounded-xl shadow-lg mt-8'}>
            <div className={'flex flex-col gap-3 p-4 border-r-2'}>
                <img src={product.image} className={'w-full mb-12 aspect-square object-cover'}/>
                <div className={'p-4 px-8 flex flex-col gap-2 bg-[#EFEFEF] rounded-xl'}>
                    <div className={'rounded-md font-manrope text-white text-sm p-1 px-3 flex items-center justify-center bg-[#EB5757] w-fit'}>
                        - {product.discount}%
                    </div>
                    <div className={'flex items-center justify-between'}>
                        <div className={'flex items-center gap-2'}>
                            <p className={'font-manrope font-medium text-blue'}>Ваша цена</p>
                            <div className={'flex cursor-pointer text-blue font-semibold items-center text-xs justify-center w-2 h-2 p-2 border-blue rounded-full aspect-square border-[1px]'}>
                                i
                            </div>
                        </div>
                        <p className={'font-manrope font-bold text-xl text-black'}>{product.price*(1+(product.discount/100))} ₽</p>
                    </div>
                    <div className={'flex items-center justify-between'}>
                        <div className={'flex items-center gap-2'}>
                            <p className={'font-manrope font-medium text-blue'}>Розниная цена</p>
                        </div>
                        <div className={'relative flex items-center justify-center font-manrope font-medium text-lg text-black'}>
                            <p>{product.price} ₽</p>
                            <img className={'absolute w-full scale-125 h-full'} src={'/images/icons/discount.svg'}/>
                        </div>
                    </div>
                    <ProductQntPickerPop className={'mt-4'} product={product}></ProductQntPickerPop>
                    <div className={'mt-4 flex flex-col gap-1'}>
                        <p className={'font-manrope font-bold text-md text-black'}>Доступно:</p>
                        <p className={'font-manrope font-medium underline text-blue'}>Сегодня - 346 м</p>
                        <p className={'font-manrope font-medium underline text-blue'}>Забрать c 15.09.2023 - 123551 м</p>
                    </div>
                    <div className={'mt-4 grid grid-cols-2 gap-4'}>
                        <div className={'flex flex-col gap-1'}>
                            <p className={'font-manrope font-bold text-md text-black'}>Доступно:</p>
                            <p className={'font-manrope font-medium text-xs text-black'}>Самовывоз: 14.09.2023 <br/>Стандартная доставка</p>
                        </div>
                        <div className={'flex flex-col gap-1'}>
                            <p className={'font-manrope font-bold text-md text-black'}>Оплата</p>
                            <p className={'font-manrope font-medium text-xs text-black'}>По счету, онлайн, наличными, по QR-коду</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'flex flex-col col-span-2 gap-8'}>
                <p className={'font-manrope text-3xl font-bold text-black'}>{product.name}</p>
                <p className={'font-manrope text-2xl font-medium text-[#4A4A4A]'}>Характеристики</p>
                <div className={'grid grid-cols-2 gap-4'}>
                    <div className={'flex flex-col font-manrope gap-3'}>
                        {product.attributes[0].map((attribute) => {
                            return (
                                <div key={nanoid()} className={'grid grid-cols-2 items-center'}>
                                    <p className={'text-black font-manrope font-bold'}>{attribute.name}</p>
                                    <p className={'text-[#4A4A4A] font-medium'}>{attribute.value}</p>
                                </div>
                            )
                        })}
                        <div className={'flex flex-col gap-2 mt-6'}>
                            <p className={'text-black font-manrope font-bold'}>Сфера применения:</p>
                            <p className={'text-[#4A4A4A] font-medium'}>{product.usage}</p>
                        </div>
                    </div>
                    <div className={'flex flex-col font-manrope gap-3'}>
                        {product.attributes[1].map((attribute) => {
                            return (
                                <div key={nanoid()} className={'grid grid-cols-2 items-center'}>
                                    <p className={'text-black font-manrope font-bold'}>{attribute.name}</p>
                                    <p className={'text-[#4A4A4A] font-medium'}>{attribute.value}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className={'p-6 col-span-3'}>
                <div className={'flex flex-col gap-3'}>
                    <p className={'font-bold font-manrope text-2xl'}>Описание</p>
                    <p>{product.description}</p>
                </div>
            </div>
            <div className={'p-6 col-span-3 flex justify-between'}>
                <div className={'flex flex-col gap-2'}>
                    <p className={'font-bold font-manrope text-2xl'}>Сертификаты</p>
                    <div className={'p-3 border-2 gap-4 border-blue flex cursor-pointer items-center justify-between rounded-lg'}>
                        <p className={'font-manrope text-blue font-bold'}>PDF документ о сертификации</p>
                        <img src={'/images/icons/download_blue.svg'}/>
                    </div>
                </div>
                <div className={'flex flex-col gap-2'}>
                    <p className={'font-bold font-manrope text-2xl'}>Материалы о товаре</p>
                    <div className={'p-3 border-2 gap-4 border-blue flex cursor-pointer items-center justify-between rounded-lg'}>
                        <p className={'font-manrope text-blue font-bold'}>PNG техническая информация</p>
                        <img src={'/images/icons/download_blue.svg'}/>
                    </div>
                </div>
            </div>
        </div>

    </div>
}