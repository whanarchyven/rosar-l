"use client"
import React, {useEffect, useState} from 'react';

import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import {classList} from "@/helpers/classList";

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
            <div className={'flex gap-3 p-2 border-r-2 border-[#F1F1F1] justify-center col-span-3 items-center'}>
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

            {callback ? <div className={'col-span-1 p-2'}><Button className={'w-full aspect-square px-0'} callback={() => {
                if (callback) {
                    callback(product, qnt)
                }
            }} type={'orange'}><img src={'/images/icons/cart_white.svg'}/></Button></div> : null}

        </div>
    );
};

export default ProductQntPicker;