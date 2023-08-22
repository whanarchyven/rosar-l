import React from 'react';
import ReadMoreButton from "@/components/UI/ReadMoreButton";

interface actionTabInterface {
    discount:string,
    caption:string,
}

const ActionTab = ({discount, caption}:actionTabInterface) => {
    return (
        <div className={'rounded-2xl overflow-hidden h-20 items-center border-2 border-orange grid grid-cols-5'}>
            <div className={'col-span-1 font-manrope font-bold text-white text-xl flex items-center bg-orange justify-center h-full'}>
                {discount}
            </div>
            <div className={'col-span-3 flex flex-col gap-2 p-3'}>
                <p className={'font-bold truncate text-black font-manrope text-lg'}>{caption.split(' ').splice(1,20).join(' ')}</p>
            </div>
            <img className={'justify-self-end pr-3'} src={'/images/tab/arrow_right.svg'}/>
        </div>
    );
};

export default ActionTab;