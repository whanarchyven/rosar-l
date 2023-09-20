"use client"
import Image from 'next/image'
import ActionBanner from "@/components/ActionBanner";
import {useState} from "react";
import Pagination from "@/components/UI/Pagination";

export default function Page() {

    const actions=[
        {
            name:'Летняя акция от “ООО Интел-КО”',
            caption:'-20% На весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
        {
            name:'Летняя акция от “ООО Интел-КО”',
            caption:'-30% На весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
        {
            name:'Летняя акция от “ООО Интел-КО”',
            caption:'-40% На весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
        {
            name:'Летняя акция от “ООО Интел-КО”',
            caption:'-50% На весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
        {
            name:'Летняя акция от “ООО Интел-КО”',
            caption:'-10% На весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
        // {
        //     name:'Летняя акция от “ООО Интел-КО”',
        //     caption:'-13% На весь ассортимент продукции',
        //     image:'/images/temp/action_banner.png'
        // },
        // {
        //     name:'Летняя акция от “ООО Интел-КО”',
        //     caption:'-15% На весь ассортимент продукции',
        //     image:'/images/temp/action_banner.png'
        // },
        // {
        //     name:'Летняя акция от “ООО Интел-КО”',
        //     caption:'-24% На весь ассортимент продукции',
        //     image:'/images/temp/action_banner.png'
        // },
        // {
        //     name:'Летняя акция от “ООО Интел-КО”',
        //     caption:'-28% На весь ассортимент продукции',
        //     image:'/images/temp/action_banner.png'
        // },
    ]

    const [currentPage,setCurrentPage]=useState(1)

    return (
        <main className="">
            <p className={'font-bold font-manrope text-white mb-10 text-4xl'}>Акции и эксклюзивные предложения</p>
            <div className={'w-full grid mt-4 gap-8 grid-cols-3'}>
                {actions.map((action,counter)=>{
                    return(
                        <ActionBanner id={counter} key={counter} name={action.name} caption={action.caption} image={action.image}></ActionBanner>
                    )
                })}
            </div>
            <div className={'mt-5'}>
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pages={96}></Pagination>
            </div>
        </main>
    )
}
