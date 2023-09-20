"use client"
import Image from 'next/image'
import ActionBanner from "@/components/ActionBanner";
import {useEffect, useState} from "react";
import Pagination from "@/components/UI/Pagination";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import ReactDatePicker, {registerLocale} from "react-datepicker";
import ru from "date-fns/locale/ru"; // the locale you want
registerLocale("ru", ru); // register it with the name you want
import "react-datepicker/dist/react-datepicker.css";
import formatDate from "@/helpers/formatDate";
import {classList} from "@/helpers/classList";
import Link from "next/link";
import ProductQntPicker from "@/components/ProductQntPicker";

export default function Home() {

    const [currentPage, setCurrentPage] = useState(1)

    const [filteredName, setFilteredName] = useState<string>('')


    const [startDate, setStartDate] = useState(new Date(2023, 2, 14));

    const [endDate, setEndDate] = useState(new Date(2023, 2, 25));

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

    const filterByName = (arr: typeof orders, query: string) => {
        if (query == '') {
            return orders
        }
        return arr.filter((el: typeof orders[0]) => el.name.toLowerCase().includes(query.toLowerCase()));
    }


    const [filteredOrders, setFilteredOrders] = useState(orders)

    useEffect(() => {
        if (filteredName != '') {
            setFilteredOrders([...filterByName(orders, filteredName)])
        }
    }, [filteredName])

    const translateOrderStatus = (status: 'pending' | 'canceled' | 'payed' | 'delivered') => {
        switch (status) {
            case "pending":
                return 'Ожидает оплаты'
            case "canceled":
                return 'Отменён'
            case "payed":
                return 'Оплачен'
            case 'delivered':
                return 'Доставлен'
            default:
                return ''
        }
    }

    const translateOrderButton = (status: 'pending' | 'canceled' | 'payed' | 'delivered') => {
        switch (status) {
            case "pending":
                return 'Оплатить'
            case "canceled":
                return 'Повторить'
            case "payed":
                return 'Отследить'
            case 'delivered':
                return 'Накладная'
            default:
                return ''
        }
    }

    const translateOrderDelivery = (delivery: 'fast' | 'medium' | 'long' | 'already') => {
        switch (delivery) {
            case "fast":
                return '#FFD373'
            case "medium":
                return '#F28736'
            case "long":
                return '#FF0000'
            case 'already':
                return '#004891'
            default:
                return ''
        }
    }
    const products = [
        {
            id: 1,
            name: 'Розетка SFG134-RD',
            sk: 'R910X023',
            image: '/images/temp/product.png',
            price: 569,
            category: 'Розетки',
            material: ['Пластик', 'Медь'],
            delivery: 'Самовывоз',
            description: 'Эта розетка SFG134-RD представляет собой качественное электрическое устройство, которое обеспечивает надежное соединение с электрической сетью. Изготовлена из прочного пластика и меди, что обеспечивает долгий срок службы и надежную работу. Она прекрасно подойдет для использования в доме, офисе или других помещениях. У нас вы можете приобрести эту розетку по выгодной цене и выбрать удобный способ доставки, включая самовывоз. Покупая эту розетку, вы получаете отличное соотношение цены и качества, а также гарантию безопасного использования в вашей электрической системе.'
        },
        {
            id: 2,
            name: 'Удлинитель электрический PowerX 500',
            sk: 'PX500-UE',
            image: 'https://avatars.mds.yandex.net/i?id=7c568f1f2b1e773bd9fcf1d6bb2bff4be7b0bc15-8376176-images-thumbs&n=13',
            price: 849,
            category: 'Удлинители',
            material: ['Пластик', 'Медь'],
            delivery: 'Доставка курьером',
            description: 'Удлинитель PowerX 500 предоставляет дополнительные розетки для подключения электрических устройств. С его помощью вы сможете увеличить радиус действия электрических приборов в вашем доме или офисе. Удлинитель оборудован выключателем, что позволяет управлять подключенными устройствами без необходимости их выключения из розетки. Изготовлен из прочного пластика и меди, он обеспечивает безопасное и стабильное соединение. Приобретая удлинитель PowerX 500, вы получаете удобство и надежность в использовании.'
        },
        {
            id: 3,
            name: 'Лампа настольная Lumina-LX202',
            sk: 'LUM-LX202',
            image: 'https://liferooms.ru/images/thumbnails/1100/900/detailed/147/06b9d470f457b7a78cdf14eb6530eb3e.jpg',
            price: 1299,
            category: 'Лампы',
            material: ['Металл', 'Ткань'],
            delivery: 'Доставка курьером',
            description: 'Лампа настольная Lumina-LX202 прекрасно подходит для освещения рабочего стола или ночного столика. Ее современный дизайн и функциональность сделают ваше пространство уютным и стильным. Лампа имеет регулируемую подставку, что позволяет настроить направление света по вашим предпочтениям. Она изготовлена из прочных материалов - металла и ткани, что обеспечивает долгий срок службы. Вы можете выбрать удобный способ доставки, и наша компания обеспечит быструю доставку этой стильной настольной лампы к вам домой.'
        },
        {
            id: 4,
            name: 'Кабель USB-A to USB-C DataLink 2m',
            sk: 'DL-USB2M',
            image: 'https://i.ebayimg.com/00/s/MzU5WDUwMA==/z/ig8AAOSwDcBjYva9/$_3.JPG?set_id=8800005007',
            price: 299,
            category: 'Кабели',
            material: ['Пластик', 'Медь'],
            delivery: 'Самовывоз',
            description: 'Кабель USB-A to USB-C DataLink длиной 2 метра предназначен для передачи данных и зарядки устройств с разъемами USB-A и USB-C. Он обеспечивает стабильное и быстрое соединение, что позволяет быстро передавать файлы или заряжать ваш смартфон, планшет или другие устройства. Кабель изготовлен из прочных материалов, что делает его долговечным и надежным в использовании. У нас вы можете купить этот кабель по выгодной цене и использовать его для различных электронных устройств, обеспечивая их эффективную работу.'
        },
        {
            id: 5,
            name: 'Кофеварка автоматическая BaristaMaster-5000',
            sk: 'BM-5000',
            image: 'https://good-bt.ru/wa-data/public/shop/products/63/40/24063/images/30195/30195.750x0.jpg',
            price: 5699,
            category: 'Кофеварки',
            material: ['Пластик', 'Металл'],
            delivery: 'Доставка курьером',
            description: 'Кофеварка BaristaMaster-5000 - это современное и удобное устройство для приготовления вкусного кофе в домашних условиях. Она автоматически мелет кофейные зерна, приготовит эспрессо, капуччино или латте, а также поддерживает функцию подогрева кофе. Кофеварка изготовлена из прочного пластика и металла, что обеспечивает ее долгий срок службы. Ее современный дизайн отлично впишется в интерьер вашей кухни. Купив BaristaMaster-5000, вы сможете наслаждаться вкусным кофе каждый день.'
        },
        {
            id: 6,
            name: 'Утюг паровой SteamPro 3000',
            sk: 'SP-3000',
            image: 'https://img.akrep.com/beyaz-esya-ve-ev-aletleri/utu-dikis-makinesi/tn6/arzum-ar6000-steampro-plus-buharli-utu-gri-siyah_1_4732328.jpg',
            price: 1499,
            category: 'Утюги',
            material: ['Пластик', 'Металл'],
            delivery: 'Доставка курьером',
            description: 'Утюг паровой SteamPro 3000 обеспечивает быстрое и качественное глажение вашей одежды. Он оснащен паровой функцией, которая позволяет эффективно удалять складки с различных тканей. Утюг имеет регулируемую подачу пара и температуры, что позволяет адаптировать его под разные типы материалов. Изготовлен из прочных материалов, этот утюг служит долго и надежно. Приобретая SteamPro 3000, вы получаете отличный помощник для быстрого и качественного глажения.'
        },
        {
            id: 7,
            name: 'Фен для волос HairCare 2000',
            sk: 'HC-2000',
            image: 'https://ke-images.servicecdn.ru/c6i9tfsqi3n45kjtuav0/original.jpg',
            price: 799,
            category: 'Фены',
            material: ['Пластик', 'Металл'],
            delivery: 'Самовывоз',
            description: 'Фен для волос HairCare 2000 позволяет быстро и удобно высушивать ваши волосы, придавая им ухоженный и стильный вид. Фен оборудован различными режимами скорости и температуры, что позволяет настроить его под ваши потребности. Он изготовлен из прочных материалов, что обеспечивает долгий срок службы. Компактный размер и удобная ручка делают его отличным выбором для использования дома или в поездке. Приобретая HairCare 2000, вы получаете профессиональный уход за волосами прямо у себя дома.'
        },
        {
            id: 8,
            name: 'Микроволновая печь QuickHeat 800',
            sk: 'QH-800',
            image: 'https://avatars.mds.yandex.net/get-marketpic/6145646/pic9bf472cbb6dc7000effeb2d640d6167a/orig',
            price: 3499,
            category: 'Микроволновки',
            material: ['Пластик', 'Металл'],
            delivery: 'Доставка курьером',
            description: 'Микроволновая печь QuickHeat 800 представляет собой удобное и функциональное устройство для быстрого приготовления и разогрева пищи. Она оборудована различными программами и функциями, что позволяет легко приготовить разнообразные блюда. Микроволновка изготовлена из прочных материалов, что обеспечивает ее долгий срок службы. Удобные ручки и интуитивно понятные настройки делают использование этой печи максимально простым. Приобретая QuickHeat 800, вы получаете удовольствие от быстрой и вкусной еды в любое время.'
        },
        {
            id: 9,
            name: 'Беспроводные наушники SoundFreedom 202',
            sk: 'SF-202',
            image: 'https://basket-10.wb.ru/vol1458/part145867/145867033/images/c246x328/1.jpg',
            price: 1699,
            category: 'Наушники',
            material: ['Пластик', 'Металл'],
            delivery: 'Доставка курьером',
            description: 'Беспроводные наушники SoundFreedom 202 позволяют наслаждаться качественным звуком без проводов и ограничений. Они подходят для прослушивания музыки, звонков и проведения видеозвонков. Наушники имеют долгий срок работы и быструю зарядку, что обеспечивает их надежную работу в течение всего дня. Они удобно крепятся в ухе и практически незаметны во время использования. Приобретая SoundFreedom 202, вы получаете свободу и комфорт в использовании наушников.'
        },
        {
            id: 10,
            name: 'Электрическая зубная щетка SmileCare 3000',
            sk: 'SC-3000',
            image: 'https://dizion.ru/image/cache/catalog/katalog/gigiyena-polosti-rta/elektricheskie-schetki/braun_oral_b_pro_3000_3d_action_d20_zubnaya_schotka_4-700x700.jpg',
            price: 799,
            category: 'Зубные щетки',
            material: ['Пластик', 'Металл'],
            delivery: 'Самовывоз',
            description: 'Электрическая зубная щетка SmileCare 3000 обеспечивает эффективную и бережную чистку зубов. Она оснащена различными режимами работы, что позволяет настроить ее под ваши предпочтения. Зубная щетка обеспечивает высокую скорость вращения щетинок, что позволяет легко и эффективно удалять налет и зубной камень. Ее эргономичная ручка обеспечивает комфортное удержание в руке. Приобретая SmileCare 3000, вы получаете здоровую улыбку и чистоту ваших зубов.'
        },
        {
            id: 11,
            name: 'Розетка SFG134-RD',
            sk: 'R910X023',
            image: '/images/temp/product.png',
            price: 569,
            category: 'Розетки',
            material: ['Пластик', 'Медь'],
            delivery: 'Самовывоз',
            description: 'Эта розетка SFG134-RD представляет собой качественное электрическое устройство, которое обеспечивает надежное соединение с электрической сетью. Изготовлена из прочного пластика и меди, что обеспечивает долгий срок службы и надежную работу. Она прекрасно подойдет для использования в доме, офисе или других помещениях. У нас вы можете приобрести эту розетку по выгодной цене и выбрать удобный способ доставки, включая самовывоз. Покупая эту розетку, вы получаете отличное соотношение цены и качества, а также гарантию безопасного использования в вашей электрической системе.'
        },
        {
            id: 12,
            name: 'Удлинитель электрический PowerX 500',
            sk: 'PX500-UE',
            image: 'https://avatars.mds.yandex.net/i?id=7c568f1f2b1e773bd9fcf1d6bb2bff4be7b0bc15-8376176-images-thumbs&n=13',
            price: 849,
            category: 'Удлинители',
            material: ['Пластик', 'Медь'],
            delivery: 'Доставка курьером',
            description: 'Удлинитель PowerX 500 предоставляет дополнительные розетки для подключения электрических устройств. С его помощью вы сможете увеличить радиус действия электрических приборов в вашем доме или офисе. Удлинитель оборудован выключателем, что позволяет управлять подключенными устройствами без необходимости их выключения из розетки. Изготовлен из прочного пластика и меди, он обеспечивает безопасное и стабильное соединение. Приобретая удлинитель PowerX 500, вы получаете удобство и надежность в использовании.'
        },
        {
            id: 13,
            name: 'Лампа настольная Lumina-LX202',
            sk: 'LUM-LX202',
            image: 'https://liferooms.ru/images/thumbnails/1100/900/detailed/147/06b9d470f457b7a78cdf14eb6530eb3e.jpg',
            price: 1299,
            category: 'Лампы',
            material: ['Металл', 'Ткань'],
            delivery: 'Доставка курьером',
            description: 'Лампа настольная Lumina-LX202 прекрасно подходит для освещения рабочего стола или ночного столика. Ее современный дизайн и функциональность сделают ваше пространство уютным и стильным. Лампа имеет регулируемую подставку, что позволяет настроить направление света по вашим предпочтениям. Она изготовлена из прочных материалов - металла и ткани, что обеспечивает долгий срок службы. Вы можете выбрать удобный способ доставки, и наша компания обеспечит быструю доставку этой стильной настольной лампы к вам домой.'
        },
        {
            id: 14,
            name: 'Кабель USB-A to USB-C DataLink 2m',
            sk: 'DL-USB2M',
            image: 'https://i.ebayimg.com/00/s/MzU5WDUwMA==/z/ig8AAOSwDcBjYva9/$_3.JPG?set_id=8800005007',
            price: 299,
            category: 'Кабели',
            material: ['Пластик', 'Медь'],
            delivery: 'Самовывоз',
            description: 'Кабель USB-A to USB-C DataLink длиной 2 метра предназначен для передачи данных и зарядки устройств с разъемами USB-A и USB-C. Он обеспечивает стабильное и быстрое соединение, что позволяет быстро передавать файлы или заряжать ваш смартфон, планшет или другие устройства. Кабель изготовлен из прочных материалов, что делает его долговечным и надежным в использовании. У нас вы можете купить этот кабель по выгодной цене и использовать его для различных электронных устройств, обеспечивая их эффективную работу.'
        },
        {
            id: 15,
            name: 'Кофеварка автоматическая BaristaMaster-5000',
            sk: 'BM-5000',
            image: 'https://good-bt.ru/wa-data/public/shop/products/63/40/24063/images/30195/30195.750x0.jpg',
            price: 5699,
            category: 'Кофеварки',
            material: ['Пластик', 'Металл'],
            delivery: 'Доставка курьером',
            description: 'Кофеварка BaristaMaster-5000 - это современное и удобное устройство для приготовления вкусного кофе в домашних условиях. Она автоматически мелет кофейные зерна, приготовит эспрессо, капуччино или латте, а также поддерживает функцию подогрева кофе. Кофеварка изготовлена из прочного пластика и металла, что обеспечивает ее долгий срок службы. Ее современный дизайн отлично впишется в интерьер вашей кухни. Купив BaristaMaster-5000, вы сможете наслаждаться вкусным кофе каждый день.'
        },
        {
            id: 16,
            name: 'Утюг паровой SteamPro 3000',
            sk: 'SP-3000',
            image: 'https://img.akrep.com/beyaz-esya-ve-ev-aletleri/utu-dikis-makinesi/tn6/arzum-ar6000-steampro-plus-buharli-utu-gri-siyah_1_4732328.jpg',
            price: 1499,
            category: 'Утюги',
            material: ['Пластик', 'Металл'],
            delivery: 'Доставка курьером',
            description: 'Утюг паровой SteamPro 3000 обеспечивает быстрое и качественное глажение вашей одежды. Он оснащен паровой функцией, которая позволяет эффективно удалять складки с различных тканей. Утюг имеет регулируемую подачу пара и температуры, что позволяет адаптировать его под разные типы материалов. Изготовлен из прочных материалов, этот утюг служит долго и надежно. Приобретая SteamPro 3000, вы получаете отличный помощник для быстрого и качественного глажения.'
        },
        {
            id: 17,
            name: 'Фен для волос HairCare 2000',
            sk: 'HC-2000',
            image: 'https://ke-images.servicecdn.ru/c6i9tfsqi3n45kjtuav0/original.jpg',
            price: 799,
            category: 'Фены',
            material: ['Пластик', 'Металл'],
            delivery: 'Самовывоз',
            description: 'Фен для волос HairCare 2000 позволяет быстро и удобно высушивать ваши волосы, придавая им ухоженный и стильный вид. Фен оборудован различными режимами скорости и температуры, что позволяет настроить его под ваши потребности. Он изготовлен из прочных материалов, что обеспечивает долгий срок службы. Компактный размер и удобная ручка делают его отличным выбором для использования дома или в поездке. Приобретая HairCare 2000, вы получаете профессиональный уход за волосами прямо у себя дома.'
        },
        {
            id: 18,
            name: 'Микроволновая печь QuickHeat 800',
            sk: 'QH-800',
            image: 'https://avatars.mds.yandex.net/get-marketpic/6145646/pic9bf472cbb6dc7000effeb2d640d6167a/orig',
            price: 3499,
            category: 'Микроволновки',
            material: ['Пластик', 'Металл'],
            delivery: 'Доставка курьером',
            description: 'Микроволновая печь QuickHeat 800 представляет собой удобное и функциональное устройство для быстрого приготовления и разогрева пищи. Она оборудована различными программами и функциями, что позволяет легко приготовить разнообразные блюда. Микроволновка изготовлена из прочных материалов, что обеспечивает ее долгий срок службы. Удобные ручки и интуитивно понятные настройки делают использование этой печи максимально простым. Приобретая QuickHeat 800, вы получаете удовольствие от быстрой и вкусной еды в любое время.'
        },
        {
            id: 19,
            name: 'Беспроводные наушники SoundFreedom 202',
            sk: 'SF-202',
            image: 'https://basket-10.wb.ru/vol1458/part145867/145867033/images/c246x328/1.jpg',
            price: 1699,
            category: 'Наушники',
            material: ['Пластик', 'Металл'],
            delivery: 'Доставка курьером',
            description: 'Беспроводные наушники SoundFreedom 202 позволяют наслаждаться качественным звуком без проводов и ограничений. Они подходят для прослушивания музыки, звонков и проведения видеозвонков. Наушники имеют долгий срок работы и быструю зарядку, что обеспечивает их надежную работу в течение всего дня. Они удобно крепятся в ухе и практически незаметны во время использования. Приобретая SoundFreedom 202, вы получаете свободу и комфорт в использовании наушников.'
        },
        {
            id: 20,
            name: 'Электрическая зубная щетка SmileCare 3000',
            sk: 'SC-3000',
            image: 'https://dizion.ru/image/cache/catalog/katalog/gigiyena-polosti-rta/elektricheskie-schetki/braun_oral_b_pro_3000_3d_action_d20_zubnaya_schotka_4-700x700.jpg',
            price: 799,
            category: 'Зубные щетки',
            material: ['Пластик', 'Металл'],
            delivery: 'Самовывоз',
            description: 'Электрическая зубная щетка SmileCare 3000 обеспечивает эффективную и бережную чистку зубов. Она оснащена различными режимами работы, что позволяет настроить ее под ваши предпочтения. Зубная щетка обеспечивает высокую скорость вращения щетинок, что позволяет легко и эффективно удалять налет и зубной камень. Ее эргономичная ручка обеспечивает комфортное удержание в руке. Приобретая SmileCare 3000, вы получаете здоровую улыбку и чистоту ваших зубов.'
        }

    ]


    const [filteredProducts, setFilteredProducts] = useState([...products])
    const [filteredName2, setFilteredName2] = useState<string>('')


    const filterByName2 = (arr: typeof products, query: string) => {
        if (query == '') {
            return products
        }
        return arr.filter((el: typeof products[0]) => el.name.toLowerCase().includes(query.toLowerCase()));
    }
    useEffect(() => {
        if (filteredName != '') {
            setFilteredProducts([...filterByName2(products, filteredName)])
        }
    }, [filteredName])

    return (
        <main className="">
            <p className={'font-bold font-manrope text-white mb-8 text-4xl'}>Отгрузки</p>
            <div className={'bg-white drop-shadow-lg p-4 px-8 rounded-lg'}>
                <div className={'w-full grid mt-4 gap-8 grid-cols-9'}>
                    <div className={'flex flex-col gap-2 col-span-6'}>
                        <div className={'grid grid-cols-9 gap-6'}>
                            <div className={'col-span-6 relative flex items-center'}>
                                <Input icon={'/images/icons/search.svg'} mutateValue={filteredName} type={'text'}
                                       placeholder={'Введите название или артикул'} mutateFunction={setFilteredName}/>
                                {filteredName != '' ? <img onClick={() => {
                                    setFilteredName('')
                                }} className={'cursor-pointer right-2 absolute w-4 aspect-square'}
                                                           src={'/images/icons/close_orange.svg'}/> : null}
                            </div>
                            <Button callback={() => {
                            }} className={'h-full col-span-3'} type={'orange'}>Найти</Button>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-2 col-span-3 px-4'}>
                        <div className={'flex items-center gap-4'}>
                            <p className={'font-manrope font-bold text-black whitespace-nowrap'}>Заказы c</p>
                            <div className={'flex gap-4 items-center'}>
                                <ReactDatePicker locale="ru" calendarClassName={'font-travels'} selectsStart
                                                 startDate={startDate} endDate={endDate}
                                                 className={'bg-[#F8F8FA] text-center font-manrope w-full placeholder:text-black  placeholder:text-opacity-50 p-3 bg-transparent font-semibold text-black focus:border-orange focus:outline-0 p-3 w-full rounded-xl drop-shadow-md flex items-center gap-2'}
                                                 dateFormat={'dd.MM.yyyy'} onChange={(date) => {
                                    if (date) {
                                        setStartDate(date)
                                    }
                                }} selected={startDate}></ReactDatePicker>
                            </div>
                            <div className={'flex gap-4 items-center'}>
                                <p className={'font-manrope font-bold text-black'}>по</p>
                                <ReactDatePicker locale="ru" calendarClassName={'font-travels'} selectsEnd
                                                 startDate={startDate} endDate={endDate}
                                                 className={'bg-[#F8F8FA] text-center font-manrope w-full placeholder:text-black  placeholder:text-opacity-50 p-3 bg-transparent font-semibold text-black focus:border-orange focus:outline-0 p-3 w-full rounded-xl drop-shadow-md flex items-center gap-2'}
                                                 dateFormat={'dd.MM.yyyy'} onChange={(date) => {
                                    if (date) {
                                        setEndDate(date)
                                    }
                                }} selected={endDate}></ReactDatePicker>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'flex items-center font-manrope mt-6 gap-8'}>
                    <div className={'flex items-center gap-3'}>
                        <div className={classList('rounded-full w-5 bg-[#FFD373] aspect-square')}>
                        </div>
                        <p className={'font-bold text-black'}>
                            {'< 1 недели'}
                        </p>
                    </div>
                    <div className={'flex items-center gap-3'}>
                        <div className={classList('rounded-full w-5 bg-[#F28736] aspect-square')}>
                        </div>
                        <p className={'font-bold text-black'}>
                            {'1-2 недели'}
                        </p>
                    </div>
                    <div className={'flex items-center gap-3'}>
                        <div className={classList('rounded-full w-5 bg-[#FF0000] aspect-square')}>
                        </div>
                        <p className={'font-bold text-black'}>
                            {'2-4 недели'}
                        </p>
                    </div>
                    <div className={'flex items-center gap-3'}>
                        <div className={classList('rounded-full w-5 bg-[#004891] aspect-square')}>
                        </div>
                        <p className={'font-bold text-black'}>
                            {'Доставлено'}
                        </p>
                    </div>
                </div>
                <div className={'grid mt-5 drop-shadow-sm mb-4 bg-[#F8F8FA] rounded-xl font-manrope grid-cols-12'}>
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
                {filteredOrders.map((order,counter) => {
                    if (order.date >= startDate && order.date <= endDate) {
                        return (
                            <div key={order.id}
                                 className={'font-manrope grid border-b-2 border-[#F1F1F1] grid-cols-12'}>

                                <div
                                    className={'col-span-2 px-4 font-bold text-blue gap-4 border-r-2 border-[#F1F1F1] flex items-center justify-start bg-white p-2'}>
                                    <div
                                        className={classList('text-center p-2 rounded-full w-5 aspect-square font-bold leading-[100%]', `bg-[${translateOrderDelivery(order.deliveryDelay)}]`)}>

                                    </div>
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
                                    {order.products.map((product, counter) => {
                                        if (counter < 5) {
                                            return `${product.name}-${product.qnt} шт. ,`
                                        }
                                    })}
                                    {order.products.length > 5 ?
                                        <span className={'font-bold cursor-pointer underline text-[#004169] underline'}><Link href={`/deliveries/products/${counter}`}>смотреть все</Link></span> : null}
                                </div>
                                <div
                                    className={'col-span-1 px-4 font-bold text-black border-x-2 border-[#F1F1F1] text-sm flex items-center justify-center bg-white p-2'}>
                                    {formatDate(order.date)}
                                </div>
                                <div
                                    className={'col-span-3 gap-4 grid grid-cols-2 items-center px-4 font-medium text-xs text-blue border-[#F1F1F1] w-full bg-white p-2'}>
                                    <Button className={'w-full text-sm'} type={'white'}><Link href={`/deliveries/edit/${counter}`}>Редактировать</Link></Button>
                                    <Button className={'w-full text-sm'}
                                            type={'orange'}>{translateOrderButton(order.orderStatus)}</Button>
                                </div>
                            </div>
                        )

                    }
                })}
                <Pagination currentPage={1} setCurrentPage={() => {
                }} pages={42}></Pagination>
            </div>

            <p className={'font-bold mt-20 mb-8 font-manrope text-blue text-3xl'}>Резервы</p>

            <div className={'bg-white drop-shadow-lg rounded-lg p-8'}>
                <div className={'grid grid-cols-12 mb-8 grid-rows-1 gap-2  items-start relative'}>
                    <div className={'col-span-7 relative flex items-center'}>
                        <Input mutateValue={filteredName} type={'text'} placeholder={'Введите название или артикул'}
                               mutateFunction={setFilteredName2}/>
                        {filteredName != '' ? <img onClick={() => {
                            setFilteredName2('')
                        }} className={'cursor-pointer right-2 absolute w-4 aspect-square'}
                                                   src={'/images/icons/close_orange.svg'}/> : null}
                    </div>
                    <Button callback={() => {
                        setFilteredProducts([...filterByName2(filteredProducts, filteredName)])
                    }} className={'h-full col-end-13 col-span-3'} type={'orange'}>Найти</Button>
                </div>
                <div className={'col-span-9 relative scrollbar'}>
                    <div className={'drop-shadow-sm mb-4 grid bg-[#F8F8FA] rounded-xl font-manrope grid-cols-12'}>
                        <div
                            className={'col-span-3 font-bold text-[#004169] flex items-center justify-center  p-2'}>
                            Наименование
                        </div>
                        <div
                            className={'col-span-3 font-bold text-[#004169] flex items-center justify-center  p-2'}>

                            Остаток на складе в Митино
                        </div>
                        <div
                            className={'col-span-3 font-bold text-[#004169] flex items-center justify-center  p-2'}>
                            Остаток на складе в Мытищах
                        </div>

                        <div
                            className={'col-span-3 font-bold text-[#004169] flex items-center justify-center  p-2'}>
                            Итого
                        </div>


                    </div>
                    {filteredProducts.map((product, counter) => {
                        if (counter < 10) {
                            return (
                                <div key={counter} className={'grid grid-cols-12 border-b-2 border-[#F1F1F1]'}>
                                    <div
                                        className={'col-span-3 text-blue border-r-2 border-[#F1F1F1] flex items-center justify-start bg-white p-2'}>
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
                                        className={'font-manrope col-span-3 font-bold text-black border-r-2 border-[#F1F1F1] flex items-center justify-center bg-white p-2'}>
                                        {product.price} шт.
                                    </div>
                                    <div
                                        className={'font-manrope col-span-3 font-bold text-black border-r-2 border-[#F1F1F1] flex items-center justify-center bg-white p-2'}>
                                        {product.price} шт.
                                    </div>
                                    <div
                                        className={'font-manrope col-span-3  font-bold text-black border-r-2 border-[#F1F1F1] grid grid-cols-2 px-12 items-center justify-center bg-white p-2'}>
                                        <p>{product.price*2} шт.</p>
                                        <Button type={'orange'}>Докупить</Button>
                                    </div>

                                </div>
                            )
                        }
                    })}
                    <Pagination currentPage={1} setCurrentPage={() => {
                    }} pages={42}></Pagination>
                </div>
            </div>

        </main>
    )
}