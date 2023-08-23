"use client"


import {useRouter, useSearchParams} from "next/navigation";
import datediff from "@/helpers/dateDiff";
import parseDate from "@/helpers/parseDate";
import Button from "@/components/UI/Button";

export default function Page({params}:any) {
    const router = useRouter()


    const actions=[
        {
            id: 1,
            name: 'Розетка SFG134-RD',
            sk: 'R910X023',
            image:'/images/temp/product.png',
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
            image:'https://avatars.mds.yandex.net/i?id=7c568f1f2b1e773bd9fcf1d6bb2bff4be7b0bc15-8376176-images-thumbs&n=13',
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
            image:'https://liferooms.ru/images/thumbnails/1100/900/detailed/147/06b9d470f457b7a78cdf14eb6530eb3e.jpg',
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
            image:'https://i.ebayimg.com/00/s/MzU5WDUwMA==/z/ig8AAOSwDcBjYva9/$_3.JPG?set_id=8800005007',
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
            image:'https://good-bt.ru/wa-data/public/shop/products/63/40/24063/images/30195/30195.750x0.jpg',
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
            image:'https://img.akrep.com/beyaz-esya-ve-ev-aletleri/utu-dikis-makinesi/tn6/arzum-ar6000-steampro-plus-buharli-utu-gri-siyah_1_4732328.jpg',
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
            image:'https://ke-images.servicecdn.ru/c6i9tfsqi3n45kjtuav0/original.jpg',
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
            image:'https://avatars.mds.yandex.net/get-marketpic/6145646/pic9bf472cbb6dc7000effeb2d640d6167a/orig',
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
            image:'https://basket-10.wb.ru/vol1458/part145867/145867033/images/c246x328/1.jpg',
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
            image:'https://dizion.ru/image/cache/catalog/katalog/gigiyena-polosti-rta/elektricheskie-schetki/braun_oral_b_pro_3000_3d_action_d20_zubnaya_schotka_4-700x700.jpg',
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
            image:'/images/temp/product.png',
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
            image:'https://avatars.mds.yandex.net/i?id=7c568f1f2b1e773bd9fcf1d6bb2bff4be7b0bc15-8376176-images-thumbs&n=13',
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
            image:'https://liferooms.ru/images/thumbnails/1100/900/detailed/147/06b9d470f457b7a78cdf14eb6530eb3e.jpg',
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
            image:'https://i.ebayimg.com/00/s/MzU5WDUwMA==/z/ig8AAOSwDcBjYva9/$_3.JPG?set_id=8800005007',
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
            image:'https://good-bt.ru/wa-data/public/shop/products/63/40/24063/images/30195/30195.750x0.jpg',
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
            image:'https://img.akrep.com/beyaz-esya-ve-ev-aletleri/utu-dikis-makinesi/tn6/arzum-ar6000-steampro-plus-buharli-utu-gri-siyah_1_4732328.jpg',
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
            image:'https://ke-images.servicecdn.ru/c6i9tfsqi3n45kjtuav0/original.jpg',
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
            image:'https://avatars.mds.yandex.net/get-marketpic/6145646/pic9bf472cbb6dc7000effeb2d640d6167a/orig',
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
            image:'https://basket-10.wb.ru/vol1458/part145867/145867033/images/c246x328/1.jpg',
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
            image:'https://dizion.ru/image/cache/catalog/katalog/gigiyena-polosti-rta/elektricheskie-schetki/braun_oral_b_pro_3000_3d_action_d20_zubnaya_schotka_4-700x700.jpg',
            price: 799,
            category: 'Зубные щетки',
            material: ['Пластик', 'Металл'],
            delivery: 'Самовывоз',
            description: 'Электрическая зубная щетка SmileCare 3000 обеспечивает эффективную и бережную чистку зубов. Она оснащена различными режимами работы, что позволяет настроить ее под ваши предпочтения. Зубная щетка обеспечивает высокую скорость вращения щетинок, что позволяет легко и эффективно удалять налет и зубной камень. Ее эргономичная ручка обеспечивает комфортное удержание в руке. Приобретая SmileCare 3000, вы получаете здоровую улыбку и чистоту ваших зубов.'
        }

    ]

    const id=params.id
    const product=id?actions[Number(id)-1]:actions[0]

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


    return <div className={'w-full py-6'}>
        <div className={'flex items-center justify-end'}>
            <img className={'w-7 aspect-square cursor-pointer'} src={'/images/icons/close_orange.svg'} onClick={()=>{router.back()}}/>
        </div>
        <div className={'grid mt-10 grid-cols-2 gap-8'}>
            <img src={product.image} className={'w-full border-2 border-orange aspect-square object-cover'}/>
            <div className={'flex flex-col gap-5'}>
                <p className={'font-travels text-3xl font-bold text-blue'}>{product.name}</p>
                <p className={'font-travels text-2xl font-medium text-orange'}>Артикул: {product.sk}</p>
                <p className={'font-travels text-2xl font-bold text-orange'}>{product.price} ₽/шт.</p>

                <div className={'border-2 p-2 border-orange'}>
                    <p className={'text-blue font-medium text-lg'}>Категория: <span className={'text-orange'}>{product.category}</span></p>
                    <p className={'text-blue font-medium text-lg'}>Материал: <span className={'text-orange'}>{[...product.material].join(', ')}</span></p>
                    <p className={'text-blue font-medium text-lg'}>Доставка: <span className={'text-orange'}>{product.delivery}</span></p>
                </div>

                <p className={'font-travels text-xl font-bold text-blue'}>Описание товара</p>
                <p className={'font-travels text-sm font-medium text-blue'}>{product.description}</p>
            </div>
        </div>

        <p className={'font-travels mt-5 text-3xl font-bold text-blue'}>Отзывы</p>

        <div className={'flex mt-8 flex-col gap-12'}>
            {reviews.map((review)=>{
                return(
                    <div key={review.company} className={'grid grid-cols-12'}>
                        <div className={'col-span-2 flex flex-col items-start gap-2 border-blue pr-4 p-2 border-r-2'}>
                            <div className={'w-full'}>
                                <img className={'w-14 aspect-square rounded-full border-2 border-orange'} src={'/images/temp/logo.png'}/>
                            </div>
                            <p className={'font-bold text-blue'}>{review.company}</p>
                            <img src={'/images/icons/review_stars.svg'}/>
                        </div>
                        <div className={'col-span-10 p-2 pl-4'}>
                            {review.review}
                        </div>
                    </div>
                )
            })}
        </div>

    </div>
}