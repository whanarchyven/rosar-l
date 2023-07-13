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
        <div className={'flex items-center justify-center gap-4'}>
            <img className={'cursor-pointer'} src={'/images/icons/pagination_left.svg'}/>
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
            <p className={classList('cursor-pointer',currentPage==pages?'font-bold text-orange text-lg':'text-blue text-sm')}>{pages}</p>
            <img className={'cursor-pointer'} src={'/images/icons/pagination_right.svg'}/>
        </div>
    );
};

export default Pagination;