"use client"
import Image from 'next/image'
import ActionBanner from "@/components/ActionBanner";
import {useState} from "react";
import Pagination from "@/components/UI/Pagination";

export default function Home() {

    const actions=[
        {
            name:'Летняя акция от “ООО Интел-КО”',
            caption:'-20% на весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
        {
            name:'Летняя акция от “ООО Интел-КО”',
            caption:'-30% на весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
        {
            name:'Летняя акция от “ООО Интел-КО”',
            caption:'-40% на весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
        {
            name:'Летняя акция от “ООО Интел-КО”',
            caption:'-50% на весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
        {
            name:'Летняя акция от “ООО Интел-КО”',
            caption:'-10% на весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
        {
            name:'Летняя акция от “ООО Интел-КО”',
            caption:'-13% на весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
        {
            name:'Летняя акция от “ООО Интел-КО”',
            caption:'-15% на весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
        {
            name:'Летняя акция от “ООО Интел-КО”',
            caption:'-24% на весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
        {
            name:'Летняя акция от “ООО Интел-КО”',
            caption:'-28% на весь ассортимент продукции',
            image:'/images/temp/action_banner.png'
        },
    ]

    const [currentPage,setCurrentPage]=useState(1)

    return (
        <main className="mt-5">
            <p className={'font-bold font-travels text-blue text-3xl'}>Акции и эксклюзивные предложения</p>
            <div className={'w-full grid mt-4 gap-8 grid-cols-3'}>
                {actions.map((action,counter)=>{
                    return(
                        <ActionBanner key={counter} name={action.name} caption={action.caption} image={action.image}></ActionBanner>
                    )
                })}
            </div>
            <div className={'mt-5'}>
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pages={96}></Pagination>
            </div>
        </main>
    )
}
