"use client"
import React, {useState} from 'react';
import Button from "@/components/UI/Button";
import {classList} from "@/helpers/classList";
import Link from "next/link";

interface actionBannerInterface {
    id: number
    name: string,
    caption: string,
    callback?: (props: any) => any,
    image: string
}

const ActionBanner = ({name, caption, image, id}: actionBannerInterface) => {

    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className={'rounded-2xl overflow-hidden'}>
            <div className={'flex items-center justify-center bg-blue text-white p-2 font-bold font-travels'}>
                {name}
            </div>
            <div className={'w-full h-40 relative'} onMouseEnter={() => {
                setIsHovered(true)
            }} onMouseLeave={() => {
                setIsHovered(false)
            }}>
                <img className={'absolute top-0 left-0 object-cover w-full h-full'} src={image}/>
                <div
                    className={classList('absolute top-0 left-0 bg-white w-full h-full flex items-center justify-center transition-all duration-300', isHovered ? 'bg-opacity-80' : 'bg-opacity-40')}>
                    {isHovered ? <Button className={'animate-fadein'} type={'white'}><Link
                        href={{
                            pathname: "/actions/action",
                            query: {id: id},
                        }}
                    >
                        Воспользоваться
                    </Link></Button> : null}
                </div>
            </div>
            <div className={'flex items-center justify-center bg-orange text-white p-2 font-bold font-travels'}>
                {caption}
            </div>
        </div>
    );
};

export default ActionBanner;