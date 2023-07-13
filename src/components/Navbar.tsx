"use client"
import React, {useState} from 'react';
import {usePathname, useRouter} from "next/navigation";

const Navbar = () => {

    const links=[
        {
            name:'Главная',
            link:'/',
            icon:'dashboard.svg'
        },
        {
            name:'Акции',
            link:'/actions',
            icon:'actions.svg'
        },
        {
            name:'Документы',
            link:'/docs',
            icon:'docs.svg'
        },
        {
            name:'Новости',
            link:'/news',
            icon:'news.svg'
        },
        {
            name:'Каталог',
            link:'/catalog',
            icon:'catalog.svg'
        },
        {
            name:'Отгрузки',
            link:'/deliveries',
            icon:'delivery.svg'
        },
    ]

    const router=useRouter()

    const pathname=usePathname()

    const [isHovered,setIsHovered]=useState(false)

    const [showAnimate,setShowAnimate]=useState(false)

    return (
        <div className={'w-full h-full '}>
            {!isHovered?
                <div className={'rounded-3xl transition-all duration-300 p-3 overflow-hidden flex w-20 flex-col gap-3 bg-blue h-full'} onMouseEnter={()=>{setIsHovered(true);setTimeout(()=>{setShowAnimate(!showAnimate)},300)}}>
                    {links.map((link)=>{
                        if(pathname==link.link){
                            return(
                                <div className={'flex transition-none w-full cursor-pointer  bg-white rounded-full items-center justify-start'}>
                                    <img className={'w-[56px] aspect-square'} src={`/images/navbar_icons/active/${link.icon}`}/>
                                </div>
                            )
                        }
                        else{
                            return(
                                <div className={'flex transition-none w-full cursor-pointer  items-center justify-start'} onClick={()=>{router.push(link.link)}}>
                                    <img className={'w-[56px] aspect-square'} src={`/images/navbar_icons/simple/${link.icon}`}/>
                                </div>
                            )
                        }
                    })}
                </div>
                :
                <div className={'rounded-3xl transition-all duration-300 overflow-hidden p-3 flex w-full flex-col gap-3 bg-blue h-full'} onMouseLeave={()=>{setIsHovered(false);setTimeout(()=>{setShowAnimate(!showAnimate)},300)}}>
                    {links.map((link)=>{
                        if(pathname==link.link){
                            return(
                                <div className={'flex transition-none w-full cursor-pointer bg-white rounded-full items-center justify-start gap-3'}>
                                    <img className={'w-[56px] aspect-square'} src={`/images/navbar_icons/active/${link.icon}`}/>
                                    {showAnimate?<p className={'transition-all duration-300 animate-textnav font-travels text-blue text-xl font-bold'}>{link.name}</p>:null}
                                </div>
                            )
                        }
                        else{
                            return(
                                <div className={'flex transition-none w-full cursor-pointer items-center justify-start gap-3'} onClick={()=>{router.push(link.link)}}>
                                    <img className={'w-[56px] aspect-square'} src={`/images/navbar_icons/simple/${link.icon}`}/>
                                    {showAnimate?<p className={'transition-all duration-300 animate-textnav font-travels text-white text-xl font-bold'}>{link.name}</p>:null}
                                </div>
                            )
                        }
                    })}
                </div>}
        </div>
    );
};

export default Navbar;