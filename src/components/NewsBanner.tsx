import React from 'react';
import ReadMoreButton from "@/components/UI/ReadMoreButton";
import Link from "next/link";

interface newsBannerInterface {
    id: number,
    title: string,
    date: string,
    time: string,
    image: string,
    description: string
}
const NewsBanner = ({ id, title, time, date, image, description}:newsBannerInterface) => {
    return (
        <div className={'w-full bg-blue rounded-xl p-5'}>
            <div className={'w-full flex justify-between items-center'}>
                <p className={'text-white whitespace-pre-wrap leading-[100%] w-1/2 font-bold text-2xl'}>{title}</p>
                <div className={'bg-white p-2 font-bold text-blue flex items-center justify-center rounded-lg'}>
                    {date} в {time}
                </div>
            </div>
            <div className={'grid mt-6 grid-cols-7 gap-7 items-start'}>
                <div className={'col-span-2'}>
                    <img src={image} className={'w-full aspect-square object-cover rounded-r-2xl'}/>
                </div>
                <div className={'col-span-5 flex gap-5 flex-col'}>
                    <p className={'font-medium text-white'}>{description.split(' ').slice(0,30).join(' ')} ...</p>
                    <div className={'w-fit'}>
                        <Link href={{
                            pathname: "/news/post",
                            query: {id: id},
                        }}>
                            <ReadMoreButton title={'Прочитать полностью'}></ReadMoreButton>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsBanner;