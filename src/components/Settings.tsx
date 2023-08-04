"use client"
import React, {useState} from 'react';
import {classList} from "@/helpers/classList";
import {motion} from "framer-motion";
const Settings = () => {

    const [isOpen,setIsOpen]=useState(true)

    const variants = {
        open: {opacity: 0, y: '-20%'},
        closed: {opacity: 1, y: '0%'},
    }



    return (
        <div className={'flex items-end relative'} >
            <div className={'w-11 aspect-square bg-blue rounded-full p-2'} onMouseEnter={()=>{setIsOpen(false)}}>
                <img src={'/images/icons/settings_white.svg'}/>
            </div>
            <motion.div onMouseLeave={()=>{setIsOpen(true)}}
                animate={isOpen ? "open" : "closed"}
                variants={variants}
                className={classList('min-w-40 transition-opacity duration-300 w-fit absolute flex flex-col items-end top-12 right-0 p-3 bg-white border-2 border-blue rounded-xl')}>
                <p className={'font-semibold underline text-blue cursor-pointer whitespace-nowrap font-travels text-right'}>Редактировать профиль</p>
                <p className={'font-semibold underline text-blue cursor-pointer whitespace-nowrap font-travels text-right'}>Настройки</p>
                <p className={'font-semibold underline text-red-500 cursor-pointer whitespace-nowrap font-travels text-right'}>Выйти</p>
            </motion.div>
        </div>
    );
};

export default Settings;