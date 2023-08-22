"use client"
import React from 'react';
import ReadMoreButton from "@/components/UI/ReadMoreButton";
import Link from "next/link";

interface postTabInterface {
    id:number,
    caption:string,
    title:string,
    date:string,
    buttonCallback?:(props?:any)=>any,
    image:string
}

const PostTab = ({ id, buttonCallback, title, caption, date, image}:postTabInterface) => {
    return (
        <div className={'rounded-2xl overflow-hidden bg-[#FAFAFA] drop-shadow-lg grid grid-cols-4'}>
            <div className={'col-span-1 h-full'}>
                <img className={'w-full aspect-square object-cover'} src={image}/>
            </div>
            <div className={'col-span-3 flex flex-col gap-2 p-5'}>
                <div className={'flex items-start justify-between'}>
                    <p className={'font-manrope leading-[110%] font-bold text-black text-xl'}>{title}</p>
                    <p className={'font-normal text-[#1E496F] font-travels text-lg'}>{date}</p>
                </div>

                <div className={'flex justify-between items-center'}>
                    <p className={'w-96'}>{caption.split(' ').slice(0,15).join(' ')}...</p>
                    <Link href={{pathname:'/',query:{id:id}}}>
                        <div className={'flex w-48 gap-5 items-center justify-center p-3 text-sm bg-orange border-2 border-orange rounded-lg text-white font-manrope font-bold'}>
                            <p>Подробнее</p>
                            <img src={'/images/tab/arrow_next.svg'}/>
                        </div>
                    </Link>
                </div>



            </div>
        </div>
    );
};

export default PostTab;