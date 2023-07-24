"use client"
import React, {useEffect, useState} from 'react';

import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";

const products=[
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
    }
]


interface productQntPicker {
    callback?:(arg1:any,arg2:any)=>any,
    product:typeof products[0],
    initialValue?:number
}

const ProductQntPicker = ({callback, product, initialValue}:productQntPicker) => {

    const [qnt,setQnt]=useState(initialValue?initialValue:1)

    useEffect(()=>{
        if(initialValue){
            setQnt(initialValue)
        }
    },[initialValue])

    return (
        <div className={'flex items-center gap-5 justify-between'}>
            <div className={'flex gap-3 items-center'}>
                <div className={'flex cursor-pointer font-bold items-center justify-center p-1 w-7 bg-orange rounded-full aspect-square'} onClick={()=>{if(qnt>1){setQnt(Number(qnt)-1)}}}>
                    <img className={'w-full h-full'} src={'/images/icons/minus.svg'}/>
                </div>
                <div className={'w-20'}>
                    <input value={qnt} onChange={(e)=>{if(!isNaN(Number(e.target.value))){setQnt(Number(e.target.value))}}} type={'text'} className={'w-full h-8 text-center placeholder:text-blue placeholder:text-opacity-50 p-3 font-semibold text-blue border-blue border-2 focus:border-orange focus:outline-0'}/>
                </div>
                <div className={'flex cursor-pointer font-bold items-center justify-center p-1 w-7 bg-orange rounded-full aspect-square'} onClick={()=>{if(qnt>0){setQnt(Number(qnt)+1)}}}>
                    <img className={'w-full h-full'} src={'/images/icons/plus.svg'}/>
                </div>
            </div>
            {callback?<Button callback={()=>{
                if (callback) {
                    callback(product, qnt)
                }}} type={'orange'}>В корзину</Button>:null}
        </div>
    );
};

export default ProductQntPicker;