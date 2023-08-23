import React from 'react';
import ReadMoreButton from "@/components/UI/ReadMoreButton";
import Link from "next/link";
import Button from "@/components/UI/Button";

interface newsBannerInterface {
    id: number,
    title: string,
    date: string,
    time: string,
    image: string,
    description: string
}

const NewsBanner = ({id, title, time, date, image, description}: newsBannerInterface) => {
    return (
        <div className={'w-full bg-white rounded-xl overflow-hidden drop-shadow-lg'}>
            <div className={'grid grid-cols-12 gap-2 items-start'}>
                <div className={'col-span-2'}>
                    <img src={image} className={'w-full aspect-square object-cover'}/>
                </div>
                <div className={'col-span-10 flex gap-5 flex-col p-4 px-6 py-6'}>
                    <div className={'flex items-start justify-between'}>
                        <p className={'font-bold text-black font-manrope text-2xl w-2/3'}>{title}</p>
                        <p className={'font-normal text-[#1E496F] font-travels text-xl text-right'}>{date}</p>
                    </div>
                    <div className={'flex items-end justify-between'}>
                        <p className={'font-travels text-md w-4/5 text-[#676767]'}>{description.split(' ').splice(0,25).join(' ')} ...</p>
                        <Link href={`/news/${id}`}>
                            <Button type={'orange'}>
                                <div className={'flex items-center gap-3'}>
                                    <p className={'font-manrope font-extrabold text-sm'}>Подробнее</p>
                                    <img className={''} src={'/images/tab/arrow_next.svg'}/>
                                </div>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsBanner;