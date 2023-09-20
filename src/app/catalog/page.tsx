"use client"
import Image from 'next/image'
import React, {useEffect, useState} from "react";
import FilterCategory from "@/components/FilterCategory";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import {classList} from "@/helpers/classList";
import ProductQntPicker from "@/components/ProductQntPicker";
import Pagination from "@/components/UI/Pagination";
import Link from "next/link";
import FullScreenFilter from "@/components/FullScreenFilter";
import {useSearchParams} from "next/navigation";
import {param} from "ts-interface-checker";
import {useCallback} from "react";
import {nanoid} from "nanoid";
import Breadcrumbs from "@/components/Breadcrumbs";
import {round} from "@popperjs/core/lib/utils/math";

export default function Home() {

    const categoryVariants: any = [
        // {
        //     value: 'Розетки',
        //     icon: '/images/catalog/power.svg'
        // },
        // {
        //     value: 'Дисплеи',
        //     icon: '/images/catalog/ambient_screen.svg'
        // },
        // {
        //     value: 'Кабели',
        //     icon: '/images/catalog/cable.svg'
        // },
        // {
        //     value: 'Wi-Fi споты',
        //     icon: '/images/catalog/settings_remote.svg'
        // },
        // {
        //     value: 'Манипуляторы',
        //     icon: '/images/catalog/joystick.svg'
        // }
    ]

    const materialVariants = [
        {
            value: 'Росар'
        },
        {
            value: 'Интелл'
        },
        {
            value: 'ЧебПромМаш'
        },
    ]

    const deliveryVariants = [
        {
            value: '< 1 недели'
        },
        {
            value: '1-2 недели'
        },
        {
            value: '> 2 недель'
        }
    ]

    const [resetFilters, setResetFilters] = useState(false)

    const [productsQnt, setProductsQnt] = useState(0)
    const [productsPrice, setProductsPrice] = useState(0)

    const products = [
        {
            id: 1,
            name: 'Кабель SFG134-RD',
            sk: 'R910X023',
            image: '/images/temp/product.png',
            price: 569,
            discount: 0.12,
            category: 'Розетки',
            material: ['Пластик', 'Медь'],
            delivery: 'Самовывоз',
            remains: 160,
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
            remains: 160,
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
            remains: 160,
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
            remains: 160,
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
            remains: 160,
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
            remains: 160,
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
            remains: 160,
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
            remains: 160,
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
            remains: 160,
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
            remains: 160,
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
            remains: 160,
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
            remains: 160,
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
            remains: 160,
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
            remains: 160,
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
            remains: 160,
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
            remains: 160,
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
            remains: 160,
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
            remains: 160,
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
            remains: 160,
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
            remains: 160,
            description: 'Электрическая зубная щетка SmileCare 3000 обеспечивает эффективную и бережную чистку зубов. Она оснащена различными режимами работы, что позволяет настроить ее под ваши предпочтения. Зубная щетка обеспечивает высокую скорость вращения щетинок, что позволяет легко и эффективно удалять налет и зубной камень. Ее эргономичная ручка обеспечивает комфортное удержание в руке. Приобретая SmileCare 3000, вы получаете здоровую улыбку и чистоту ваших зубов.'
        }

    ]

    const [cartProducts, setCartProducts] = useState<any>([])

    useEffect(() => {
        console.log('aaa')
        window?.localStorage.getItem('products') ? setCartProducts(JSON.parse(String(window?.localStorage.getItem('products')))) : []
    }, [])

    const addToCart = (product: any, qnt: any) => {
        let temp = [...cartProducts]
        temp.push({product, qnt})
        setCartProducts([...temp])
        window?.localStorage.setItem('products', JSON.stringify(temp))
    }


    useEffect(() => {
        let totalPrice = 0;
        let totalQnt = 0;
        cartProducts.map((item: any) => {
            totalPrice += (item.product.price * item.qnt)
            totalQnt += item.qnt
        })
        setProductsPrice(totalPrice)
        setProductsQnt(totalQnt)
    }, [cartProducts])


    //filter functions

    const [filteredProducts, setFilteredProducts] = useState([...products])

    const filterByCategory = (needCategory: { value: string, icon: string } | undefined) => {
        if (needCategory == undefined) {
            return products
        }
        let temp = [...products]
        let filtered = temp.filter(item => item.category == needCategory.value)
        // console.log(needCategory.value)
        // console.log(filtered)
        // setFilteredProducts([...filtered])
        return filtered
    }

    const filterByMaterials = (needMaterials: Array<{ value: string }>) => {

        let temp = [...products]
        let filtered = temp.filter((item) => {
            let flag = null;
            item.material.map((material) => {
                if (needMaterials.find(needMaterial => needMaterial.value == material)) {
                    flag = item
                }
            })
            if (flag) {
                return flag
            } else {
                return false
            }
        })
        // console.log(needMaterials)
        // console.log(filtered)
        if (needMaterials.length == 0) {
            return (products)
        } else {
            return (filtered)
        }
    }

    const filterByDelivery = (needDelivery: { value: string } | undefined) => {

        if (needDelivery == undefined) {
            return products
        }

        let temp = [...products]
        let filtered = temp.filter(item => item.delivery == needDelivery.value)
        // console.log(needDelivery)
        // console.log(filtered)
        // setFilteredProducts([...filtered])
        return filtered
    }

    const [filteredCategory, setFilteredCategory] = useState<{ value: string, icon: string }>()

    const [filteredDelivery, setFilteredDelivery] = useState<{ value: string }[]>()

    const [filteredMaterial, setFilteredMaterial] = useState<{ value: string }[]>([])

    const [filteredName, setFilteredName] = useState<string>('')


    const filterByName = (arr: typeof products, query: string) => {
        if (query == '') {
            return products
        }
        return arr.filter((el: typeof products[0]) => el.name.toLowerCase().includes(query.toLowerCase()));
    }


    useEffect(() => {
        setFilteredProducts([...products])
        console.log('AAAAAAAAA', filteredProducts)
        console.log(filteredCategory, filteredDelivery)
        let arrs: any = []
        arrs.push(filterByCategory(filteredCategory))
        arrs.push(filterByMaterials(filteredMaterial))
        // let result = (arrs[0].filter((value: any) => arrs[1].includes(value))).filter((value: any) => arrs[2].includes(value))
        // setFilteredProducts([...result])
        // console.log(result)
    }, [filteredMaterial, filteredDelivery, filteredCategory])


    useEffect(() => {
        if (filteredName != '') {
            setFilteredProducts([...filterByName(products, filteredName)])
        }
    }, [filteredName])

    const [filterValues, setFilterValues] = useState<Array<{ name: string, value: string }>>([])

    const [isFilterOpen, setIsFilterOpen] = useState(false)

    const [delivery, setDelivery] = useState('');


    const params = useSearchParams();

    const [filterKeys, setFilterKeys] = useState<Array<{ name: string, value: string | null }>>([]);

    useEffect(() => {
        let temp = [...filterKeys]
        params.forEach((value, key) => {
            temp.push({name: key, value: value})
            console.log(temp, value);
        })
        setFilterKeys(temp)
    }, [params])


    const subProducts = {
        "Шуруповерты": [{
            name: 'Ударные',
            amount: 15,
            image: '/images/catalog/drills/0ede19ed_4f87_11e4_8b81_00259096c80e 1.png'
        }, {
            name: 'Безударные',
            amount: 15,
            image: '/images/catalog/drills/0ede19ed_4f87_11e4_8b81_00259096c80e 1-1.png'
        },
            {
                name: 'Угловые',
                amount: 15,
                image: '/images/catalog/drills/0ede19ed_4f87_11e4_8b81_00259096c80e 1-2.png'
            },
            {
                name: 'Аккумуляторы',
                amount: 15,
                image: '/images/catalog/drills/0ede19ed_4f87_11e4_8b81_00259096c80e 1-3.png'
            },
            {
                name: 'Винтоверты',
                amount: 15,
                image: '/images/catalog/drills/0ede19ed_4f87_11e4_8b81_00259096c80e 1-4.png'
            },
            {
                name: 'Лентоные',
                amount: 15,
                image: '/images/catalog/drills/0ede19ed_4f87_11e4_8b81_00259096c80e 1-5.png'
            }]
    }

    const [isFiltered, setIsFiltered] = useState(params.has('type'))

    const [filterSubCategory, setFilterSubcategory] = useState<Array<{
        name: string,
        amount: number,
        image: string
    }>>([])

    useEffect(() => {
        if (filterKeys[2]?.value != null) {
            setFilterSubcategory(subProducts[filterKeys[2]?.value as keyof typeof subProducts])
        }
    }, [filterKeys])

    console.log(useSearchParams().entries())

    const paramsLink=decodeURI(useSearchParams().toString())

    return (
        <main className="">
            <div className={'flex items-center mb-10 justify-between'}>
                <p className={'font-bold font-manrope text-white text-4xl'}>Каталог</p>
                <div className={'flex gap-2 items-center'}>
                    <Link href={'/catalog/history'}
                          className={'flex p-2 font-bold text-white text-lg transition-all duration-200 items-center border-b-2 justify-center'}>
                        История заказов {filterKeys[0]?.value}
                    </Link>
                </div>
            </div>
            <Breadcrumbs></Breadcrumbs>
            <div className={'w-full mt-10 grid grid-cols-3 mb-5 gap-8'}>
                {filterSubCategory?.map((item) => {
                    return (
                        <a key={nanoid()}
                           href={`/catalog?type=Инструмент&instrument=Аккумуляторный инструмент&accumulator_instrument_type=Шуруповерты&shurupovert=${item.name}`}
                           className={classList('p-12 flex items-center gap-4 justify-start shadow-lg bg-white rounded-xl border-4', filterKeys[3]?.value == item.name ? ' border-orange' : 'border-transparent')}>
                            <img src={item.image}/>
                            <div className={'flex flex-col items-start gap-2'}>
                                <p className={'font-manrope font-bold text-2xl'}>{item.name}</p>
                                <p className={'font-manrope text-blue font-normal text-xl'}>{item.amount} товаров</p>
                            </div>
                        </a>
                    )
                })}
            </div>
            <div className={'bg-white p-12 drop-shadow-lg relative overflow-hidden rounded-xl'}>
                {isFilterOpen ? <div className={'absolute left-0 top-0 w-full z-[30] p-12 bg-white h-full'}>
                    <img onClick={() => {
                        setIsFilterOpen(false);
                    }} src={'/images/icons/close_filter.svg'}
                         className={'w-5 aspect-square cursor-pointer absolute right-8 top-8'}/>
                    <FullScreenFilter delivery={delivery} setDelivery={setDelivery} togglePop={() => {
                        setIsFilterOpen(false)
                    }} filterValues={filterValues} setFilterValues={setFilterValues}></FullScreenFilter>
                </div> : null}
                <div className={'mt-5 flex flex-col gap-2'}>
                    <div className={'grid grid-cols-12 grid-rows-1 gap-2  items-start relative'}>
                        <div className={'col-span-7 gap-4 relative flex items-center'}>
                            <Input icon={'/images/icons/search.svg'} mutateValue={filteredName} type={'text'}
                                   placeholder={'Введите название или артикул'} mutateFunction={setFilteredName}/>
                            <div
                                className={'w-12 flex items-center justify-center p-3 cursor-pointer rounded-lg aspect-square bg-orange'}>
                                <img src={'/images/search_white.svg'} className={'w-full h-full'}/>
                            </div>
                        </div>
                        <Button callback={() => {
                            setIsFilterOpen(true);
                        }} className={'h-full col-span-3 col-end-13'} type={'orange'}>Категории</Button>
                    </div>
                </div>
                <div className={'mt-5 grid gap-8 grid-cols-12 items-start'}>
                    <div className={'col-span-3'}>
                        <div className={'drop-shadow-md bg-[#F8F8FA] p-4 rounded-xl'}>
                            <div className={'h-96 p-2 scrollbar-mini overflow-y-scroll'}>
                                <div className={'flex flex-col gap-4'}>
                                    <FilterCategory resetTrigger={resetFilters} variants={categoryVariants}
                                                    currentValue={filteredCategory}
                                                    setCurrentValue={setFilteredCategory}
                                                    type={'variants'} title={'Технические параметры'}/>
                                    <FilterCategory resetTrigger={resetFilters} variants={materialVariants}
                                                    setCurrentValue={() => {
                                                    }}
                                                    currentValue={filteredMaterial}
                                                    type={'radio'} title={'Производители'}/>
                                    <FilterCategory resetTrigger={resetFilters} variants={categoryVariants}
                                                    setCurrentValue={() => {
                                                    }}
                                                    currentValue={filteredMaterial}
                                                    type={'variants'} title={'Страна'}/>
                                    <FilterCategory resetTrigger={resetFilters} variants={deliveryVariants}
                                                    currentValue={filteredDelivery}
                                                    setCurrentValue={setFilteredDelivery}
                                                    type={'multi'} title={'Доставка'}/>
                                    <FilterCategory resetTrigger={resetFilters} variants={deliveryVariants}
                                                    currentValue={filteredDelivery}
                                                    setCurrentValue={() => {
                                                    }}
                                                    type={'price'} title={'Ценовой диапазон'}/>
                                    <FilterCategory resetTrigger={resetFilters} variants={categoryVariants}
                                                    currentValue={filteredCategory}
                                                    setCurrentValue={setFilteredCategory}
                                                    type={'variants'} title={'Категория'}/>
                                    <div className={'flex w-full justify-between items-center gap-2'}>
                                        <Button type={'blue-outlined'}
                                                className={'text-sm w-40 h-12'}>Применить</Button>
                                        <Button type={'transparent orange'} className={'text-sm h-12'}>Сбросить
                                            фильтры</Button>
                                    </div>
                                </div>
                            </div>
                            {/*<div className={'p-2'}>*/}
                            {/*    <Button type={'transparent blue'} callback={() => {*/}
                            {/*        setResetFilters(!resetFilters)*/}
                            {/*        setFilteredProducts([...products])*/}
                            {/*    }}>Сбросить фильтр</Button>*/}
                            {/*</div>*/}
                        </div>
                        <Link href={'/cart'}>
                            <div className={'bg-blue rounded-xl drop-shadow-lg flex flex-col gap-3 mt-4 p-4'}>
                                <div className={'flex gap-2 items-center justify-between'}>
                                    <p className={'text-sm font-manrope font-bold text-white'}>Оформить заказ</p>
                                    <p className={'font-manrope font-extrabold text-white text-2xl'}>{productsPrice} ₽</p>
                                </div>
                            </div>
                        </Link>
                        <div className={'bg-orange rounded-xl drop-shadow-lg flex flex-col gap-3 mt-4 p-4'}>
                            <div className={'flex gap-2 items-center justify-between'}>
                                <p className={'text-sm font-manrope font-bold text-white'}>Импорт списка покупок из
                                    Excel</p>
                                <img src={'/images/icons/import.svg'}/>
                            </div>
                        </div>
                    </div>
                    <div className={'col-span-9 relative scrollbar'}>
                        <div className={'drop-shadow-sm mb-4 grid bg-[#F8F8FA] rounded-xl font-manrope grid-cols-12'}>
                            <div
                                className={'col-span-4 font-bold text-[#004169] flex items-center justify-center  p-2'}>
                                Наименование
                            </div>
                            <div
                                className={'col-span-2 font-bold text-[#004169] flex items-center justify-center  p-2'}>
                                Цена
                            </div>
                            <div
                                className={'col-span-2 font-bold text-[#004169] flex items-center justify-center  p-2'}>
                                О товаре
                            </div>
                            <div
                                className={'col-span-1 font-bold text-[#004169] flex items-center justify-center  p-2'}>
                                Наличие
                            </div>

                            <div
                                className={'col-span-2 font-bold text-[#004169] flex items-center justify-center  p-2'}>
                                Количество
                            </div>
                            <div
                                className={'col-span-1 font-bold text-[#004169]  flex items-center justify-center  p-2'}>

                            </div>

                        </div>
                        {filteredProducts.map((product, counter) => {
                            if (counter < 10) {
                                return (
                                    <div key={counter} className={'grid grid-cols-12 border-b-2 border-[#F1F1F1]'}>
                                        <div
                                            className={'col-span-4 text-blue border-r-2 border-[#F1F1F1] flex items-center justify-start bg-white p-2'}>
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
                                            className={'font-manrope col-span-2 font-bold text-black border-r-2 border-[#F1F1F1] flex items-center justify-center bg-white p-2'}>
                                            {product.discount ? <div className={'flex flex-col items-center '}>
                                                <p>{round(product.price*(1-product.discount))} ₽/шт.</p>
                                                <div className={'relative flex items-center justify-center'}>
                                                    <p className={'text-sm font-medium text-[#929292]'}>{product.price} ₽/шт.</p>
                                                    <img className={'absolute w-full scale-110 h-full'} src={'/images/icons/discount.svg'}/>
                                                </div>
                                            </div> : <p>{product.price} ₽/шт.</p>}
                                        </div>
                                        <div
                                            className={'col-span-2 font-normal text-blue border-r-2 border-[#F1F1F1] flex items-center justify-center bg-white p-2'}>
                                            <Link
                                                href={`/catalog/${product.id}?${paramsLink}`}>
                                                <p className={'text-md font-manrope underline text-[#004169] font-semibold'}>Подробнее</p>
                                            </Link>
                                        </div>
                                        <div
                                            className={'col-span-1 font-normal text-blue border-r-2 border-[#F1F1F1] flex items-center justify-center bg-white p-2'}>
                                            <p className={'text-md font-manrope text-[#004169] font-semibold'}>{product.remains}</p>
                                        </div>
                                        <div
                                            className={'col-span-3 font-bold text-blue border-[#F1F1F1] flex items-center justify-center bg-white'}>
                                            <ProductQntPicker product={product} callback={addToCart}></ProductQntPicker>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                        <Pagination currentPage={1} setCurrentPage={() => {
                        }} pages={42}></Pagination>
                    </div>

                </div>
            </div>
        </main>
    )
}
