"use client"
import React, {useState} from 'react';
import {classList} from "@/helpers/classList";
import {motion} from "framer-motion";
interface readMoreButtonInterface {
    title:string,
    callback?:(args?:any)=>any,
    isInteractive?:boolean
}
const ReadMoreButton = ({title,callback, isInteractive}:readMoreButtonInterface) => {

    const [isOpen,setIsOpen]=useState(isInteractive!=undefined?!isInteractive:false)

    const variants = {
        open: { opacity: 1,},
        closed: { opacity: 0, },
    }

    const subVariants={
        closed:{left:'0%',right: 'auto'},
        open:{right: '0%',left: 'auto'}
    }

    return (
        <motion.div className={'flex justify-start relative'} onMouseLeave={()=>{if(isInteractive!=false){setIsOpen(false)}}}>
            <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={variants}
                className={classList('flex bg-white h-11 gap-4 border-2 border-r-0 w-fit pr-11 bg-transparent border-orange items-center rounded-full',isOpen?'cursor-pointer':'')} onMouseLeave={()=>{if(isInteractive!=false){setIsOpen(false)}}} onClick={()=>{if(callback){callback()}}}>
                <p className={'px-3 font-travels whitespace-nowrap font-semibold text-orange'}>{title}</p>
            </motion.div>
            <motion.div onMouseEnter={()=>{if(isInteractive!=false){setIsOpen(true)}}}
                animate={isOpen ? "open" : "closed"}
                variants={subVariants}
                className={'w-11 aspect-square absolute bg-orange rounded-full flex items-center justify-center border-orange border-2'}>
                <img src={'/images/icons/arrow_right_white.svg'}/>
            </motion.div>
        </motion.div>
    );
};

export default ReadMoreButton;