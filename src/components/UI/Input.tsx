"use client"
import React from 'react';

interface InputInterface {
    type:'text'|'number'|'password',
    placeholder?:string,
    mutateFunction:(arg:any)=>any,
    mutateValue?:any,
    icon?:string,
    className?:string,
    isInvert?:boolean
}

const Input = ({type, placeholder, mutateFunction, mutateValue,icon,isInvert}:InputInterface) => {
    if(icon){
        return (
            <div className={'bg-[#F8F8FA] px-3 w-full rounded-xl drop-shadow-md flex items-center gap-2'}>
                {!isInvert?<img src={icon}/>:null}
                <input type={type} placeholder={placeholder} value={mutateValue!=undefined?mutateValue:placeholder} onChange={(event)=>{if(mutateValue!=undefined){mutateFunction(event.target.value)}}} className={'font-manrope w-full placeholder:text-blue  placeholder:text-opacity-50 p-3 bg-transparent font-semibold text-blue focus:border-orange focus:outline-0'}>

                </input>
                {isInvert?<img src={icon}/>:null}
            </div>
        );
    }
    else{
        return (
            <input type={type} placeholder={placeholder} value={mutateValue!=undefined?mutateValue:placeholder} onChange={(event)=>{if(mutateValue!=undefined){mutateFunction(event.target.value)}}} className={'font-manrope w-full rounded-xl placeholder:text-blue bg-[#F8F8FA] drop-shadow-md placeholder:text-opacity-50 p-3 font-semibold text-blue focus:border-orange focus:outline-0'}>

            </input>
        );
    }
};

export default Input;