"use client"
import React, {useState} from 'react';
import {classList} from "@/helpers/classList";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";

interface SelectInterface {
    current: string,
    variants: string[]
    mutateFunction: (arg: any) => any,
    mutateVariants?: (arg: any) => any,
}

const Select = ({current, variants, mutateFunction, mutateVariants}: SelectInterface) => {

    const [isOpen, setIsOpen] = useState(false)
    const [newWarehousePop, setNewWarehousePop] = useState(false)

    const [newWarehouse, setNewWarehouse] = useState('')

    return (
        <div className={'relative font-manrope font-bold text-[#004169] w-full'}>
            <div
                className={'bg-[#F8F8FA] p-3 w-full rounded-xl drop-shadow-md flex items-center gap-2'}
                onClick={() => {
                    setIsOpen(!isOpen)
                }}>
                <p>{current}</p>
                <img className={classList('w-4 duration-300 transition-all aspect-square', isOpen ? 'rotate-90' : '')}
                     src={'/images/icons/arrow_right_orange.svg'}/>
            </div>
            {isOpen ?
                <div className={'bg-[#F8F8FA] p-3 w-full rounded-xl drop-shadow-md flex flex-col mt-3 items-center gap-2'}>
                    {variants.map((variant, counter) => {
                        if (variant != current) {
                            return (
                                <div
                                    className={classList('w-full cursor-pointer relative placeholder:text-blue placeholder:text-opacity-50 p-3 font-semibold text-blue border-[#F1F1F1] border-b-2 focus:border-orange focus:outline-0')}
                                    onClick={() => {
                                        mutateFunction(variant)
                                        setIsOpen(!isOpen)
                                    }}
                                    key={counter}>
                                    <p>{variant}</p>
                                </div>
                            )
                        }
                    })}
                    <div
                        className={classList('w-full gap-3 font-white flex items-center justify-center font-bold text-white cursor-pointer rounded-lg relative bg-blue p-3')}
                        onClick={() => {
                            setNewWarehousePop(!newWarehousePop)
                        }}>
                        <p>Добавить новый склад</p>
                        <img src={'/images/icons/add_white.svg'} className={'w-6 aspect-square'}/>
                    </div>
                </div> : null}
            {newWarehousePop ? <div
                className={'fixed z-[9999] flex items-center justify-center w-full rounded-xl h-full left-0 top-0 bg-black bg-opacity-70'}>
                <div className={'relative w-[600px] p-5 bg-white rounded-xl gap-5 flex flex-col'}>
                    <div className={'flex justify-between'}>
                        <p className={'text-blue text-3xl font-bold'}>
                            Добавить новый склад
                        </p>
                        <img onClick={() => {
                            setNewWarehousePop(!newWarehousePop)
                        }} className={'w-7 cursor-pointer aspect-square'} src={'/images/icons/close_orange.svg'}/>
                    </div>
                    <Input placeholder={'Введите адрес склада'} type={'text'} mutateFunction={setNewWarehouse}
                           mutateValue={newWarehouse}></Input>
                    <Button callback={() => {
                        if (mutateVariants) {
                            let temp=[...variants]
                            temp.push(newWarehouse)
                            mutateVariants([...temp]);
                            setNewWarehousePop(!newWarehousePop)
                        }
                    }} type={'orange'}>Добавить склад</Button>
                </div>
            </div> : null}
        </div>
    );
};

export default Select;