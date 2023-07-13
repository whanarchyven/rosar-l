"use client"
import React, {useState} from 'react';
import {classList} from "@/helpers/classList";
const Help = () => {

    const [isOpen,setIsOpen]=useState(false)

    return (
        <div className={'flex items-end relative'} onMouseEnter={()=>{setIsOpen(true)}}>
            {!isOpen?<div className={'w-11 aspect-square bg-blue rounded-full flex items-center justify-center border-blue border-2'}>
                <img src={'/images/icons/help_white.svg'}/>
            </div>:<div className={'transition-transform animate-fadein flex gap-4 border-2 border-blue items-center rounded-full'} onMouseLeave={()=>{setIsOpen(false)}}>
                <p className={'pl-3 font-travels font-semibold text-blue'}>Поддержка</p>
                <div className={'flex items-center'}>
                    <div className={'cursor-pointer rounded-l-full p-2 bg-orange h-full'}>
                        <img src={'/images/icons/phone_white.svg'}/>
                    </div>
                    <div className={'cursor-pointer rounded-r-full p-2 bg-blue h-full'}>
                        <img src={'/images/icons/mail_white.svg'}/>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default Help;