import React from 'react';
import concatStr from "@/helpers/concatStr";
import ReadMoreButton from "@/components/UI/ReadMoreButton";
import Link from "next/link";

interface docBannerInterface {
    id:number,
    title: string,
    caption: string,
    date: string
    sender: string,
    phoneNumber: string,
    email: string,
    currentTab:string
}
const DocBanner = ({title, date, caption, id, email, phoneNumber, sender, currentTab}:docBannerInterface) => {
    return (
        <div className={'bg-white flex flex-col gap-2 drop-shadow-lg rounded-xl p-4'}>
            <div className={'flex items-top gap-3 justify-between'}>
                <p className={'text-black leading-[110%] text-xl font-manrope font-bold'}>{title}</p>
                <p className={'whitespace-nowrap font-medium font-travels text-[#676767] text-sm'}>от {date}</p>
            </div>
            <div className={'flex items-end justify-between'}>
                <p className={'font-regular font-travels w-3/4 text-[#676767]'}>{concatStr(caption,20)}</p>
                <img src={'/images/tab/docs.svg'} className={'w-12 aspect-square'}/>
            </div>

        </div>
    );
};

export default DocBanner;