import React from 'react';
import ReadMoreButton from "@/components/UI/ReadMoreButton";

interface actionTabInterface {
    discount:string,
    caption:string,
}

const ActionTab = ({discount, caption}:actionTabInterface) => {
    return (
        <div className={'rounded-2xl overflow-hidden items-center border-2 border-orange grid grid-cols-5'}>
            <div className={'col-span-1 font-travels font-bold text-white flex items-center bg-orange justify-center h-full'}>
                {discount}
            </div>
            <div className={'col-span-3 flex flex-col gap-2 p-3'}>
                <p className={'font-bold truncate text-blue font-travels text-xs'}>{caption}</p>
            </div>
            <img className={'justify-self-end pr-3'} src={'/images/icons/arrow_right_blue.svg'}/>
        </div>
    );
};

export default ActionTab;