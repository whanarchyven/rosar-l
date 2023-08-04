"use client"
import React, {useState} from 'react';
import {classList} from "@/helpers/classList";
import {motion} from "framer-motion";
const Help = () => {

    const [isOpen,setIsOpen]=useState(false)

    const variants = {
        open: {opacity: 0,},
        closed: {opacity: 1,},
    }

    const subVariants = {
        closed: {opacity:0,x:'5%',transition:{duration:0.1}},
        open: {opacity:1,x:'0%'}
    }

    return (
        <div className={'flex items-center relative'} onMouseLeave={()=>{setIsOpen(false)}} onMouseEnter={()=>{setIsOpen(true)}}>
            <motion.div
                animate={isOpen ? "open" : "closed"}
                        variants={variants}
                className={'w-11 absolute right-0 aspect-square bg-blue rounded-full flex items-center justify-center border-blue border-2'}>
                <img src={'/images/icons/help_white.svg'}/>
            </motion.div>
            <motion.div
                animate={isOpen ? "open" : "closed"}
                        variants={subVariants}
                className={'flex gap-4 border-2 border-blue items-center rounded-full'} >
                <p className={'pl-3 font-travels font-semibold text-blue'}>Поддержка</p>
                <div className={'flex items-center'}>
                    <div className={'cursor-pointer rounded-l-full p-2 bg-orange h-full'}>
                        <img src={'/images/icons/phone_white.svg'}/>
                    </div>
                    <div className={'cursor-pointer rounded-r-full p-2 bg-blue h-full'}>
                        <img src={'/images/icons/mail_white.svg'}/>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Help;