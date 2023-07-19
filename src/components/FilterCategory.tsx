"use client"
import React, {useEffect, useState} from 'react';
import {classList} from "@/helpers/classList";

interface filterCategoryInterface {
    variants: Array<{ icon?: string, value: string }>,
    unfilteredArray: Array<any>
    filterFunction: (arg:any) => any
    type: 'variants' | 'multi' | 'radio',
    title: string,
    resetTrigger?:boolean
}

const FilterCategory = ({variants, resetTrigger, filterFunction, title, unfilteredArray, type}: filterCategoryInterface) => {

    const [currentValue, setCurrentValue] = useState<typeof variants[0]|null>(null)

    const [multiVariants,setMultiVariants]=useState<typeof variants>([])

    const [isOpen, setIsOpen] = useState(true)

    useEffect(()=>{
        setCurrentValue(null);
        setMultiVariants([])
    },[resetTrigger])

    return (
        <div className={'flex flex-col'}>
            <div className={'flex gap-2 cursor-pointer items-center'} onClick={() => {
                setIsOpen(!isOpen)
            }}>
                <p className={'font-medium text-blue'}>{title}</p>
                <img
                    className={classList('w-4 duration-300 transition-all aspect-square', isOpen ? 'rotate-90' : 'rotate-0')}
                    src={'/images/icons/arrow_right_orange.svg'}/>
            </div>
            {isOpen&&(type=='variants') ?
                <div className={'flex duration-300 transition-all flex-col'}>
                    {variants.map((variant) => {
                        return (
                            <div key={variant.value} className={'flex items-center gap-2'}>
                                {variant.icon?<img className={'w-5'} src={variant.icon}/>:null}
                                <p className={classList('transition-all duration-300 font-medium', variant.value == currentValue?.value ? 'text-orange' : 'cursor-pointer text-blue')}
                                   onClick={() => {
                                       setCurrentValue(variant)
                                   }}>{variant.value}</p>
                            </div>
                        )
                    })}
                </div> : null}
            {isOpen&&(type=='radio') ?
                <div className={'flex duration-300 transition-all flex-col'}>
                    {variants.map((variant) => {
                        return (
                            <div key={variant.value} className={'flex items-center gap-2'}>
                                {variant.icon?<img className={'w-5'} src={variant.icon}/>:<img className={'w-5'} src={variant.value == currentValue?.value?'/images/icons/radio_checked.svg':'/images/icons/radio.svg'}/>}
                                <p className={classList('transition-all duration-300 font-medium', variant.value == currentValue?.value ? 'text-orange' : 'cursor-pointer text-blue')}
                                   onClick={() => {
                                       setCurrentValue(variant)
                                   }}>{variant.value}</p>
                            </div>
                        )
                    })}
                </div> : null}

            {isOpen&&type=='multi'?
                <div className={'flex duration-300 transition-all flex-col'}>
                    {variants.map((variant) => {
                        const isFound=multiVariants.find((item=>item==variant))
                        return (
                            <div key={variant.value} className={'flex items-center gap-2'}>
                                {isFound?<img className={'w-5'} src={'/images/icons/checkbox_checked.svg'}/>:<img className={'w-5'} src={'/images/icons/checkbox.svg'}/>}
                                <p className={classList('transition-all duration-300 font-medium', isFound? 'text-orange cursor-pointer' : 'cursor-pointer text-blue')}
                                   onClick={() => {
                                       let temp=[...multiVariants]
                                       const index=temp.findIndex((item=>item==variant))
                                       if(index!=-1){
                                           temp.splice(index,1)
                                           setMultiVariants([...temp])
                                       }
                                       else{
                                           temp.push(variant)
                                           setMultiVariants([...temp])
                                       }
                                   }}>{variant.value}</p>
                            </div>
                        )
                    })}
                </div> : null}
        </div>
    );
};

export default FilterCategory;