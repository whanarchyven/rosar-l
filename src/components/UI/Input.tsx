import React from 'react';

interface InputInterface {
    type:'text'|'number',
    placeholder?:string,
    mutateFunction:(arg:any)=>any
}

const Input = ({type, placeholder, mutateFunction}:InputInterface) => {
    return (
        <input type={type} placeholder={placeholder} className={'w-full placeholder:text-blue placeholder:text-opacity-50 p-3 font-semibold text-blue border-blue border-2 focus:border-orange focus:outline-0'}>

        </input>
    );
};

export default Input;