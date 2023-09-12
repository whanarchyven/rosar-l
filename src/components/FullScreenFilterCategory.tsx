"use client"
import React, {useState} from 'react';
import {classList} from "@/helpers/classList";
import {nanoid} from "nanoid";
import Link from "next/link";

interface categoryInterface {
    name: string,
    value: string,
    subcategories: any //Рекурсивные
    filter:Array<{name:string,value:string}>
    pushToFilter:(name:string,value:string)=>any
    shiftFromFilter:(name:string)=>any
    link:string,
}

const FullScreenFilterCategory = ({name, value, filter, subcategories, pushToFilter, shiftFromFilter,link}:categoryInterface) => {

    const [open,setOpen]=useState(false);

    // if(!subcategories&&filter.find((item)=>{if(item.name==name&&item.value==value){return item}})){
    //     setOpen(true);
    // }

    return (
        <div className={'pl-2 flex flex-col items-start'}>
            <div className={'flex gap-2 items-center'}>
                {!subcategories?
                    <div className={'flex items-center justify-center'}>
                        {/*{open?<img className={'w-5 aspect-square'} src={'/images/icons/checkbox_checked.svg'}/>:<img className={'w-5 aspect-square'} src={'/images/icons/checkbox.svg'}/>}*/}
                    </div>
                    :null}
                {!subcategories?<a href={`/catalog?${link}`} className={classList('text-lg font-manrope transition-all duration-100 cursor-pointer',open?'font-bold':'font-normal',subcategories?'text-black':'text-blue')}>{value}</a>:<p onClick={()=>{
                    // if(!open&&!subcategories){
                    //     pushToFilter(name,value);
                    // }
                    // else if(open&&!subcategories){
                    //     shiftFromFilter(name)
                    // }
                    setOpen(!open)

                }} className={classList('text-lg font-manrope transition-all duration-100 cursor-pointer',open?'font-bold':'font-normal',subcategories?'text-black':'text-blue')}>{value}</p>}
                {subcategories?<img className={classList('transition-all duration-100',open?'rotate-90':'')} src={'/images/subcategory_right.svg'}/>:null}
            </div>
            {subcategories&&open?subcategories.map((item:any)=>{
                return(
                    <FullScreenFilterCategory link={link+'&'+item.name+'='+item.value} key={nanoid()} filter={filter} shiftFromFilter={shiftFromFilter} pushToFilter={pushToFilter} name={item.name} value={item.value} subcategories={item.subcategories}/>
                )
            }):null}
        </div>
    );
};

export default FullScreenFilterCategory;