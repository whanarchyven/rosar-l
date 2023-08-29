"use client"
import React from 'react';
import {classList} from "@/helpers/classList";

const Button = (props: any) => {
    return (
        <div onClick={()=>{if(props.callback){props.callback()}}}
            className={classList('flex px-6 items-center justify-center p-3 text-xs rounded-lg cursor-pointer font-manrope font-bold', props.type == 'orange' ? 'bg-orange text-white' : '', props.type == 'white' ? 'bg-white border-2 border-orange text-orange' : '', props.type == 'transparent blue' ? 'bg-transparent text-blue border-2 border-orange' : '', props.type == 'transparent white' ? 'bg-transparent text-white border-2 border-orange' : '',props.type == 'transparent orange' ? 'bg-transparent text-orange border-2 border-orange' : '',props.className)}>
            {props.children}
        </div>
    );
};

export default Button;