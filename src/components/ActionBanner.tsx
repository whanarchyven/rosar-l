"use client"
import React, {useEffect, useState} from 'react';
import Button from "@/components/UI/Button";
import {classList} from "@/helpers/classList";
import Link from "next/link";
import Tab from "@/components/UI/Tab";

interface actionBannerInterface {
    id: number
    name: string,
    caption: string,
    callback?: (props: any) => any,
    image: string
}

const ActionBanner = ({name, caption, image, id}: actionBannerInterface) => {

    useEffect(()=>{
        console.log(id)
    })
    return (
        <Tab title={name} subtitle={caption.split(' ').splice(1,7).join(' ')} icon={'/images/tab/actions.svg'}>
            <div className={'flex items-center justify-between'}>
                {/*<Link href={`/actions/${id}`}>*/}
                {/*    <Button type={'orange'}>Получить скидку {id}</Button>*/}
                {/*</Link>*/}
                <a href={`/actions/${id}`}>
                    <Button type={'orange'}>Получить скидку {id}</Button>
                </a>
                <p className={'font-manrope text-5xl text-orange font-bold'}>{caption.split(' ').splice(0,1)}</p>
            </div>
        </Tab>
    );
};

export default ActionBanner;