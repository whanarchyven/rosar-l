
import React from 'react';
import {usePathname, useSearchParams} from "next/navigation";

// interface breadCrumbsInterface {
//     crumbs:any
// }

const Breadcrumbs = () => {
    const crumbs=Array.from(useSearchParams().values())
    console.log(crumbs)
    const url=useSearchParams().toString();

    const urlConstructor=(counter:number)=>{
        const separation=decodeURI(url).split('&');
        let result=''
        for(let i=0;i<counter;i++){
            if(i==0){
                result+=separation[i]
            }
            else{
                result+='&'+separation[i]
            }
        }
        return result
    }

    const pathname=usePathname();

    return (
        <div className={'flex gap-3 my-10'}>
            {crumbs.map((item:string,counter:number)=>{
                return(
                    <div key={item} className={'flex gap-3'}>
                        {counter>0?<img src={'/images/bread_crumb_arrow.svg'}/>:null}
                        <a href={pathname+'?'+urlConstructor(counter+1)} className={'font-medium underline cursor-pointer font-manrope text-white text-xl'}>{item}</a>
                    </div>
                )
            })}
        </div>
    );
};

export default Breadcrumbs;