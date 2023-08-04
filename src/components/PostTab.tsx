"use client"
import React from 'react';
import ReadMoreButton from "@/components/UI/ReadMoreButton";
import Link from "next/link";

interface postTabInterface {
    id:number,
    caption:string,
    date:string,
    buttonCallback?:(props?:any)=>any,
    image:string
}

const PostTab = ({ id, buttonCallback, caption, date, image}:postTabInterface) => {
    return (
        <div className={'rounded-2xl overflow-hidden border-2 border-blue grid grid-cols-3'}>
            <div className={'col-span-1 h-full'}>
                <img className={'w-full h-full object-cover'} src={image}/>
            </div>
            <div className={'col-span-2 flex flex-col gap-2 p-3'}>
                <p className={'font-travels font-bold text-blue text-lg'}>{caption.split(' ').slice(0,5).join(' ')}...</p>
                <p className={'font-regular text-orange font-travels text-sm'}>{date}</p>
                <div className={'w-full flex justify-start'}>
                    <Link href={{pathname:'/news/post/',query:{id:id}}}>
                        <ReadMoreButton title={'Смотреть полностью'}></ReadMoreButton>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default PostTab;