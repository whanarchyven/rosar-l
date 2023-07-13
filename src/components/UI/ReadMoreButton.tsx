"use client"
import React, {useState} from 'react';
import {classList} from "@/helpers/classList";
interface readMoreButtonInterface {
    title:string,
    callback?:(args?:any)=>any,
}
const ReadMoreButton = ({title,callback}:readMoreButtonInterface) => {

    const [isOpen,setIsOpen]=useState(false)

    return (
        <div className={'flex items-end relative'} onMouseEnter={()=>{setIsOpen(true)}}>
            {!isOpen?<div className={'w-11 aspect-square bg-orange rounded-full flex items-center justify-center border-orange border-2'}>
                <img src={'/images/icons/arrow_right_white.svg'}/>
            </div>:<div className={'transition-transform cursor-pointer flex gap-4 border-2 border-orange items-center rounded-full'} onMouseLeave={()=>{setIsOpen(false)}} onClick={()=>{if(callback){callback()}}}>
                <p className={'pl-3 font-travels font-semibold text-orange'}>{title}</p>
                <div className={'flex items-center'}>
                    <div className={'cursor-pointer rounded-full  p-2 bg-orange h-full'}>
                        <img src={'/images/icons/arrow_right_white.svg'}/>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default ReadMoreButton;