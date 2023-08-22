import React from 'react';
import {classList} from "@/helpers/classList";


const Tab = (props:any) => {
    return (
        <div className={'w-full h-full drop-shadow-lg rounded-2xl bg-white p-3'}>
            <div className={'w-full border-blue flex items-start justify-between p-4 gap-3 rounded-t-xl '}>
                <div className={'flex flex-col items-start gap-2'}>
                    <p className={'text-black font-manrope text-3xl font-bold'}>{props.title}</p>
                    <p className={'text-[#1E496F] font-travels  text-md font-medium'}>{props.subtitle}</p>
                </div>
                <img className={'w-16 aspect-square'} src={props.icon}/>
            </div>
            <div className={classList('w-full border-blue bg-white p-3',props.isRelative?'h-[100%]':'h-auto')}>
                {props.children}
            </div>
        </div>
    );
};

export default Tab;