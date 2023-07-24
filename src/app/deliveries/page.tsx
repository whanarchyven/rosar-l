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
import Link from "next/link";
import ProductQntPicker from "@/components/ProductQntPicker";

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
        deliveryDelay:'fast'|'medium'|'long'|'already'
    }>=[
        {
            date:new Date(2023,2,14),
            id:432675775689,
            name:'Контрольная закупка',
            address:'Москва, ул. Минина д.123',
            products:[{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63}],
            order:123125,
            orderStatus:'pending',
            deliveryDelay:'fast',
        },
        {
            date:new Date(2023,2,15),
            id:432675775681,
            name:'Контрольная закупка',
            address:'Москва, ул. Минина д.123',
            products:[{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63}],
            order:123125,
            orderStatus:'canceled',
            deliveryDelay:'medium',
        },
        {
            date:new Date(2023,2,16),
            id:432675775682,
            name:'Контрольная закупка',
            address:'Москва, ул. Минина д.123',
            products:[{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63}],
            order:123125,
            orderStatus:'payed',
            deliveryDelay:'long',
        },
        {
            date:new Date(2023,2,17),
            id:432675775683,
            name:'Контрольная закупка',
            address:'Москва, ул. Минина д.123',
            products:[{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63}],
            order:123125,
            orderStatus:'delivered',
            deliveryDelay:'already',
        },
        {
            date:new Date(2023,2,18),
            id:412675775689,
            name:'Контрольная закупка',
            address:'Москва, ул. Минина д.123',
            products:[{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63}],
            order:123125,
            orderStatus:'pending',
            deliveryDelay:'fast',
        },
        {
            date:new Date(2023,2,19),
            id:422675775681,
            name:'Контрольная закупка',
            address:'Москва, ул. Минина д.123',
            products:[{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63}],
            order:123125,
            orderStatus:'canceled',
            deliveryDelay:'medium',
        },
        {
            date:new Date(2023,2,20),
            id:433675775682,
            name:'Контрольная закупка',
            address:'Москва, ул. Минина д.123',
            products:[{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63}],
            order:123125,
            orderStatus:'payed',
            deliveryDelay:'long',
        },
        {
            date:new Date(2023,2,21),
            id:442675775683,
            name:'Контрольная закупка',
            address:'Москва, ул. Минина д.123',
            products:[{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63}],
            order:123125,
            orderStatus:'delivered',
            deliveryDelay:'already',
        },
        {
            date:new Date(2023,2,22),
            id:132675775689,
            name:'Контрольная закупка',
            address:'Москва, ул. Минина д.123',
            products:[{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63}],
            order:123125,
            orderStatus:'pending',
            deliveryDelay:'fast',
        },
        {
            date:new Date(2023,2,23),
            id:232675775681,
            name:'Контрольная закупка',
            address:'Москва, ул. Минина д.123',
            products:[{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63}],
            order:123125,
            orderStatus:'canceled',
            deliveryDelay:'medium',
        },
        {
            date:new Date(2023,2,24),
            id:332675775682,
            name:'Основная закупка',
            address:'Москва, ул. Минина д.123',
            products:[{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63}],
            order:123125,
            orderStatus:'payed',
            deliveryDelay:'long',
        },
        {
            date:new Date(2023,2,25),
            id:532675775683,
            name:'Контрольная закупка',
            address:'Москва, ул. Минина д.123',
            products:[{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63},{name:'Розетка SFG134-RD',qnt:63}],
            order:123125,
            orderStatus:'delivered',
            deliveryDelay:'already',
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

    const translateOrderDelivery=(delivery:'fast'|'medium'|'long'|'already')=>{
        switch (delivery){
            case "fast":return '#FFECC3'
            case "medium": return '#FFC69B'
            case "long": return '#FFC3C3'
            case 'already':return '#C5F9C7'
            default: return ''
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


    const [filteredProducts,setFilteredProducts]=useState([...products])
    const [filteredName2,setFilteredName2]=useState<string>('')


    const filterByName2=(arr:typeof products, query:string)=> {
        if(query==''){
            return products
        }
        return arr.filter((el:typeof products[0]) => el.name.toLowerCase().includes(query.toLowerCase()));
    }
    useEffect(()=>{
        if(filteredName!=''){
            setFilteredProducts([...filterByName2(products,filteredName)])
        }
    },[filteredName])

    return (
        <main className="mt-5">
            <p className={'font-bold font-travels text-blue text-3xl'}>Отгрузки</p>
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
            <div className={'flex items-center mt-6 gap-8'}>
                <p className={'text-blue font-medium text-xl'}>Сроки доставки</p>
                <div className={'flex items-center gap-3'}>
                    <div className={classList('rounded-full w-5 bg-[#FFECC3] aspect-square')}>
                    </div>
                    <p className={'font-medium text-blue'}>
                        {'< 1 недели'}
                    </p>
                </div>
                <div className={'flex items-center gap-3'}>
                    <div className={classList('rounded-full w-5 bg-[#FFC69B] aspect-square')}>
                    </div>
                    <p className={'font-medium text-blue'}>
                        {'1-2 недели'}
                    </p>
                </div>
                <div className={'flex items-center gap-3'}>
                    <div className={classList('rounded-full w-5 bg-[#FFC3C3] aspect-square')}>
                    </div>
                    <p className={'font-medium text-blue'}>
                        {'2-4 недели'}
                    </p>
                </div>
                <div className={'flex items-center gap-3'}>
                    <div className={classList('rounded-full w-5 bg-[#C5F9C7] aspect-square')}>
                    </div>
                    <p className={'font-medium text-blue'}>
                        {'Доставлено'}
                    </p>
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
                    className={'col-span-2 font-bold text-white border-r-2 border-white flex items-center justify-start bg-blue p-2'}>
                    Товары
                </div>
                <div
                    className={'col-span-1 font-bold text-white border-r-2 border-white flex items-center justify-center bg-blue p-2'}>
                    Счёт
                </div>
                <div
                    className={'col-span-2 font-bold text-white border-r-2 border-white flex items-center justify-center bg-blue p-2'}>

                </div>
                <div
                    className={'col-span-2 font-bold text-white border-r-2 border-blue flex items-center justify-center bg-blue p-2'}>

                </div>
            </div>
            {filteredOrders.map((order)=>{
                if(order.date>=startDate&&order.date<=endDate){
                    return(
                        <div key={order.id} className={classList('grid border-b-2 border-blue grid-cols-12',order.deliveryDelay=='fast'?'bg-[#FFECC3]':'',order.deliveryDelay=='medium'?'bg-[#FFC69B]':'',order.deliveryDelay=='long'?'bg-[#FFC3C3]':'',order.deliveryDelay=='already'?'bg-[#C5F9C7]':'')}>
                            <div
                                className={'col-span-1 font-bold text-blue border-x-2 border-blue text-xs flex items-center justify-start p-2'}>
                                {formatDate(order.date)}
                            </div>
                            <div
                                className={'col-span-2 font-bold text-blue border-r-2 border-blue flex items-center justify-start p-2'}>
                                <div className={'flex flex-col'}>
                                    <p className={'font-medium text-xs text-orange'}>{order.id}</p>
                                    <p className={'text-blue text-xs'}>{order.name}</p>
                                </div>
                            </div>
                            <div
                                className={'col-span-2 font-medium text-xs text-blue border-r-2 border-blue flex items-center justify-start p-2'}>
                                {order.address}
                            </div>
                            <div
                                className={'col-span-2 font-medium text-xs text-blue border-r-2 border-blue flex flex-col items-start justify-start p-2'}>
                                {order.products.map((product,counter)=>{
                                    if(counter<3){
                                        return `${product.name}-${product.qnt} шт. ,`
                                    }
                                })}
                                {order.products.length>5?<span className={'font-bold cursor-pointer underline text-orange'}>смотреть все</span>:null}
                            </div>
                            <div
                                className={'col-span-1 font-medium text-xs text-blue border-r-2 border-blue flex items-center justify-center p-2'}>
                                <div className={'flex flex-col font-bold'}>
                                    <p className={'text-center'}>№{order.order}</p>
                                    <p className={classList('text-center leading-[100%]',order.orderStatus=='pending'?'text-orange':'',order.orderStatus=='canceled'?'text-red-500':'',order.orderStatus=='payed'?'text-green-500':'',order.orderStatus=='delivered'?'text-blue':'')}>{translateOrderStatus(order.orderStatus)}</p>
                                </div>
                            </div>
                            <div
                                className={'col-span-2 font-medium text-xs text-blue border-r-2 border-blue flex items-center justify-center p-2'}>
                                <Button className={'w-full'} type={'white'}>{order.deliveryDelay=='already'?'Изменить':'Возврат'}</Button>
                            </div>
                            <div
                                className={'col-span-2 font-medium text-xs text-blue border-r-2 border-blue flex items-center justify-center p-2'}>
                                <Button className={'w-full'} type={'white'}>{translateOrderButton(order.orderStatus)}</Button>
                            </div>
                        </div>
                    )

                }
            })}
            <div className={'flex mt-5 items-center justify-center'}>
                <Pagination currentPage={1} setCurrentPage={()=>{}} pages={43}></Pagination>
            </div>
            <p className={'font-bold font-travels text-blue text-3xl'}>Резервы</p>

            <div className={'mt-5 flex flex-col gap-2'}>
                <p className={'text-blue text-xl font-medium'}>
                    Поиск товара по названию
                </p>
                <div className={'grid grid-cols-9 grid-rows-1 gap-2  items-start relative'}>
                    <div className={'col-span-6 relative flex items-center'}>
                        <Input mutateValue={filteredName} type={'text'} placeholder={'Введите название или артикул'} mutateFunction={setFilteredName2}/>
                        {filteredName!=''?<img onClick={()=>{setFilteredName2('')}} className={'cursor-pointer right-2 absolute w-4 aspect-square'} src={'/images/icons/close_orange.svg'}/>:null}
                    </div>
                    <Button callback={()=>{setFilteredProducts([...filterByName2(filteredProducts,filteredName)])}} className={'h-full col-span-3'} type={'orange'}>Найти</Button>
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
                        Остаток на складе в Митино
                    </div>
                    <div
                        className={'col-span-2 font-bold text-white border-r-2 border-white flex items-center justify-center bg-blue p-2'}>
                        Остаток на складе в Мытищах
                    </div>
                    <div
                        className={'col-span-2 font-bold text-white border-r-2 border-white flex items-center justify-center bg-blue p-2'}>
                        Итого
                    </div><div
                    className={'col-span-2 font-bold text-white border-white flex items-center justify-center bg-blue p-2'}>

                </div>


                </div>
                {products.map((product, counter) => {
                    if (counter < 10) {
                        return (
                            <div key={counter} className={'grid grid-cols-12 border-b-2 border-blue'}>
                                <div
                                    className={'col-span-4 text-blue border-r-2 border-blue flex items-center justify-start bg-white p-2'}>
                                    <div className={'flex gap-2 items-center'}>
                                        <img className={'w-10 aspect-square object-cover'} src={product.image}/>
                                        <div className={'flex flex-col'}>
                                            <p className={'text-xs text-orange font-regular'}>Артикул: {product.sk}</p>
                                            <div className={'flex gap-2 items-center'}>
                                                <Link href={{
                                                    pathname: "/catalog/product/",
                                                    query: {id: product.id},
                                                }}>
                                                    <p className={'text-lg underline text-sm text-blue font-semibold'}>{product.name}</p>
                                                </Link>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={'col-span-2 font-normal text-blue border-r-2 border-blue flex items-center justify-center bg-white p-2'}>
                                    {product.price} шт.
                                </div>
                                <div
                                    className={'col-span-2 font-normal text-blue border-r-2 border-blue flex items-center justify-center bg-white p-2'}>
                                    {product.price+100} шт.
                                </div>
                                <div
                                    className={'col-span-2 font-normal text-blue border-r-2 border-blue flex items-center justify-center bg-white p-2'}>
                                    {product.price*2+100} шт.
                                </div>
                                <div
                                    className={'col-span-2 font-normal text-blue border-r-2 border-blue flex items-center justify-center bg-white p-2'}>
                                    <Link href={'/catalog'}>
                                        <Button callback={()=>{
                                        }} type={'orange'}>Докупить</Button>
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </main>
    )
}