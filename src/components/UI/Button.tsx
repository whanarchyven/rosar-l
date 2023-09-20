"use client"
import React from 'react';
import {classList} from "@/helpers/classList";

const Button = (props: any) => {
    return (
        <div onClick={()=>{if(props.callback){props.callback()}}}
            className={classList('flex items-center justify-center p-3  rounded-lg cursor-pointer font-manrope font-bold', props.type == 'orange' ? 'bg-orange text-white' : '', props.type == 'white' ? 'bg-white border-2 border-orange text-orange' : '', props.type == 'transparent blue' ? 'bg-transparent text-blue border-2 border-orange' : '', props.type == 'transparent white' ? 'bg-transparent text-white border-2 border-orange' : '',props.type == 'transparent orange' ? 'bg-transparent text-orange border-2 border-orange' : '',props.type == 'blue-outlined' ? 'bg-transparent text-blue border-2 border-blue' : '',props.className?props.className:'px-6')}>
            {props.children}
        </div>
    );
};

export default Button;