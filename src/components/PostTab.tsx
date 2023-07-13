"use client"
import React from 'react';
import ReadMoreButton from "@/components/UI/ReadMoreButton";

interface postTabInterface {
    id:string,
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
                <p className={'font-travels font-bold text-blue text-lg'}>{caption.split(' ').slice(0,10).join(' ')}...</p>
                <p className={'font-regular text-orange font-travels text-sm'}>{date}</p>
                <div className={'w-full flex justify-end'}>
                    <ReadMoreButton title={'Смотреть полностью'} callback={()=>{}}></ReadMoreButton>
                </div>
            </div>
        </div>
    );
};

export default PostTab;