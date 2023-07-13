"use client"
import React from 'react';
import {classList} from "@/helpers/classList";

const Button = (props: any) => {
    return (
        <div onClick={()=>{if(props.callback){props.callback()}}}
            className={classList('flex cursor-pointer items-center justify-center font-travels font-bold py-2 px-4', props.type == 'orange' ? 'bg-orange text-white' : '', props.type == 'white' ? 'bg-white border-2 border-orange text-blue' : '', props.type == 'transparent blue' ? 'bg-transparent text-blue border-2 border-orange' : '', props.type == 'transparent white' ? 'bg-transparent text-white border-2 border-orange' : '',props.className)}>
            {props.children}
        </div>
    );
};

export default Button;