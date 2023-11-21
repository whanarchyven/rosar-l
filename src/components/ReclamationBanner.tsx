import React from 'react';
import concatStr from "@/helpers/concatStr";
import ReadMoreButton from "@/components/UI/ReadMoreButton";
import Link from "next/link";

interface docBannerInterface {
    id:number,
    title: string,
    type: 'quality'|'wardrobe'|'damaged'|'refund',
    date: string
    status: 'pending'|'rejected'|'done',
    product:string,
    description:string
}

export const translateType=(type:docBannerInterface['type'])=>{
    switch (type){
        case "quality": return 'Качество, некомплектность или прочее';
        case "damaged": return 'Внешние повреждения';
        case "wardrobe": return 'Складская пересортица';
        case "refund": return "Возврат продукции"
    }
}

const translateStatusIcon=(status:docBannerInterface['status'])=>{
    switch (status){
        case "done":return '/images/reclamations/done.svg';
        case "pending":return '/images/reclamations/pending.svg';
        case "rejected":return '/images/reclamations/rejected.svg';
    }
}

const translateStatusText=(status:docBannerInterface['status'])=>{
    switch (status){
        case "done":return 'Выполнено';
        case "pending":return 'На рассмотрении';
        case "rejected":return 'Отказано';
    }
}


const ReclamationBanner = ({title, date, id, type, status, product,description}:docBannerInterface) => {
    return (
        <div className={'bg-white flex flex-col gap-2 drop-shadow-lg rounded-xl p-4'}>
            <div className={'flex items-top gap-3 justify-between'}>
                <p className={'text-black leading-[110%] text-xl font-manrope font-bold'}>{title}</p>
                <p className={'whitespace-nowrap font-medium font-travels text-[#676767] text-sm'}>от {date}</p>
            </div>
            <div className={'flex items-end justify-between'}>
                <p className={'font-regular font-travels w-3/4 text-[#676767]'}>
                    <strong>Тип:</strong> {translateType(type)} <br/>
                    <strong>Наименование:</strong> {product} <br/>
                    <strong>Претензия:</strong> {description} <br/>
                    <strong>Статус:</strong> {translateStatusText(status)}
                </p>
                <img src={translateStatusIcon(status)} className={'w-12 aspect-square'}/>
            </div>

        </div>
    );
};

export default ReclamationBanner;