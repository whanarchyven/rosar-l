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

export default function Page({params}: any) {
    const orders: Array<{
        date: Date
        id: number,
        name: string,
        address: string,
        products: Array<{ name: string, qnt: number }>,
        order: number,
        orderStatus: 'pending' | 'canceled' | 'payed' | 'delivered',
        deliveryDelay: 'fast' | 'medium' | 'long' | 'already'
    }> = [
        {
            date: new Date(2023, 2, 14),
            id: 432675775689,
            name: 'Контрольная закупка',
            address: 'Москва, ул. Минина д.123',
            products: [{name: 'Розетка SFG134-RD', qnt: 63}, {
                name: 'Розетка SFG134-RD',
                qnt: 63
            }, {name: 'Розетка SFG134-RD', qnt: 63}, {name: 'Розетка SFG134-RD', qnt: 63}, {
                name: 'Розетка SFG134-RD',
                qnt: 63
            }, {name: 'Розетка SFG134-RD', qnt: 63}],
            order: 123125,
            orderStatus: 'pending',
            deliveryDelay: 'fast',
        },
        {
            date: new Date(2023, 2, 15),
            id: 432675775681,
            name: 'Контрольная закупка',
            address: 'Москва, ул. Минина д.123',
            products: [{name: 'Розетка SFG134-RD', qnt: 63}, {
                name: 'Розетка SFG134-RD',
                qnt: 63
            }, {name: 'Розетка SFG134-RD', qnt: 63}, {name: 'Розетка SFG134-RD', qnt: 63}, {
                name: 'Розетка SFG134-RD',
                qnt: 63
            }, {name: 'Розетка SFG134-RD', qnt: 63}],
            order: 123125,
            orderStatus: 'canceled',
            deliveryDelay: 'medium',
        },
        {
            date: new Date(2023, 2, 16),
            id: 432675775682,
            name: 'Контрольная закупка',
            address: 'Москва, ул. Минина д.123',
            products: [{name: 'Розетка SFG134-RD', qnt: 63}, {
                name: 'Розетка SFG134-RD',
                qnt: 63
            }, {name: 'Розетка SFG134-RD', qnt: 63}, {name: 'Розетка SFG134-RD', qnt: 63}, {
                name: 'Розетка SFG134-RD',
                qnt: 63
            }, {name: 'Розетка SFG134-RD', qnt: 63}],
            order: 123125,
            orderStatus: 'payed',
            deliveryDelay: 'long',
        },
        {
            date: new Date(2023, 2, 17),
            id: 432675775683,
            name: 'Контрольная закупка',
            address: 'Москва, ул. Минина д.123',
            products: [{name: 'Розетка SFG134-RD', qnt: 63}, {
                name: 'Розетка SFG134-RD',
                qnt: 63
            }, {name: 'Розетка SFG134-RD', qnt: 63}, {name: 'Розетка SFG134-RD', qnt: 63}, {
                name: 'Розетка SFG134-RD',
                qnt: 63
            }, {name: 'Розетка SFG134-RD', qnt: 63}],
            order: 123125,
            orderStatus: 'delivered',
            deliveryDelay: 'already',
        },
        {
            date: new Date(2023, 2, 18),
            id: 412675775689,
            name: 'Контрольная закупка',
            address: 'Москва, ул. Минина д.123',
            products: [{name: 'Розетка SFG134-RD', qnt: 63}, {
                name: 'Розетка SFG134-RD',
                qnt: 63
            }, {name: 'Розетка SFG134-RD', qnt: 63}, {name: 'Розетка SFG134-RD', qnt: 63}, {
                name: 'Розетка SFG134-RD',
                qnt: 63
            }, {name: 'Розетка SFG134-RD', qnt: 63}],
            order: 123125,
            orderStatus: 'pending',
            deliveryDelay: 'fast',
        },
        {
            date: new Date(2023, 2, 19),
            id: 422675775681,
            name: 'Контрольная закупка',
            address: 'Москва, ул. Минина д.123',
            products: [{name: 'Розетка SFG134-RD', qnt: 63}, {
                name: 'Розетка SFG134-RD',
                qnt: 63
            }, {name: 'Розетка SFG134-RD', qnt: 63}, {name: 'Розетка SFG134-RD', qnt: 63}, {
                name: 'Розетка SFG134-RD',
                qnt: 63
            }, {name: 'Розетка SFG134-RD', qnt: 63}],
            order: 123125,
            orderStatus: 'canceled',
            deliveryDelay: 'medium',
        },
        {
            date: new Date(2023, 2, 20),
            id: 433675775682,
            name: 'Контрольная закупка',
            address: 'Москва, ул. Минина д.123',
            products: [{name: 'Розетка SFG134-RD', qnt: 63}, {
                name: 'Розетка SFG134-RD',
                qnt: 63
            }, {name: 'Розетка SFG134-RD', qnt: 63}, {name: 'Розетка SFG134-RD', qnt: 63}, {
                name: 'Розетка SFG134-RD',
                qnt: 63
            }, {name: 'Розетка SFG134-RD', qnt: 63}],
            order: 123125,
            orderStatus: 'payed',
            deliveryDelay: 'long',
        },
        {
            date: new Date(2023, 2, 21),
            id: 442675775683,
            name: 'Контрольная закупка',
            address: 'Москва, ул. Минина д.123',
            products: [{name: 'Розетка SFG134-RD', qnt: 63}, {
                name: 'Розетка SFG134-RD',
                qnt: 63
            }, {name: 'Розетка SFG134-RD', qnt: 63}, {name: 'Розетка SFG134-RD', qnt: 63}, {
                name: 'Розетка SFG134-RD',
                qnt: 63
            }, {name: 'Розетка SFG134-RD', qnt: 63}],
            order: 123125,
            orderStatus: 'delivered',
            deliveryDelay: 'already',
        },
        {
            date: new Date(2023, 2, 22),
            id: 132675775689,
            name: 'Контрольная закупка',
            address: 'Москва, ул. Минина д.123',
            products: [{name: 'Розетка SFG134-RD', qnt: 63}, {
                name: 'Розетка SFG134-RD',
                qnt: 63
            }, {name: 'Розетка SFG134-RD', qnt: 63}, {name: 'Розетка SFG134-RD', qnt: 63}, {
                name: 'Розетка SFG134-RD',
                qnt: 63
            }, {name: 'Розетка SFG134-RD', qnt: 63}],
            order: 123125,
            orderStatus: 'pending',
            deliveryDelay: 'fast',
        },
        {
            date: new Date(2023, 2, 23),
            id: 232675775681,
            name: 'Контрольная закупка',
            address: 'Москва, ул. Минина д.123',
            products: [{name: 'Розетка SFG134-RD', qnt: 63}, {
                name: 'Розетка SFG134-RD',
                qnt: 63
            }, {name: 'Розетка SFG134-RD', qnt: 63}, {name: 'Розетка SFG134-RD', qnt: 63}, {
                name: 'Розетка SFG134-RD',
                qnt: 63
            }, {name: 'Розетка SFG134-RD', qnt: 63}],
            order: 123125,
            orderStatus: 'canceled',
            deliveryDelay: 'medium',
        },
        {
            date: new Date(2023, 2, 24),
            id: 332675775682,
            name: 'Основная закупка',
            address: 'Москва, ул. Минина д.123',
            products: [{name: 'Розетка SFG134-RD', qnt: 63}, {
                name: 'Розетка SFG134-RD',
                qnt: 63
            }, {name: 'Розетка SFG134-RD', qnt: 63}, {name: 'Розетка SFG134-RD', qnt: 63}, {
                name: 'Розетка SFG134-RD',
                qnt: 63
            }, {name: 'Розетка SFG134-RD', qnt: 63}],
            order: 123125,
            orderStatus: 'payed',
            deliveryDelay: 'long',
        },
        {
            date: new Date(2023, 2, 25),
            id: 532675775683,
            name: 'Контрольная закупка',
            address: 'Москва, ул. Минина д.123',
            products: [{name: 'Розетка SFG134-RD', qnt: 63}, {
                name: 'Розетка SFG134-RD',
                qnt: 63
            }, {name: 'Розетка SFG134-RD', qnt: 63}, {name: 'Розетка SFG134-RD', qnt: 63}, {
                name: 'Розетка SFG134-RD',
                qnt: 63
            }, {name: 'Розетка SFG134-RD', qnt: 63}],
            order: 123125,
            orderStatus: 'delivered',
            deliveryDelay: 'already',
        }
    ]

    const id = params.id
    const order = id && id < orders.length - 1 ? orders[Number(id)] : orders[0]

    const products = [
        {
            id: 1,
            name: 'Кабель SFG134-RD',
            sk: 'R910X023',
            image: '/images/temp/product.png',
            price: 569,
            discount: 0.12,
            remains: 160,
            inDelivery: 5,
            onWardrobe: 120,
            ns: 10,
            declined: 2,
            toDelivery: 2,
            deliviried: 20,
        },
        {
            id: 2,
            name: 'Удлинитель электрический PowerX 500',
            sk: 'PX500-UE',
            image: 'https://avatars.mds.yandex.net/i?id=7c568f1f2b1e773bd9fcf1d6bb2bff4be7b0bc15-8376176-images-thumbs&n=13',
            price: 849,
            remains: 160,
            inDelivery: 5,
            onWardrobe: 120,
            ns: 10,
            declined: 2,
            toDelivery: 2,
            deliviried: 20,
        },
        {
            id: 3,
            name: 'Лампа настольная Lumina-LX202',
            sk: 'LUM-LX202',
            image: 'https://liferooms.ru/images/thumbnails/1100/900/detailed/147/06b9d470f457b7a78cdf14eb6530eb3e.jpg',
            price: 1299,
            remains: 160,
            inDelivery: 5,
            onWardrobe: 120,
            ns: 10,
            declined: 2,
            toDelivery: 2,
            deliviried: 20,
        },
        {
            id: 4,
            name: 'Кабель USB-A to USB-C DataLink 2m',
            sk: 'DL-USB2M',
            image: 'https://i.ebayimg.com/00/s/MzU5WDUwMA==/z/ig8AAOSwDcBjYva9/$_3.JPG?set_id=8800005007',
            price: 299,
            remains: 160,
            inDelivery: 5,
            onWardrobe: 120,
            ns: 10,
            declined: 2,
            toDelivery: 2,
            deliviried: 20,
        },
        {
            id: 5,
            name: 'Кофеварка автоматическая BaristaMaster-5000',
            sk: 'BM-5000',
            image: 'https://good-bt.ru/wa-data/public/shop/products/63/40/24063/images/30195/30195.750x0.jpg',
            price: 5699,
            remains: 160,
            inDelivery: 5,
            onWardrobe: 120,
            ns: 10,
            declined: 2,
            toDelivery: 2,
            deliviried: 20,
        },
        {
            id: 6,
            name: 'Утюг паровой SteamPro 3000',
            sk: 'SP-3000',
            image: 'https://img.akrep.com/beyaz-esya-ve-ev-aletleri/utu-dikis-makinesi/tn6/arzum-ar6000-steampro-plus-buharli-utu-gri-siyah_1_4732328.jpg',
            price: 1499,
            remains: 160,
            inDelivery: 5,
            onWardrobe: 120,
            ns: 10,
            declined: 2,
            toDelivery: 2,
            deliviried: 20,
        },
        {
            id: 7,
            name: 'Фен для волос HairCare 2000',
            sk: 'HC-2000',
            image: 'https://ke-images.servicecdn.ru/c6i9tfsqi3n45kjtuav0/original.jpg',
            price: 799,
            remains: 160,
            inDelivery: 5,
            onWardrobe: 120,
            ns: 10,
            declined: 2,
            toDelivery: 2,
            deliviried: 20,
        },
        {
            id: 8,
            name: 'Микроволновая печь QuickHeat 800',
            sk: 'QH-800',
            image: 'https://avatars.mds.yandex.net/get-marketpic/6145646/pic9bf472cbb6dc7000effeb2d640d6167a/orig',
            price: 3499,
            remains: 160,
            inDelivery: 5,
            onWardrobe: 120,
            ns: 10,
            declined: 2,
            toDelivery: 2,
            deliviried: 20,
        },
        {
            id: 9,
            name: 'Беспроводные наушники SoundFreedom 202',
            sk: 'SF-202',
            image: 'https://basket-10.wb.ru/vol1458/part145867/145867033/images/c246x328/1.jpg',
            price: 1699,
            remains: 160,
            inDelivery: 5,
            onWardrobe: 120,
            ns: 10,
            declined: 2,
            toDelivery: 2,
            deliviried: 20,
        },
        {
            id: 10,
            name: 'Электрическая зубная щетка SmileCare 3000',
            sk: 'SC-3000',
            image: 'https://dizion.ru/image/cache/catalog/katalog/gigiyena-polosti-rta/elektricheskie-schetki/braun_oral_b_pro_3000_3d_action_d20_zubnaya_schotka_4-700x700.jpg',
            price: 799,
            remains: 160,
            inDelivery: 5,
            onWardrobe: 120,
            ns: 10,
            declined: 2,
            toDelivery: 2,
            deliviried: 20,
        },
        {
            id: 11,
            name: 'Розетка SFG134-RD',
            sk: 'R910X023',
            image: '/images/temp/product.png',
            price: 569,
            remains: 160,
            inDelivery: 5,
            onWardrobe: 120,
            ns: 10,
            declined: 2,
            toDelivery: 2,
            deliviried: 20,
        },
        {
            id: 12,
            name: 'Удлинитель электрический PowerX 500',
            sk: 'PX500-UE',
            image: 'https://avatars.mds.yandex.net/i?id=7c568f1f2b1e773bd9fcf1d6bb2bff4be7b0bc15-8376176-images-thumbs&n=13',
            price: 849,
            remains: 160,
            inDelivery: 5,
            onWardrobe: 120,
            ns: 10,
            declined: 2,
            toDelivery: 2,
            deliviried: 20,
        },
        {
            id: 13,
            name: 'Лампа настольная Lumina-LX202',
            sk: 'LUM-LX202',
            image: 'https://liferooms.ru/images/thumbnails/1100/900/detailed/147/06b9d470f457b7a78cdf14eb6530eb3e.jpg',
            price: 1299,
            remains: 160,
            inDelivery: 5,
            onWardrobe: 120,
            ns: 10,
            declined: 2,
            toDelivery: 2,
            deliviried: 20,
        },
        {
            id: 14,
            name: 'Кабель USB-A to USB-C DataLink 2m',
            sk: 'DL-USB2M',
            image: 'https://i.ebayimg.com/00/s/MzU5WDUwMA==/z/ig8AAOSwDcBjYva9/$_3.JPG?set_id=8800005007',
            price: 299,
            remains: 160,
            inDelivery: 5,
            onWardrobe: 120,
            ns: 10,
            declined: 2,
            toDelivery: 2,
            deliviried: 20,
        },
        {
            id: 15,
            name: 'Кофеварка автоматическая BaristaMaster-5000',
            sk: 'BM-5000',
            image: 'https://good-bt.ru/wa-data/public/shop/products/63/40/24063/images/30195/30195.750x0.jpg',
            price: 5699,
            remains: 160,
            inDelivery: 5,
            onWardrobe: 120,
            ns: 10,
            declined: 2,
            toDelivery: 2,
            deliviried: 20,
        },
        {
            id: 16,
            name: 'Утюг паровой SteamPro 3000',
            sk: 'SP-3000',
            image: 'https://img.akrep.com/beyaz-esya-ve-ev-aletleri/utu-dikis-makinesi/tn6/arzum-ar6000-steampro-plus-buharli-utu-gri-siyah_1_4732328.jpg',
            price: 1499,
            remains: 160,
            inDelivery: 5,
            onWardrobe: 120,
            ns: 10,
            declined: 2,
            toDelivery: 2,
            deliviried: 20,
        },
        {
            id: 17,
            name: 'Фен для волос HairCare 2000',
            sk: 'HC-2000',
            image: 'https://ke-images.servicecdn.ru/c6i9tfsqi3n45kjtuav0/original.jpg',
            price: 799,
            remains: 160,
            inDelivery: 5,
            onWardrobe: 120,
            ns: 10,
            declined: 2,
            toDelivery: 2,
            deliviried: 20,
        },
        {
            id: 18,
            name: 'Микроволновая печь QuickHeat 800',
            sk: 'QH-800',
            image: 'https://avatars.mds.yandex.net/get-marketpic/6145646/pic9bf472cbb6dc7000effeb2d640d6167a/orig',
            price: 3499,
            remains: 160,
            inDelivery: 5,
            onWardrobe: 120,
            ns: 10,
            declined: 2,
            toDelivery: 2,
            deliviried: 20,
        },
        {
            id: 19,
            name: 'Беспроводные наушники SoundFreedom 202',
            sk: 'SF-202',
            image: 'https://basket-10.wb.ru/vol1458/part145867/145867033/images/c246x328/1.jpg',
            price: 1699,
            remains: 160,
            inDelivery: 5,
            onWardrobe: 120,
            ns: 10,
            declined: 2,
            toDelivery: 2,
            deliviried: 20,
        },
        {
            id: 20,
            name: 'Электрическая зубная щетка SmileCare 3000',
            sk: 'SC-3000',
            image: 'https://dizion.ru/image/cache/catalog/katalog/gigiyena-polosti-rta/elektricheskie-schetki/braun_oral_b_pro_3000_3d_action_d20_zubnaya_schotka_4-700x700.jpg',
            price: 799,
            remains: 160,
            inDelivery: 5,
            onWardrobe: 120,
            ns: 10,
            declined: 2,
            toDelivery: 2,
            deliviried: 20,
        }

    ]


    return (
        <main className="mt-5">
            <p className={'font-bold font-manrope text-white mb-8 text-4xl'}>Товары заказа № <span
                className={'font-light'}>{order.id}</span></p>

            <div className={'grid grid-cols-6 gap-6 p-4 items-start rounded-xl p-6 drop-shadow-lg bg-white'}>
                <div className={'relative col-span-6 scrollbar '}>
                    <div className={'grid grid-cols-10 px-2 bg-[#F8F8FA] rounded-xl font-manrope'}>
                        <div
                            className={'col-span-2 font-bold text-[#004169] flex items-center justify-start p-2'}>
                            Наименование
                        </div>
                        <div
                            className={'col-span-1 font-bold text-[#004169] flex items-center justify-center p-2'}>
                            Цена
                        </div>
                        <div
                            className={'col-span-1 font-bold text-[#004169] flex items-center justify-center p-2'}>
                            Количество
                        </div>
                        <div
                            className={'col-span-1 font-bold text-[#004169] flex items-center justify-center p-2'}>
                            В пути
                        </div>
                        <div
                            className={'col-span-1 font-bold text-[#004169] flex items-center justify-center p-2'}>
                            На складах
                        </div>
                        <div
                            className={'col-span-1 font-bold text-[#004169] flex items-center justify-center p-2'}>НС</div>
                        <div
                            className={'col-span-1 font-bold text-[#004169] flex items-center justify-center p-2'}>
                            Отказ
                        </div>
                        <div
                            className={'col-span-1 font-bold text-[#004169] flex items-center justify-center p-2'}>
                            К отгрузке
                        </div>
                        <div
                            className={'col-span-1 font-bold text-[#004169] flex items-center justify-center p-2'}>
                            Отгружено
                        </div>


                    </div>
                    {products.map((product: any, counter: number) => {
                        if (counter < 10) {
                            return (
                                <div key={counter} className={'grid grid-cols-10 border-b-2 border-[#F1F1F1]'}>
                                    <div
                                        className={'col-span-2 text-blue border-r-2 border-[#F1F1F1] flex items-center justify-start bg-white p-2'}>
                                        <div className={'flex gap-2 items-center'}>
                                            <img className={'w-12 aspect-square object-cover'} src={product.image}/>
                                            <div className={'flex flex-col'}>

                                                <div className={'flex gap-2 items-center'}>
                                                    <p className={'text-md font-manrope text-black font-semibold'}>{product.name}</p>

                                                </div>
                                                <p className={'text-sm font-manrope text-[#004169] font-regular'}>Артикул: {product.sk}</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={'font-manrope col-span-1 font-bold text-black border-r-2 border-[#F1F1F1] flex items-center justify-center bg-white p-2'}>
                                        {product.price} ₽/шт.
                                    </div>
                                    <div
                                        className={'font-manrope col-span-1 font-bold text-black border-r-2 border-[#F1F1F1] flex items-center justify-center bg-white p-2'}>
                                        {product.remains} шт.
                                    </div>
                                    <div
                                        className={'font-manrope col-span-1 font-bold text-black border-r-2 border-[#F1F1F1] flex items-center justify-center bg-white p-2'}>
                                        {product.inDelivery} шт.
                                    </div>
                                    <div
                                        className={'font-manrope col-span-1 font-bold text-black border-r-2 border-[#F1F1F1] flex items-center justify-center bg-white p-2'}>
                                        {product.onWardrobe} шт.
                                    </div>
                                    <div
                                        className={'font-manrope col-span-1 font-bold text-black border-r-2 border-[#F1F1F1] flex items-center justify-center bg-white p-2'}>
                                        {product.ns} шт.
                                    </div>
                                    <div
                                        className={'font-manrope col-span-1 font-bold text-black border-r-2 border-[#F1F1F1] flex items-center justify-center bg-white p-2'}>
                                        {product.declined} шт.
                                    </div>
                                    <div
                                        className={'font-manrope col-span-1 font-bold text-black border-r-2 border-[#F1F1F1] flex items-center justify-center bg-white p-2'}>
                                        {product.toDelivery} шт.
                                    </div>
                                    <div
                                        className={'font-manrope col-span-1 font-bold text-black border-r-2 border-[#F1F1F1] flex items-center justify-center bg-white p-2'}>
                                        {product.deliviried} шт.
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>

            </div>

        </main>
    )
}
