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
        <div className={'border-orange flex flex-col gap-2 border-2 rounded-xl p-3'}>
            <div className={'flex items-center justify-between'}>
                <p className={'text-blue text-xl font-bold'}>{title}</p>
                <img className={'w-5 aspect-square'} src={'/images/icons/doc_orange.svg'}/>
            </div>
            <p className={'font-regular text-blue'}>{concatStr(caption,10)}</p>
            <div className={'flex gap-6 items-center'}>
                <p className={'font-bold text-orange text-lg'}>от {date}</p>
                <Link className={'cursor-default'} href={{pathname:`/docs/${currentTab}/doc`,query:{id:id}}}>
                    <ReadMoreButton title={'Ознакомиться'}></ReadMoreButton>
                </Link>
            </div>
        </div>
    );
};

export default DocBanner;