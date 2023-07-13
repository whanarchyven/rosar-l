import React from 'react';
import {classList} from "@/helpers/classList";


const Tab = (props:any) => {
    return (
        <div className={'w-full flex flex-col h-full'}>
            <div className={'w-full border-blue border-2 flex items-center p-4 gap-3 h-12 rounded-t-xl bg-blue'}>
                <p className={'text-white font-travels font-bold text-xl'}>{props.title}</p>
                <img src={props.icon}/>
            </div>
            <div className={classList('w-full border-blue border-2 rounded-b-xl p-3',props.isRelative?'h-[100%]':'h-auto')}>
                {props.children}
            </div>
        </div>
    );
};

export default Tab;