import React from 'react';
import {classList} from "@/helpers/classList";

interface paginationInterface {
    currentPage:number,
    setCurrentPage:(props:any)=>any,
    pages:number,

}

const Pagination = ({currentPage, setCurrentPage, pages}:paginationInterface) => {

    let tempArr=[]
    for(let i=0;i<pages;i++){
        tempArr.push(i)
    }
    return (
        <div className={'flex items-center mt-6 justify-center gap-4'}>
            <img className={'cursor-pointer rotate-180 w-4 aspect-square'} src={'/images/icons/arrow_right_blue.svg'}/>
            {tempArr.map((page,counter)=>{
                if(counter<5){
                    return(
                        <p className={classList('cursor-pointer',currentPage==counter+1?'font-bold text-orange text-lg':'text-blue text-sm')} key={counter}>{counter+1}</p>
                    )
                }
                else if (counter==5){
                    return(
                        <p key={counter}>...</p>
                    )
                }
            })}
            <p className={classList('cursor-pointer font-manrope',currentPage==pages?'font-bold text-orange text-lg':'text-blue text-sm')}>{pages}</p>
            <img className={'cursor-pointer w-4 aspect-square'} src={'/images/icons/arrow_right_blue.svg'}/>
        </div>
    );
};

export default Pagination;