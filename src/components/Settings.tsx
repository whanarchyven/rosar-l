"use client"
import React, {useState} from 'react';
import {classList} from "@/helpers/classList";
const Settings = () => {

    const [isOpen,setIsOpen]=useState(false)

    return (
        <div className={'flex items-end relative'} onMouseEnter={()=>{setIsOpen(true)}}>
            <div className={'w-11 aspect-square bg-blue rounded-full p-2'}>
                <img src={'/images/icons/settings_white.svg'}/>
            </div>
            {isOpen?<div className={classList('min-w-40 transition-opacity duration-300 w-fit absolute flex flex-col items-end top-12 right-0 p-3 bg-white border-2 border-blue rounded-xl',isOpen?'animate-fadein':'animate-fadeout')} onMouseLeave={()=>{setIsOpen(false)}}>
                <p className={'font-semibold underline text-blue cursor-pointer whitespace-nowrap font-travels text-right'}>Редактировать профиль</p>
                <p className={'font-semibold underline text-blue cursor-pointer whitespace-nowrap font-travels text-right'}>Настройки</p>
                <p className={'font-semibold underline text-red-500 cursor-pointer whitespace-nowrap font-travels text-right'}>Выйти</p>
            </div>:null}
        </div>
    );
};

export default Settings;