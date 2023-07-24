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

    const [productsQnt, setProductsQnt] = useState(0)
    const [productsPrice, setProductsPrice] = useState(0)

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

    const [cartProducts, setCartProducts] = useState<any>([])

    useEffect(()=>{
        console.log('aaa')
        window?.localStorage.getItem('products')?setCartProducts(JSON.parse(String(window?.localStorage.getItem('products')))):[]
    },[])

    const addToCart = (product:any, qnt:any) => {
        let temp = [...cartProducts]
        temp.push({product, qnt})
        setCartProducts([...temp])
        window?.localStorage.setItem('products',JSON.stringify(temp))
    }


    useEffect(() => {
        let totalPrice = 0;
        let totalQnt = 0;
        cartProducts.map((item:any) => {
            totalPrice += (item.product.price * item.qnt)
            totalQnt += item.qnt
        })
        setProductsPrice(totalPrice)
        setProductsQnt(totalQnt)
    }, [cartProducts])


    //filter functions

    const [filteredProducts,setFilteredProducts]=useState([...products])

    const filterByCategory=(needCategory: { value:string,icon:string }|undefined)=>{
        if(needCategory==undefined){
            return products
        }
        let temp=[...products]
        let filtered=temp.filter(item=>item.category==needCategory.value)
        // console.log(needCategory.value)
        // console.log(filtered)
        // setFilteredProducts([...filtered])
        return filtered
    }

    const filterByMaterials=(needMaterials:Array<{value:string}>)=>{

        let temp=[...products]
        let filtered=temp.filter((item)=>{
            let flag=null;
            item.material.map((material)=>{
                if(needMaterials.find(needMaterial=>needMaterial.value==material)){
                    flag=item
                }
            })
            if(flag){
                return flag
            }
            else{
                return false
            }
        })
        // console.log(needMaterials)
        // console.log(filtered)
        if(needMaterials.length==0){
            return(products)
        }
        else{
            return(filtered)
        }
    }

    const filterByDelivery=(needDelivery: { value:string }|undefined)=>{

        if(needDelivery==undefined){
            return products
        }

        let temp=[...products]
        let filtered=temp.filter(item=>item.delivery==needDelivery.value)
        // console.log(needDelivery)
        // console.log(filtered)
        // setFilteredProducts([...filtered])
        return filtered
    }

    const [filteredCategory,setFilteredCategory]=useState<{value:string,icon:string}>()

    const [filteredDelivery,setFilteredDelivery]=useState<{value:string}>()

    const [filteredMaterial,setFilteredMaterial]=useState<{value:string}[]>([])

    const [filteredName,setFilteredName]=useState<string>('')


    const filterByName=(arr:typeof products, query:string)=> {
        if(query==''){
            return products
        }
        return arr.filter((el:typeof products[0]) => el.name.toLowerCase().includes(query.toLowerCase()));
    }



    useEffect(()=>{
        setFilteredProducts([...products])
        console.log('AAAAAAAAA',filteredProducts)
        console.log(filteredCategory,filteredDelivery)
        let arrs:any=[]
        arrs.push(filterByCategory(filteredCategory))
        arrs.push(filterByDelivery(filteredDelivery))
        arrs.push(filterByMaterials(filteredMaterial))
        let result=(arrs[0].filter((value:any)=>arrs[1].includes(value))).filter((value:any)=>arrs[2].includes(value))
        setFilteredProducts([...result])
        console.log(result)
    },[filteredMaterial,filteredDelivery, filteredCategory])


    useEffect(()=>{
        if(filteredName!=''){
            setFilteredProducts([...filterByName(products,filteredName)])
        }
    },[filteredName])
    return (
        <main className="mt-5">
            <div className={'flex items-center justify-between'}>
                <p className={'font-bold font-travels text-blue text-3xl'}>Новый заказ</p>
                <div className={'flex gap-2 items-center'}>
                    <Link href={'/catalog/history'} className={'text-2xl text-orange underline cursor-pointer'}>
                        История заказов
                    </Link>
                    <img src={'/images/icons/history_orange.svg'}/>
                </div>
            </div>
            <div className={'mt-5 flex flex-col gap-2'}>
                <p className={'text-blue text-xl font-medium'}>
                    Поиск товара по названию
                </p>
                <div className={'grid grid-cols-9 grid-rows-1 gap-2  items-start relative'}>
                    <div className={'col-span-6 relative flex items-center'}>
                        <Input mutateValue={filteredName} type={'text'} placeholder={'Введите название или артикул'} mutateFunction={setFilteredName}/>
                        {filteredName!=''?<img onClick={()=>{setFilteredName('')}} className={'cursor-pointer right-2 absolute w-4 aspect-square'} src={'/images/icons/close_orange.svg'}/>:null}
                    </div>
                    <Button callback={()=>{setFilteredProducts([...filterByName(filteredProducts,filteredName)])}} className={'h-full col-span-3'} type={'orange'}>Найти</Button>
                </div>
            </div>
            <div className={'mt-5 grid gap-2 grid-cols-9 items-start'}>
                <div className={'col-span-2'}>
                    <div className={'border-2 border-blue'}>
                        <div className={'h-96 p-2 scrollbar-mini overflow-y-scroll'}>
                            <div className={'flex flex-col gap-4'}>
                                <FilterCategory resetTrigger={resetFilters} variants={categoryVariants} currentValue={filteredCategory} setCurrentValue={setFilteredCategory}
                                                type={'variants'} title={'Категория'}/>
                                <FilterCategory resetTrigger={resetFilters} variants={materialVariants} setCurrentValue={setFilteredMaterial} currentValue={filteredMaterial}
                                                type={'multi'} title={'Материал'}/>
                                <FilterCategory resetTrigger={resetFilters} variants={deliveryVariants} currentValue={filteredDelivery} setCurrentValue={setFilteredDelivery}
                                                type={'radio'} title={'Доставка'}/>
                            </div>
                        </div>
                        <div className={'p-2'}>
                            <Button type={'transparent blue'} callback={() => {
                                setResetFilters(!resetFilters)
                                setFilteredProducts([...products])
                            }}>Сбросить фильтр</Button>
                        </div>
                    </div>
                    <div className={'bg-blue flex flex-col gap-3 mt-4 p-2'}>
                        <div className={'flex gap-2 items-center'}>
                            <div className={'relative w-12 flex items-center justify-center aspect-square'}>
                                <img src={'/images/icons/cart.svg'} className={'w-full z-0 h-full absolute'}/>
                                <p className={classList('absolute bottom-0.5 z-[1] text-white font-bold', productsQnt < 10 ? 'text-lg' : '', productsQnt >= 10 && productsQnt < 100 ? 'text-sm' : '', productsQnt >= 100 ? 'text-xs' : '')}>{productsQnt > 1000 ? (productsQnt / 1000).toFixed(1) + ' k' : productsQnt}</p>
                            </div>
                            <div className={'flex flex-col'}>
                                <p className={'text-sm font-medium text-white'}>В корзине {productsQnt} товаров</p>
                                <p className={'text-sm font-medium text-white'}>на сумму <span
                                    className={'text-orange font-bold'}>{productsPrice} ₽</span></p>
                            </div>
                        </div>
                        <Link href={{pathname:'/cart'}}>
                            <Button type={'white'}>Оформить заказ</Button>
                        </Link>
                    </div>
                    <div className={'mt-4 bg-orange cursor-pointer flex items-center justify-between p-2'}>
                        <p className={'font-bold text-white leading-[100%]'}>Импорт списка покупок из Excel</p>
                        <img src={'/images/icons/import.svg'} className={'w-7 aspect-square'}/>
                    </div>
                </div>
                <div className={'col-span-7 relative scrollbar border-2 border-blue'}>
                    <div className={'grid grid-cols-12'}>
                        <div
                            className={'col-span-5 font-bold text-white border-r-2 border-white flex items-center justify-start bg-blue p-2'}>
                            Наименование
                        </div>
                        <div
                            className={'col-span-2 font-bold text-white border-r-2 border-white flex items-center justify-center bg-blue p-2'}>
                            Цена
                        </div>
                        <div
                            className={'col-span-5 font-bold text-white   border-white flex items-center justify-center bg-blue p-2'}>

                        </div>

                    </div>
                    {filteredProducts.map((product, counter) => {
                        if (counter < 10) {
                            return (
                                <div key={counter} className={'grid grid-cols-12 border-b-2 border-blue'}>
                                    <div
                                        className={'col-span-5 text-blue border-r-2 border-blue flex items-center justify-start bg-white p-2'}>
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
                                        {product.price} ₽/шт.
                                    </div>
                                    <div
                                        className={'col-span-5 font-bold text-blue border-blue flex items-center justify-center bg-white p-2'}>
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
        </main>
    )
}
