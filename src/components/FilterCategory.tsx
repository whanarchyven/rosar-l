"use client"
import React, {useEffect, useState} from 'react';
import {classList} from "@/helpers/classList";
import Input from "@/components/UI/Input";

interface filterCategoryInterface {
    variants: Array<{ icon?: string, value: string }>,
    currentValue: any,
    setCurrentValue: ([...args]: any) => any
    type: 'variants' | 'multi' | 'radio' | 'price',
    title: string,
    resetTrigger?: boolean
}

const FilterCategory = ({
                            variants,
                            resetTrigger,
                            title,
                            setCurrentValue,
                            currentValue,
                            type
                        }: filterCategoryInterface) => {

    // const [currentValue, setCurrentValue] = useState<typeof variants[0]|null>(null)

    // const [multiVariants,setMultiVariants]=useState<typeof variants>([])

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (Array.isArray(currentValue)) {
            setCurrentValue([])
        } else {
            setCurrentValue(null);
        }
        // setMultiVariants([])
    }, [resetTrigger])

    return (
        <div className={'flex font-manrope flex-col'}>
            <div className={'flex gap-2 cursor-pointer items-center'} onClick={() => {
                setIsOpen(!isOpen)
            }}>
                <p className={'font-medium text-sm text-blue'}>{title}</p>
                <img
                    className={classList('w-4 duration-300 transition-all aspect-square', isOpen ? 'rotate-90' : 'rotate-0')}
                    src={'/images/icons/arrow_right_orange.svg'}/>
            </div>
            {isOpen && (type == 'variants') ?
                <div className={'flex duration-300 transition-all flex-col'}>
                    {variants.map((variant) => {
                        return (
                            <div key={variant.value} className={'flex items-center gap-2'}>
                                {variant.icon ? <img className={'w-5'} src={variant.icon}/> : null}
                                <p className={classList('transition-all text-sm duration-300 font-medium', variant.value == currentValue?.value ? 'text-orange' : 'cursor-pointer text-blue', !variant.icon ? 'pl-4' : '')}
                                   onClick={() => {
                                       setCurrentValue(variant);

                                   }}>{variant.value}</p>
                            </div>
                        )
                    })}
                </div> : null}
            {isOpen && (type == 'radio') ?
                <div className={'flex duration-300 transition-all flex-col'}>
                    {variants.map((variant) => {
                        return (
                            <div key={variant.value} className={'flex items-center gap-2'}>
                                {variant.icon ? <img className={'w-5'} src={variant.icon}/> : <img className={'w-5'}
                                                                                                   src={variant.value == currentValue?.value ? '/images/icons/radio_checked.svg' : '/images/icons/radio.svg'}/>}
                                <p className={classList('transition-all text-sm duration-300 font-medium', variant.value == currentValue?.value ? 'text-orange' : 'cursor-pointer text-blue')}
                                   onClick={() => {
                                       setCurrentValue(variant)
                                   }}>{variant.value}</p>
                            </div>
                        )
                    })}
                </div> : null}

            {isOpen && type == 'multi' ?
                <div className={'flex duration-300 transition-all flex-col'}>
                    {variants.map((variant) => {
                        const isFound = currentValue?.find(((item: any) => item.value == variant.value))
                        return (
                            <div key={variant.value} className={'flex items-center gap-2'}>
                                {isFound ? <img className={'w-5'} src={'/images/icons/checkbox_checked.svg'}/> :
                                    <img className={'w-5'} src={'/images/icons/checkbox.svg'}/>}
                                <p className={classList('transition-all text-sm duration-300 font-medium', isFound ? 'text-orange cursor-pointer' : 'cursor-pointer text-blue')}
                                   onClick={() => {
                                       let temp = [...currentValue]
                                       const index = temp.findIndex((item => item.value == variant.value))
                                       if (index != -1) {
                                           temp.splice(index, 1)
                                           setCurrentValue([...temp])
                                       } else {
                                           temp.push(variant)
                                           setCurrentValue([...temp])
                                       }
                                   }}>{variant.value}</p>
                            </div>
                        )
                    })}
                </div> : null}
            {type == 'price' ?
                <div className={'flex mt-2 items-center gap-3'}>
                    <p className={'font-manrope text-[#E6E6E6] font-bold'}>от</p>
                    <input type={'number'}
                           className={'w-full h-8 text-center placeholder:text-blue placeholder:text-opacity-50 p-3 font-semibold text-blue border-[#E6E6E6] rounded-lg border-2 focus:border-orange focus:outline-0'}/>
                    <p className={'font-manrope text-[#E6E6E6] font-bold'}>до</p>
                    <input type={'number'}
                           className={'w-full h-8 text-center placeholder:text-blue placeholder:text-opacity-50 p-3 font-semibold text-blue border-[#E6E6E6] rounded-lg border-2 focus:border-orange focus:outline-0'}/>
                </div> : null}
        </div>
    );
};

export default FilterCategory;